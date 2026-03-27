import "./style.css";

// ============================================================
// Slide engine with fragment support
// ============================================================

const slides = Array.from(document.querySelectorAll<HTMLElement>(".slide"));
let current = 0;

// Fragment tracking: which fragment index is visible per slide
const fragmentState = new Map<number, number>();

function getFragments(slideIdx: number): HTMLElement[] {
  return Array.from(
    slides[slideIdx].querySelectorAll<HTMLElement>("[data-f]"),
  ).sort((a, b) => Number(a.dataset.f) - Number(b.dataset.f));
}

function maxFragment(slideIdx: number): number {
  const frags = getFragments(slideIdx);
  if (frags.length === 0) return 0;
  // Count unique fragment indices
  const unique = new Set(frags.map((el) => Number(el.dataset.f)));
  return unique.size;
}

function currentFragment(slideIdx: number): number {
  return fragmentState.get(slideIdx) ?? 0;
}

function showFragmentsUpTo(slideIdx: number, n: number) {
  const frags = getFragments(slideIdx);
  // Get sorted unique fragment values
  const vals = [...new Set(frags.map((el) => Number(el.dataset.f)))].sort(
    (a, b) => a - b,
  );
  const visibleVals = new Set(vals.slice(0, n));
  frags.forEach((el) => {
    el.classList.toggle("f-visible", visibleVals.has(Number(el.dataset.f)));
  });
  fragmentState.set(slideIdx, n);
}

// When entering a slide going forward, show 0 fragments (progressive)
// When entering a slide going backward, show all fragments
function enterSlide(slideIdx: number, direction: "forward" | "backward") {
  if (direction === "forward") {
    showFragmentsUpTo(slideIdx, 0);
  } else {
    showFragmentsUpTo(slideIdx, maxFragment(slideIdx));
  }
}

function goto(index: number) {
  const clamped = Math.max(0, Math.min(index, slides.length - 1));
  if (clamped === current) return;
  const direction = clamped > current ? "forward" : "backward";
  const prevSlide = slides[current];
  const nextSlide = slides[clamped];
  prevSlide.classList.remove("active");
  prevSlide.classList.add(direction === "forward" ? "exit-left" : "exit-right");
  nextSlide.classList.remove("exit-left", "exit-right");
  nextSlide.classList.add("active");
  const prevIdx = current;
  current = clamped;
  enterSlide(clamped, direction);
  updateProgress();
  setTimeout(
    () => slides[prevIdx].classList.remove("exit-left", "exit-right"),
    600,
  );
}

function advance() {
  const cur = currentFragment(current);
  const max = maxFragment(current);
  if (cur < max) {
    showFragmentsUpTo(current, cur + 1);
  } else {
    goto(current + 1);
  }
}

function retreat() {
  const cur = currentFragment(current);
  if (cur > 0) {
    showFragmentsUpTo(current, cur - 1);
  } else {
    goto(current - 1);
  }
}

function updateProgress() {
  const bar = document.getElementById("progress-bar") as HTMLElement | null;
  if (bar) bar.style.width = `${((current + 1) / slides.length) * 100}%`;
  const counter = document.getElementById("slide-counter");
  if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
}

// ============================================================
// Navigation
// ============================================================

document.addEventListener("keydown", (e) => {
  const overlay = document.getElementById("iframe-overlay");
  if (overlay && overlay.style.display !== "none") {
    if (e.key === "Escape") closeOverlay();
    return;
  }
  if (["ArrowRight", " ", "ArrowDown", "PageDown"].includes(e.key)) {
    e.preventDefault();
    advance();
  } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
    e.preventDefault();
    retreat();
  }
});

let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(diff) > 60) {
    diff < 0 ? advance() : retreat();
  }
});

document.addEventListener("click", (e) => {
  const t = e.target as HTMLElement;
  if (t.closest("button, a, .interactive, input, iframe, .clickable")) return;
  const x = e.clientX / window.innerWidth;
  if (x > 0.8) advance();
  else if (x < 0.2) retreat();
});

// ============================================================
// iframe overlay
// ============================================================

function openOverlay(url: string, mobile = false) {
  const overlay = document.getElementById("iframe-overlay")!;
  const content = overlay.querySelector(".iframe-overlay-content")!;
  const iframe = document.getElementById("overlay-iframe") as HTMLIFrameElement;
  iframe.src = url;
  content.classList.toggle("mobile", mobile);
  overlay.style.display = "flex";
}

function closeOverlay() {
  const overlay = document.getElementById("iframe-overlay")!;
  const iframe = document.getElementById("overlay-iframe") as HTMLIFrameElement;
  overlay.style.display = "none";
  iframe.src = "";
}

function setupOverlay() {
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
        if (url) openOverlay(url, mobile);
      });
    });
}

// ============================================================
// JPEG compression demo
// ============================================================

