# 项目结构说明

这个项目是一个基于 Vite+ 的单页 slides 应用。当前结构已经做过一轮最小解耦，页面内容、全局翻页逻辑、局部 demo 逻辑、局部动画样式已经分开，后续继续加页面和动画时，优先沿着这条边界扩展。

## 目录总览

```text
working-with-ai/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ PROJECT_STRUCTURE.md
├─ public/
│  ├─ icons/
│  ├─ ai-taste.html
│  ├─ no-ai-taste-2.html
│  ├─ no-ai-taste-3.html
│  ├─ no-ai-taste-4.html
│  ├─ mike-arney-gorilla.jpg
│  ├─ moments-2025.jpg
│  └─ moments-2026.jpg
├─ src/
│  ├─ main.ts
│  ├─ fluid-background.ts
│  ├─ overlay.ts
│  ├─ slide-deck.ts
│  ├─ style.css
│  ├─ demos/
│  │  ├─ ai-taste.ts
│  │  ├─ concept-demos.ts
│  │  └─ jpeg-demo.ts
│  ├─ slides/
│  │  └─ markup.ts
│  └─ styles/
│     └─ concept-demos.css
└─ journey/
   ├─ IDEAS.md
   ├─ frontend-design.md
   ├─ frontend-skill.md
   ├─ mcp-vs-cli.md
   ├─ REVIEW_1.md ~ REVIEW_17.md
   └─ taste-skill.md
```

## 启动链路

1. [index.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/index.html) 提供页面外壳，只保留 `#app`、overlay、进度条、移动端导航。
2. [src/main.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/main.ts) 把 [src/slides/markup.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slides/markup.ts) 注入到 `#app`。
3. `main.ts` 初始化全局背景、overlay、slide deck，再分别启动各个 demo 模块。
4. 各个 demo 模块只处理自己的 DOM 和状态，不负责全局翻页。

## 核心文件

### [index.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/index.html)

职责：
- 页面 shell
- iframe overlay 容器
- 进度条和页码
- 移动端导航按钮

说明：
- 这里不再承载 slide 正文。
- 如果只是改某一页内容，不应该优先改这个文件。

### [src/main.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/main.ts)

职责：
- 应用入口
- 装配所有模块
- 挂载 slides HTML
- 初始化局部 demo

重要函数：
- `setupEmojiQuiz()` [重要]
  - 管理 emoji 猜影视作品小游戏。
  - 负责开始、揭晓答案、切到下一题、复制 prompt。

重要变量：
- `slidesMarkup`
  - 来自 [src/slides/markup.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slides/markup.ts)，是整套 slides 的 HTML 模板。
- `pulseBackground`
  - 来自 `setupSlideDeck()` 的返回值，供局部 demo 在交互时触发背景脉冲反馈。

### [src/slides/markup.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slides/markup.ts)

职责：
- 存放全部 slide 的 HTML 结构
- 定义各页的 `data-f` fragment
- 定义各 demo 所依赖的 DOM 节点和 `id` / `class`

说明：
- 改文案、加页面、调页面 DOM 结构，优先改这里。
- 这是最容易因为编码问题出错的文件，必须保持 UTF-8。

### [src/slide-deck.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slide-deck.ts)

职责：
- 管理整套 slide 的翻页和 fragment
- 管理 overview 网格
- 管理键盘导航和移动端导航
- 更新进度条、页码和背景进度

重要函数：
- `setupSlideDeck()` [重要]
  - 全局 slide 系统的初始化入口。
  - 绑定导航事件，并返回 `pulseBackground()` 给其他模块使用。
- `goto(index, direction)` [重要]
  - 切换当前 slide。
  - 处理前后页动画、背景过渡、fragment 重置。
- `showFragmentsUpTo(slideIdx, n)` [重要]
  - 控制某页显示到第几个 fragment。
- `stepForward()` [重要]
  - 优先推进 fragment，fragment 放完后再翻到下一页。
- `stepBackward()` [重要]
  - 优先回退 fragment，回退到头后再翻到上一页。
- `buildOverview()`
  - 构建 overview 缩略图网格。
- `toggleOverview(show?)` [重要]
  - 打开或关闭 overview 模式。
- `scaleOverviewThumbs(container)`
  - 按参考尺寸缩放 overview 缩略图。
- `updateProgress()`
  - 更新底部进度条和页码。

### [src/overlay.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/overlay.ts)

职责：
- 管理外链 iframe 预览层
- 绑定打开和关闭事件

重要函数：
- `setupOverlay()` [重要]
  - overlay 初始化入口。
  - 返回 `closeOverlay()` 和 `isOpen()` 给全局 slide 系统使用。
- `openOverlay(url, mobile)`
  - 打开 overlay，并根据 `mobile` 切换容器样式。
- `closeOverlay()` [重要]
  - 关闭 overlay，并清空 iframe `src`。

### [src/fluid-background.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/fluid-background.ts)

职责：
- 绘制全屏动态流体背景
- 响应翻页进度和局部交互脉冲

重要函数：
- `createFluidBackground()` [重要]
  - 背景系统入口。
  - 创建 canvas，启动渲染循环，并返回控制器。
- `drawBlob(...)`
  - 绘制彩色 blob，是背景主视觉主体。
- `drawFlowLines(...)`
  - 绘制流动线条，增强速度感和空间层次。
- `drawTransitionSweep(...)`
  - 翻页时的扫光过渡效果。
- `drawShockwave(...)`
  - 翻页时的冲击波效果。
- `render(now)` [重要]
  - 背景主渲染循环。

