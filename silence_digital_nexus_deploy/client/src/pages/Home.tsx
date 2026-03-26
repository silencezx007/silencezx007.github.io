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

const manifesto = {
  badge: 'OPC 的探索之路',
  lead: '把想法做成作品，',
  emphasis: '把经历写成答案。',
  description:
    '聚焦真实项目、真实能力和真实结果，让每一次访问都能快速建立信任。',
};

const featuredCards = [
  {
    title: 'AI 实时翻译原型',
    summary:
      '面向真实沟通场景的翻译原型，支持中、葡、英多语切换，强调速度、准确和稳定体验。',
    status: '可直接体验',
    label: 'AI / Translation',
    href: '/translator/',
    actionLabel: '打开原型',
    icon: Languages,
  },
  {
    title: '机场项目协作经验',
    summary:
      '长期一线协作与节奏推进经验，覆盖跨角色沟通、任务闭环和现场执行，强调真实可落地。',
    status: '真实经历',
    label: 'Project / Field',
    href: '#strengths',
    actionLabel: '查看特点',
    icon: BriefcaseBusiness,
  },
  {
    title: 'AI 工具实践',
    summary:
      '持续把 AI 能力落到小工具和工作流中，优先交付可展示、可复用、可迭代的实用成果。',
    status: '持续迭代',
    label: 'AI / Workflow',
    href: '#now',
    actionLabel: '查看近况',
    icon: Bot,
  },
  {
    title: '个人品牌主页',
    summary:
      '统一个人入口，集中展示项目能力、协作经验和联系方式，帮助访问者快速完成认知与判断。',
    status: '当前版本',
    label: 'Brand / Web',
    href: '#manifesto',
    actionLabel: '查看宣言',
    icon: LayoutGrid,
  },
];

const strengthCards = [
  {
    title: '结果导向',
    description:
      '优先交付可验证的成果，用可体验的产品与可复盘的项目价值来建立信任。',
    icon: Globe,
  },
  {
    title: '表达清晰',
    description:
      '把复杂经验转成易理解的信息结构，让第一次访问的人也能快速抓住重点。',
    icon: MonitorSmartphone,
  },
  {
    title: '持续交付',
    description:
      '保持稳定更新节奏，让能力展示、项目沉淀和合作价值持续增长。',
    icon: Workflow,
  },
];

const nowCards = [
  {
    title: 'OPC 场景探索',
    text: '把技术能力与业务场景结合，持续产出可直接体验的作品。',
  },
  {
    title: 'AI 应用落地',
    text: '聚焦翻译、效率与协作场景，提升真实使用中的体验与效率。',
  },
  {
    title: '长期合作价值',
    text: '通过可靠交付和稳定输出，建立值得长期合作的专业信任。',
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
        <section id="works" className="grid gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">作品卡片</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                先看作品，再认识我
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              可体验的产品原型、可验证的项目经历、可持续的能力方向，构成这张个人名片。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index, duration: 0.45 }}
                className={`group relative overflow-hidden rounded-[1.9rem] p-7 ${
                  mode === 'zen'
                    ? 'border border-black/5 bg-white/92 shadow-[0_16px_56px_rgba(15,23,42,0.06)]'
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

        <motion.section
          id="manifesto"
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
                {manifesto.badge}
              </div>

              <p
                className={`mt-6 text-sm tracking-[0.35em] ${
                  mode === 'zen' ? 'text-foreground/55' : 'text-primary/85'
                }`}
              >
                {ownerName}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {manifesto.lead}
                <span className={mode === 'zen' ? 'text-foreground/55' : 'text-primary'}>
                  {' '}
                  {manifesto.emphasis}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {manifesto.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#works"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'bg-foreground text-background hover:opacity-90'
                      : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  返回作品卡片
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
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">快速认识</p>
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">当前定位</div>
                    <div className="mt-1 text-lg font-semibold">项目经验 + AI 工具实践</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">核心能力</div>
                    <div className="mt-1 text-lg font-semibold">落地执行、跨场景协作、产品表达</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">核心宣言</div>
                    <div className="mt-1 text-lg font-semibold">把想法做成作品，把经历写成答案。</div>
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

        <section id="strengths" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`rounded-[1.9rem] p-7 ${
              mode === 'zen'
                ? 'border border-black/5 bg-white/90 shadow-[0_12px_48px_rgba(15,23,42,0.05)]'
                : 'border border-white/10 bg-card/85 shadow-[0_12px_48px_rgba(0,0,0,0.3)]'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">核心特点</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">把复杂经验，变成清晰表达</h2>
            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              通过结构化表达和真实案例，让访问者快速看到你的专业价值与合作潜力。
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
          {nowCards.map((item, index) => (
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
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">继续浏览</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                从这里进入我的项目与能力
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                欢迎通过原型与 GitHub 继续了解我的工作方式、技术路径与实际成果。
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
