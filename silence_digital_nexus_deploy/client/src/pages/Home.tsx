import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Link2, Sparkles } from 'lucide-react';

const ownerName = '张旭';

type ToolCard = {
  name: string;
  category: string;
  description: string;
  href: string;
};

const toolCards: ToolCard[] = [
  {
    name: 'TinyWow',
    category: '文档效率',
    description: 'PDF、图片、文本等多合一免费工具箱。',
    href: 'https://tinywow.com/',
  },
  {
    name: 'remove.bg',
    category: '图片处理',
    description: '一键抠图，适合电商、头像和海报素材处理。',
    href: 'https://www.remove.bg/',
  },
  {
    name: 'iLovePDF',
    category: '文档效率',
    description: '合并、拆分、压缩、转换 PDF，一站式完成。',
    href: 'https://www.ilovepdf.com/',
  },
  {
    name: 'PDF24 Tools',
    category: '文档效率',
    description: '免费 PDF 全家桶，覆盖常见文件处理需求。',
    href: 'https://tools.pdf24.org/en/',
  },
  {
    name: 'Cleanup.pictures',
    category: '图片处理',
    description: '快速移除图片中的路人、杂物或不需要元素。',
    href: 'https://cleanup.pictures/',
  },
  {
    name: 'Excalidraw',
    category: '可视化表达',
    description: '手绘风流程图和思维草图，表达直观清晰。',
    href: 'https://excalidraw.com/',
  },
  {
    name: 'tldraw',
    category: '协作白板',
    description: '在线白板协作绘图，适合团队快速对齐思路。',
    href: 'https://www.tldraw.com/',
  },
  {
    name: 'Have I Been Pwned',
    category: '安全检查',
    description: '检查邮箱是否出现在已公开的数据泄露事件中。',
    href: 'https://haveibeenpwned.com/',
  },
  {
    name: 'Wormhole',
    category: '文件传输',
    description: '端到端加密大文件分享，发链接即可传输。',
    href: 'https://wormhole.app/',
  },
  {
    name: 'Class Central',
    category: '学习成长',
    description: '全球公开课聚合入口，快速定位优质课程。',
    href: 'https://www.classcentral.com/',
  },
  {
    name: 'Companies.tools',
    category: '技术洞察',
    description: '查看优秀团队在用的技术栈与开发工具。',
    href: 'https://companies.tools/',
  },
  {
    name: 'MuscleWiki',
    category: '健康训练',
    description: '按肌肉部位查训练动作，健身计划更直观。',
    href: 'https://musclewiki.com/',
  },
  {
    name: 'Internet Archive',
    category: '资料归档',
    description: '老网页、文档、音视频资料检索与保存宝库。',
    href: 'https://archive.org/',
  },
  {
    name: 'Drive & Listen',
    category: '沉浸体验',
    description: '云开车 + 城市电台沉浸体验，视觉听觉都很出彩。',
    href: 'https://drivenlisten.com/',
  },
  {
    name: 'SuperCook',
    category: '生活效率',
    description: '按现有食材反查菜谱，减少浪费，决策更快。',
    href: 'https://www.supercook.me/en/supercookstart/',
  },
];

