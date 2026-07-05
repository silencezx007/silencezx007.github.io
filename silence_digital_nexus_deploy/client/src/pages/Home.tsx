import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  DatabaseZap,
  Link2,
  Mail,
  Network,
  Play,
  Workflow,
} from 'lucide-react';
import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  drift: number;
  tone: 'ink' | 'red' | 'green';
};

const signals = [
  { label: 'WORKHUB', value: 'Live', detail: '事件队列 / 拟稿 / 采购单' },
  { label: 'MEMORY', value: 'Live', detail: 'Obsidian 三库 / AI 对话沉淀' },
  { label: 'MAIL AGENT', value: 'Building', detail: '审批判断 / 草稿箱 / 附件归档' },
  { label: 'AGENT STACK', value: 'Lab', detail: 'Codex / Hermes / OpenClaw 边界实验' },
];

const profileRows = [
  ['ID', 'ZHANG XU / 张旭'],
  ['FOCUS', 'AI one-person company OS'],
  ['METHOD', 'Workflows before demos'],
  ['BASE', 'Engineering + operations'],
  ['VALUE', 'Systems that leave evidence'],
];

const notes = [
  {
    title: '把邮件草稿真正放进工作邮箱',
    tag: 'WORKFLOW',
    meta: '采购自动化 · 2026',
    body: 'AI 不是写一段建议，而是把结果落到草稿箱、附件目录和可追踪状态里。',
  },
  {
    title: '记忆不是收藏夹',
    tag: 'MEMORY',
    meta: 'LLM + Wiki · Obsidian',
    body: '每次网页、对话和判断都要沉淀成下次能接上的上下文。',
  },
  {
    title: '三套 Agent，三条边界',
    tag: 'AGENT OPS',
    meta: 'Codex / Hermes / OpenClaw',
    body: '系统独立、目录独立、记忆独立。先核验真相源，再让 Agent 接管。',
  },
];

const systems = [
  {
    icon: Workflow,
    title: 'Workhub',
    tag: 'AUTOMATION',
    description: '工作事件队列、采购单、邮件草稿、跟进动作的中枢。',
  },
  {
    icon: BookOpenText,
    title: 'LLM + Wiki',
    tag: 'MEMORY',
    description: '把网页、AI 对话、工作记录沉淀进 Obsidian，形成长期知识层。',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Procurement Agent',
    tag: 'WORKFLOW',
    description: '采购申请、审批判断、供应商询价、附件归档的半自动流程。',
  },
  {
    icon: Network,
    title: 'Agent Stack',
    tag: 'BOUNDARY',
    description: 'Codex、Hermes、OpenClaw 分工清晰，用真实任务验证接管能力。',
  },
];

const buildLines = [
  'ingest video transcript',
  'extract reusable workflow',
  'write obsidian knowledge card',
  'generate site implementation brief',
  'run browser screenshot qa',
  'publish reviewed artifact',
];

const links = [
  { label: 'GitHub', value: 'github.com/silencezx007', href: 'https://github.com/silencezx007' },
  { label: 'Prototype', value: 'AI translator', href: '/translator/' },
  { label: 'Email', value: 'silencezx009@gmail.com', href: 'mailto:silencezx009@gmail.com' },
];

const proofStages = [
  {
    title: '输入证据',
    body: '视频、邮件、网页、截图、采购单先进入材料池，不从空白 prompt 开始。',
  },
  {
    title: 'AI 处理',
    body: '模型负责拆解、生成、改版、归档，但每一步都保留上下文。',
  },
  {
    title: '人工闸门',
    body: '事实、排版、合规、邮件发送必须过人工确认，不让模型直接越权。',
  },
  {
    title: '公开产物',
    body: '最后落成网页、草稿箱、知识卡、脚本、截图验证，让能力可复盘。',
  },
];

const proofCases = [
  {
    title: '视频知识沉淀系统',
    input: 'X 视频 / 字幕 / 关键帧',
    ai: '提炼方法卡、行动项、反证边界',
    human: '检查字幕来源和工具名误识别',
    output: 'Obsidian 知识卡 + 网站改版 brief',
  },
  {
    title: '采购邮件自动化',
    input: '采购申请 / 审批回复 / 供应商资料',
    ai: '识别状态、拟询价、匹配供应商',
    human: '审批语义和发送前确认',
    output: '工作邮箱草稿箱 + 采购批次归档',
  },
  {
    title: '电影感网站生成',
    input: '参考视频 / 人像素材 / 交互截图',
    ai: '生成主视觉、动效、页面结构',
    human: '浏览器截图验收，移动端检查',
    output: '可访问站点 + 构建记录',
  },
];

