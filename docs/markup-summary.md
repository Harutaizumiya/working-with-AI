# `src/slides/markup.ts` 总结

版本号：v1.1

[`src/slides/markup.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slides/markup.ts) 是整套 slides 的内容编排层。它不负责脚本逻辑，也不负责样式实现，而是集中定义：

- 页面顺序
- 每页 HTML 结构
- fragment 出现节奏
- 各类交互 demo 依赖的 DOM 钩子

在当前项目里，这个文件本质上就是“演讲内容的最终落地稿”。

## 文件职责

这份文件主要负责四件事：

1. 定义整套演示的页面顺序
2. 把演讲提纲转成可渲染的 HTML 页面
3. 用 `data-f` 安排每页内部的讲解节奏
4. 给 TS 模块提供稳定的 `id`、`class`、`data-*` 挂点

也就是说，如果讲稿结构变了，最直接受影响的文件就是 `markup.ts`。

## 导出方式

文件通过一个大模板字符串导出：

- 导出变量：`slidesMarkup`
- 类型：`String.raw` 包裹的 HTML 字符串

这个字符串会在 [`src/main.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/main.ts) 中注入到 `#app`，再由 [`src/slide-deck.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slide-deck.ts) 管理翻页、步进和 overview。

## 当前页面顺序

当前 `markup.ts` 的页面顺序已经和学生演讲稿对齐，实际顺序如下：

1. 标题页 `Working with AI`
2. `Tab → Agent`
3. `AI 编程的自动驾驶等级`
4. `Agent / Prompt / Context`
5. `Research 双模式`
6. `一些个人 Prompt 经验`
7. `什么是 Skills?`
8. `我的工具选择`
9. `我的 Workflow`
10. `不只是 Vibe Coding` 章节封面
11. `人人都能是设计师`
12. `辅助代码理解`
13. `用 AI 做设计`
14. `一些变化` 章节封面
15. `信息获取方式在变`
16. `默认不信任“快”`
17. `AI 在生活中`
18. `AI 这么强大，我们会不会失业？`
19. `我的观点`

说明：

- 文件里仍然保留了 `knowledge.jpeg` 的旧页面块，但当前是注释状态，没有参与实际渲染。
- `CLI vs MCP` 已不再作为独立页面保留在当前顺序里。
- 原来的小游戏页和 `Q&A` 已被替换成“失业挑战”和“我的观点”。

## 页面结构和讲稿对应关系

### 第一部分：变化与共识

包括：

- 标题页
- `Tab → Agent`
- 自动驾驶等级
- `Agent / Prompt / Context`

这部分负责建立整场分享的底层共识：

- AI 工具已经从补全进入 agent 阶段
- 人和 AI 的分工方式正在变化
- `Prompt / Context / Agent` 是理解后续内容的基础框架

这里和旧版本最大的不同是：自动驾驶等级被提前到了概念页之前，更符合讲稿里“先建立认知直觉，再讲术语”的节奏。

### 第二部分：如何使用 AI

包括：

- `Research 双模式`
- `Prompt 经验`

这一部分先回答“怎么和 AI 开始合作”：

- 什么时候该发散
- 什么时候该收敛
- 怎么提问更稳定
- 怎么让 AI 更像合作者而不是随机答案机

讲稿更新后，这两页被提前到了前半段，作用变成了后续方法论和 workflow 的铺垫。

### 第三部分：方法与工具

包括：

- `什么是 Skills?`
- `我的工具选择`

这一部分的逻辑是：

- 先讲方法论沉淀，也就是 `Skill`
- 再讲实际工具分工

`Skill` 页现在更偏定义解释页，不再强调和 `CLI / MCP` 的强对比，而是强调“它是一份给 AI 的说明书”。

### 第四部分：实践落地

包括：

- `我的 Workflow`

这是当前整套 slides 的核心页，也是讲稿里时间占比最高的一页之一。

这页负责把前面的概念真正串起来：

- 想法如何形成
- 计划如何产出
- 原型如何生成
- Codex 如何接手
- 上下文如何注入
- 最终如何迭代和审核

如果后续继续改内容，这一页仍然是最需要保持稳定的核心页。

### 第五部分：扩展应用

包括：

- `不只是 Vibe Coding`
- `人人都能是设计师`
- `辅助代码理解`
- `用 AI 做设计`

这一部分说明 AI 不只是在“写代码”，还在影响：

- 设计原型
- 视觉表达
- 代码理解
- 审美判断

和旧版本相比，这里的“会议讨论准备”页已被移除，而原来的“设计交互协作”页内容也已经调整成更偏学生语境的 `人人都能是设计师`。

### 第六部分：认知变化

包括：

- `一些变化`
- `信息获取方式在变`
- `默认不信任“快”`
- `AI 在生活中`

这一部分更偏长期使用 AI 之后的习惯变化与判断升级。

它不是在讲工具使用技巧，而是在讲：

- 获取信息的方式在变
- 对“快”和“可靠”的直觉在变
- Coding Agent 的方法论已经开始外溢到生活场景

### 第七部分：收束与态度

包括：

- `AI 这么强大，我们会不会失业？`
- `我的观点`

这是当前讲稿中新的收尾结构。

它不再以互动小游戏或 Q&A 收尾，而是直接落到更现实的问题：

- AI 对程序员意味着什么挑战
- 我们该用什么态度面对这种变化

最后一页的核心结论是：

- 做好准备
- 与时俱进

## 重要结构约定

### 1. 每页都用 `<section class="slide">`

每页都是一个 `.slide` 容器，这会被 [`src/slide-deck.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/slide-deck.ts) 用来：

