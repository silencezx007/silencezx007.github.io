import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Compass,
  Languages,
  Layers3,
  NotebookPen,
  Plane,
  Sparkles,
  Workflow,
} from 'lucide-react';

const heroHighlights = [
  {
    title: '单页叙事',
    description: '不再堆满入口，把重点放回主页本身的节奏、信息层级与观感。',
  },
  {
    title: '双模式视觉',
    description: '保留 zen / cyberpunk 两种气质，让简洁和未来感都能成立。',
  },
  {
    title: '持续迭代',
    description: '先把页面打磨到能代表自己，再逐步补齐真实项目与细节内容。',
  },
];

const currentTracks = [
  {
    title: '工程现场',
    description: '把项目现场的协作经验转成更清晰的网页表达。',
  },
  {
    title: 'AI 工具',
    description: '优先沉淀真的能帮上忙的小工具，而不只是 demo。',
  },
  {
    title: '主页迭代',
    description: '持续把页面效果、结构和真实内容收拢到同一个入口里。',
  },
];

const featuredProjects = [
  {
    title: 'AI 实时翻译',
    description:
      '面向真实沟通场景整理出的翻译原型，支持中、葡、英等语言切换，强调从输入到结果的顺滑体验。',
    status: '已可预览',
    accent: 'AI / Translation',
    href: '/translator/',
    actionLabel: '打开原型',
    icon: Languages,
  },
  {
    title: '机场运维项目经验',
    description:
      '把现场运维、跨语言沟通和项目节奏里的真实问题，沉淀成更适合长期展示的案例表达。',
    status: '持续整理',
    accent: 'Project / Field',
    href: '#process',
    actionLabel: '查看路径',
    icon: Plane,
  },
  {
    title: '个人主页第二轮',
    description:
      '这一版开始从“工具站”转向“个人主页”，更强调项目、方向和不断打磨中的个人表达。',
    status: '当前版本',
    accent: 'Homepage / V2',
    href: '#top',
    actionLabel: '查看首屏',
    icon: NotebookPen,
  },
];

const focusAreas = [
  {
    icon: Bot,
    title: 'AI 工具化',
    description: '更关注能否真的帮上忙，而不是只停留在 demo。',
  },
  {
    icon: Layers3,
    title: '页面质感',
    description: '希望视觉语言克制、现代，同时保留一点未来感和记忆点。',
  },
  {
    icon: Workflow,
    title: '工作流思维',
    description: '尽量把零散想法组织成可持续维护、可扩展的实际结构。',
  },
];

const processSteps = [
  {
    title: '先收敛',
    description: '先保留唯一版本，把方向统一，再逐步增强内容与交互。',
  },
  {
    title: '再精选',
    description: '展示少量但真实的项目，让每一个区块都经得起停留和细看。',
  },
  {
    title: '最后扩展',
    description: '等主页稳定后，再把更多工具、实验和记录自然接进来。',
  },
];

const ownerName = '张旭';

