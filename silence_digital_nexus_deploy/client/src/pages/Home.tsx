import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Globe,
  Languages,
  LayoutGrid,
  Link2,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';

const ownerName = '张旭';

const heroFacts = ['个人主页', '卡片式展示', '持续更新'];

const featuredCards = [
  {
    title: 'AI 实时翻译原型',
    summary:
      '把跨语言沟通里最直接的需求做成可打开、可体验的页面原型，适合向朋友快速展示一个真实可用的作品入口。',
    status: '可直接体验',
    label: 'AI / Translation',
    href: '/translator/',
    actionLabel: '打开原型',
    icon: Languages,
  },
  {
    title: '机场项目协作经验',
    summary:
      '长期现场协作、节奏推进和跨语言沟通，让我更在意项目能否真正落地，而不是只停留在概念描述里。',
    status: '真实经历',
    label: 'Project / Field',
    href: '#strengths',
    actionLabel: '查看特点',
    icon: BriefcaseBusiness,
  },
  {
    title: 'AI 工具实践',
    summary:
      '最近持续把 AI 能力往小工具、工作流和个人效率场景里落，优先做看得见结果、讲得清价值的东西。',
    status: '持续迭代',
    label: 'AI / Workflow',
    href: '#now',
    actionLabel: '查看近况',
    icon: Bot,
  },
  {
    title: '个人主页设计',
    summary:
      '这版主页不再介绍建站过程，而是把内容收成可分享的展示卡片，让整体观感更像作品集首页。',
    status: '当前版本',
    label: 'Design / Web',
    href: '#contact',
    actionLabel: '查看链接',
    icon: LayoutGrid,
  },
];

const strengthCards = [
  {
    title: '更重视真实感',
    description:
      '比起只做一个“看起来很会技术”的页面，我更希望每张卡片都能对应真实经历、真实项目或者真实兴趣。',
    icon: Globe,
  },
  {
    title: '把想法落成页面',
    description:
      '我喜欢把零散的需求、现场经验和新工具尝试，整理成别人一眼就能理解的网页展示和原型入口。',
    icon: MonitorSmartphone,
  },
  {
    title: '关注长期可迭代',
    description:
      '页面效果重要，但结构也要能继续扩展。后面无论加项目、截图还是联系方式，都能自然接进来。',
    icon: Workflow,
  },
];

const currentCards = [
  {
    title: '正在打磨主页',
    text: '继续把这套页面做得更像成品，减少说明感，增强展示感。',
  },
  {
    title: '补真实作品',
    text: '优先补能直接点开的作品、截图和简洁说明，而不是堆很多占位内容。',
  },
  {
    title: '保持统一入口',
    text: '之后公开分享时，就只保留这一套主页和这一条公开网址。',
  },
];

const contactCards = [
  {
    title: '个人主页',
    value: 'silencezx007.github.io',
    href: 'https://silencezx007.github.io/',
  },
  {
    title: 'GitHub',
    value: 'github.com/silencezx007',
    href: 'https://github.com/silencezx007',
  },
  {
    title: '翻译原型',
    value: '在线预览',
    href: '/translator/',
  },
];

