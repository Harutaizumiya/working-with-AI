# 第五轮修改意见

我的想法是，AI 赋予了我们快速把想法变成看得见的东西的能力，不管是产品、想法、还是不成型的思路，我们要善于利用。

我觉得表达的结构和顺序可以再优化一下，特别是 vibe coding 技巧、认知、经验这部分，要一个相对连贯的思路。

从 emoji 猜电影开始，后面就有点过于随机了，感觉是不是也得有一个方式稍微串一下？

增加一些random的信息：

- 关于 vibe coding 的工具，我的个人选择
  - Codex app - GPT-5.4 fast xhigh
  - Non-coding/creative: ChatGPT / Claude Code
  - Skills: -
  - MCPs: Playwright MCP

---

## 祖传的 Prompt 心法

不要说得太中二，冷静低调一点，这都是我个人经验而已，并不作为什么 best practice，只是让大家可以参考一下。

## Coding with AI — 实战经验

可以把创建 journey 的流程更加可视化、有创意地展现出来

## knowledge.jpeg

range input 拖动时下面文本宽度变化会导致布局闪烁，你仔细考虑优化一下布局吧

## 从 query 到 intent

你这个可视化的方式太晦涩了吧，我就是想说搜索引擎的机制决定了，它要接受专门针对这个机制优化的 query，而不是一个自然语言的表达。
相比一个自然语言表达的 intent，query 是一个在搜索引擎机制下的向量投影，而 intent 就是一个向量。你觉得这个表达合理吗？有没有更好的逻辑去叙述？然后基于这个想法，去设计一个简单易懂的可视化方案。现在这个要完全推翻的。

## Token · Model · Logits

隐藏掉

## Coding Agents 就是 General-Purpose Agents

重新设计一下信息结构，elaborate 一下 why

## Workflow

可视化做得太差了，可以优化一下吗？

我觉得对于一个独立的需求来说，一般 research 和 plan 做一遍就可以了，然后才是 implement 和 review 的循环。

"关键心法"这种说法也觉得有点太装逼了。

其实这个里面有一个 file-based planning 而不是用 agent 的内置 plan 能力的意思，因为这样可以更好地在长 session、跨 session 的场景里避免 lose track。保证任务的完成。

这个 journey 输出的内容其实是一个对项目开发过程和最新决策的 distill 结果。和 skill 一样，agent 也可以按需去读取（即同样有 progressive disclosure的效果）。

## beyond vibe coding

每一项都可以展开说说的，我在上一个 review 里都给了例子的。

## AI 味

iframe 预览太小了，可以大一些。
新增的三个风格都删了吧，感觉用同样的指导意见做出来都是同一个味道。我们重新来。

再开一些 subagent，分别基于不同的 skill 来设计：

### `frontend-design` from Anthropic

```md
---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:

- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
```

### [Taste skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill)

