export function setupAiTasteToggle(pulseBackground: (value?: number) => void) {
  const iframe = document.getElementById("ai-iframe") as HTMLIFrameElement | null;
  const frame = iframe?.closest(".ai-taste-frame") as HTMLElement | null;
  const btns = document.querySelectorAll<HTMLButtonElement>(".taste-btn");
  if (!iframe || !frame || btns.length === 0) return;
  const iframeEl = iframe;
  const frameEl = frame;

  function scaleIframe() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const refW = 430;
      const refH = 580;
      const scale = window.innerWidth / refW;
      iframeEl.style.width = `${refW}px`;
      iframeEl.style.height = `${refH}px`;
      iframeEl.style.transform = `scale(${scale})`;
      iframeEl.style.transformOrigin = "top left";
      frameEl.style.height = `${Math.round(refH * scale)}px`;
      frameEl.style.overflow = "hidden";
      return;
    }

    iframeEl.style.width = "";
    iframeEl.style.height = "";
    iframeEl.style.transform = "";
    iframeEl.style.transformOrigin = "";
    frameEl.style.height = "";
    frameEl.style.overflow = "";
  }

  scaleIframe();
  window.addEventListener("resize", scaleIframe);

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.src;
      if (!src) return;

      iframeEl.src = src;
      btns.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      pulseBackground(0.2);
    });
  });
}
