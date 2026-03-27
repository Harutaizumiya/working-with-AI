# 第四轮修改意见

## AI 擅长什么？

这个感觉没有什么太大意义，就提一下翻译能力没劲，先隐藏掉吧

## 从 query 到 intent

不要自动旋转，可以手动拖动。现在有点看不清。
搜索语法语义细节上下文这些维度好像感觉也不太对，你帮我想一个更合适的可视化方案吧。
其实就是构建搜索词是基于搜索引擎倒排索引那一套机制构建的。语义的相似度也不见得就是用来实现意图的。

## AI 味

这个其实是“用 AI 做设计”的经验。我觉得 AI 味并不是难看，而是揉杂了平均设计以后的整体不适感。

去 AI 味的多做几版不同的，带一些不同的设计思路，分多个 subagent 单独实现一些新的版本，带上 REVIEW_3.md 里的 skill，然后每个需要有更加独立、opinionated 的风格。
预览右侧的说明去掉。

顶栏的 li 好像各个版本都没有做垂直居中，优化一下吧。

## Token · Model · Logits

我不是只让你隐藏顶刊，而是整个隐藏了

## Coding Agent 不只是写代码

最核心的观点你为什么没有写？

Coding agents = General-purpose agents，能做的不只是写代码，还能做设计、策划、review 等等。

---

我还能想到的一些 points：

- 我们应该声明：只是我自己的实践，no best practice
- 在 context-free 的上下文进行 research：
  - ChatGPT Deep research
  - 不带任何先入为主的 bias 去做 research - 更加第一性
  - 带着更直接没有枷锁的思路，输出调研报告，作为 agent 的知识库
- 在 context-rich 的上下文进行 research：
  - 更好地理解当前的设计决策和限制
  - 两者结合在一起，更好地补完思考空间，更好地进行设计决策
- 祖传的 prompt 技巧
  - 基于第一性原理思考
  - 从根源上解决问题，避免 ad-hoc 地进行 patch
  - 对我提供给你的思路保持中立
- 工作中非 vibe coding 的场景
  - 对于会议上需要探讨的问题，可以提前和 AI 讨论，把自己的思路整理清楚，结合自己的核心观点，让 AI 自由发挥创作帮助人理解的演示文稿、网页、slides 等等，来辅助会议的讨论和决策。
    - 例子：https://vibe-hand-off.vercel.app/
  - 辅助沟通理解
    - 例子：https://v0-plugin-form-optimization.vercel.app/
  - 辅助设计交互，和 designer 沟通
    - https://v0-kong-datakit-flow-editor.vercel.app/
- 我开发了一个 TemPad Dev 工具，帮助前端开发者更好地获取 Figma 设计中的上下文，提供了 skill 和 MCP 来直接进行 Design to code

你可以再梳理一下思路，看看顺序是否合理，应当加入哪些内容，能用上哪些有创意有趣的展示方式，甚至是可交互、多模态的。
我对 AI 的态度：多使用，对 AI 能干什么不能干什么，什么做得好什么做得不好有更完整的感受。对于 AI 擅长的工作：相信 AI。
