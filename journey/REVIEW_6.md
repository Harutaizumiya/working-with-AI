# 第六轮修改意见

## 从 ⇥ 到 Agent

tab complete 是 copilot，也不止一行
tabtab 是 cursor，特色是可以在多个插入点同时补全

到 Agent 以后，开始爆发，Claude Code, Codex, OpenCode, ...（可以把logo都放上去）
Cursor 也在近期上线了 Cursor Glass，感觉也可以放上去

朋友圈截图我已经放在 `public/moments-2025.jpg` 了。

另外我觉得我们切换过程其实可以灵活一点，我是想直接从一张朋友圈截图开始，再引出说 AI 进化速度太快了，这个过程中的经验从之前的经验来看也只是暂时的，所以 disclaimer：不保证 best practice，一切需要自己和 AI 磨合探索，找到符合自己的。

## AI 编程的自动驾驶等级

这里说到的工具能不能全部换成 app icon？你能找一下吗？
Read https://lobehub.com/icons/skill.md and follow the instructions to use @lobehub/icons

L0 古法编程，非遗传承
阶段的表达可以再精简一点，现在字太多了

我觉得其实是这样的：
L0 完全人工
L1 AI inline autocomplete (TabNine, Copilot早期)
L2 AI 代码片段生成, IDE chat panel (Copilot, Cursor)
-- 主要工具从 IDE -> agent 切换，范式更新 --
L3 Coding agent, no IDE，人 review (Claude Code, Codex, OpenCode, ...)
L4 Coding agent + AI review 完成单个项目
-- 人可以从研发环节解放（毕业了 😅） --
L5 AI 工程团队，完全自主开发

L3 开始瓶颈变成了 code review，信任还需要慢慢建立才能往 L4 发展

## 我的工具选择

工具可以给图标，或者logo，参考前面说的 lobehub icons
贴图：`public/codex-config.png`

skills 可以推荐一下 Vercel 的 `skills` npm package 和 skills.sh 目录。

其实可以加一页关于 Skill 的：

说一下我为什么不太用 skills：

- skills 是人们“自以为”的最佳实践，类似于围棋棋谱
- 但是最新的模型的进化速度惊人，我不确定我们以为的最佳实践是不是真的都有意义。不如按自己的偏好去 prompt AI。
- LLM 也会有自己的 AlphaZero 时刻，而且我觉得已经并不遥远

适合 skills 的场景：

- 让 AI 快速掌握特殊工具的使用方法（即使没有，agents 也可以用 Curl 等工具从文档中学习，skill 只是一个提炼出来的索引）
- 在自己不熟悉的领域，自己不容易辨别好坏，不容易通过 prompt 来指导 AI 的情况

Skill 只是对 pattern 的总结和压缩。

这里引入 knowledge.jpeg 是不是会更好？

## knowledge.jpeg

Hallucination 就是压缩产生的 artifact - 这句话过于晦涩了吧

## Workflow, Research 双模式, 一些个人 Prompt 经验, Coding with AI — 实战经验

这块的信息结构希望可以重新组织一下，让表达更流畅。

## Emoji 猜电影

这是一个彩蛋。可以放到最后。可以生成一个带 prompt 的 ChatGPT.com 链接吗？
prompt 要求应该让助手只允许用 emoji 输出，除非用户选择放弃当前的题目。然后应该每个电影的 emoji 要多一些，不然一下子提炼了核心的话有一点太简单了。

## 从 query 到 intent

这个“投影”的可视化没有了

## 不只是 Vibe Coding

这个是不是放在 vibe coding 相关的后面好一些？
把每一个都展开成一页，你自己选择可以扩充的内容，可以先做一些 research
用 AI 做设计也是这个“不止 vibe coding”的一部分吧？这里也可以提到吧

## 用 AI 做设计

我把除了 AI 味以外的部分都删了。请你重新创作三个版本，分别follow 3个skill来做。spawn 3 个 subagent 来分别实现这三个版本。每个版本都要有一个独立的、鲜明的风格，来对比一下 AI 味和去 AI 味的区别。

- OpenAI: `journey/frontend-skill.md`
- Claude: `journey/frontend-design.md`
- Taste skill: `journey/taste-skill.md`

如果 skill 要求参数的，你可以往风格化多变的方向去指导。注意要为3个subagent设定互相隔离的提示词，不要相互影响。内容本身还是和 ai-taste.html 一样。

## Coding Agents = General-Purpose Agents

这其实是 beyond vibe coding/work 的重要观点了。请你重新设计一下信息结构，来更好地表达这个观点。
我其实实际的案例有：

- 用Claude Code帮妻子refresh简历
- 用Codex整理相册
- 用Codex为女儿的足球赛写了一个赛历（还会自动生成 .ics 文件供订阅）https://panyi-2026.justineo.me/pepper 可以用一个模拟移动端的 iframe 来展示一下这个页面

## 生活中的 AI Moments

去掉，这个有点傻了

---

我希望这里面的外链都可以通过一个弹出的 iframe 来展示，而不是直接跳转到新的页面，这样可以让用户更好地沉浸在这个分享里，而不是被外部链接打断了体验。

另外里面提到的外部内容，都加上外链的跳转。

Q & A 之前还能加什么不？也请你考虑一下。

Q & A 可以直接跳到 chatgpt.com 的带 query 的链接吗？或者能在 iframe 打开的。