const evidenceReceipts = [
  {
    source: 'Claude AI 一小时自动化课程',
    takeaway: '自动化核心不是神提示词，而是项目上下文、模板、外部工具和验收标准。',
    action: '把网站从个人介绍改成工作流证明，让能力能被检查。',
  },
  {
    source: 'AI 生成电影感互动网站教程',
    takeaway: '高质量页面先锁定视觉资产和第一屏，再扩展其他 section。',
    action: '保留艺术化主视觉和粒子互动，把页面叙事收敛到证据链。',
  },
  {
    source: 'Claude Code + Sonnet 生成滚动互动网站',
    takeaway: '滚动交互本质是状态映射，不能只为炫技，要服务叙事。',
    action: '把动效定位为吸引注意，把 proof/cases 定位为建立信任。',
  },
];

const productTracks = [
  {
    title: '视频知识流水线',
    now: '字幕、关键帧、方法卡已能沉淀。',
    next: '补视觉 brief 抽取和案例页生成。',
    outcome: '变成内容资产服务。',
  },
  {
    title: '电影感网站模板',
    now: '参考图、主视觉、粒子互动已跑通。',
    next: '沉淀成 cinematic-site 模板。',
    outcome: '变成展示页交付服务。',
  },
  {
    title: '工作流自动化系统',
    now: '采购邮件和知识库已有真实场景。',
    next: '把人工闸门、草稿箱、归档做稳定。',
    outcome: '变成一人公司操作系统。',
  },
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const burstRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 50, y: 50, active: false });
  const particlesRef = useRef<Particle[]>(
    Array.from({ length: 3600 }, (_, index) => ({
      x: (index * 37 + (index % 9) * 3) % 100,
      y: (index * 61 + (index % 13) * 2) % 100,
      size: 0.4 + ((index * 7) % 5) * 0.2,
      drift: 20 + ((index * 13) % 36),
      tone: index % 10 === 0 ? 'red' : index % 6 === 0 ? 'green' : 'ink',
    })),
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const colors = {
      ink: [23, 19, 15],
      red: [185, 84, 58],
      green: [84, 115, 91],
    } satisfies Record<Particle['tone'], [number, number, number]>;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;
      for (const particle of particlesRef.current) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = pointer.active ? Math.max(0, 1 - distance / 42) : 0;
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * particle.drift * force * 1.35;
        const moveY = Math.sin(angle) * particle.drift * force * 1.35;
        const x = (particle.x / 100) * width + moveX;
        const y = (particle.y / 100) * height + moveY;
        const [r, g, b] = colors[particle.tone];

        context.beginPath();
        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.32 + force * 0.6})`;
        context.arc(x, y, particle.size * (1 + force * 1.9), 0, Math.PI * 2);
        context.fill();
      }
    };

    const scheduleDraw = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(scheduleDraw);
    resizeObserver.observe(canvas);
    scheduleDraw();

    return () => {
      resizeObserver.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const scheduleDraw = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      if (!canvas || !context) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;
      const colors = {
        ink: [23, 19, 15],
        red: [185, 84, 58],
        green: [84, 115, 91],
      } satisfies Record<Particle['tone'], [number, number, number]>;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      for (const particle of particlesRef.current) {
        const pointer = pointerRef.current;
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = pointer.active ? Math.max(0, 1 - distance / 42) : 0;
        const angle = Math.atan2(dy, dx);
        const x = (particle.x / 100) * width + Math.cos(angle) * particle.drift * force * 1.35;
        const y = (particle.y / 100) * height + Math.sin(angle) * particle.drift * force * 1.35;
        const [r, g, b] = colors[particle.tone];
        context.beginPath();
        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.32 + force * 0.6})`;
        context.arc(x, y, particle.size * (1 + force * 1.9), 0, Math.PI * 2);
        context.fill();
      }
    });
  };

  return (
    <div
      className="particle-field"
      data-particle-count="3600"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerRef.current = {
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
          active: true,
        };
        if (burstRef.current) {
          burstRef.current.style.left = `${pointerRef.current.x}%`;
          burstRef.current.style.top = `${pointerRef.current.y}%`;
          burstRef.current.style.opacity = '1';
        }
        scheduleDraw();
      }}
      onPointerLeave={() => {
        pointerRef.current = { ...pointerRef.current, active: false };
        if (burstRef.current) burstRef.current.style.opacity = '0';
        scheduleDraw();
      }}
    >
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <span ref={burstRef} className="particle-burst" />
    </div>
  );
}