```md
---
name: design-taste-frontend
description: Senior UI/UX Engineer. Architect digital interfaces overriding default LLM biases. Enforces metric-based rules, strict component architecture, CSS hardware acceleration, and balanced design engineering.
---

# High-Agency Frontend Skill

## 1. ACTIVE BASELINE CONFIGURATION

- DESIGN_VARIANCE: 8 (1=Perfect Symmetry, 10=Artsy Chaos)
- MOTION_INTENSITY: 6 (1=Static/No movement, 10=Cinematic/Magic Physics)
- VISUAL_DENSITY: 4 (1=Art Gallery/Airy, 10=Pilot Cockpit/Packed Data)

**AI Instruction:** The standard baseline for all generations is strictly set to these values (8, 6, 4). Do not ask the user to edit this file. Otherwise, ALWAYS listen to the user: adapt these values dynamically based on what they explicitly request in their chat prompts. Use these baseline (or user-overridden) values as your global variables to drive the specific logic in Sections 3 through 7.

## 2. DEFAULT ARCHITECTURE & CONVENTIONS

Unless the user explicitly specifies a different stack, adhere to these structural constraints to maintain consistency:

- **DEPENDENCY VERIFICATION [MANDATORY]:** Before importing ANY 3rd party library (e.g. `framer-motion`, `lucide-react`, `zustand`), you MUST check `package.json`. If the package is missing, you MUST output the installation command (e.g. `npm install package-name`) before providing the code. **Never** assume a library exists.
- **Framework & Interactivity:** React or Next.js. Default to Server Components (`RSC`).
  - **RSC SAFETY:** Global state works ONLY in Client Components. In Next.js, wrap providers in a `"use client"` component.
  - **INTERACTIVITY ISOLATION:** If Sections 4 or 7 (Motion/Liquid Glass) are active, the specific interactive UI component MUST be extracted as an isolated leaf component with `'use client'` at the very top. Server Components must exclusively render static layouts.
- **State Management:** Use local `useState`/`useReducer` for isolated UI. Use global state strictly for deep prop-drilling avoidance.
- **Styling Policy:** Use Tailwind CSS (v3/v4) for 90% of styling.
  - **TAILWIND VERSION LOCK:** Check `package.json` first. Do not use v4 syntax in v3 projects.
  - **T4 CONFIG GUARD:** For v4, do NOT use `tailwindcss` plugin in `postcss.config.js`. Use `@tailwindcss/postcss` or the Vite plugin.
- **ANTI-EMOJI POLICY [CRITICAL]:** NEVER use emojis in code, markup, text content, or alt text. Replace symbols with high-quality icons (Radix, Phosphor) or clean SVG primitives. Emojis are BANNED.
- **Responsiveness & Spacing:**
  - Standardize breakpoints (`sm`, `md`, `lg`, `xl`).
  - Contain page layouts using `max-w-[1400px] mx-auto` or `max-w-7xl`.
  - **Viewport Stability [CRITICAL]:** NEVER use `h-screen` for full-height Hero sections. ALWAYS use `min-h-[100dvh]` to prevent catastrophic layout jumping on mobile browsers (iOS Safari).
  - **Grid over Flex-Math:** NEVER use complex flexbox percentage math (`w-[calc(33%-1rem)]`). ALWAYS use CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`) for reliable structures.
- **Icons:** You MUST use exactly `@phosphor-icons/react` or `@radix-ui/react-icons` as the import paths (check installed version). Standardize `strokeWidth` globally (e.g., exclusively use `1.5` or `2.0`).

## 3. DESIGN ENGINEERING DIRECTIVES (Bias Correction)

LLMs have statistical biases toward specific UI cliché patterns. Proactively construct premium interfaces using these engineered rules:

**Rule 1: Deterministic Typography**

- **Display/Headlines:** Default to `text-4xl md:text-6xl tracking-tighter leading-none`.
  - **ANTI-SLOP:** Discourage `Inter` for "Premium" or "Creative" vibes. Force unique character using `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`.
  - **TECHNICAL UI RULE:** Serif fonts are strictly BANNED for Dashboard/Software UIs. For these contexts, use exclusively high-end Sans-Serif pairings (`Geist` + `Geist Mono` or `Satoshi` + `JetBrains Mono`).
- **Body/Paragraphs:** Default to `text-base text-gray-600 leading-relaxed max-w-[65ch]`.

**Rule 2: Color Calibration**

- **Constraint:** Max 1 Accent Color. Saturation < 80%.
- **THE LILA BAN:** The "AI Purple/Blue" aesthetic is strictly BANNED. No purple button glows, no neon gradients. Use absolute neutral bases (Zinc/Slate) with high-contrast, singular accents (e.g. Emerald, Electric Blue, or Deep Rose).
- **COLOR CONSISTENCY:** Stick to one palette for the entire output. Do not fluctuate between warm and cool grays within the same project.

**Rule 3: Layout Diversification**

- **ANTI-CENTER BIAS:** Centered Hero/H1 sections are strictly BANNED when `LAYOUT_VARIANCE > 4`. Force "Split Screen" (50/50), "Left Aligned content/Right Aligned asset", or "Asymmetric White-space" structures.

**Rule 4: Materiality, Shadows, and "Anti-Card Overuse"**

