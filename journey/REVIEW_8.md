# 第八轮修改意见

icon 问题：
TabNine logo: https://www.vsixgallery.com/extensions/tabnine-visual-studio/icon-1.173.1.png
Playwright logo: https://playwright.dev/img/playwright-logo.svg
Copilot 指的是 GitHub Copilot，你现在给的是 Windows Copilot 的 logo
Cursor, OpenCode, ChatGPT logo 是黑色的，你可以换成白色（我们的 slides 是黑色的底色）

首屏有 FOUC，感觉是样式加载慢了，能不能优化一下？或者至少加个 loading。

我们现在每一页都是直给，应该有一个按上下箭头的单页内部的 step by step 展示效果。

整体的文字、logo 等尺寸都可以再大一点吧，现在过于小了。
次级文字对比度也可以稍微高一点。

我加了一个 `agent-poll.png`，你可以读一下内容，斟酌一下加到哪里。Maybe 我的工具选择？

可以加一个 `CLI vs. MCP` 的讨论页面。
相对全面的分析可以share一个链接：https://chatgpt.com/share/69c60854-2b64-83aa-b91d-c4ceff5055c6
内容你可以参考 `mcp-vs-cli.md`，请选择一个最简单精炼的方式去呈现。
最后再强烈推荐 GitHub 的 `gh` CLI 工具。

CLI 对 agent 的相对友好体现在，它虽然不是一个 well design 的协议，但是已经有了一个半结构化的convention，比如 `--help` 之类的，其实类似于 Skill 的渐进披露。

---

## 从 ⇥ 到 Agent

可以先放截图，再一点点出来。

你的三个步骤分别叫 Copilot, Cursor, Agent 爆发，感觉不太对
直接就是 tab, tab tab, agent 会不会更好？

Cursor Glass 去掉吧，大家反正也不知道

"不到两个月后，tab 好像已经不是重点了" 这句话不对，我补了一张 `moments-2026.jpg` 的截图，你也可以加上，精心设计一下呈现方式。

## AI 编程的自动驾驶等级

这个文字描述还是太复杂，你是不是能再提炼一下，表达也一致一些。

这里可以感觉互动一下，问问大家觉得自己主要在哪里？

## 我的 工具选择

有人说，Codex 太慢了，但是我的核心观点是：

做对才是最大的快。

非 Coding / 创意 我其实也使用 Claude 的 Chatbot 的。

## 关于 skills

这里的外链为什么跳走了？

## Workflow:

要改成 progressive 的披露，需要主动交互再下一步。

journey 目录展示不对了，全在一行了。

外链怎么跳走了？

## Research 双模式

Context free 我不太用 Claude，去掉吧

## 一些个人 Prompt 经验

这个展示方式感觉还能优化。

## 不只是 Vibe Coding

TemPad Dev — Design to Code
这个的展示和讲解呢？

## 用 AI 做设计

AI 味这个第一版也要改成英语的。

我有一个思考，基于这些 skill 做出来的版式，会不会成为新的 AI 味？

## Google ↓95%

这个例子我感觉不太好，过于 technical 了

而且其实我想以自身出发，这是讲 AI 深入生活之中的切身体会。

我还有一个现在的体会是，会默认不信任“快”，“慢”反而让我更安心。这个你觉得适合在哪里加一页讲一下吗？

## 🎬 小游戏时间

这些例子感觉有点太简单了，可以来一点稍微近期一点的，中国观众熟悉的。可以是电影，也可以是电视剧。

揭晓答案折行怎么没有居中了，修复一下。

Oh, ChatGPT 不允许在 iframe 打开，那就做外链吧。然后同时给一个复制 prompt 的按钮。

## Q & A

Claude Code 没有用 logo
Vite 也没有用，其实应该是 VitePlus：https://viteplus.dev/icon.svg
CSS+TS，0框架 不用写了吧