function BuildConsole() {
  return (
    <div className="build-console">
      <div className="console-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="console-body">
        <p className="console-command">$ zx build --in-public</p>
        {buildLines.map((line, index) => (
          <p key={line} className="console-line" style={{ animationDelay: `${index * 0.45}s` }}>
            <span>{`10:12:0${index + 1}`}</span>
            {line}
          </p>
        ))}
      </div>
      <div className="console-footer">
        <span>reviewed artifact</span>
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
        <span>ready</span>
      </div>
    </div>
  );
}

export default function Home() {
  const { mode } = useMode();
  const dark = mode !== 'zen';

  return (
    <Layout>
      <div id="top" className="archive-page mx-auto flex w-full max-w-[1520px] flex-col">
        <section className="archive-hero">
          <div className="hero-copy">
            <p className="archive-kicker">AI OPERATOR / PROOF MACHINE</p>
            <h1 className="display-title">Zhang Xu</h1>
            <p className="hero-subtitle">
              把视频、邮件、采购、知识库变成可验证的 AI 工作流。
            </p>
            <div className="hero-actions">
              <a href="#proof" className="archive-button primary">
                看证据链
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#cases" className="archive-button">
                看案例
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Zhang Xu AI operator archive hero illustration">
            <img src="/images/ai-operator-archive-hero.png" alt="" />
            <ParticleField />
          </div>
        </section>

        <section id="proof" className="proof-machine">
          <div className="proof-intro">
            <span>能力证明机</span>
            <h2>能力不是声明，是一条能被检查的证据链。</h2>
            <p>
              网站从展示个人，升级为展示工作方式。每个 AI 能力都要说明输入、处理、人工闸门和最终产物。
            </p>
          </div>

          <div className="proof-flow">
            {proofStages.map((stage, index) => (
              <motion.article
                key={stage.title}
                  initial={{ opacity: 0.72, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="cases" className="case-ledger">
          <div className="case-ledger-head">
            <h2>真实工作流，直接变成案例。</h2>
            <p>不放空泛技能词，只放能追到材料和产物的链路。</p>
          </div>

          <div className="case-rows">
            {proofCases.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
              >
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>输入</dt>
                    <dd>{item.input}</dd>
                  </div>
                  <div>
                    <dt>AI 做什么</dt>
                    <dd>{item.ai}</dd>
                  </div>
                  <div>
                    <dt>人工验什么</dt>
                    <dd>{item.human}</dd>
                  </div>
                  <div>
                    <dt>产物</dt>
                    <dd>{item.output}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="evidence-receipts">
          <div className="receipt-feature">
            <h2>新知识，不进收藏夹，进生产线。</h2>
            <p>
              三篇新文章没有停在摘要层，而是直接改写了这个网站的结构：从作品展示，转向能力证明。
            </p>
          </div>

          <div className="receipt-stack">
            {evidenceReceipts.map((item) => (
              <motion.article
                key={item.source}
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
              >
                <small>{item.source}</small>
                <h3>{item.takeaway}</h3>
                <p>{item.action}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="product-tracks">
          <div className="track-head">
            <h2>下一步，变成能卖的服务。</h2>
            <p>网站继续承担一个任务：把学习、实验和工作流，压成可以交付的产品化能力。</p>
          </div>

          <div className="track-grid">
            {productTracks.map((track) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
              >
                <h3>{track.title}</h3>
                <dl>
                  <div>
                    <dt>现在</dt>
                    <dd>{track.now}</dd>
                  </div>
                  <div>
                    <dt>下一步</dt>
                    <dd>{track.next}</dd>
                  </div>
                  <div>
                    <dt>可卖形态</dt>
                    <dd>{track.outcome}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="archive-section about-grid">
          <motion.div
                  initial={{ opacity: 0.72, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            className="dossier-card"
          >
            <p className="archive-kicker">ABOUT / 档案</p>
            <h2 className="section-title">不是简历墙，是公开控制台。</h2>
            <p className="section-copy">
              这里记录我如何把 AI 放进真实业务流程，留下可复盘、可接管、可复利的工作资产。
            </p>
            <div className="profile-table">
              {profileRows.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
                  initial={{ opacity: 0.72, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ delay: 0.12 }}
            className="signal-board"
          >
            <div className="board-header">
              <p>全系统信号台</p>
              <span>LIVE / SOON</span>
            </div>
            {signals.map((signal) => (
              <div key={signal.label} className="signal-row">
                <span className="signal-name">{signal.label}</span>
                <span className="signal-detail">{signal.detail}</span>
                <span className={`signal-state ${signal.value.toLowerCase()}`}>{signal.value}</span>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="writing" className="archive-section writing-section">
          <div className="section-heading">
            <p className="archive-kicker">WRITING / 沉淀</p>
            <h2 className="section-title">Not just notes. Working memory.</h2>
          </div>

          <div className="writing-grid">
            <motion.article
                initial={{ opacity: 0.72, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              className="featured-note"
            >
              <div className="note-art">
                <DatabaseZap className="h-12 w-12" />
              </div>
              <div className="note-copy">
                <span className="note-tag">FEATURED</span>
                <h3>当系统能留下证据，AI 才真正进入工作。</h3>
                <p>
                  邮件草稿、审批状态、采购附件、知识卡片、Agent 日志，都不是边角料。它们是一个人公司未来自动化的地基。
                </p>
                <a href="#build">
                  看建设方式
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>

            <div className="ranked-notes">
              {notes.map((note, index) => (
                <motion.article
                  key={note.title}
              initial={{ opacity: 0.72, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="rank-number">{String(index + 2).padStart(2, '0')}</span>
                  <div>
                    <span className="note-tag">{note.tag}</span>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <small>{note.meta}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-frame">
            <div className="rec-line">
              <span>REC 00:00:00</span>
              <span>EP.01 拍摄中</span>
            </div>
            <div className="impact-center">
              <Play className="h-7 w-7" />
              <h2>把做过的事，变成别人能信的资产。</h2>
              <p>视觉负责吸引注意，证据链负责建立信任。</p>
            </div>
            <div className="impact-progress">
              <span>00:00</span>
              <div />
              <span>68%</span>
            </div>
          </div>
        </section>

        <section id="build" className="archive-section build-section">
          <div className="build-copy">
            <p className="archive-kicker">BUILD / 造</p>
            <h2 className="section-title">Systems under construction.</h2>
            <p className="section-copy">
              我的网站不只展示结果，也展示系统如何被建出来。这里保留进度、日志、边界和下一步。
            </p>
            <a href="https://github.com/silencezx007" className="archive-link">
              关注 GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="build-stage">
            <div className="commit-line">
              <span>input</span>
              <span>video / mail / screenshot</span>
              <span>gate</span>
              <span>human review before action</span>
              <strong>output - public proof</strong>
            </div>
            <BuildConsole />
          </div>
        </section>

        <section id="systems" className="system-grid">
          {systems.map((system, index) => (
            <motion.article
              key={system.title}
                initial={{ opacity: 0.72, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ delay: index * 0.05 }}
              className="system-card"
            >
              <span className="note-tag">{system.tag}</span>
              <system.icon className="h-6 w-6" />
              <h3>{system.title}</h3>
              <p>{system.description}</p>
            </motion.article>
          ))}
        </section>

        <section id="contact" className="contact-section">
          <p className="archive-kicker">GET IN TOUCH / 联系</p>
          <h2 className="display-title">Let's build.</h2>
          <p>聊聊 AI、自动化、采购工作流、知识库，或者一起搞点能落地的事情。</p>
          <div className="contact-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                <span>
                  <small>{link.label}</small>
                  <strong>{link.value}</strong>
                </span>
                {link.href.startsWith('mailto:') ? <Mail className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </section>

        {dark && <div className="dark-mode-note">Archive dark mode active</div>}
      </div>
    </Layout>
  );
}