- **DASHBOARD HARDENING:** For `VISUAL_DENSITY > 7`, generic card containers are strictly BANNED. Use logic-grouping via `border-t`, `divide-y`, or purely negative space. Data metrics should breathe without being boxed in unless elevation (z-index) is functionally required.
- **Execution:** Use cards ONLY when elevation communicates hierarchy. When a shadow is used, tint it to the background hue.

**Rule 5: Interactive UI States**

- **Mandatory Generation:** LLMs naturally generate "static" successful states. You MUST implement full interaction cycles:
  - **Loading:** Skeletal loaders matching layout sizes (avoid generic circular spinners).
  - **Empty States:** Beautifully composed empty states indicating how to populate data.
  - **Error States:** Clear, inline error reporting (e.g., forms).
  - **Tactile Feedback:** On `:active`, use `-translate-y-[1px]` or `scale-[0.98]` to simulate a physical push indicating success/action.

**Rule 6: Data & Form Patterns**

- **Forms:** Label MUST sit above input. Helper text is optional but should exist in markup. Error text below input. Use a standard `gap-2` for input blocks.

## 4. CREATIVE PROACTIVITY (Anti-Slop Implementation)

To actively combat generic AI designs, systematically implement these high-end coding concepts as your baseline:

- **"Liquid Glass" Refraction:** When glassmorphism is needed, go beyond `backdrop-blur`. Add a 1px inner border (`border-white/10`) and a subtle inner shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) to simulate physical edge refraction.
- **Magnetic Micro-physics (If MOTION_INTENSITY > 5):** Implement buttons that pull slightly toward the mouse cursor. **CRITICAL:** NEVER use React `useState` for magnetic hover or continuous animations. Use EXCLUSIVELY Framer Motion's `useMotionValue` and `useTransform` outside the React render cycle to prevent performance collapse on mobile.
- **Perpetual Micro-Interactions:** When `MOTION_INTENSITY > 5`, embed continuous, infinite micro-animations (Pulse, Typewriter, Float, Shimmer, Carousel) in standard components (avatars, status dots, backgrounds). Apply premium Spring Physics (`type: "spring", stiffness: 100, damping: 20`) to all interactive elements—no linear easing.
- **Layout Transitions:** Always utilize Framer Motion's `layout` and `layoutId` props for smooth re-ordering, resizing, and shared element transitions across state changes.
- **Staggered Orchestration:** Do not mount lists or grids instantly. Use `staggerChildren` (Framer) or CSS cascade (`animation-delay: calc(var(--index) * 100ms)`) to create sequential waterfall reveals. **CRITICAL:** For `staggerChildren`, the Parent (`variants`) and Children MUST reside in the identical Client Component tree. If data is fetched asynchronously, pass the data as props into a centralized Parent Motion wrapper.

## 5. PERFORMANCE GUARDRAILS

- **DOM Cost:** Apply grain/noise filters exclusively to fixed, pointer-event-none pseudo-elements (e.g., `fixed inset-0 z-50 pointer-events-none`) and NEVER to scrolling containers to prevent continuous GPU repaints and mobile performance degradation.
- **Hardware Acceleration:** Never animate `top`, `left`, `width`, or `height`. Animate exclusively via `transform` and `opacity`.
- **Z-Index Restraint:** NEVER spam arbitrary `z-50` or `z-10` unprompted. Use z-indexes strictly for systemic layer contexts (Sticky Navbars, Modals, Overlays).

## 6. TECHNICAL REFERENCE (Dial Definitions)

### DESIGN_VARIANCE (Level 1-10)

- **1-3 (Predictable):** Flexbox `justify-center`, strict 12-column symmetrical grids, equal paddings.
- **4-7 (Offset):** Use `margin-top: -2rem` overlapping, varied image aspect ratios (e.g., 4:3 next to 16:9), left-aligned headers over center-aligned data.
- **8-10 (Asymmetric):** Masonry layouts, CSS Grid with fractional units (e.g., `grid-template-columns: 2fr 1fr 1fr`), massive empty zones (`padding-left: 20vw`).
- **MOBILE OVERRIDE:** For levels 4-10, any asymmetric layout above `md:` MUST aggressively fall back to a strict, single-column layout (`w-full`, `px-4`, `py-8`) on viewports `< 768px` to prevent horizontal scrolling and layout breakage.