const capabilityCards = [
  {
    title: '高实用密度',
    description: '每张卡片都对应一个可以立即打开并产生结果的工具。',
  },
  {
    title: '高分享效率',
    description: '一个链接即可发给朋友，手机和电脑都能快速浏览。',
  },
  {
    title: '高审美完成度',
    description: '统一玻璃卡片与动态反馈，视觉干净、科技感强。',
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

  const heroPanelClass =
    mode === 'zen'
      ? 'border-black/8 bg-white/62 shadow-[0_24px_80px_rgba(15,23,42,0.1)]'
      : 'border-white/15 bg-white/[0.05] shadow-[0_26px_90px_rgba(3,8,20,0.55)]';

  const cardPanelClass =
    mode === 'zen'
      ? 'border-white/75 bg-white/66 shadow-[0_14px_45px_rgba(15,23,42,0.09)]'
      : 'border-white/20 bg-white/[0.05] shadow-[0_16px_48px_rgba(4,8,20,0.45)]';

  const subtlePanelClass =
    mode === 'zen'
      ? 'border-black/8 bg-white/56 shadow-[0_12px_38px_rgba(15,23,42,0.08)]'
      : 'border-white/15 bg-white/[0.04] shadow-[0_14px_42px_rgba(0,0,0,0.35)]';

  return (
    <Layout>
      <div id="top" className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:gap-10">
        <section id="works" className="relative overflow-hidden rounded-[2.2rem]">
          <div
            className={`relative overflow-hidden rounded-[2.2rem] border p-7 backdrop-blur-3xl md:p-10 ${heroPanelClass}`}
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className={`absolute -left-16 top-0 h-48 w-48 rounded-full blur-3xl ${
                  mode === 'zen' ? 'bg-cyan-100/80' : 'bg-cyan-500/15'
                }`}
              />
              <div
                className={`absolute -right-16 bottom-0 h-56 w-56 rounded-full blur-3xl ${
                  mode === 'zen' ? 'bg-fuchsia-100/75' : 'bg-fuchsia-500/12'
                }`}
              />
            </div>

            <div className="relative z-10 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                    mode === 'zen'
                      ? 'bg-black/[0.04] text-foreground/75'
                      : 'border border-primary/20 bg-primary/12 text-primary'
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  全球热门网页小工具精选
                </div>

                <p className="mt-5 text-sm tracking-[0.35em] text-muted-foreground">{ownerName}</p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  15 个即开即用的工具卡片，
                  <span className={mode === 'zen' ? 'text-foreground/55' : 'text-primary'}>
                    {' '}
                    一页打包分享。
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                  从文档处理、图片创作到安全检查、学习成长，这一页只放可直接用的工具，帮你和朋友节省时间，放大效率。
                </p>
              </div>

              <div className="grid gap-4">
                <div
                  className={`rounded-[1.6rem] border p-5 backdrop-blur-2xl ${subtlePanelClass}`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">快速概览</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div>
                      <div className="text-2xl font-semibold">15</div>
                      <div className="text-xs text-muted-foreground">工具数量</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">8+</div>
                      <div className="text-xs text-muted-foreground">场景类型</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">100%</div>
                      <div className="text-xs text-muted-foreground">可点击直达</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#manifesto"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                      mode === 'zen'
                        ? 'bg-foreground text-background hover:opacity-90'
                        : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                    }`}
                  >
                    查看宣言
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://silencezx007.github.io/"
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium backdrop-blur-xl transition-all ${
                      mode === 'zen'
                        ? 'border-black/10 bg-white/75 hover:bg-white'
                        : 'border-white/20 bg-white/[0.05] hover:bg-white/[0.1]'
                    }`}
                  >
                    打开公开网址
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">工具卡片</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                全球好用网页工具，一屏速览
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              鼠标轻触卡片会有轻微动态反馈。所有工具都保留官方链接，点开即可使用。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {toolCards.map((tool, index) => (
              <motion.article
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  transition: { type: 'spring', stiffness: 240, damping: 22 },
                }}
                whileTap={{ scale: 0.997 }}
                transition={{ delay: 0.03 * index, duration: 0.38 }}
                className={`group relative overflow-hidden rounded-[1.7rem] border p-6 backdrop-blur-2xl transition-shadow duration-300 ${cardPanelClass}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    mode === 'zen'
                      ? 'bg-gradient-to-br from-white/45 via-sky-50/40 to-transparent'
                      : 'bg-gradient-to-br from-primary/18 via-cyan-400/10 to-transparent'
                  }`}
                />
                <div
                  className={`pointer-events-none absolute inset-x-6 top-0 h-px ${
                    mode === 'zen'
                      ? 'bg-gradient-to-r from-transparent via-black/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-primary/70 to-transparent'
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        mode === 'zen'
                          ? 'bg-black/[0.04] text-foreground/70'
                          : 'border border-white/15 bg-white/[0.04] text-foreground/85'
                      }`}
                    >
                      {tool.category}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-muted-foreground">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{tool.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{tool.description}</p>

                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      mode === 'zen'
                        ? 'border-black/10 bg-white/75 hover:-translate-y-0.5 hover:bg-white'
                        : 'border-white/20 bg-white/[0.05] hover:-translate-y-0.5 hover:bg-white/[0.1]'
                    }`}
                  >
                    立即打开
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="manifesto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-3xl md:p-10 ${heroPanelClass}`}
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className={`absolute left-0 top-0 h-52 w-52 rounded-full blur-3xl ${
                  mode === 'zen' ? 'bg-amber-100/70' : 'bg-amber-300/10'
                }`}
              />
              <div
                className={`absolute -right-16 -top-10 h-60 w-60 rounded-full blur-3xl ${
                  mode === 'zen' ? 'bg-blue-100/70' : 'bg-cyan-400/12'
                }`}
              />
            </div>

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm ${
                    mode === 'zen'
                      ? 'bg-black/[0.04] text-foreground/80'
                      : 'border border-primary/20 bg-primary/12 text-primary'
                  }`}
                >
                  工具宣言
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  把效率做成可分享的结果，
                  <span className={mode === 'zen' ? 'text-foreground/55' : 'text-primary'}>
                    {' '}
                    把好工具交给更多朋友。
                  </span>
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">
                  这页只保留高频、好用、可直达的工具。让访问者在几秒内看到价值，在几分钟内完成尝试，在一次分享后继续传播。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {capabilityCards.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.3rem] border p-5 backdrop-blur-2xl ${subtlePanelClass}`}
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="strengths" className="grid gap-5 md:grid-cols-3">
          {['效率工具', '视觉创作', '学习成长'].map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              className={`rounded-[1.5rem] border p-6 backdrop-blur-2xl ${subtlePanelClass}`}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Category {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{tag}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                挑选能直接改善体验、提升产出和拓展认知边界的高质量网页工具。
              </p>
            </motion.div>
          ))}
        </section>

        <section
          id="contact"
          className={`relative overflow-hidden rounded-[1.9rem] border p-8 backdrop-blur-3xl md:p-10 ${heroPanelClass}`}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">继续浏览</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                一页分享，持续更新
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
                如果你希望，我可以继续按“效率、创作、安全、生活”四条线每周补充一批工具卡片并同步到线上主页。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`inline-flex items-center justify-between gap-4 rounded-[1.2rem] border px-4 py-3 text-sm font-medium backdrop-blur-2xl transition-all ${
                    mode === 'zen'
                      ? 'border-black/10 bg-white/75 hover:-translate-y-0.5 hover:bg-white'
                      : 'border-white/20 bg-white/[0.05] hover:-translate-y-0.5 hover:bg-white/[0.1]'
                  }`}
                >
                  <span className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <span>{item.value}</span>
                  </span>
                  <Link2 className="h-4 w-4 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