- 收集全部页面
- 管理当前激活页
- 控制翻页动画
- 构建 overview 缩略图

### 2. `data-f` 控制页内步进

文件里大量使用 `data-f="1"`, `data-f="2"` 等标记。

它们的作用是：

- 标记元素属于第几步 fragment
- 由 `slide-deck.ts` 统一切换 `.f-visible`
- 控制同一页内部逐步出现的讲解节奏

所以改页面时，不能只看视觉结构，还要看讲述顺序是否被 `data-f` 破坏。

### 3. 动画与 demo 依赖固定 DOM 钩子

`markup.ts` 里有很多元素不是纯展示，而是被脚本依赖：

#### `Agent / Prompt / Context`

依赖：

- `data-concept-demo`
- `data-step`
- `.prompt-goal`
- `.context-core`
- `.agent-progress-fill`

对应脚本：

- [`src/demos/concept-demos.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/concept-demos.ts)

#### `Tab → Agent`

依赖：

- `.evo-terminal-*`
- `.evo-suggestion`
- `.evo-cursor`

这部分主要是 CSS 驱动的终端动画。

#### `用 AI 做设计`

依赖：

- `#ai-iframe`
- `.taste-btn`

对应脚本：

- [`src/demos/ai-taste.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/demos/ai-taste.ts)

#### overlay 外链预览 / 新开页面

依赖：

- `.clickable[data-url]`
- `data-mobile="true"`
- 可选 `data-preview="overlay"`

对应脚本：

- [`src/overlay.ts`](/C:/Users/Haruta/Documents/code/Web/working-with-ai/src/overlay.ts)

当前逻辑是：

- 大多数外链默认新页面打开
- 只有显式要求 overlay 的内容才走 iframe 预览

## 当前文件里最关键的几页

如果后面还会继续根据讲稿调整，我认为下面几页最关键：

### `Tab → Agent`

它决定整场演讲的起始叙事方向。

### `Agent / Prompt / Context`

它是概念解释核心页，而且带动画，后续最容易继续迭代。

### `什么是 Skills?`

它承担术语解释职责，影响后续所有“方法论”相关理解。

### `我的 Workflow`

它是整套内容的实操高潮，必须和讲稿严格同步。

### `AI 这么强大，我们会不会失业？`

这是新的收尾章节页，决定整场分享最后的现实感和张力。

### `我的观点`

它是最终落点页，负责把前面的内容压缩成态度和结论。

## 修改这份文件时要注意什么

### 1. 改讲稿顺序时，优先改页面顺序，不要先改页内内容

如果只是结构调整，应该优先重排页面块，避免在同一轮里同时改顺序和文案，降低出错风险。

### 2. 不要随意打乱 `data-f`

这会直接破坏讲述节奏，甚至让一页的逻辑变得不连贯。

### 3. 不要只看 HTML 文案，忽视脚本依赖

带有 `id`、`data-step`、`data-concept-demo`、`data-url` 的元素，通常已经被 TS 模块依赖。

### 4. 注意 UTF-8 编码

`markup.ts` 中文很多，结构也长，一旦被错误编码污染，会直接出现整页乱码或模板字符串损坏。

### 5. 这份文件更像“演讲编排层”，不是普通 HTML 文件

它同时承载：

- 页面结构
- 演讲顺序
- 步进节奏
- demo 挂点

所以每次修改都应该从“内容编排”角度看，而不是只从“改一段 HTML”角度看。

## 一句话总结

`src/slides/markup.ts` 现在已经不只是页面模板文件，而是整场演讲的最终编排稿：它把讲稿结构、页面顺序、fragment 节奏和交互挂点统一收在同一个内容层里。
