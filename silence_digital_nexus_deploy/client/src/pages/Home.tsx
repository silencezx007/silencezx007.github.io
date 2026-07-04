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
  'boot archive workspace',
  'load workhub events',
  'sync obsidian memory',
  'draft procurement mail',
  'verify agent boundary',
  'publish signal station',
];

const links = [
  { label: 'GitHub', value: 'github.com/silencezx007', href: 'https://github.com/silencezx007' },
  { label: 'Prototype', value: 'AI translator', href: '/translator/' },
  { label: 'Email', value: 'silencezx009@gmail.com', href: 'mailto:silencezx009@gmail.com' },
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
        <span>v0.2.0 · compiling...</span>
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
        <span>68%</span>
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
            <p className="archive-kicker">AI OPERATOR / ONE-PERSON COMPANY OS</p>
            <h1 className="display-title">Zhang Xu</h1>
            <p className="hero-subtitle">
              我正在把邮件、采购、审批、知识库和本机 Agent 织成一套能持续复利的工作系统。
            </p>
            <div className="hero-actions">
              <a href="#build" className="archive-button primary">
                查看 Build
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#writing" className="archive-button">
                阅读笔记
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Zhang Xu AI operator archive hero illustration">
            <img src="/images/ai-operator-archive-hero.png" alt="" />
            <ParticleField />
            <div className="hero-label top">ARCHIVE 2026</div>
            <div className="hero-label bottom">BUILD IN PUBLIC</div>
          </div>
        </section>

        <section id="about" className="archive-section about-grid">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            className="dossier-card"
          >
            <p className="archive-kicker">ABOUT / 档案</p>
            <h2 className="section-title">AI Operator Archive</h2>
            <p className="section-copy">
              我不把个人网站当简历墙，而是当一个公开建设现场。这里展示我如何把 AI 放进真实业务流程，留下可复盘、可接管、可复利的工作资产。
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
            initial={{ opacity: 0, y: 32 }}
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
              initial={{ opacity: 0, y: 28 }}
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
                  initial={{ opacity: 0, x: 28 }}
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
              <span>REC · 00:00:00</span>
              <span>EP.01 · 拍摄中</span>
            </div>
            <div className="impact-center">
              <Play className="h-7 w-7" />
              <h2>AI 时代，最重要的是系统化表达能力。</h2>
              <p>把你做过的事，变成别人能看懂、能信任、能联系你的公开资产。</p>
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
              <span>a1b2c3d</span>
              <span>feat: init core</span>
              <span>d4e5f6a</span>
              <span>feat: graph engine</span>
              <strong>HEAD - build: in public</strong>
            </div>
            <BuildConsole />
          </div>
        </section>

        <section id="systems" className="system-grid">
          {systems.map((system, index) => (
            <motion.article
              key={system.title}
              initial={{ opacity: 0, y: 24 }}
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