export default function Home() {
  const { mode } = useMode();

  return (
    <Layout>
      <div id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-10">
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
          <div className="absolute inset-0 opacity-80">
            <div
              className={`absolute -right-20 top-0 h-64 w-64 rounded-full blur-3xl ${
                mode === 'zen' ? 'bg-sky-100' : 'bg-cyan-500/10'
              }`}
            />
            <div
              className={`absolute -left-10 bottom-0 h-56 w-56 rounded-full blur-3xl ${
                mode === 'zen' ? 'bg-stone-100' : 'bg-fuchsia-500/10'
              }`}
            />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                  mode === 'zen'
                    ? 'bg-black/[0.04] text-foreground/80'
                    : 'border border-primary/20 bg-primary/10 text-primary'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                现在只保留一个更完整的版本
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.45 }}
                className={`mt-6 text-sm tracking-[0.35em] ${
                  mode === 'zen' ? 'text-foreground/55' : 'text-primary/85'
                }`}
              >
                {ownerName}
              </motion.p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                把真实需求、项目片段和实验想法，
                <span className={mode === 'zen' ? 'text-foreground/55' : 'text-primary'}>
                  {' '}
                  收拢成一个顺手、耐看的个人主页。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                这一版开始把工程现场经验、AI 工具实践和网页迭代放进同一个入口里。它不再只是工具导航站，而是一个更接近我本人轨迹的主页版本。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'bg-foreground text-background hover:opacity-90'
                      : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  查看项目
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/translator/"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    mode === 'zen'
                      ? 'border border-black/10 bg-white hover:bg-black/[0.03]'
                      : 'border border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  打开翻译原型
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {currentTracks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                    className={`rounded-3xl px-4 py-4 ${
                      mode === 'zen'
                        ? 'border border-black/5 bg-black/[0.02]'
                        : 'border border-white/8 bg-white/[0.03]'
                    }`}
                  >
                    <div className="text-sm font-medium">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                  className={`rounded-3xl p-5 ${
                    mode === 'zen'
                      ? 'border border-black/5 bg-black/[0.02]'
                      : 'border border-white/8 bg-white/[0.03]'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="projects" className="grid gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                重点项目
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                先把真实可讲的部分放到前面
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              第二轮开始弱化“概念卡片”，把更接近真实经历和实际作品的内容放进来，其中至少保留一个可以直接打开的原型。
            </p>
          </div>

          <AnimatePresence>
            <div className="grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                  className={`group relative overflow-hidden rounded-[1.75rem] p-6 ${
                    mode === 'zen'
                      ? 'border border-black/5 bg-white/85 shadow-[0_12px_48px_rgba(15,23,42,0.06)]'
                      : 'border border-white/10 bg-card/85 shadow-[0_12px_48px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  <div
                    className={`absolute inset-x-6 top-0 h-px ${
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
                      {project.status}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {project.accent}
                    </span>
                  </div>

                  <div className="mt-8 inline-flex rounded-2xl p-3 text-primary">
                    <project.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <a
                    href={project.href}
                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      mode === 'zen'
                        ? 'bg-foreground text-background hover:opacity-90'
                        : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                    }`}
                  >
                    {project.actionLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>
        </section>

        <section id="focus" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div
            className={`rounded-[1.75rem] p-7 ${
              mode === 'zen'
                ? 'border border-black/5 bg-white/90 shadow-[0_12px_48px_rgba(15,23,42,0.05)]'
                : 'border border-white/10 bg-card/85 shadow-[0_12px_48px_rgba(0,0,0,0.3)]'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              当前重点
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              页面要好看，也要慢慢有自己的来路
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              这一版开始把“从哪里来、正在做什么、以后想补什么”讲得更清楚。视觉仍然重要，但它开始服务于更真实的内容，而不是单独存在。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.08, duration: 0.4 }}
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
                  <area.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className={`overflow-hidden rounded-[1.75rem] p-8 md:p-10 ${
            mode === 'zen'
              ? 'border border-black/5 bg-white/95 shadow-[0_16px_56px_rgba(15,23,42,0.06)]'
              : 'border border-white/10 bg-card/90 shadow-[0_16px_56px_rgba(0,0,0,0.35)]'
          }`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                迭代路径
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                主页会按这个顺序继续推进
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Compass className="h-4 w-4" />
              先统一，再增强
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 + index * 0.08, duration: 0.4 }}
                className={`rounded-[1.5rem] p-6 ${
                  mode === 'zen'
                    ? 'bg-black/[0.02] ring-1 ring-black/5'
                    : 'bg-white/[0.03] ring-1 ring-white/8'
                }`}
              >
                <div className="text-sm font-medium text-primary">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`relative overflow-hidden rounded-[1.75rem] p-8 md:p-10 ${
            mode === 'zen'
              ? 'border border-black/5 bg-gradient-to-br from-stone-50 to-white'
              : 'border border-white/10 bg-gradient-to-br from-card to-background'
          }`}
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                下一步
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                下一轮会继续补齐真实项目与联系方式
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                现在页面已经有了更明确的名字、项目线索和一个可直接打开的原型。接下来最值得补的是项目截图、联系入口，以及更贴近你个人语气的文字内容。
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
                href="#top"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  mode === 'zen'
                    ? 'border border-black/10 bg-white hover:bg-black/[0.03]'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                回到顶部
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
