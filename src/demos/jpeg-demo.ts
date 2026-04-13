export function setupJpegDemo() {
  const canvas = document.getElementById("jpeg-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const slider = document.getElementById("jpeg-slider") as HTMLInputElement | null;
  const label = document.getElementById("jpeg-quality-label");
  if (!ctx || !slider) return;

  const canvasEl = canvas;
  const ctx2d = ctx;
  const sliderEl = slider;
  const W = 600;
  const H = 400;
  canvasEl.width = W;
  canvasEl.height = H;

  const srcImg = new Image();
  srcImg.src = "/mike-arney-gorilla.jpg";

  function drawOriginal() {
    ctx2d.drawImage(srcImg, 0, 0, W, H);
  }

  let rafId = 0;
  function compress(quality: number) {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      drawOriginal();
      const url = canvasEl.toDataURL("image/jpeg", quality);
      const compressed = new Image();
      compressed.onload = () => {
        ctx2d.clearRect(0, 0, W, H);
        ctx2d.drawImage(compressed, 0, 0);
      };
      compressed.src = url;
    });
  }

  const stops: [number, string][] = [
    [5, "Small model, talks but drifts"],
    [20, "Medium model, usable"],
    [45, "Large model, reliable"],
    [65, "Claude-class"],
    [85, "Frontier, nearly lossless"],
    [100, "Human brain (theoretical max)"],
  ];

  function updateLabel(v: number) {
    if (!label) return;

    let best = stops[0];
    for (const stop of stops) {
      if (Math.abs(stop[0] - v) < Math.abs(best[0] - v)) best = stop;
    }
    const vStr = String(v).padStart(3, "\u2007");
    label.innerHTML = `Quality:&nbsp;${vStr}% — ${best[1]}`;
  }

  sliderEl.addEventListener("input", () => {
    const v = Number(sliderEl.value);
    const quality = Math.max(0.01, (v / 100) ** 4);
    compress(quality);
    updateLabel(v);
  });

  srcImg.onload = () => {
    const v = Number(sliderEl.value);
    const quality = Math.max(0.01, (v / 100) ** 4);
    compress(quality);
    updateLabel(v);
  };
}
