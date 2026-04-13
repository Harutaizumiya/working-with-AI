import "./style.css";
import "./styles/concept-demos.css";
import { setupAiTasteToggle } from "./demos/ai-taste";
import { setupConceptDemos } from "./demos/concept-demos";
import { setupJpegDemo } from "./demos/jpeg-demo";
import { createFluidBackground } from "./fluid-background";
import { setupOverlay } from "./overlay";
import { slidesMarkup } from "./slides/markup";
import { setupSlideDeck } from "./slide-deck";

const app = document.getElementById("app");
if (app) {
  app.innerHTML = slidesMarkup;
}

const background = createFluidBackground();
const overlay = setupOverlay();
const { pulseBackground } = setupSlideDeck({
  background,
  closeOverlay: overlay.closeOverlay,
  isOverlayOpen: overlay.isOpen,
});

// ============================================================
// Emoji quiz
// ============================================================

const movies = [
  {
    emoji: "🌀🏙️😴🧠🧳⏳❄️🚐🌊🔫",
    answer: "盗梦空间 Inception",
  },
  {
    emoji: "🚀🌽🪐⌛👨‍👧📚🌊🕳️✨📡",
    answer: "星际穿越 Interstellar",
  },
  {
    emoji: "🎸💀🌼👵🕯️🎤👦🌉🎶🧡",
    answer: "寻梦环游记 Coco",
  },
  {
    emoji: "☄️📱🧵🏞️🏫💧🌙📝🔁💞",
    answer: "你的名字 Your Name",
  },
  {
    emoji: "🦑🎮🟢🔺🟥💰😱🍬⚰️👀",
    answer: "鱿鱼游戏 Squid Game",
  },
  {
    emoji: "🦇🌃🃏🔥🚓💣⚖️🛵🕶️🃟",
    answer: "蝙蝠侠：黑暗骑士 The Dark Knight",
  },
] as const;

let mIdx = 0;

const QUIZ_PROMPT =
  "我们来玩 emoji 猜影视作品。规则：1. 你只能用 emoji 输出，不能用文字，除非我说放弃当前题目。2. 每部作品用一组 emoji 表达一个经典桥段。3. 我猜对了自动下一题，猜错了给提示。";

function setupEmojiQuiz() {
  const display = document.getElementById("emoji-display");
  const reveal = document.getElementById("emoji-reveal");
  const answer = document.getElementById("emoji-answer");
  const nextBtn = document.getElementById("emoji-next");
  const startBtn = document.getElementById("emoji-start");
  const teaser = document.getElementById("emoji-teaser");
  const game = document.getElementById("emoji-game");
  if (!display || !answer || !teaser || !game) return;
  const displayEl = display;
  const answerEl = answer;
  const teaserEl = teaser;
  const gameEl = game;

  const chatLink = document.getElementById("chatgpt-quiz-link") as HTMLAnchorElement | null;
  if (chatLink) {
    chatLink.href = `https://chatgpt.com/?q=${encodeURIComponent(QUIZ_PROMPT)}`;
  }

  function show() {
    displayEl.textContent = movies[mIdx].emoji;
    answerEl.textContent = "???";
    answerEl.classList.remove("revealed");
  }

  startBtn?.addEventListener("click", () => {
    teaserEl.style.display = "none";
    gameEl.style.display = "flex";
    show();
    pulseBackground(0.26);
  });

  reveal?.addEventListener("click", () => {
    answerEl.textContent = movies[mIdx].answer;
    answerEl.classList.add("revealed");
    pulseBackground(0.14);
  });

  nextBtn?.addEventListener("click", () => {
    mIdx = (mIdx + 1) % movies.length;
    show();
    pulseBackground(0.2);
  });

  document.getElementById("copy-prompt")?.addEventListener("click", () => {
    navigator.clipboard.writeText(QUIZ_PROMPT).then(() => {
      const btn = document.getElementById("copy-prompt");
      if (!btn) return;

      btn.textContent = "已复制 ✓";
      pulseBackground(0.12);
      window.setTimeout(() => {
        btn.textContent = "复制 Prompt";
      }, 2000);
    });
  });
}

// ============================================================
// Init
// ============================================================

setupJpegDemo();
setupEmojiQuiz();
setupAiTasteToggle(pulseBackground);
setupConceptDemos();

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
