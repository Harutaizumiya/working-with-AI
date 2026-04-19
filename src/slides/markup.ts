export const slidesMarkup = String.raw`
<!-- ============================== 0. Title ============================== -->
      <section class="slide slide-title">
        <div class="bg-grid"></div>
        <div class="floating-symbols">
          <span style="left:10%;animation-delay:0s">🤖</span>
          <span style="left:30%;animation-delay:4s">💻</span>
          <span style="left:50%;animation-delay:8s">🧠</span>
          <span style="left:70%;animation-delay:2s">⚡</span>
          <span style="left:85%;animation-delay:6s">🦀</span>
        </div>
        <div class="text-center" style="position:relative;z-index:1">
          <div class="title-mega"><div class="title-carousel"><div class="title-carousel-track"><div class="gradient-text">Working</div><div class="gradient-text">Collaborating</div><div class="gradient-text">Playing</div><div class="gradient-text">Creating</div><div class="gradient-text">Thinking</div><div class="gradient-text">Working</div></div></div><span class="gradient-text">with AI</span></div>
          <div class="subtitle cn">只是我自己的实践，no best practice</div>
          <div class="cn dim mt-2" style="font-size:0.85rem">AI 进化速度太快，所有经验都只是暂时的<br>一切需要自己和 AI 磨合探索</div>
          <div class="meta-badge">← → 翻页 · ↑ ↓ 步进 · ESC 总览 &nbsp;|&nbsp; 这个 slides 也是 AI 做的</div>
        </div>
      </section>

      <!-- ============================== 1. Tab → Agent ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn">从 <span class="mono"><span class="key-cap">⇥</span></span> 到 <span class="gradient-text">Agent</span></div>

          <!-- Screenshots centered, second overlays first with fade -->
          <!-- <div class="moments-compare mt-2">
            <div class="moment-card" data-f="1">
              <img src="/moments-2025.jpg" alt="2025: 祝大家一路 tab 到底！" class="moments-img" />
              <div class="dim cn" style="font-size:.8rem">2025.01.28</div>
            </div>
            <div class="moment-card moment-overlay" data-f="2">
              <img src="/moments-2026.jpg" alt="2026: tab 到底还是过于保守了" class="moments-img" />
              <div class="dim cn" style="font-size:.8rem">2026.02.17</div>
            </div>
          </div> -->

          <!-- Evolution steps one by one -->
          <div class="evolution-steps mt-2">
            <div class="evo-step" data-f="3">
              <div class="evo-content">
                <div class="evo-title"><span class="key-cap small">⇥</span> Tab</div>
                <div class="evo-desc cn">行内自动补全</div>
                <div class="evo-terminal evo-terminal-tab" aria-hidden="true">
                  <div class="evo-terminal-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="evo-terminal-screen mono">
                    <div class="evo-terminal-line">
                      <span class="evo-prompt">$</span>
                      <span class="evo-code">const title = </span>
                      <span class="evo-suggestion">"Working with AI"</span>
                    </div>
                    <div class="evo-terminal-line evo-terminal-line-dim">
                      <span class="evo-prompt">></span>
                      <span class="evo-code">press tab to accept</span>
                    </div>
                  </div>
                </div>
                <div class="evo-tools"><span class="tool-pill"><img src="/icons/tabnine.png" class="tool-icon" alt="">TabNine</span> <span class="tool-pill"><img src="/icons/githubcopilot.svg" class="tool-icon invert" alt="">Copilot</span></div>
              </div>
            </div>
            <div class="evo-arrow" data-f="4">→</div>
            <div class="evo-step" data-f="4">
              <div class="evo-content">
                <div class="evo-title"><span class="key-cap small">⇥</span><span class="key-cap small">⇥</span> Tab Tab</div>
                <div class="evo-desc cn">多插入点同时补全</div>
                <div class="evo-terminal evo-terminal-multi" aria-hidden="true">
                  <div class="evo-terminal-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="evo-terminal-screen mono">
                    <div class="evo-terminal-line">
                      <span class="evo-cursor"></span>
                      <span class="evo-code">title: </span>
                      <span class="evo-suggestion">"Prompt"</span>
                    </div>
                    <div class="evo-terminal-line">
                      <span class="evo-cursor"></span>
                      <span class="evo-code">title: </span>
                      <span class="evo-suggestion">"Context"</span>
                    </div>
                    <div class="evo-terminal-line">
                      <span class="evo-cursor"></span>
                      <span class="evo-code">title: </span>
                      <span class="evo-suggestion">"Agent"</span>
                    </div>
                  </div>
                </div>
                <div class="evo-tools"><span class="tool-pill"><img src="/icons/cursor.svg" class="tool-icon invert" alt="">Cursor</span></div>
              </div>
            </div>
            <div class="evo-arrow" data-f="5">→</div>
            <div class="evo-step evo-current" data-f="5">
              <div class="evo-content">
                <div class="evo-title">🤖 Agent</div>
                <div class="evo-desc cn">你说目的地，AI 开车</div>
                <div class="evo-terminal evo-terminal-agent" aria-hidden="true">
                  <div class="evo-terminal-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="evo-terminal-screen mono">
                    <div class="evo-terminal-line" data-agent-step="1">
                      <span class="evo-prompt">$</span>
                      <span class="evo-code">plan homepage refactor</span>
                    </div>
                    <div class="evo-terminal-line" data-agent-step="2">
                      <span class="evo-prompt">></span>
                      <span class="evo-code">read slides/markup.ts</span>
                    </div>
                    <div class="evo-terminal-line" data-agent-step="3">
                      <span class="evo-prompt">></span>
                      <span class="evo-code">update styles and demo</span>
                    </div>
                    <div class="evo-terminal-line" data-agent-step="4">
                      <span class="evo-prompt">></span>
                      <span class="evo-code evo-success">tsc --noEmit ✓</span>
                    </div>
                  </div>
                </div>
                <div class="evo-tools">
                  <span class="tool-pill"><img src="/icons/claudecode-color.svg" class="tool-icon" alt="">Claude Code</span>
                  <span class="tool-pill"><img src="/icons/codex-color.svg" class="tool-icon" alt="">Codex</span>
                  <span class="tool-pill"><img src="/icons/opencode.svg" class="tool-icon invert" alt="">OpenCode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================== 2. 自动驾驶等级 ============================== -->
      <section class="slide">
        <div class="flex-col gap-2" style="align-items:center">
          <div class="title-large cn">AI 编程的<span class="gradient-text">自动驾驶等级</span></div>

          <div class="auto-levels mt-2">
            <div class="auto-level" data-f="1"><div class="level-badge" style="color:#555">L0</div><div class="cn">完全人工</div><div class="level-tag dim">古法编程，非遗传承</div></div>
            <div class="auto-level" data-f="2"><div class="level-badge" style="color:var(--accent3)">L1</div><div class="cn">行内自动补全</div><div class="level-tag"><img src="/icons/tabnine.png" class="tool-icon" alt="">TabNine · <img src="/icons/githubcopilot.svg" class="tool-icon invert" alt="">Copilot</div></div>
            <div class="auto-level" data-f="3"><div class="level-badge" style="color:var(--accent)">L2</div><div class="cn">代码片段生成 · IDE chat</div><div class="level-tag"><img src="/icons/githubcopilot.svg" class="tool-icon invert" alt="">Copilot · <img src="/icons/cursor.svg" class="tool-icon invert" alt="">Cursor</div></div>
            <div class="auto-level-divider cn" data-f="4">Byebye IDE 👋</div>
            <div class="auto-level" data-f="5"><div class="level-badge" style="color:var(--accent2)">L3</div><div class="cn">Coding agent，人 review</div><div class="level-tag"><img src="/icons/claudecode-color.svg" class="tool-icon" alt="">Claude Code · <img src="/icons/codex-color.svg" class="tool-icon" alt="">Codex · <img src="/icons/cursor.svg" class="tool-icon invert" alt="">Cursor · <img src="/icons/opencode.svg" class="tool-icon invert" alt="">OpenCode</div></div>
            <div class="auto-level" data-f="6"><div class="level-badge" style="color:var(--accent2)">L4</div><div class="cn">Agent + AI review 完成项目</div><div class="level-tag dim"></div></div>
            <div class="auto-level-divider cn dim" data-f="7">Byebye Human 😅</div>
            <div class="auto-level" data-f="8"><div class="level-badge" style="color:var(--accent2)">L5</div><div class="cn">AI 工程团队，完全自主</div><div class="level-tag dim"></div></div>
          </div>

          <div class="card mt-2 cn text-center" data-f="9" style="max-width:650px;font-size:0.95rem">
            L3 开始瓶颈变成 <span class="accent2">code review</span><br>
            <span class="dim">信任还需要慢慢建立才能往 L4 发展</span>
          </div>
        </div>
      </section>

      <!-- ============================== Agent / Prompt / Context ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn"><span class="gradient-text">Agent</span>、Prompt、Context</div>

          <div class="concept-flow mt-2">
            <div class="concept-card" data-f="1" data-concept-demo="prompt">
              <div class="concept-kicker mono">Prompt</div>
              <div class="concept-title cn">告诉 AI 现在要做什么</div>
              <div class="concept-body cn">
                目标、约束、验收标准、语气偏好
              </div>
              <div class="concept-tags">
                <span class="tool-pill accent-pill">Goal</span>
                <span class="tool-pill accent-pill">Constraint</span>
                <span class="tool-pill accent-pill">Output</span>
              </div>
              <div class="concept-demo concept-demo-prompt">
                <div class="concept-demo-label mono">dialog shaping</div>
                <div class="prompt-chat">
                    <div class="prompt-bubble prompt-bubble-user cn" data-step="1">做一个 landing page</div>
                    <div class="prompt-bubble prompt-bubble-agent is-thinking cn" data-step="2">我先给一个通用版本。</div>
                    <div class="prompt-bubble prompt-bubble-user cn" data-step="3">给 developer 用</div>
                    <div class="prompt-bubble prompt-bubble-agent is-thinking cn" data-step="4">我会偏技术风，但目标还是有点散。</div>
                    <div class="prompt-bubble prompt-bubble-user cn" data-step="5">强调信息层级</div>
                    <div class="prompt-bubble prompt-bubble-agent is-thinking cn" data-step="6">我开始收敛了，可以先确定版式结构。</div>
                    <div class="prompt-bubble prompt-bubble-user prompt-bubble-user-final cn" data-step="7">输出 React + CSS，首屏突出 CTA</div>
                    <div class="prompt-bubble prompt-bubble-agent prompt-bubble-agent-final cn" data-step="8">目标明确，开始生成可直接落地的结果。</div>
                </div>
                <div class="prompt-goal cn">
                  <div class="prompt-goal-dot"></div>
                  <div class="prompt-goal-text">目标达成</div>
                </div>
              </div>
            </div>

            <div class="concept-arrow" data-f="3">+</div>

            <div class="concept-card" data-f="2" data-concept-demo="context">
              <div class="concept-kicker mono">Context</div>
              <div class="concept-title cn">告诉 AI 应该基于什么判断</div>
              <div class="concept-body cn">
                对话历史、代码库、文档、截图、环境状态
              </div>
              <div class="concept-tags">
                <span class="tool-pill">History</span>
                <span class="tool-pill">Codebase</span>
                <span class="tool-pill">Docs</span>
              </div>
              <div class="concept-demo concept-demo-context">
                <div class="concept-demo-label mono">evidence loading</div>
                <div class="context-stack">
                  <div class="context-pill" data-step="1">history</div>
                  <div class="context-pill" data-step="2">codebase</div>
                  <div class="context-pill" data-step="3">docs</div>
                  <div class="context-pill" data-step="4">runtime</div>
                </div>
                <div class="context-core">
                  <div class="context-orb"></div>
                  <div class="context-beam" data-step="2"></div>
                </div>
                <div class="context-answer cn">
                  <div class="context-answer-line" data-step="1">泛化回答</div>
                  <div class="context-answer-line" data-step="3">结合代码结构判断</div>
                  <div class="context-answer-line" data-step="4">给出针对当前环境的建议</div>
                </div>
              </div>
            </div>

            <div class="concept-arrow accent" data-f="3">→</div>

            <div class="concept-card concept-card-agent" data-f="3" data-concept-demo="agent">
              <div class="concept-kicker mono">Agent</div>
              <div class="concept-title cn">自己拆解、行动、验证、继续推进</div>
              <div class="concept-body cn">
                不只是回答一句话，而是围绕目标持续工作直到完成
              </div>
              <div class="concept-tags">
                <span class="tool-pill">Plan</span>
                <span class="tool-pill">Act</span>
                <span class="tool-pill">Review</span>
              </div>
              <div class="concept-demo concept-demo-agent">
                <div class="concept-demo-label mono">execution loop</div>
                <div class="agent-loop">
                  <div class="agent-node" data-step="1">Plan</div>
                  <div class="agent-node" data-step="2">Act</div>
                  <div class="agent-node" data-step="3">Check</div>
                  <div class="agent-node" data-step="4">Continue</div>
                </div>
                <div class="agent-progress">
                  <div class="agent-progress-fill"></div>
                </div>
                <div class="agent-status cn">
                  <span class="agent-status-line" data-step="1">拆任务</span>
                  <span class="agent-status-line" data-step="2">执行</span>
                  <span class="agent-status-line" data-step="3">验证</span>
                  <span class="agent-status-line" data-step="4">直到完成</span>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-summary card cn text-center" data-f="4" style="max-width:760px;font-size:.95rem">
            <span class="accent">Prompt</span> 决定方向，
            <span class="accent3">Context</span> 决定判断质量，
            <span class="accent2">Agent</span> 决定能不能把事情真正做完。
          </div>

          <div class="cn dim text-center" data-f="5" style="max-width:700px;font-size:.84rem">
            同一个模型，换一份 prompt 或 context，表现就可能完全不同。<br>
            真正稳定的体验，来自三者一起设计。
          </div>
        </div>
      </section>

      <!-- ============================== 3. knowledge.jpeg ============================== -->
      <!-- <section class="slide">
        <div class="text-center flex-col gap-3" style="align-items:center">
          <div class="file-name">knowledge.jpeg</div>

          <div class="subtitle cn" data-f="1" style="max-width:650px">
            LLM 是对人类知识的一种<span class="accent2">有损压缩</span><br>
            模型越小，丢失越多 — 你看到的「幻觉」其实是压缩损失
          </div>

          <div class="compression-levels mt-3" data-f="2">
            <div class="comp-row"><span class="comp-format">RAW</span><div class="comp-bar" style="width:100%;background:var(--accent3)"></div><span class="comp-desc cn">人脑 / 全部知识</span></div>
            <div class="comp-row"><span class="comp-format">PNG</span><div class="comp-bar" style="width:70%;background:var(--accent)"></div><span class="comp-desc cn">Wikipedia · 教科书 · 文档</span></div>
            <div class="comp-row current"><span class="comp-format">JPEG</span><div class="comp-bar" style="width:40%;background:var(--accent2)"></div><span class="comp-desc cn">LLM — 实用，但有损失</span></div>
          </div>

          <div class="jpeg-demo-overlay" data-f="3">
            <div class="jpeg-demo">
              <canvas id="jpeg-canvas"></canvas>
              <div class="jpeg-slider-wrap">
                <div class="mono dim" style="font-size:0.8rem">拖动 → 模拟不同模型的「压缩率」</div>
                <input type="range" id="jpeg-slider" min="1" max="100" value="50">
                <div id="jpeg-quality-label" class="mono accent jpeg-label-fixed">Quality:&nbsp;50% — 🧠 Claude-class</div>
              </div>
            </div>
            <div class="cn dim text-center mt-2" style="max-width:500px;font-size:0.88rem">
              幻觉不是 bug — 是压缩率的代价<br>
              <span class="accent">模型越大，精度越高</span>
            </div>
          </div>
        </div>
      </section> -->

      <!-- ============================== 8. Research 双模式 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn">Research <span class="gradient-text">双模式</span></div>

          <div class="research-modes mt-2">
            <div class="research-mode-card" data-f="1">
              <div class="research-mode-icons">
                <img src="/icons/openai.svg" class="research-icon invert" alt="">
                <img src="/icons/gemini-ai.svg" class="research-icon" alt="">
              </div>  
              <div class="research-mode-label accent">Context-free</div>
              <div class="cn" style="font-size:.95rem">
                不先入为主地思考<br>
                基于第一性原理调研
              </div>
              <div class="cn dim" style="font-size:.8rem">ChatGPT Deep Research</div>
            </div>

            <div class="research-mode-arrow" data-f="2">+</div>

            <div class="research-mode-card" data-f="2">
              <div class="research-mode-icons">
                
                <img src="/icons/codex-color.svg" class="research-icon" alt="">
              </div>
              <div class="research-mode-label accent2">Context-rich</div>
              <div class="cn" style="font-size:.95rem">
                理解当前设计决策和限制<br>
                在现有架构内寻找最佳方案
              </div>
              <div class="cn dim" style="font-size:.8rem">Claude Code · Codex</div>
            </div>
          </div>

          <div class="card mt-2 cn text-center" data-f="3" style="max-width:650px;font-size:.9rem">
            先<span class="accent">不带预设地调研</span>，再<span class="accent2">结合项目上下文落地</span><br>
            <span class="dim" style="font-size:.82rem">两者结合 → 补完思考空间 → 更好的设计决策</span>
          </div>
        </div>
      </section>

      <!-- ============================== 9. Prompt 经验 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn">一些个人 <span class="gradient-text">Prompt 经验</span></div>

          <div class="prompt-cards mt-2">
            <div class="prompt-card" data-f="1">
              <div class="prompt-num">01</div>
              <div class="prompt-body cn">
                <strong style="font-size:1.05rem">先定义问题本身</strong><br>
                <span class="dim">明确目标，找出真正要解决的矛盾。</span>
              </div>
            </div>
            <div class="prompt-card" data-f="2">
              <div class="prompt-num">02</div>
              <div class="prompt-body cn">
                <strong style="font-size:1.05rem">发散性思考</strong><br>
                <span class="dim">不要局限于已知的解决方案，尝试从不同角度和层面思考问题。</span>
              </div>
            </div>
            <div class="prompt-card" data-f="3">
              <div class="prompt-num">03</div>
              <div class="prompt-body cn">
                <strong style="font-size:1.05rem">主动校验我的假设</strong><br>
                <span class="dim">把我的描述视为待验证信息。发现更优路径、错误前提或遗漏风险时，让AI直接提出修正建议。</span>
              </div>
            </div>
            <div class="prompt-card" data-f="4">
              <div class="prompt-num">04</div>
              <div class="prompt-body cn">
                <strong style="font-size:1.05rem">写出计划书再动手</strong><br>
                <span class="dim">扮演“项目经理”角色，先制定执行计划，审核通过后再开始实施。</span>
              </div>
            </div>
            <div class="prompt-card" data-f="5">
              <div class="prompt-num">05</div>
              <div class="prompt-body cn">
                <strong style="font-size:1.05rem">写结构文档</strong><br>
                <span class="dim">每次完成阶段性任务后，生成项目结构文档，方便后续维护和理解。</span>
              </div>
            </div>
          </div>

          <div class="cn dim text-center mt-1" data-f="6" style="font-size:.85rem">
            多使用，对 AI 能干什么不能干什么有完整的感受<br>
            <span class="accent">对于 AI 擅长的 → 相信 AI</span>
          </div>
          <div class="showcase-card clickable mt-2" data-f="7" data-url="https://www.doubao.com/chat/38420959310461442">
            <div class="showcase-label mono dim">der包</div>
            <div class="showcase-desc cn">点击预览 ↗</div>
          </div>
        </div>
      </section>

      <!-- ============================== 5. Skills ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn">什么是 <span class="gradient-text">Skills?</span></div>

          <div class="skills-explain mt-2">
            <div class="skills-main card" data-f="1">
              <div class="skills-kicker mono">Definition</div>
              <div class="cn" style="font-size:1.05rem">
                Skill 本质上是给 agent 的一份<span class="accent">本地说明书</span>
              </div>
              <div class="cn dim mt-1" style="font-size:.86rem">
                用自然语言写清楚目标、流程、判断标准、输入输出和注意事项，
                让 agent 在处理某类任务时先按这份说明来做。
              </div>

              <div class="skill-flow mt-2">
                <div class="skill-flow-node">任务</div>
                <div class="skill-flow-arrow">→</div>
                <div class="skill-flow-node accent-border">读取 Skill</div>
                <div class="skill-flow-arrow">→</div>
                <div class="skill-flow-node">按规则执行</div>
              </div>
            </div>

            <div class="skills-grid">
              <div class="skills-side card cn" data-f="2">
                <div class="skills-kicker mono">Why</div>
                <div class="skills-side-title">为什么需要它？</div>
                <div class="dim" style="font-size:.82rem">
                  把团队经验、领域知识、质量标准沉淀成文本，
                  不用重新训练模型，也不用每次手写一大段 prompt。
                </div>
              </div>

              <div class="skills-side card cn" data-f="3">
                <div class="skills-kicker mono">Boundary</div>
                <div class="skills-side-title">它不是什么？</div>
                <div class="dim" style="font-size:.82rem">
                  Skill 不负责真正执行外部操作。
                  它更像“怎么做”的规则；工具或 MCP 才是“去做”的接口。
                </div>
              </div>
            </div>
          </div>

          <div class="skills-example card" data-f="4">
            <div class="skills-kicker mono">Example</div>
            <div class="skills-example-grid">
              <div class="skills-file mono">
                <div class="skills-file-line"><span class="accent3">SKILL.md</span></div>
                <div class="skills-file-line">goal: review PR comments</div>
                <div class="skills-file-line">steps:</div>
                <div class="skills-file-line">- read unresolved threads</div>
                <div class="skills-file-line">- group actionable items</div>
                <div class="skills-file-line">- patch code before replying</div>
              </div>
              <div class="skills-example-copy cn">
                <div class="skills-side-title">典型内容</div>
                <div class="dim" style="font-size:.82rem">
                  任务目标、前置条件、推荐步骤、决策标准、输出格式、常见问题。
                </div>
                <div class="skills-tags mt-1">
                  <span class="tool-pill">Goal</span>
                  <span class="tool-pill">Steps</span>
                  <span class="tool-pill">Criteria</span>
                  <span class="tool-pill">Examples</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card cn text-center" data-f="5" style="max-width:700px;font-size:.9rem">
            <span class="accent">Skill</span> 的作用是“遇到这类任务，应该怎么做”，
             相当于预编好的prompt<br>
            <span class="dim" style="font-size:.82rem">节省自己写prompt的时间</span>
          </div>
        </div>
      </section>

      <!-- ============================== 4. 工具选择 ============================== -->
      <section class="slide">
        <div class="flex-col gap-2" style="align-items:center">
          <div class="title-large cn">我的 <span class="gradient-text">工具选择</span></div>

          <div class="tool-row mt-2">
             <div class="tool-row-card" data-f="1">
              <div class="tool-row-icon"><img src="/icons/openai.svg" style="width:32px;height:32px" class="invert" alt=""></div>
              <div class="cn"><strong>ChatGPT</strong></div>
              <div class="cn dim" style="font-size:.82rem">Research</div>
            </div>
            <div class="tool-row-card" data-f="2">
              <div class="tool-row-icon"><img src="/icons/gemini-ai.svg" style="width:32px;height:32px" alt=""></div>
              <div class="cn"><strong>Gemini</strong></div>
              <div class="cn dim" style="font-size:.82rem">创意工作</div>
            </div>
            <div class="tool-row-card" data-f="3">
              <div class="tool-row-icon"><img src="/icons/codex-color.svg" style="width:32px;height:32px" alt=""></div>
              <div class="cn"><strong>Codex</strong></div>
              <div class="cn dim" style="font-size:.82rem">写代码</div>
            </div>
            <div class="tool-row-card" data-f="4">
              <div class="tool-row-icon"><img src="/icons/playwright.svg" style="width:32px;height:32px" alt=""></div>
              <div class="cn"><strong>Playwright</strong></div>
              <div class="cn dim" style="font-size:.82rem">MCP</div>
            </div>
          </div>

          <!-- <div class="mt-2" data-f="5">
            <img src="/codex-config.png" alt="Codex config" class="config-img" style="max-width:500px" />
          </div>

          <div class="mt-1" data-f="6">
            <img src="/agent-poll.png" alt="Agent poll" class="config-img" style="max-width:400px" />
          </div>

          <div class="card mt-1 cn text-center" data-f="7" style="max-width:500px;font-size:1rem">
            有人说 Codex 太慢了<br>
            <strong class="accent" style="font-size:1.3rem">靠谱才是真的快</strong>
          </div> -->
        </div>
      </section>

      <!-- ============================== 7. Workflow ============================== -->
      <section class="slide">
        <div class="flex-col gap-2" style="align-items:center">
          <div class="title-large cn">我的 <span class="gradient-text">Workflow</span></div>

          <div class="workflow-board mt-2">
            <div class="workflow-row workflow-row-start" data-f="1">
              <div class="workflow-node"><span class="workflow-node-code mono">01</span><span class="cn">💡 发现需求</span></div>
              <div class="workflow-link">→</div>
              <div class="workflow-node workflow-node-wide workflow-node-accent"><span class="workflow-node-code mono">02</span><span class="cn">🤖 GPT 聊天写计划</span></div>
              <div class="workflow-link">→</div>
              <div class="workflow-node workflow-node-wide workflow-node-accent"><span class="workflow-node-code mono">03</span><span class="cn">🎨 Stitch 绘制 demo 图</span></div>
              <div class="workflow-link">→</div>
              <div class="workflow-node workflow-node-wide workflow-node-accent"><span class="workflow-node-code mono">04</span><span class="cn">💻 Google AI Studio<br>输出原始代码</span></div>
            </div>

            <div class="workflow-drop workflow-drop-right" data-f="2">↓</div>

            <div class="workflow-row workflow-row-reverse" data-f="2">
              <div class="workflow-node workflow-node-finish"><span class="workflow-node-code mono">08</span><span class="cn">✅ 最终审核代码提交</span></div>
              <div class="workflow-link">←</div>
              <div class="workflow-node workflow-node-wide workflow-node-accent"><span class="workflow-node-code mono">07</span><span class="cn">🔁 根据实际效果不断迭代</span></div>
              <div class="workflow-link">←</div>
              <div class="workflow-node workflow-node-wide workflow-node-accent"><span class="workflow-node-code mono">06</span><span class="cn">📝 上下文中注入计划书</span></div>
              <div class="workflow-link">←</div>
              <div class="workflow-node workflow-node-accent"><span class="workflow-node-code mono">05</span><span class="cn">🔧 Codex 初始化项目</span></div>
            </div>
          </div>

          <div class="card cn text-center" data-f="3" style="max-width:760px;font-size:0.88rem">
            前四步偏向 <span class="accent">想法成型 + 快速出雏形</span>，
            后四步交给 <span class="accent2">Codex + 人</span> 一起把 demo 收敛成可交付代码。
          </div>
        </div>
      </section>

      <!-- ============================== 10. 不只是 Vibe Coding (intro) ============================== -->
      <section class="slide slide-title">
        <div class="bg-grid"></div>
        <div class="text-center" style="position:relative;z-index:1">
          <div class="title-mega cn" style="font-size:clamp(2.5rem,6vw,4.5rem)">不只是<br><span class="gradient-text">Vibe Coding</span></div>
          <div class="subtitle cn" data-f="1">AI 不只能写代码 — 它能帮你沟通、协作、探索想法</div>
        </div>
      </section>

      <!-- ============================== 11. 不只是 Vibe Coding: 设计协作 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="section-badge cn">不只是 Vibe Coding</div>
          <div class="title-large cn">人人都能是<span class="gradient-text">设计师</span></div>

          <div class="cn" data-f="1" style="max-width:550px;font-size:.95rem;text-align:center">
            我有个很棒的想法，但是我没学过设计<br>
            让<strong class="accent">AI</strong>帮助你把想法视觉化
          </div>

          <div class="cn dim" data-f="2" style="max-width:500px;font-size:.88rem;text-align:center">
            开发者用 AI 快速出原型 → 迭代<br>
            独立开发者不再受限于设计能力，可以专注于实现想法本身
          </div>

          <div class="showcase-card clickable mt-2" data-f="3" data-url="https://www.doubao.com/code/chat/">
            <div class="showcase-label mono dim">der包</div>
            <div class="showcase-desc cn">点击预览 ↗</div>
          </div>
        </div>
      </section>

      <!-- ============================== 13. 不只是 Vibe Coding: 辅助沟通 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="section-badge cn">不只是 Vibe Coding</div>
          <div class="title-large cn">辅助<span class="gradient-text">代码理解</span></div>

          <div class="cn" data-f="1" style="max-width:550px;font-size:.95rem;text-align:center">
            看到一个非常有意思的开源项目，但是不知从何处下手<br>
            <strong class="accent">AI分析结构，总结项目</strong>
          </div>

          <div class="cn dim" data-f="2" style="max-width:500px;font-size:.88rem;text-align:center">
            用 AI 分析项目结构<br>
            标记重点内容，快速掌握结构，减少阅读成本
          </div>
        </div>
      </section>

      <!-- ============================== 14. 用 AI 做设计 ============================== -->
      <section class="slide">
        <div class="flex-col gap-2" style="align-items:center;width:100%">
          <div class="title-large cn">用 AI 做设计</div>
          <div class="subtitle cn" data-f="1">AI 味的本质 = <span class="accent2">平均设计</span>：什么都有，但缺少取舍和个性</div>

          <div class="ai-taste-demo mt-2" data-f="2">
            <div class="ai-taste-frame">
              <iframe id="ai-iframe" src="/ai-taste.html" class="ai-taste-iframe" title="AI taste demo"></iframe>
              <div class="ai-taste-toggle interactive">
                <button class="taste-btn active" data-src="/ai-taste.html">Claude Code</button>
                <button class="taste-btn" data-src="/no-ai-taste-2.html">OpenAI skill</button>
                <button class="taste-btn" data-src="/no-ai-taste-3.html">Anthropic skill</button>
                <button class="taste-btn" data-src="/no-ai-taste-4.html">Taste skill</button>
              </div>
            </div>
          </div>

          <div class="cn dim text-center mt-1" data-f="3" style="max-width:600px;font-size:.85rem">
            用 Skill 能去除 AI 味 — 但基于 Skill 做出来的版式<br>
            <span class="accent">会不会成为新的 AI 味？</span>
          </div>
        </div>
      </section>

      <!-- ============================== 15. 一些变化 (section intro) ============================== -->
      <section class="slide slide-title">
        <div class="bg-grid"></div>
        <div class="text-center" style="position:relative;z-index:1">
          <div class="title-mega cn" style="font-size:clamp(2.5rem,6vw,4.5rem)"><span class="gradient-text">一些变化</span></div>
          <div class="subtitle cn" data-f="1">深度使用 AI 之后，一些习惯和心态上的感受</div>
        </div>
      </section>

      <!-- ============================== 16. 信息获取在变 ============================== -->
      <section class="slide">
        <div class="text-center flex-col gap-3" style="align-items:center">
          <div class="title-large cn"><span class="gradient-text">信息获取</span>方式在变</div>
          <div class="subtitle cn" data-f="1">从构造 query 到直接表达需求</div>

          <div class="intent-funnel mt-2" data-f="2">
            <div class="funnel-intent cn">
              <div class="funnel-label dim" style="font-size:.75rem">你脑中的问题</div>
              React 项目打包后首屏白屏，控制台没有报错
            </div>

            <div class="funnel-split">
              <div class="funnel-path">
                <div class="funnel-pipe dim">
                  <svg viewBox="0 0 100 40" class="funnel-svg"><path d="M 10 0 L 90 0 L 70 40 L 30 40 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/><text x="50" y="24" text-anchor="middle" fill="#777" font-size="8" font-family="Space Grotesk">搜索引擎</text></svg>
                </div>
                <div class="funnel-output query-output">
                  <div class="mono" style="font-size:.75rem;color:var(--dim)">react 白屏 production 无报错</div>
                  <div class="mono" style="font-size:.7rem;color:var(--dim);margin-top:.2rem">→ react blank page after build</div>
                  <div class="mono" style="font-size:.7rem;color:var(--dim)">→ react chunk load error white screen</div>
                </div>
                <div class="funnel-loss cn dim" style="font-size:.7rem">多次换 query · 扫 StackOverflow · 自己筛选</div>
              </div>

              <div class="funnel-vs">vs</div>

              <div class="funnel-path">
                <div class="funnel-pipe accent-pipe">
                  <svg viewBox="0 0 100 40" class="funnel-svg"><rect x="10" y="0" width="80" height="40" rx="4" fill="rgba(124,106,239,0.06)" stroke="rgba(124,106,239,0.2)"/><text x="50" y="24" text-anchor="middle" fill="#7c6aef" font-size="8" font-family="Space Grotesk">LLM + Web Search</text></svg>
                </div>
                <div class="funnel-output prompt-output cn" style="font-size:.8rem">
                  直接描述问题和上下文 → 一次给出诊断 + 方案
                </div>
                <div class="funnel-gain accent3 cn" style="font-size:.7rem">Web search 本质上自动完成了人肉搜索</div>
              </div>
            </div>
          </div>

          <div class="card mt-2 cn text-center" data-f="3" style="max-width:600px;font-size:.9rem">
            单次搜索可能更快，但<span class="accent">拿到答案的整体速度</span>后者更快<br>
            <span class="dim" style="font-size:.8rem">我的 Google 使用量下降了 95%<br>剩下 5% 是肌肉记忆 — 忘了切换，在地址栏打了</span>
          </div>
        </div>
      </section>

      <!-- ============================== 17. 默认不信任"快" ============================== -->
      <section class="slide">
        <div class="text-center flex-col gap-3" style="align-items:center">
          <div class="title-large cn">默认不信任 <span class="gradient-text">「快」</span></div>

          <div class="card mt-3 cn" data-f="1" style="max-width:600px;font-size:1.05rem;text-align:center">
            用了 AI 以后，我反而开始<strong>信任「慢」</strong>
          </div>

          <div class="cn" data-f="2" style="max-width:550px;font-size:.95rem;text-align:center">
            <span class="dim">
              「快」给我一种不踏实的感觉 — AI 是不是跳过了什么？<br>
              「慢」说明它在认真思考，在做 research，在 plan
            </span>
          </div>

          <div class="cn mt-2" data-f="3" style="font-size:1.1rem;text-align:center">
            这和我们对人的直觉一样：<br>
            <span class="accent" style="font-size:1.2rem">三秒给你答案的人，你信吗？</span>
          </div>
        </div>
      </section>

      <!-- ============================== 18. AI 在生活中 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center">
          <div class="title-large cn">AI 在<span class="gradient-text">生活</span>中</div>

          <div class="card cn text-center mt-1" data-f="1" style="max-width:600px;font-size:1.05rem">
            <strong class="accent" style="font-size:1.2rem">Coding agent 就是通用 agent</strong>
          </div>

          <div class="cn text-center" data-f="2" style="max-width:580px;font-size:.9rem">
            Coding agent 本质上是一个<strong>用代码解决问题的方法论实现</strong><br>
            <span class="dim">最擅长写代码，但对数字世界的其他场景同样有广阔的用武之地</span>
          </div>

          <div class="gp-cases mt-2">
            <div class="gp-case cn" data-f="3">
              <div class="gp-case-title">💻 自动化</div>
              <div class="dim">用代码思维，把重复行为变成脚本</div>
            </div>
            <div class="gp-case cn" data-f="4">
              <div class="gp-case-title">📝 数据</div>
              <div class="dim">帮你把生活数据变成可分析的系统，而不是一堆记录</div>
            </div>
            <div class="gp-case cn clickable" data-f="5" data-url="https://panyi-2026.justineo.me/pepper" data-mobile="true">
              <div class="gp-case-title">🔧 工具</div>
              <div class="dim">为一个问题，临时生成一个工具</div>
            </div>
            <div class="gp-case cn" data-f="6">
              <div class="gp-case-title">📊 这个 Slides</div>
              <div class="dim">Codex · 多轮 review</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================== 19. AI 这么强大，我们会不会失业？ ============================== -->
      <section class="slide slide-title">
        <div class="bg-grid"></div>
        <div class="text-center" style="position:relative;z-index:1">
          <div class="title-mega cn" style="font-size:clamp(2.5rem,6vw,4.5rem)">AI 这么强大，<br><span class="gradient-text">我们会不会失业？</span></div>
          <div class="subtitle cn mt-2" data-f="1">程序员面临的挑战</div>
        </div>
      </section>

      <!-- ============================== 20. 我的观点 ============================== -->
      <section class="slide">
        <div class="flex-col gap-3" style="align-items:center;justify-content:center">
          <div class="title-large cn">我的<span class="gradient-text">观点</span></div>
          <div class="card cn text-center" data-f="1" style="max-width:760px;font-size:1.12rem">
            事在人为
          </div>
        </div>
      </section>
`;

