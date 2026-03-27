# 第二轮修改意见

## 自动驾驶等级

- 石器时代 -> 古法编程
- AI 写代码应该是 Codex, Claude Code
- L2 已经是 AI + 人 review 了，阶段是不是可以再设计一下
- 当前处于哪个阶段，应该不同的人有不同的感受、不同项目有不同的需求
- 不用展开 Cursor Glass，irrelevant

## Workflow

- 这是我现在正在实验的做法，在 AGENTS.md 要求 让 AI 把每一步都记录下来，输出 research.md, plan.md, implement.md, review.md 四个文档。
- 有一个例子 repo：Justineo/swrv-next，里面有一个 journey 目录。

## 怎么让 AI 理解一个项目？

- 其实就是如何让人理解。直接看代码相当于没有索引的第一次理解，learn from the raw data。
- design.md 作为一个持续更新的语义索引，也可以在 AGENTS.md 里要求在设计有变化或者新增的时候进行更新。
- 这里太杂乱了，需要简化，突出核心，重新思考可视化的方式。

## knowledge.jpeg

- 拖动模型大小的时候下面文字内容变化导致布局会闪烁
- tiny model 在这里是指什么？1% 是什么意思呢？mostly vibes 又是什么？
- 这一页的核心想表达什么？

## 翻译

- 我觉得这个说的有点牵强，为什么AI的本体是翻译？这是业界共识吗？
- 这一页的意图想说明什么？

## emoji 游戏

- prompt 可以写得严格一点，让用户每次猜一个电影，猜对了自动进入下一轮之类的。给助手提更多要求，输出的 emoji 也要更长一点，甚至可以表达某个特定情节。如果是电影桥段的话，难度会更高一点。

## query -> intent

- 你这个投影图生成得不好，你能不能用 D3 之类的绘制看看？

## Skill issue

- 表达还得推倒重来，不够有意思，也不够巧妙
- 可以介绍一些 skill, mcp, context, prompt 的关系
- 强控制 vs 第一性原理，怎么平衡？

## AI 味

- 缺少了单侧边框，少了点味
- 嵌入的页面滚动条样式没有适配暗色主题，而且最好要 scrollbar-width: thin
- 再基于 VoidZero 的设计风格，给出一版相同内容的去 AI 味的设计，来对比一下，两个可以搞一个切换

## token/logits/model

- 这三个概念的关系还没有讲清楚，感觉有点生硬
- 三大顶刊的翻译呢？我就是为的这盘醋包的饺子，你给搞没了

## Claude -> OpenClaw

- 推文内容是：

> 有多少人知道，Claude Code 这个🦀吉祥物叫 Claw’d？然后 Claude → Claw’d → Clawdbot → Moltbot → OpenClaw → {Anything}Claw
> 这就是一只🦀是怎么变成爆火的🦞的，源头其实源于 Claude 的法务 😅

## Coding agent is General-Purpose Agent

- 这个是我最核心的观点，请你不要去掉

## Q & A

策划 + 设计 + 实现 = 一次对话 这个是不对的，我们有多次review，让Claude Code多次修改。
