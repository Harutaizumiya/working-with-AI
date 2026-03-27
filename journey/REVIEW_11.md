# 第十一轮修改意见

整个页面的

## 从⇥到Agent

后一个图盖前一个盖得不够多，叠上去以后前一个图可以变淡一点。

## AI 编程的自动驾驶等级

"← 大多数人在这里" 去掉

auto-level-divider 不要和 auto-level 一起出来，分步

L5 为什么这么浅？而且最好最开始不显示。

## Knowledge.jpeg

拖动数值的时候的抖动还是没有解决。感觉是 quality 的位数变化引起的。

能不能换一个更高清的图？这样效果会更明显。

这一页出现在这里

## 我的 工具选择

图溢出了，你确定现在的展现流程和布局是正确的吗？标题都看不见了。

而且你把信息结构也改错了，我是 coding 用 Codex，其他情况还可能会用 Claude 的对话助手的。
也没有写我不太用 Skills。

然后靠谱才是真的快这个观点没有表达出来。

## 关于 Skills

棋谱 emoji 不对，应该是围棋。
没有写“什么时候 skill 可能不太有用”，或者有什么 downside。

## CLI vs MCP

你看一下 `mcp-vs-cli.md`，你总结得好像也不是很好，我觉得 CLI 和 MCP 对 agent 来说都是很有用的。

推荐 `gh` 可以 highlight 一下。

## Workflow

链接是：https://github.com/Justineo/swrv-next/tree/main/journey

journey/ 目录结构的例子和上面的其实对不太上，我其实每个都是目录

workflow 本身可以一步一步展示吗？包括最后的那个 loop

另外，OpenAI 有一篇：Run long horizon tasks with Codex
里面提到：

```
In Codex, the loop is roughly:

Plan
Edit code
Run tools (tests/build/lint)
Observe results
Repair failures
Update docs/status
Repeat
```

其实我理解我们的流程其实是这个流程之上的更大的 loop，流程也是类似的，而且是跨越 turn，并且可以持久化，也可以 cross session的。

也可以提一提。

## Research 双模式

新的结构不错，不过"先 context-free 打开视野，再 context-rich 落地方案"稍微有点黑话的味道

## 一些个人 Prompt 经验

Context > Prompt 这个是啥，我其实是分享的prompt原话

还有什么常见的好的 prompt 吗？我感觉我有点遗漏。

## 不只是 Vibe Coding

这个你觉得还可以有单独一页吗？直接跳到展开的议题是不是太突兀了？

## 会议讨论准备

例子其实是关于“能不能用 vibe coded 的原型作为设计交付物”的话题的，可能也要提一提

这个文档我是 deep research 配合我自己的 key observation 和 insight 整理成文档，然后丢给 Claude Code 制作的，要求它尽量使用直观的可视化方法来呈现。

slides 本身就先不提吧

## 辅助沟通理解

「给你看」比「给你说」高效 10 倍
一个可交互的原型胜过千字技术文档

这段文案有点过于互联网黑话味道，可以平实一点吧

## 设计交互协作

这个其实是我作为开发者给出原型，让设计师看
因为我们开发的是一个给developer使用的工具，有些场景开发者会比设计师更理解需求
所以你的描述有点不对。

这个例子放到第一个。

## TemPad Dev

这个感觉和实际工作结合点还不够，先隐藏掉。

---

上面几个案例我觉得都应该把例子放在最后，描述或者观点写在前面，字不要那么小。各自再优化一下。

---

## 习惯在变

标题：这个有点突兀，就是自己感觉自己从习惯和心态上的变化

AI 时代，我的肌肉记忆正在重建 - 这个味儿太大了，换成低调一点的描述。

⚡ 追求「快」→🎯 追求「靠谱」- 这个感觉也不对，之前也不能说完全在追求快吧

🧑‍💻 独立完成→👀 协同 + Review 这个例子感觉不对吧

这一页能不能和不只是 vibe coding 一样作为一页引导？

## 从 Query 到 Intent

这个本质是信息获取方式，表达方式变成从 query 到 intent 了。感觉这个标题不太对。

可以再换一个例子吗？搜索引擎通常还需要多次查询，换不同 query 查询。

LLM 的查询除了直接从预训练的知识中激活，Web search 工具本质上就是帮我们完成之前人肉做的搜索，而且效率高多了。

## 默认不信任 「快」

一次搜索引擎 query 可能远远更快，但是结合来看得到结果的速度却是后者更快。

## 工作之外

这个其实讲的是 AI 在生活中的应用。这个标题够友好够准确吗？

"Coding agent 就是通用 agent"，把这个观点着重一下。

"Code 是 agent 与世界交互的最高效接口" 这个说法存疑，我理解 coding 只是一个规模化的工具。而且你说的和世界交互，这个太宽泛了，基于 LLM 的 AI 还是有不少局限的。但是现阶段来看，coding agent 本质上是一个解决问题的方法论的实现，特别擅长写代码。但是对数字世界的其他场景，它依然有广阔的用武之地。

例子也可以一个一个来展示。整理相册可以放第一个。

## 小游戏

最好是近20年内的电影。你还给我 Titanic 干嘛？
请把所有内置的例子都优化一下。

prompt 改成猜影视作品。要求选择跳跃一点。

## Q & A

工具可以放大一点。

Coding Agent = General-Purpose Agent 去掉
