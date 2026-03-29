const BASE_BLOBS = [
  { x: 0.16, y: 0.2, radius: 0.28, hue: 194, speed: 0.7 },
  { x: 0.82, y: 0.24, radius: 0.22, hue: 222, speed: 0.95 },
  { x: 0.68, y: 0.78, radius: 0.32, hue: 338, speed: 0.55 },
  { x: 0.28, y: 0.74, radius: 0.26, hue: 162, speed: 0.8 },
  { x: 0.5, y: 0.48, radius: 0.2, hue: 278, speed: 1.05 },
] as const;

type TransitionPayload = {
  from: number;
  to: number;
  direction: 1 | -1;
};

export type FluidBackgroundController = {
  setProgress: (value: number) => void;
  setImpulse: (value: number) => void;
  triggerTransition: (payload: TransitionPayload) => void;
  destroy: () => void;
};

type TransitionState = TransitionPayload & {
  key: number;
  startTime: number;
  strength: number;
};

export function createFluidBackground(): FluidBackgroundController {
  const canvas = document.createElement("canvas");
  canvas.className = "fluid-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to create 2d context for fluid background");
  }

  let rafId = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let energy = 0;
  let progressTarget = 0;
  let impulseTarget = 0;
  let progressValue = 0;
  let progressVelocity = 0;
  let lastTime = performance.now();
  let destroyed = false;
  let transition: TransitionState = {
    key: 0,
    startTime: 0,
    from: 0,
    to: 0,
    direction: 1,
    strength: 0,
  };

  const finite = (value: number, fallback = 0) =>
    Number.isFinite(value) ? value : fallback;
  const normalized = (value: number, fallback = 0) =>
    Math.max(-2, Math.min(2, finite(value, fallback)));

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawBlob = (
    blob: (typeof BASE_BLOBS)[number],
    index: number,
    time: number,
    normalizedProgress: number,
    currentEnergy: number,
    transitionMix: number,
    transitionDirection: number,
  ) => {
    const phase = time * blob.speed + index * 1.8;
    const sway = 0.04 + normalizedProgress * 0.025;
    const lift = currentEnergy * 0.035;
    const warpX =
      Math.sin(phase * 1.7 + normalizedProgress * 8) *
      transitionMix *
      0.085 *
      transitionDirection;
    const warpY =
      Math.cos(phase * 1.15 - normalizedProgress * 6) * transitionMix * 0.055;
    const x =
      width *
      (blob.x + Math.sin(phase) * sway + Math.cos(phase * 0.35) * 0.02 + warpX);
    const y =
      height *
      (blob.y + Math.cos(phase * 0.85) * sway - normalizedProgress * 0.08 - lift + warpY);
    const radius =
      Math.min(width, height) *
      (blob.radius +
        Math.sin(phase * 0.7) * 0.02 +
        currentEnergy * 0.035 +
        transitionMix * 0.06);
    const hue =
      blob.hue +
      normalizedProgress * 70 +
      Math.sin(phase * 0.5) * 18 +
      transitionMix * 45 * transitionDirection;
    const alpha = 0.24 + currentEnergy * 0.12 + transitionMix * 0.16;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `hsla(${hue}, 88%, 64%, ${alpha + 0.18})`);
    gradient.addColorStop(0.38, `hsla(${hue + 18}, 92%, 58%, ${alpha})`);
    gradient.addColorStop(0.72, `hsla(${hue + 44}, 90%, 50%, ${alpha * 0.5})`);
    gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawFlowLines = (
    time: number,
    normalizedProgress: number,
    currentEnergy: number,
    transitionMix: number,
    transitionDirection: number,
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.lineWidth = 1 + transitionMix * 1.6;

    for (let i = 0; i < 5; i += 1) {
      const offset = i / 4;
      const amplitude = 22 + currentEnergy * 24 + offset * 12 + transitionMix * 48;
      const yBase = height * (0.18 + offset * 0.16 - normalizedProgress * 0.07);
      const hue = 190 + normalizedProgress * 85 + offset * 22 + transitionMix * 36;

      ctx.strokeStyle = `hsla(${hue}, 95%, 72%, ${
        0.06 + currentEnergy * 0.04 + transitionMix * 0.08
      })`;
      ctx.beginPath();

      for (let x = -80; x <= width + 80; x += 24) {
        const wave =
          Math.sin(time * 1.8 + offset * 4 + x * 0.008) * amplitude +
          Math.cos(time * 1.15 + x * 0.005) * amplitude * 0.45 +
          Math.sin(time * 3.2 + x * 0.016 + offset * 7) *
            amplitude *
            0.18 *
            transitionDirection;
        const y = yBase + wave;
        if (x === -80) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    ctx.restore();
  };

  const drawTransitionSweep = (transitionMix: number, transitionDirection: number) => {
    if (transitionMix <= 0.001) return;

    const sweepWidth = width * (0.18 + transitionMix * 0.22);
    const sweepX =
      width * 0.5 + transitionDirection * width * 0.24 * (1 - transitionMix);
    const sweep = ctx.createLinearGradient(
      sweepX - sweepWidth,
      0,
      sweepX + sweepWidth,
      height,
    );
    sweep.addColorStop(0, "hsla(0, 0%, 100%, 0)");
    sweep.addColorStop(
      0.4,
      `hsla(${200 + transitionMix * 80}, 100%, 76%, ${transitionMix * 0.12})`,
    );
    sweep.addColorStop(
      0.5,
      `hsla(${320 - transitionDirection * 30}, 100%, 78%, ${transitionMix * 0.28})`,
    );
    sweep.addColorStop(
      0.6,
      `hsla(${180 + transitionMix * 60}, 100%, 72%, ${transitionMix * 0.12})`,
    );
    sweep.addColorStop(1, "hsla(0, 0%, 100%, 0)");

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = sweep;
    ctx.translate(transitionDirection * transitionMix * 40, 0);
    ctx.rotate(transitionDirection * (0.08 + transitionMix * 0.1));
    ctx.fillRect(-width * 0.12, -height * 0.2, width * 1.24, height * 1.4);
    ctx.restore();
  };

  const drawShockwave = (transitionMix: number) => {
    if (transitionMix <= 0.001) return;

    const ringProgress = 1 - Math.pow(1 - transitionMix, 2.4);
    const radius = Math.max(width, height) * (0.18 + ringProgress * 0.72);
    const gradient = ctx.createRadialGradient(
      width * 0.5,
      height * 0.5,
      radius * 0.42,
      width * 0.5,
      height * 0.5,
      radius,
    );
    gradient.addColorStop(0, "hsla(0, 0%, 100%, 0)");
    gradient.addColorStop(
      0.72,
      `hsla(${190 + transitionMix * 80}, 100%, 78%, ${transitionMix * 0.1})`,
    );
    gradient.addColorStop(
      0.82,
      `hsla(${320 - transitionMix * 40}, 100%, 74%, ${transitionMix * 0.22})`,
    );
    gradient.addColorStop(1, "hsla(0, 0%, 100%, 0)");

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const render = (now: number) => {
    if (destroyed) return;

    const frameTime = finite(now, lastTime);
    const delta = Math.min(Math.max(0, (frameTime - lastTime) / 1000), 0.033);
    lastTime = frameTime;

    const targetProgress = normalized(progressTarget);
    const transitionAge = transition.startTime
      ? frameTime - finite(transition.startTime)
      : Number.POSITIVE_INFINITY;
    const transitionDuration = 1450;
    const transitionT = Math.min(1, transitionAge / transitionDuration);
    const transitionEnvelope =
      transitionAge === Number.POSITIVE_INFINITY
        ? 0
        : Math.sin(Math.PI * Math.pow(1 - Math.pow(1 - transitionT, 2.35), 0.92));
    const transitionMix = Math.max(
      0,
      finite(transitionEnvelope * finite(transition.strength), 0),
    );
    const progressForce =
      (targetProgress - progressValue) * (14 + transitionMix * 26) -
      progressVelocity * (8.5 - transitionMix * 2.2);
    progressVelocity += progressForce * delta;
    progressValue += progressVelocity * delta;
    progressVelocity = finite(progressVelocity);
    progressValue = normalized(progressValue, targetProgress);

    const normalizedProgress = progressValue;
    const targetImpulse = Math.max(0, finite(impulseTarget));
    energy += ((targetImpulse + transitionMix * 0.95) - energy) * Math.min(1, delta * 5.5);
    energy = Math.max(0, finite(energy));
    impulseTarget *= Math.max(0.86, 1 - delta * 2.8);

    const transitionDirection = finite(transition.direction, 1) || 1;
    const time = frameTime * 0.00032 + normalizedProgress * 1.4;
    const drift =
      normalizedProgress * height * 0.12 +
      transitionMix * height * 0.03 * transitionDirection;

    const baseGradient = ctx.createLinearGradient(0, 0, width, height);
    baseGradient.addColorStop(0, `hsl(${218 + transitionMix * 24}, 55%, ${5 + transitionMix * 4}%)`);
    baseGradient.addColorStop(
      0.45,
      `hsl(${208 + normalizedProgress * 22 + transitionMix * 18}, 58%, ${
        10 + transitionMix * 7
      }%)`,
    );
    baseGradient.addColorStop(1, `hsl(${228 - transitionMix * 18}, 48%, ${4 + transitionMix * 3}%)`);
    ctx.fillStyle = baseGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.filter = `blur(${70 + energy * 45 + transitionMix * 36}px) saturate(${
      135 + transitionMix * 55
    }%)`;
    ctx.globalCompositeOperation = "lighter";

    BASE_BLOBS.forEach((blob, index) => {
      drawBlob(
        blob,
        index,
        time,
        normalizedProgress,
        energy,
        transitionMix,
        transitionDirection,
      );
    });

    ctx.restore();

    ctx.save();
    ctx.translate(transitionDirection * transitionMix * 36, -drift);
    drawFlowLines(
      time,
      normalizedProgress,
      energy,
      transitionMix,
      transitionDirection,
    );
    ctx.restore();

    drawTransitionSweep(transitionMix, transitionDirection);
    drawShockwave(transitionMix);

    const vignette = ctx.createRadialGradient(
      width * 0.5,
      height * 0.42,
      0,
      width * 0.5,
      height * 0.42,
      Math.max(width, height) * 0.78,
    );
    vignette.addColorStop(0, "hsla(220, 50%, 8%, 0)");
    vignette.addColorStop(0.7, "hsla(220, 55%, 6%, 0.12)");
    vignette.addColorStop(1, `hsla(220, 60%, 4%, ${0.62 - transitionMix * 0.18})`);
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    rafId = window.requestAnimationFrame(render);
  };

  resize();
  window.addEventListener("resize", resize);
  rafId = window.requestAnimationFrame(render);

  return {
    setProgress(value) {
      progressTarget = value;
    },
    setImpulse(value) {
      impulseTarget = Math.min(1, Math.max(0, value));
    },
    triggerTransition(payload) {
      transition = {
        key: Date.now(),
        startTime: performance.now(),
        from: payload.from,
        to: payload.to,
        direction: payload.direction,
        strength: Math.max(
          0.18,
          Math.min(1, Math.abs(payload.to - payload.from) * 0.38),
        ),
      };
    },
    destroy() {
      destroyed = true;
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
      canvas.remove();
    },
  };
}