重要返回方法：
- `setProgress(value)` [重要]
  - 根据当前 slide 位置更新背景状态。
- `setImpulse(value)` [重要]
  - 给背景一个短促的能量脉冲。
- `triggerTransition(payload)` [重要]
  - 在翻页时触发背景转场。
- `destroy()`
  - 清理 canvas 和监听器。

## Demo 模块

### [src/demos/concept-demos.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/concept-demos.ts)

职责：
- 驱动 `Agent / Prompt / Context` 页面中的循环动画。

重要函数：
- `setupConceptDemos()` [重要]
  - 扫描所有 `.concept-card[data-concept-demo]` 并启动循环。
- `applyStep(step)` [重要]
  - 根据当前 step 切换 `.is-active`。
  - 同时更新 `prompt-goal`、`context-core`、`agent-progress-fill` 的状态。

### [src/demos/ai-taste.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/ai-taste.ts)

职责：
- 驱动 “用 AI 做设计” 页的 iframe 切换。

重要函数：
- `setupAiTasteToggle(pulseBackground)` [重要]
  - 绑定切换按钮，切换 iframe 源，并触发背景反馈。
- `scaleIframe()`
  - 在移动端按参考尺寸缩放 iframe，保证展示稳定。

### [src/demos/jpeg-demo.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/jpeg-demo.ts)

职责：
- 驱动 `knowledge.jpeg` 对应的 JPEG 压缩演示。

重要函数：
- `setupJpegDemo()` [重要]
  - 初始化 canvas、slider 和图片资源。
- `compress(quality)` [重要]
  - 用 `canvas.toDataURL("image/jpeg", quality)` 模拟有损压缩。
- `updateLabel(v)`
  - 根据 slider 值更新标签文案。

## 样式文件

### [src/style.css](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/style.css)

职责：
- 全局变量
- slide 布局
- fragment 显示规则
- overview 网格
- 通用动画和响应式布局

说明：
- 通用布局和大多数页面级样式放这里。
- 不建议继续把新的局部动画都塞回这个文件。

### [src/styles/concept-demos.css](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/styles/concept-demos.css)

职责：
- `Agent / Prompt / Context` 页面专属样式

包含：
- `concept-*` 容器和卡片布局
- `prompt-*` 对话气泡和目标态
- `context-*` 注入动画样式
- `agent-*` 执行循环和进度条

## 静态资源

### [public](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public)

职责：
- 提供运行时直接访问的静态文件

关键内容：
- [public/icons](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/icons)
  - 工具图标。
- [public/ai-taste.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/ai-taste.html)
- [public/no-ai-taste-2.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/no-ai-taste-2.html)
- [public/no-ai-taste-3.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/no-ai-taste-3.html)
- [public/no-ai-taste-4.html](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/no-ai-taste-4.html)
  - “AI 味” 对比页的 iframe 资源。
- [public/mike-arney-gorilla.jpg](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/mike-arney-gorilla.jpg)
  - JPEG demo 使用的源图。
- [public/moments-2025.jpg](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/moments-2025.jpg)
- [public/moments-2026.jpg](/C:/Users/Haruta/Documents/code/Web/working-with-ai/public/moments-2026.jpg)
  - 演讲内容中使用的图片。

## 配置文件

### [package.json](/C:/Users/Haruta/Documents/code/Web/working-with-ai/package.json)

职责：
- 定义项目元信息
- 依赖管理
- 通过 Vite+ 运行开发、检查和构建流程

### [vite.config.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/vite.config.ts)

职责：
- 配置 Vite+
- 注册插件

说明：
- 当前的构建问题主要出在这个文件的插件加载阶段，不是业务代码本身。

### [tsconfig.json](/C:/Users/Haruta/Documents/code/Web/working-with-ai/tsconfig.json)

职责：
- TypeScript 编译配置

## 过程文档

### [journey](/C:/Users/Haruta/Documents/code/Web/working-with-ai/journey)

职责：
- 存放设计思路、评审记录、实验结论和过程文档

适合查看：
- 历史 review 结论
- 设计取舍过程
- 一些 AI 使用方法和技能思考

## 后续修改建议

- 改页面内容：优先改 [src/slides/markup.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slides/markup.ts)
- 改翻页、fragment、overview：优先改 [src/slide-deck.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slide-deck.ts)
- 新增局部动画或交互：优先在 [src/demos](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos) 下加模块
- 新增局部动画样式：优先在 [src/styles](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/styles) 下加样式文件
- 只有通用布局和全局视觉规则才放回 [src/style.css](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/style.css)

## 重要函数索引

为了方便快速定位，这里把高频改动会碰到的函数再列一遍：

- [src/main.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/main.ts): `setupEmojiQuiz()`
- [src/slide-deck.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slide-deck.ts): `setupSlideDeck()`, `goto()`, `showFragmentsUpTo()`, `stepForward()`, `stepBackward()`, `toggleOverview()`
- [src/overlay.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/overlay.ts): `setupOverlay()`, `closeOverlay()`
- [src/fluid-background.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/fluid-background.ts): `createFluidBackground()`, `render()`, `setProgress()`, `setImpulse()`, `triggerTransition()`
- [src/demos/concept-demos.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/concept-demos.ts): `setupConceptDemos()`, `applyStep()`
- [src/demos/ai-taste.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/ai-taste.ts): `setupAiTasteToggle()`, `scaleIframe()`
- [src/demos/jpeg-demo.ts](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/jpeg-demo.ts): `setupJpegDemo()`, `compress()`, `updateLabel()`