### MOTION_INTENSITY (Level 1-10)

- **1-3 (Static):** No automatic animations. CSS `:hover` and `:active` states only.
- **4-7 (Fluid CSS):** Use `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`. Use `animation-delay` cascades for load-ins. Focus strictly on `transform` and `opacity`. Use `will-change: transform` sparingly.
- **8-10 (Advanced Choreography):** Complex scroll-triggered reveals or parallax. Use Framer Motion hooks. NEVER use `window.addEventListener('scroll')`.

### VISUAL_DENSITY (Level 1-10)

- **1-3 (Art Gallery Mode):** Lots of white space. Huge section gaps. Everything feels very expensive and clean.
- **4-7 (Daily App Mode):** Normal spacing for standard web apps.
- **8-10 (Cockpit Mode):** Tiny paddings. No card boxes; just 1px lines to separate data. Everything is packed. **Mandatory:** Use Monospace (`font-mono`) for all numbers.

## 7. AI TELLS (Forbidden Patterns)

To guarantee a premium, non-generic output, you MUST strictly avoid these common AI design signatures unless explicitly requested:

### Visual & CSS

- **NO Neon/Outer Glows:** Do not use default `box-shadow` glows or auto-glows. Use inner borders or subtle tinted shadows.
- **NO Pure Black:** Never use `#000000`. Use Off-Black, Zinc-950, or Charcoal.
- **NO Oversaturated Accents:** Desaturate accents to blend elegantly with neutrals.
- **NO Excessive Gradient Text:** Do not use text-fill gradients for large headers.
- **NO Custom Mouse Cursors:** They are outdated and ruin performance/accessibility.

### Typography

- **NO Inter Font:** Banned. Use `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`.
- **NO Oversized H1s:** The first heading should not scream. Control hierarchy with weight and color, not just massive scale.
- **Serif Constraints:** Use Serif fonts ONLY for creative/editorial designs. **NEVER** use Serif on clean Dashboards.

### Layout & Spacing

- **Align & Space Perfectly:** Ensure padding and margins are mathematically perfect. Avoid floating elements with awkward gaps.
- **NO 3-Column Card Layouts:** The generic "3 equal cards horizontally" feature row is BANNED. Use a 2-column Zig-Zag, asymmetric grid, or horizontal scrolling approach instead.

### Content & Data (The "Jane Doe" Effect)

- **NO Generic Names:** "John Doe", "Sarah Chan", or "Jack Su" are banned. Use highly creative, realistic-sounding names.
- **NO Generic Avatars:** DO NOT use standard SVG "egg" or Lucide user icons for avatars. Use creative, believable photo placeholders or specific styling.
- **NO Fake Numbers:** Avoid predictable outputs like `99.99%`, `50%`, or basic phone numbers (`1234567`). Use organic, messy data (`47.2%`, `+1 (312) 847-1928`).
- **NO Startup Slop Names:** "Acme", "Nexus", "SmartFlow". Invent premium, contextual brand names.
- **NO Filler Words:** Avoid AI copywriting clichés like "Elevate", "Seamless", "Unleash", or "Next-Gen". Use concrete verbs.

### External Resources & Components

- **NO Broken Unsplash Links:** Do not use Unsplash. Use absolute, reliable placeholders like `https://picsum.photos/seed/{random_string}/800/600` or SVG UI Avatars.
- **shadcn/ui Customization:** You may use `shadcn/ui`, but NEVER in its generic default state. You MUST customize the radii, colors, and shadows to match the high-end project aesthetic.
- **Production-Ready Cleanliness:** Code must be extremely clean, visually striking, memorable, and meticulously refined in every detail.

## 8. THE CREATIVE ARSENAL (High-End Inspiration)

Do not default to generic UI. Pull from this library of advanced concepts to ensure the output is visually striking and memorable. When appropriate, leverage **GSAP (ScrollTrigger/Parallax)** for complex scrolltelling or **ThreeJS/WebGL** for 3D/Canvas animations, rather than basic CSS motion. **CRITICAL:** Never mix GSAP/ThreeJS with Framer Motion in the same component tree. Default to Framer Motion for UI/Bento interactions. Use GSAP/ThreeJS EXCLUSIVELY for isolated full-page scrolltelling or canvas backgrounds, wrapped in strict useEffect cleanup blocks.

