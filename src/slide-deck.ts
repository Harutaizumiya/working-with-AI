import { createFluidBackground } from "./fluid-background";

type BackgroundController = ReturnType<typeof createFluidBackground>;

type SlideDeckOptions = {
  background: BackgroundController;
  closeOverlay: () => void;
  isOverlayOpen: () => boolean;
};

export type SlideDeckController = {
  pulseBackground: (value?: number) => void;
};

const REF_W = 1280;
const REF_H = 800;

export function setupSlideDeck({
  background,
  closeOverlay,
  isOverlayOpen,
}: SlideDeckOptions): SlideDeckController {
  const slides = Array.from(document.querySelectorAll<HTMLElement>(".slide"));
  const params = new URLSearchParams(window.location.search);
  const initialSlide = Number(params.get("slide"));
  let current =
    Number.isFinite(initialSlide) && initialSlide >= 1
      ? Math.min(initialSlide - 1, Math.max(slides.length - 1, 0))
      : 0;
  let overviewActive = false;
  const fragmentState = new Map<number, number>();

  function backgroundProgress(slideIdx: number) {
    if (slides.length <= 1) return 0;
    return slideIdx / (slides.length - 1);
  }

  function pulseBackground(value = 0.24) {
    background.setImpulse(value);
  }

  function syncBackground(slideIdx: number) {
    background.setProgress(backgroundProgress(slideIdx));
  }

  function getFragments(slideIdx: number): HTMLElement[] {
    return Array.from(
      slides[slideIdx].querySelectorAll<HTMLElement>("[data-f]"),
    ).sort((a, b) => Number(a.dataset.f) - Number(b.dataset.f));
  }

  function maxFragment(slideIdx: number): number {
    const frags = getFragments(slideIdx);
    if (frags.length === 0) return 0;

    const unique = new Set(frags.map((el) => Number(el.dataset.f)));
    return unique.size;
  }

  function currentFragment(slideIdx: number): number {
    return fragmentState.get(slideIdx) ?? 0;
  }

  function showFragmentsUpTo(slideIdx: number, n: number) {
    const frags = getFragments(slideIdx);
    const vals = [...new Set(frags.map((el) => Number(el.dataset.f)))].sort(
      (a, b) => a - b,
    );
    const visibleVals = new Set(vals.slice(0, n));
    frags.forEach((el) => {
      el.classList.toggle("f-visible", visibleVals.has(Number(el.dataset.f)));
    });
    fragmentState.set(slideIdx, n);
  }

  function updateProgress() {
    const bar = document.getElementById("progress-bar") as HTMLElement | null;
    if (bar) bar.style.width = `${((current + 1) / slides.length) * 100}%`;

    const counter = document.getElementById("slide-counter");
    if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
  }

  function scaleOverviewThumbs(container: HTMLElement) {
    const thumbs = container.querySelectorAll<HTMLElement>(".overview-thumb");
    if (thumbs.length === 0) return;

    requestAnimationFrame(() => {
      const thumbW = thumbs[0].clientWidth;
      if (thumbW === 0) return;

      const scale = thumbW / REF_W;
      container.querySelectorAll<HTMLElement>(".overview-inner").forEach((inner) => {
        inner.style.width = `${REF_W}px`;
        inner.style.height = `${REF_H}px`;
        inner.style.transform = `scale(${scale})`;
      });
    });
  }

  function goto(index: number, direction?: "forward" | "backward") {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    if (clamped === current) return;

    const dir = direction ?? (clamped > current ? "forward" : "backward");
    const prevSlide = slides[current];
    const nextSlide = slides[clamped];
    prevSlide.classList.remove("active");
    prevSlide.classList.add(dir === "forward" ? "exit-left" : "exit-right");
    nextSlide.classList.remove("exit-left", "exit-right");
    nextSlide.classList.add("active");

    const prevIdx = current;
    current = clamped;

    background.triggerTransition({
      from: backgroundProgress(prevIdx),
      to: backgroundProgress(clamped),
      direction: dir === "forward" ? 1 : -1,
    });
    syncBackground(clamped);
    pulseBackground(0.7);

    if (dir === "backward") {
      showFragmentsUpTo(clamped, maxFragment(clamped));
    } else {
      showFragmentsUpTo(clamped, 0);
    }

    updateProgress();
    window.setTimeout(
      () => slides[prevIdx].classList.remove("exit-left", "exit-right"),
      600,
    );
  }

  function stepForward() {
    const cur = currentFragment(current);
    const max = maxFragment(current);
    if (cur < max) {
      showFragmentsUpTo(current, cur + 1);
      pulseBackground(0.22);
      return;
    }

    goto(current + 1, "forward");
  }

  function stepBackward() {
    const cur = currentFragment(current);
    if (cur > 0) {
      showFragmentsUpTo(current, cur - 1);
      pulseBackground(0.18);
      return;
    }

    goto(current - 1, "backward");
  }

  function buildOverview() {
    let container = document.getElementById("overview");
    if (container) {
      scaleOverviewThumbs(container);
      return container;
    }

    container = document.createElement("div");
    container.id = "overview";
    container.className = "overview";
    document.body.appendChild(container);

    slides.forEach((slide, i) => {
      const thumb = document.createElement("div");
      thumb.className = "overview-thumb" + (i === current ? " current" : "");
      thumb.dataset.index = String(i);

      const inner = document.createElement("div");
      inner.className = "overview-inner";
      const clone = slide.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("[data-f]").forEach((el) => {
        el.classList.add("f-visible");
      });
      inner.innerHTML = clone.innerHTML;
      thumb.appendChild(inner);

      const label = document.createElement("div");
      label.className = "overview-label";
      const titleEl =
        slide.querySelector(".title-mega") ||
        slide.querySelector(".title-large");
      const titleText = titleEl ? titleEl.textContent?.trim() ?? "" : "";
      label.textContent = titleText ? `${i + 1}. ${titleText}` : `${i + 1}`;
      thumb.appendChild(label);

      thumb.addEventListener("click", () => {
        toggleOverview(false);
        if (i === current) {
          showFragmentsUpTo(current, 0);
          pulseBackground(0.16);
          return;
        }

        goto(i, "forward");
      });

      container.appendChild(thumb);
    });

    scaleOverviewThumbs(container);
    return container;
  }

  function toggleOverview(show?: boolean) {
    overviewActive = show ?? !overviewActive;
    const container = buildOverview();

    container.querySelectorAll(".overview-thumb").forEach((el, i) => {
      el.classList.toggle("current", i === current);
    });

    container.classList.toggle("active", overviewActive);
    document.body.classList.toggle("overview-active", overviewActive);
  }

  function syncOverviewMarker() {
    const container = document.getElementById("overview");
    container?.querySelectorAll(".overview-thumb").forEach((el, i) => {
      el.classList.toggle("current", i === current);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (isOverlayOpen()) {
      if (e.key === "Escape") closeOverlay();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      toggleOverview();
      pulseBackground(0.18);
      return;
    }

    if (overviewActive) {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        goto(Math.min(current + 1, slides.length - 1));
        syncOverviewMarker();
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        goto(Math.max(current - 1, 0));
        syncOverviewMarker();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleOverview(false);
      }
      return;
    }

    if (["ArrowRight", " ", "PageDown"].includes(e.key)) {
      e.preventDefault();
      goto(current + 1, "forward");
    } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
      e.preventDefault();
      goto(current - 1, "backward");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      stepForward();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      stepBackward();
    }
  });

  if (slides.length > 0) {
    slides[current].classList.add("active");
    showFragmentsUpTo(current, maxFragment(current));
  }

  syncBackground(current);
  updateProgress();

  document.getElementById("mnav-prev")?.addEventListener("click", () => goto(current - 1, "backward"));
  document.getElementById("mnav-next")?.addEventListener("click", () => goto(current + 1, "forward"));
  document.getElementById("mnav-up")?.addEventListener("click", stepBackward);
  document.getElementById("mnav-down")?.addEventListener("click", stepForward);
  document.getElementById("mnav-overview")?.addEventListener("click", () => toggleOverview());

  return { pulseBackground };
}