function setupJpegDemo() {
  const canvas = document.getElementById("jpeg-canvas") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d")!;
  const slider = document.getElementById("jpeg-slider") as HTMLInputElement;
  const label = document.getElementById("jpeg-quality-label");

  const W = 600;
  const H = 400;
  canvas.width = W;
  canvas.height = H;

  // Load the gorilla photo as source
  const srcImg = new Image();
  srcImg.src = "/mike-arney-gorilla.jpg";

  function drawOriginal() {
    ctx.drawImage(srcImg, 0, 0, W, H);
  }

  let rafId = 0;
  function compress(quality: number) {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      drawOriginal();
      const url = canvas.toDataURL("image/jpeg", quality);
      const im = new Image();
      im.onload = () => {
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(im, 0, 0);
      };
      im.src = url;
    });
  }

  const stops: [number, string][] = [
    [5, "📱 小模型 — 能聊，但经常离谱"],
    [20, "💻 中等模型 — 基本可用"],
    [45, "🖥️ 大模型 — 相当靠谱"],
    [65, "🧠 Claude-class"],
    [85, "🏆 Frontier — 接近无损"],
    [100, "🌌 人脑（理论上限）"],
  ];

  function updateLabel(v: number) {
    if (label) {
      let best = stops[0];
      for (const s of stops) {
        if (Math.abs(s[0] - v) < Math.abs(best[0] - v)) best = s;
      }
      const vStr = String(v).padStart(3, "\u2007");
      label.innerHTML = `Quality:&nbsp;${vStr}% — ${best[1]}`;
    }
  }

  slider?.addEventListener("input", () => {
    const v = Number(slider.value);
    // Steep curve: accelerate decay so 60%+ still shows visible difference
    const quality = Math.max(0.01, (v / 100) ** 4);
    compress(quality);
    updateLabel(v);
  });

  // Start after image loads
  srcImg.onload = () => {
    const v = Number(slider?.value ?? 50);
    const quality = Math.max(0.01, (v / 100) ** 4);
    compress(quality);
    updateLabel(v);
  };
}

// ============================================================
// Emoji quiz (影视作品)
// ============================================================

const movies = [
  {
    emoji: "🏙️💤🔄🌀🏨🎯🔫💼🧊🌊🏔️🔑🎲🕰️🪞🚂🌉👤🎭⏱️🏗️💉",
    answer: "盗梦空间 Inception",
  },
  {
    emoji: "👨‍🚀🌽🕳️📚⏰👨‍👧🌊🪐🚀🏠📻🌌🤖💧🧊🕰️👴📊🛰️🌑🔭⏳",
    answer: "星际穿越 Interstellar",
  },
  {
    emoji: "🎸💀🌺🇲🇽👦🐕🌉🎶💜🦴🎭👴📸🌮🎺🕯️👻🌼🎪🦋💛🌅",
    answer: "寻梦环游记 Coco",
  },
  {
    emoji: "☄️🏙️🏔️👧👦🔄💫🎀📱✨🌅💧🕐🗾🎐🧵🌸💕🚃🔔🌌🪢",
    answer: "你的名字 Your Name",
  },
  {
    emoji: "🦑🎮👔💸🔴🟢🪆🍬📐🔫🦺🛏️🪜🎭💀⭕🔺🟥💉🌉🏆💰",
    answer: "鱿鱼游戏 Squid Game",
  },
  {
    emoji: "🦇🃏🏙️💣🔥🚔🏥💰🎭🪙🤡🚗💀🏢🗡️⚖️🌃🦸‍♂️🚁📞🎪🌑",
    answer: "蝙蝠侠：黑暗骑士 The Dark Knight",
  },
];

let mIdx = 0;

const QUIZ_PROMPT =
  "我们来玩 emoji 猜影视作品。规则：1. 你只能用 emoji 输出，不能用文字，除非我说放弃当前题目。2. 每部作品用 22 个 emoji 表达一个经典桥段。3. 我猜对了自动下一题，猜错了给提示。选择要跳跃一点。";

function setupEmojiQuiz() {
  const display = document.getElementById("emoji-display");
  const reveal = document.getElementById("emoji-reveal");
  const answer = document.getElementById("emoji-answer");
  const nextBtn = document.getElementById("emoji-next");
  const startBtn = document.getElementById("emoji-start");
  const teaser = document.getElementById("emoji-teaser");
  const game = document.getElementById("emoji-game");
  if (!display) return;

  // Set ChatGPT link href
  const chatLink = document.getElementById("chatgpt-quiz-link") as HTMLAnchorElement;
  if (chatLink) {
    chatLink.href = `https://chatgpt.com/?q=${encodeURIComponent(QUIZ_PROMPT)}`;
  }

  function show() {
    display!.textContent = movies[mIdx].emoji;
    answer!.textContent = "???";
    answer!.classList.remove("revealed");
  }

  startBtn?.addEventListener("click", () => {
    teaser!.style.display = "none";
    game!.style.display = "flex";
    show();
  });

  reveal?.addEventListener("click", () => {
    answer!.textContent = movies[mIdx].answer;
    answer!.classList.add("revealed");
  });

  nextBtn?.addEventListener("click", () => {
    mIdx = (mIdx + 1) % movies.length;
    show();
  });

  // Copy prompt button
  document.getElementById("copy-prompt")?.addEventListener("click", () => {
    navigator.clipboard.writeText(QUIZ_PROMPT).then(() => {
      const btn = document.getElementById("copy-prompt")!;
      btn.textContent = "已复制 ✓";
      setTimeout(() => {
        btn.textContent = "复制 Prompt";
      }, 2000);
    });
  });
}

// ============================================================
// AI taste toggle
// ============================================================

function setupAiTasteToggle() {
  const iframe = document.getElementById("ai-iframe") as HTMLIFrameElement;
  const btns = document.querySelectorAll<HTMLButtonElement>(".taste-btn");
  if (!iframe || btns.length === 0) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.src;
      if (src) {
        iframe.src = src;
        btns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });
}

// ============================================================
// Init
// ============================================================

if (slides.length > 0) {
  slides[0].classList.add("active");
  // Show all fragments on first slide by default (it's the title)
  showFragmentsUpTo(0, maxFragment(0));
}
updateProgress();
setupJpegDemo();
setupEmojiQuiz();
setupAiTasteToggle();
setupOverlay();

// Remove FOUC guard: double-rAF ensures initial state is fully painted
// before enabling transitions and making app visible
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const app = document.getElementById("app");
    if (app) {
      app.style.opacity = "";
      app.classList.add("ready");
    }
  });
});