### The Standard Hero Paradigm

- Stop doing centered text over a dark image. Try asymmetric Hero sections: Text cleanly aligned to the left or right. The background should feature a high-quality, relevant image with a subtle stylistic fade (darkening or lightening gracefully into the background color depending on if it is Light or Dark mode).

### Navigation & Menüs

- **Mac OS Dock Magnification:** Nav-bar at the edge; icons scale fluidly on hover.
- **Magnetic Button:** Buttons that physically pull toward the cursor.
- **Gooey Menu:** Sub-items detach from the main button like a viscous liquid.
- **Dynamic Island:** A pill-shaped UI component that morphs to show status/alerts.
- **Contextual Radial Menu:** A circular menu expanding exactly at the click coordinates.
- **Floating Speed Dial:** A FAB that springs out into a curved line of secondary actions.
- **Mega Menu Reveal:** Full-screen dropdowns that stagger-fade complex content.

### Layout & Grids

- **Bento Grid:** Asymmetric, tile-based grouping (e.g., Apple Control Center).
- **Masonry Layout:** Staggered grid without fixed row heights (e.g., Pinterest).
- **Chroma Grid:** Grid borders or tiles showing subtle, continuously animating color gradients.
- **Split Screen Scroll:** Two screen halves sliding in opposite directions on scroll.
- **Curtain Reveal:** A Hero section parting in the middle like a curtain on scroll.

### Cards & Containers

- **Parallax Tilt Card:** A 3D-tilting card tracking the mouse coordinates.
- **Spotlight Border Card:** Card borders that illuminate dynamically under the cursor.
- **Glassmorphism Panel:** True frosted glass with inner refraction borders.
- **Holographic Foil Card:** Iridescent, rainbow light reflections shifting on hover.
- **Tinder Swipe Stack:** A physical stack of cards the user can swipe away.
- **Morphing Modal:** A button that seamlessly expands into its own full-screen dialog container.

### Scroll-Animations

- **Sticky Scroll Stack:** Cards that stick to the top and physically stack over each other.
- **Horizontal Scroll Hijack:** Vertical scroll translates into a smooth horizontal gallery pan.
- **Locomotive Scroll Sequence:** Video/3D sequences where framerate is tied directly to the scrollbar.
- **Zoom Parallax:** A central background image zooming in/out seamlessly as you scroll.
- **Scroll Progress Path:** SVG vector lines or routes that draw themselves as the user scrolls.
- **Liquid Swipe Transition:** Page transitions that wipe the screen like a viscous liquid.

### Galleries & Media

- **Dome Gallery:** A 3D gallery feeling like a panoramic dome.
- **Coverflow Carousel:** 3D carousel with the center focused and edges angled back.
- **Drag-to-Pan Grid:** A boundless grid you can freely drag in any compass direction.
- **Accordion Image Slider:** Narrow vertical/horizontal image strips that expand fully on hover.
- **Hover Image Trail:** The mouse leaves a trail of popping/fading images behind it.
- **Glitch Effect Image:** Brief RGB-channel shifting digital distortion on hover.

### Typography & Text

- **Kinetic Marquee:** Endless text bands that reverse direction or speed up on scroll.
- **Text Mask Reveal:** Massive typography acting as a transparent window to a video background.
- **Text Scramble Effect:** Matrix-style character decoding on load or hover.
- **Circular Text Path:** Text curved along a spinning circular path.
- **Gradient Stroke Animation:** Outlined text with a gradient continuously running along the stroke.
- **Kinetic Typography Grid:** A grid of letters dodging or rotating away from the cursor.

### Micro-Interactions & Effects