export default function Home() {
  const { mode } = useMode();

  return (
    <Layout>
      <div id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-10">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`relative overflow-hidden rounded-[2rem] p-8 md:p-12 ${
            mode === 'zen'
              ? 'border border-black/5 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.08)]'
              : 'border border-white/10 bg-card/90 shadow-[0_24px_80px_rgba(5,10,20,0.45)]'
          }`}
        >
          <div className="absolute inset-0 opacity-90">
            <div
              className={`absolute -right-20 top-0 h-64 w-64 rounded-full blur-3xl ${
                mode === 'zen' ? 'bg-stone-100' : 'bg-cyan-500/10'
              }`}
            />
            <div
              className={`absolute -left-8 bottom-0 h-56 w-56 rounded-full blur-3xl ${
                mode === 'zen' ? 'bg-amber-50' : 'bg-fuchsia-500/10'
              }`}
            />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                  mode === 'zen'
                    ? 'bg-black/[0.04] text-foreground/80'
                    : 'border border-primary/20 bg-primary/10 text-primary'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                现在这就是唯一保留的个人主页版本
              </div>

              <p
                className={`mt-6 text-sm tracking-[0.35em] ${
                  mode === 'zen' ? 'text-foreground/55' : 'text-primary/85'
                }`}
              >
                {ownerName}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                把项目、经历和正在做的事，
                <span className={mode === 'zen' ? 'text-foreground/55' : 'text-primary'}>
                  {' '}
                  收进一组可以直接发给朋友看的卡片里。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                这里不再展开讲建站过程，而是直接展示值得看的内容：能打开的作品、我在做的方向，以及几个能快速认识我的切面。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroFacts.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-4 py-2 text-sm ${
                      mode === 'zen'
                        ? 'border border-black/8 bg-black/[0.03] text-foreground/75'
                        : 'border border-white/10 bg-white/[0.04] text-foreground/80'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#works"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'bg-foreground text-background hover:opacity-90'
                      : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  查看作品卡片
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://silencezx007.github.io/"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'border border-black/10 bg-white hover:bg-black/[0.03]'
                      : 'border border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  打开公开网址
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div
                className={`rounded-[1.75rem] p-6 ${
                  mode === 'zen'
                    ? 'border border-black/5 bg-black/[0.02]'
                    : 'border border-white/10 bg-white/[0.03]'
                }`}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  快速认识
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">当前定位</div>
                    <div className="mt-1 text-lg font-semibold">项目经验 + AI 工具实践</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">主页风格</div>
                    <div className="mt-1 text-lg font-semibold">简洁、现代、偏展示型</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">这页的作用</div>
                    <div className="mt-1 text-lg font-semibold">一个可以直接分享的个人入口</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {contactCards.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`rounded-[1.5rem] p-5 transition-all ${
                      mode === 'zen'
                        ? 'border border-black/5 bg-white/80 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]'
                        : 'border border-white/10 bg-card/70 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-muted-foreground">{item.title}</span>
                      <Link2 className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-3 text-base font-semibold">{item.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section id="works" className="grid gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                作品卡片
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                先看内容，再决定要不要继续往下点开
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              这一页现在更像一个展示首页。每张卡片都尽量对应一个真实方向、真实能力或真实入口，不再用大段篇幅解释页面是怎么做出来的。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.45 }}
                className={`group relative overflow-hidden rounded-[1.9rem] p-7 ${
                  mode === 'zen'
                    ? 'border border-black/5 bg-white/90 shadow-[0_16px_56px_rgba(15,23,42,0.06)]'
                    : 'border border-white/10 bg-card/85 shadow-[0_16px_56px_rgba(0,0,0,0.35)]'
                }`}
              >
                <div
                  className={`absolute inset-x-7 top-0 h-px ${
                    mode === 'zen'
                      ? 'bg-gradient-to-r from-transparent via-black/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-primary/60 to-transparent'
                  }`}
                />

                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      mode === 'zen'
                        ? 'bg-black/[0.04] text-foreground/70'
                        : 'border border-primary/20 bg-primary/10 text-primary'
                    }`}
                  >
                    {card.status}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {card.label}
                  </span>
                </div>

                <div
                  className={`mt-8 inline-flex rounded-2xl p-3 ${
                    mode === 'zen'
                      ? 'bg-black/[0.04] text-foreground'
                      : 'border border-primary/20 bg-primary/10 text-primary'
                  }`}
                >
                  <card.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{card.summary}</p>

                <a
                  href={card.href}
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'bg-foreground text-background hover:opacity-90'
                      : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  {card.actionLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="strengths" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`rounded-[1.9rem] p-7 ${
              mode === 'zen'
                ? 'border border-black/5 bg-white/90 shadow-[0_12px_48px_rgba(15,23,42,0.05)]'
                : 'border border-white/10 bg-card/85 shadow-[0_12px_48px_rgba(0,0,0,0.3)]'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              我更看重什么
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              不是把页面做复杂，而是把展示做清楚
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              如果这是朋友第一次打开我的主页，我希望他能在很短时间里看到三个关键信息：我在做什么、我做过什么、以及我接下来会继续往哪里打磨。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {strengthCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.4 }}
                className={`rounded-[1.5rem] p-6 ${
                  mode === 'zen'
                    ? 'border border-black/5 bg-black/[0.02]'
                    : 'border border-white/10 bg-white/[0.03]'
                }`}
              >
                <div
                  className={`inline-flex rounded-2xl p-3 ${
                    mode === 'zen'
                      ? 'bg-white text-foreground shadow-sm'
                      : 'border border-primary/20 bg-primary/10 text-primary'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="now" className="grid gap-5 md:grid-cols-3">
          {currentCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.08, duration: 0.4 }}
              className={`rounded-[1.6rem] p-6 ${
                mode === 'zen'
                  ? 'border border-black/5 bg-white/88 shadow-[0_12px_36px_rgba(15,23,42,0.04)]'
                  : 'border border-white/10 bg-card/80 shadow-[0_12px_36px_rgba(0,0,0,0.24)]'
              }`}
            >
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Now</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </section>

        <section
          id="contact"
          className={`relative overflow-hidden rounded-[1.9rem] p-8 md:p-10 ${
            mode === 'zen'
              ? 'border border-black/5 bg-gradient-to-br from-stone-50 to-white'
              : 'border border-white/10 bg-gradient-to-br from-card to-background'
          }`}
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                继续浏览
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                如果你想继续看，可以从这里继续点开
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                这版主页已经切到成品展示逻辑。接下来适合继续补的是项目截图、更多真实作品，以及更完整的联系方式。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/translator/"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  mode === 'zen'
                    ? 'bg-foreground text-background hover:opacity-90'
                    : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                }`}
              >
                打开翻译原型
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/silencezx007"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  mode === 'zen'
                    ? 'border border-black/10 bg-white hover:bg-black/[0.03]'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                查看 GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
