export type OverlayController = {
  closeOverlay: () => void;
  isOpen: () => boolean;
};

export function setupOverlay(): OverlayController {
  function openOverlay(url: string, mobile = false) {
    const overlay = document.getElementById("iframe-overlay");
    const content = overlay?.querySelector(".iframe-overlay-content");
    const iframe = document.getElementById("overlay-iframe") as HTMLIFrameElement | null;
    if (!overlay || !content || !iframe) return;

    iframe.src = url;
    content.classList.toggle("mobile", mobile);
    overlay.setAttribute("style", "display:flex");
  }

  function closeOverlay() {
    const overlay = document.getElementById("iframe-overlay");
    const iframe = document.getElementById("overlay-iframe") as HTMLIFrameElement | null;
    if (!overlay || !iframe) return;

    overlay.setAttribute("style", "display:none");
    iframe.src = "";
  }

  document
    .getElementById("iframe-close")
    ?.addEventListener("click", closeOverlay);

  document
    .querySelector(".iframe-overlay-bg")
    ?.addEventListener("click", closeOverlay);

  document
    .querySelectorAll<HTMLElement>(".clickable[data-url]")
    .forEach((el) => {
      el.addEventListener("click", () => {
        const url = el.dataset.url;
        const mobile = el.dataset.mobile === "true";
        if (!url) return;

        const openInNewPage =
          /^https?:\/\//.test(url) && el.dataset.preview !== "overlay";

        if (openInNewPage) {
          window.open(url, "_blank", "noopener");
          return;
        }

        openOverlay(url, mobile);
      });
    });

  return {
    closeOverlay,
    isOpen: () => {
      const overlay = document.getElementById("iframe-overlay");
      return overlay?.getAttribute("style") !== "display:none";
    },
  };
}