- **Particle Explosion Button:** CTAs that shatter into particles upon success.
- **Liquid Pull-to-Refresh:** Mobile reload indicators acting like detaching water droplets.
- **Skeleton Shimmer:** Shifting light reflections moving across placeholder boxes.
- **Directional Hover Aware Button:** Hover fill entering from the exact side the mouse entered.
- **Ripple Click Effect:** Visual waves rippling precisely from the click coordinates.
- **Animated SVG Line Drawing:** Vectors that draw their own contours in real-time.
- **Mesh Gradient Background:** Organic, lava-lamp-like animated color blobs.
- **Lens Blur Depth:** Dynamic focus blurring background UI layers to highlight a foreground action.

## 9. THE "MOTION-ENGINE" BENTO PARADIGM

When generating modern SaaS dashboards or feature sections, you MUST utilize the following "Bento 2.0" architecture and motion philosophy. This goes beyond static cards and enforces a "Vercel-core meets Dribbble-clean" aesthetic heavily reliant on perpetual physics.

### A. Core Design Philosophy

- **Aesthetic:** High-end, minimal, and functional.
- **Palette:** Background in `#f9fafb`. Cards are pure white (`#ffffff`) with a 1px border of `border-slate-200/50`.
- **Surfaces:** Use `rounded-[2.5rem]` for all major containers. Apply a "diffusion shadow" (a very light, wide-spreading shadow, e.g., `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`) to create depth without clutter.
- **Typography:** Strict `Geist`, `Satoshi`, or `Cabinet Grotesk` font stack. Use subtle tracking (`tracking-tight`) for headers.
- **Labels:** Titles and descriptions must be placed **outside and below** the cards to maintain a clean, gallery-style presentation.
- **Pixel-Perfection:** Use generous `p-8` or `p-10` padding inside cards.

### B. The Animation Engine Specs (Perpetual Motion)

All cards must contain **"Perpetual Micro-Interactions."** Use the following Framer Motion principles:

- **Spring Physics:** No linear easing. Use `type: "spring", stiffness: 100, damping: 20` for a premium, weighty feel.
- **Layout Transitions:** Heavily utilize the `layout` and `layoutId` props to ensure smooth re-ordering, resizing, and shared element state transitions.
- **Infinite Loops:** Every card must have an "Active State" that loops infinitely (Pulse, Typewriter, Float, or Carousel) to ensure the dashboard feels "alive".
- **Performance:** Wrap dynamic lists in `<AnimatePresence>` and optimize for 60fps. **PERFORMANCE CRITICAL:** Any perpetual motion or infinite loop MUST be memoized (React.memo) and completely isolated in its own microscopic Client Component. Never trigger re-renders in the parent layout.

### C. The 5-Card Archetypes (Micro-Animation Specs)

Implement these specific micro-animations when constructing Bento grids (e.g., Row 1: 3 cols | Row 2: 2 cols split 70/30):

1. **The Intelligent List:** A vertical stack of items with an infinite auto-sorting loop. Items swap positions using `layoutId`, simulating an AI prioritizing tasks in real-time.
2. **The Command Input:** A search/AI bar with a multi-step Typewriter Effect. It cycles through complex prompts, including a blinking cursor and a "processing" state with a shimmering loading gradient.
3. **The Live Status:** A scheduling interface with "breathing" status indicators. Include a pop-up notification badge that emerges with an "Overshoot" spring effect, stays for 3 seconds, and vanishes.
4. **The Wide Data Stream:** A horizontal "Infinite Carousel" of data cards or metrics. Ensure the loop is seamless (using `x: ["0%", "-100%"]`) with a speed that feels effortless.
5. **The Contextual UI (Focus Mode):** A document view that animates a staggered highlight of a text block, followed by a "Float-in" of a floating action toolbar with micro-icons.

## 10. FINAL PRE-FLIGHT CHECK

Evaluate your code against this matrix before outputting. This is the **last** filter you apply to your logic.

- [ ] Is global state used appropriately to avoid deep prop-drilling rather than arbitrarily?
- [ ] Is mobile layout collapse (`w-full`, `px-4`, `max-w-7xl mx-auto`) guaranteed for high-variance designs?
- [ ] Do full-height sections safely use `min-h-[100dvh]` instead of the bugged `h-screen`?
- [ ] Do `useEffect` animations contain strict cleanup functions?
- [ ] Are empty, loading, and error states provided?
- [ ] Are cards omitted in favor of spacing where possible?
- [ ] Did you strictly isolate CPU-heavy perpetual animations in their own Client Components?
```

### [brutalist-skill](https://github.com/Leonxlnx/taste-skill/blob/main/skills/brutalist-skill/SKILL.md)

```md
---
name: industrial-brutalist-ui
description: Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites that need to feel like declassified blueprints.
---

