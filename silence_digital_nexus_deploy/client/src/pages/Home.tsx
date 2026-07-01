import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  Cpu,
  Link2,
  Mail,
  Network,
  Radar,
  Workflow,
} from 'lucide-react';

const buildSignals = [
  {
    label: 'Current thesis',
    value: 'AI one-person company OS',
    detail: '把采购、审批、邮件、知识库和自动化收敛成一个可接管的工作系统。',
  },
  {
    label: 'Home base',
    value: 'Engineering + operations',
    detail: '从工程项目、供应链协同和真实业务流程里长出 AI 应用。',
  },
  {
    label: 'Public stance',
    value: 'Build in public',
    detail: '个人网站不做简历墙，做一个持续更新的信号台。',
  },
];

const systems = [
  {
    title: 'Workhub',
    tag: 'automation',
    description: '工作事件队列、采购单、邮件草稿、跟进动作的中枢。',
    icon: Workflow,
  },
  {
    title: 'LLM + Wiki',
    tag: 'memory',
    description: '把网页、AI 对话、工作记录沉淀进 Obsidian，形成长期知识层。',
    icon: BookOpenText,
  },
  {
    title: 'Procurement Agent',
    tag: 'workflow',
    description: '采购申请、审批判断、供应商询价、附件归档的半自动流程。',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Codex / Hermes / OpenClaw',
    tag: 'agent stack',
    description: '三套本机 Agent 独立运行，用真实任务检验边界、记忆和接管能力。',
    icon: Network,
  },
];

const proofItems = [
  '把邮件草稿真正落到工作邮箱草稿箱，而不是停留在文本建议。',
  '把文章、网页和工具评估沉淀成可复用知识卡，而不是一次性摘要。',
  '用最小补丁修系统，不为了“理论最佳”重构已有工作流。',
  '先核验进程、日志、配置、端口和文件，再判断问题在哪。',
];

const publicLinks = [
  {
    title: 'GitHub',
    value: 'github.com/silencezx007',
    href: 'https://github.com/silencezx007',
  },
  {
    title: 'AI translator prototype',
    value: '在线预览',
    href: '/translator/',
  },
  {
    title: 'Email',
    value: 'silencezx009@gmail.com',
    href: 'mailto:silencezx009@gmail.com',
  },
];

const fieldNotes = [
  {
    title: 'AI is not a chat box',
    body: '我的重点不是多试几个模型，而是让模型进入真实流程，留下文件、草稿、记录和可追踪结果。',
  },
  {
    title: 'Memory is infrastructure',
    body: '知识库不是收藏夹。它要能解释我为什么做过这个判断，下次如何更快接上。',
  },
  {
    title: 'Small systems beat big demos',
    body: '先让一个小流程稳定工作，再把它接到更大的操作系统里。',
  },
];

export default function Home() {
  const { mode } = useMode();

  const panelClass =
    mode === 'zen'
      ? 'border-stone-200/80 bg-white/78 shadow-[0_24px_80px_rgba(39,35,27,0.09)]'
      : 'border-white/12 bg-zinc-950/68 shadow-[0_26px_90px_rgba(0,0,0,0.5)]';

  const quietPanelClass =
    mode === 'zen'
      ? 'border-stone-200/75 bg-white/68 shadow-[0_14px_45px_rgba(39,35,27,0.07)]'
      : 'border-white/10 bg-white/[0.045] shadow-[0_16px_48px_rgba(0,0,0,0.32)]';

  const signalClass =
    mode === 'zen'
      ? 'border-stone-900/10 bg-stone-950 text-stone-50'
      : 'border-emerald-300/25 bg-emerald-300 text-zinc-950';

  return (
    <Layout>
      <div id="top" className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8">
        <section className={`relative overflow-hidden rounded-[1.6rem] border backdrop-blur-2xl ${panelClass}`}>
          <div className="grid min-h-[calc(100vh-9rem)] gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  <Radar className="h-4 w-4" />
                  Personal signal station
                </div>

                <p className="mt-10 font-mono text-sm uppercase tracking-[0.35em] text-muted-foreground">
                  Zhang Xu / 张旭
                </p>

                <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                  Building the operating system for a one-person company.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  我正在把 AI、邮件、采购、审批、知识库和本机 Agent 织成一套能持续复利的工作系统。
                  这里不是简历，是我公开的建设现场。
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#systems"
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${signalClass}`}
                >
                  看我在建什么
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition-transform hover:-translate-y-0.5"
                >
                  联系 / 入口
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className={`relative border-t p-6 md:p-10 lg:border-l lg:border-t-0 ${
                mode === 'zen' ? 'border-stone-200/80 bg-stone-100/45' : 'border-white/10 bg-black/18'
              }`}
            >
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="flex h-full flex-col justify-end gap-4 pt-10">
                {buildSignals.map((item, index) => (
                  <motion.article
                    key={item.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className={`rounded-[1.1rem] border p-5 backdrop-blur-xl ${quietPanelClass}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.label}
                      </p>
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">{item.value}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="systems" className="grid gap-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Current build
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">正在成形的系统</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              参考 Sac 的“个人网站是 AI 时代简历”思路，这里把静态介绍换成可验证的建设轨迹。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {systems.map((system, index) => (
              <motion.article
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`group rounded-[1.2rem] border p-6 backdrop-blur-2xl ${quietPanelClass}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      mode === 'zen'
                        ? 'border-stone-900/10 bg-stone-950 text-stone-50'
                        : 'border-emerald-300/25 bg-emerald-300/12 text-emerald-200'
                    }`}
                  >
                    <system.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-current/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {system.tag}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight">{system.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{system.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="method" className={`rounded-[1.4rem] border p-6 backdrop-blur-2xl md:p-10 ${panelClass}`}>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Operating principles
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">做事方式</h2>
              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                我不追求炫技 Demo。我的判断标准是：能不能进入真实流程、减少人工消耗、留下可复盘证据。
              </p>
            </div>

            <div className="grid gap-3">
              {proofItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex gap-4 rounded-[1rem] border p-4 ${quietPanelClass}`}
                >
                  <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="grid gap-4 md:grid-cols-3">
          {fieldNotes.map((note) => (
            <article key={note.title} className={`rounded-[1.2rem] border p-6 backdrop-blur-2xl ${quietPanelClass}`}>
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{note.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{note.body}</p>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className={`mb-4 rounded-[1.4rem] border p-6 backdrop-blur-2xl md:p-10 ${panelClass}`}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Open channels</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">入口和链接</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
                如果你想看我正在试什么、做什么、如何把 AI 放进真实工作流，可以从这些入口开始。
              </p>
            </div>

            <div className="grid min-w-[min(100%,24rem)] gap-3">
              {publicLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`inline-flex items-center justify-between gap-4 rounded-[1rem] border px-4 py-3 text-sm font-medium backdrop-blur-xl transition-transform hover:-translate-y-0.5 ${quietPanelClass}`}
                >
                  <span className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <span>{item.value}</span>
                  </span>
                  {item.href.startsWith('mailto:') ? (
                    <Mail className="h-4 w-4 text-primary" />
                  ) : (
                    <Link2 className="h-4 w-4 text-primary" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