# SKILL: Industrial Brutalism & Tactical Telemetry UI

## 1. Skill Meta

**Name:** Industrial Brutalism & Tactical Telemetry Interface Engineering
**Description:** Advanced proficiency in architecting web interfaces that synthesize mid-century Swiss Typographic design, industrial manufacturing manuals, and retro-futuristic aerospace/military terminal interfaces. This discipline requires absolute mastery over rigid modular grids, extreme typographic scale contrast, purely utilitarian color palettes, and the programmatic simulation of analog degradation (halftones, CRT scanlines, bitmap dithering). The objective is to construct digital environments that project raw functionality, mechanical precision, and high data density, deliberately discarding conventional consumer UI patterns.

## 2. Visual Archetypes

The design system operates by merging two distinct but highly compatible visual paradigms. **Pick ONE per project and commit to it. Do not alternate or mix both modes within the same interface.**

### 2.1 Swiss Industrial Print

Derived from 1960s corporate identity systems and heavy machinery blueprints.

- **Characteristics:** High-contrast light modes (newsprint/off-white substrates). Reliance on monolithic, heavy sans-serif typography. Unforgiving structural grids outlined by visible dividing lines. Aggressive, asymmetric use of negative space punctuated by oversized, viewport-bleeding numerals or letterforms. Heavy use of primary red as an alert/accent color.

### 2.2 Tactical Telemetry & CRT Terminal

Derived from classified military databases, legacy mainframes, and aerospace Heads-Up Displays (HUDs).

- **Characteristics:** Dark mode exclusivity. High-density tabular data presentation. Absolute dominance of monospaced typography. Integration of technical framing devices (ASCII brackets, crosshairs). Application of simulated hardware limitations (phosphor glow, scanlines, low bit-depth rendering).

## 3. Typographic Architecture

Typography is the primary structural and decorative infrastructure. Imagery is secondary. The system demands extreme variance in scale, weight, and spacing.

### 3.1 Macro-Typography (Structural Headers)

- **Classification:** Neo-Grotesque / Heavy Sans-Serif.
- **Optimal Web Fonts:** Neue Haas Grotesk (Black), Inter (Extra Bold/Black), Archivo Black, Roboto Flex (Heavy), Monument Extended.
- **Implementation Parameters:**
  - **Scale:** Deployed at massive scales using fluid typography (e.g., `clamp(4rem, 10vw, 15rem)`).
  - **Tracking (Letter-spacing):** Extremely tight, often negative (`-0.03em` to `-0.06em`), forcing glyphs to form solid architectural blocks.
  - **Leading (Line-height):** Highly compressed (`0.85` to `0.95`).
  - **Casing:** Exclusively uppercase for structural impact.

### 3.2 Micro-Typography (Data & Telemetry)

- **Classification:** Monospace / Technical Sans.
- **Optimal Web Fonts:** JetBrains Mono, IBM Plex Mono, Space Mono, VT323, Courier Prime.
- **Implementation Parameters:**
  - **Scale:** Fixed and small (`10px` to `14px` / `0.7rem` to `0.875rem`).
  - **Tracking:** Generous (`0.05em` to `0.1em`) to simulate mechanical typewriter spacing or terminal matrices.
  - **Leading:** Standard to tight (`1.2` to `1.4`).
  - **Casing:** Exclusively uppercase. Used for all metadata, navigation, unit IDs, and coordinates.

### 3.3 Textural Contrast (Artistic Disruption)

- **Classification:** High-Contrast Serif.
- **Optimal Web Fonts:** Playfair Display, EB Garamond, Times New Roman.
- **Implementation Parameters:** Used exceedingly sparingly. Must be subjected to heavy post-processing (halftone filters, 1-bit dithering) to degrade vector perfection and create textural juxtaposition against the clean sans-serifs.

## 4. Color System

The color architecture is uncompromising. Gradients, soft drop shadows, and modern translucency are strictly prohibited. Colors simulate physical media or primitive emissive displays.

**CRITICAL: Choose ONE substrate palette per project and use it consistently. Never mix light and dark substrates within the same interface.**

### If Swiss Industrial Print (Light):

- **Background:** `#F4F4F0` or `#EAE8E3` (Matte, unbleached documentation paper).
- **Foreground:** `#050505` to `#111111` (Carbon Ink).
- **Accent:** `#E61919` or `#FF2A2A` (Aviation/Hazard Red). This is the ONLY accent color. Used for strike-throughs, thick structural dividing lines, or vital data highlights.

### If Tactical Telemetry (Dark):

- **Background:** `#0A0A0A` or `#121212` (Deactivated CRT. Avoid pure `#000000`).
- **Foreground:** `#EAEAEA` (White phosphor). This is the primary text color.
- **Accent:** `#E61919` or `#FF2A2A` (Aviation/Hazard Red). Same red, same rules.
- **Terminal Green (`#4AF626`):** Optional. Use ONLY for a single specific UI element (e.g., one status indicator or one data readout) — never as a general text color. If it doesn't serve a clear purpose, omit it entirely.

## 5. Layout and Spatial Engineering

The layout must appear mathematically engineered. It rejects conventional web padding in favor of visible compartmentalization.

- **The Blueprint Grid:** Strict adherence to CSS Grid architectures. Elements do not float; they are anchored precisely to grid tracks and intersections.
- **Visible Compartmentalization:** Extensive utilization of solid borders (`1px` or `2px solid`) to delineate distinct zones of information. Horizontal rules (`<hr>`) frequently span the entire container width to segregate operational units.
- **Bimodal Density:** Layouts oscillate between extreme data density (tightly packed monospace metadata clustered together) and vast expanses of calculated negative space framing macro-typography.
- **Geometry:** Absolute rejection of `border-radius`. All corners must be exactly 90 degrees to enforce mechanical rigidity.

## 6. UI Components and Symbology

Standard web UI conventions are replaced with utilitarian, industrial graphic elements.

- **Syntax Decoration:** Utilization of ASCII characters to frame data points.
  - _Framing:_ `[ DELIVERY SYSTEMS ]`, `< RE-IND >`
  - _Directional:_ `>>>`, `///`, `\\\\`
- **Industrial Markers:** Prominent integration of registration (`®`), copyright (`©`), and trademark (`™`) symbols functioning as structural geometric elements rather than legal text.
- **Technical Assets:** Integration of crosshairs (`+`) at grid intersections, repeating vertical lines (barcodes), thick horizontal warning stripes, and randomized string data (e.g., `REV 2.6`, `UNIT / D-01`) to simulate active mechanical processes.

## 7. Textural and Post-Processing Effects

To prevent the design from appearing purely digital, simulated analog degradation is engineered into the frontend via CSS and SVG filters.

- **Halftone and 1-Bit Dithering:** Transforming continuous-tone images or large serif typography into dot-matrix patterns. Achieved via pre-processing or CSS `mix-blend-mode: multiply` overlays combined with SVG radial dot patterns.
- **CRT Scanlines:** For terminal interfaces, applying a `repeating-linear-gradient` to the background to simulate horizontal electron beam sweeps (e.g., `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`).
- **Mechanical Noise:** A global, low-opacity SVG static/noise filter applied to the DOM root to introduce a unified physical grain across both dark and light modes.

## 8. Web Engineering Directives

1.  **Grid Determinism:** Utilize `display: grid; gap: 1px;` with contrasting parent/child background colors to generate mathematically perfect, razor-thin dividing lines without complex border declarations.
2.  **Semantic Rigidity:** Construct the DOM using precise semantic tags (`<data>`, `<samp>`, `<kbd>`, `<output>`, `<dl>`) to accurately reflect the technical nature of the telemetry.
3.  **Typography Clamping:** Implement CSS `clamp()` functions exclusively for macro-typography to ensure massive text scales aggressively while maintaining structural integrity across viewports.
```
