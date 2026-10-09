import { Layout } from '@/components/Layout';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, Link2, Mail, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

// 页面上的文字都集中在这一段，改内容只动这里。改完记得顺手更新 LAST_UPDATED。
const LAST_UPDATED = '2026 年 10 月';

const careerStats = [
  { value: '8', unit: '个部门', note: '直接领导' },
  { value: '500+', unit: '人', note: '中方 104 · 属地 400+' },
  { value: '5', unit: '个专业部门', note: '从零组建' },
  { value: '100+', unit: '项操作规程', note: '引入中国民航标准' },
];

const careerPath = [
  {
    when: '2010 起',
    title: '坦桑尼亚、乌干达 · 海外采购',
    body: '在乌干达从无到有建起采购、物流、清关体系。',
  },
  {
    when: '2017–2023',
    title: '14 亿美元机场工程 · 供应与物流',
    body: '负责项目全部设备物资供应和海陆物流。',
  },
  {
    when: '2024 至今',
    title: '罗安达内图博士国际机场 · 运维项目总经理',
    body: '建转营窗口期牵头做运维方案，2024 年 9 月签下数千万美元级运维合同。',
    current: true,
  },
];

const awards = '2024 年度：市场开发奖 · 总经理特别奖 · 一线优秀管理人才';

const nowItems = [
  {
    title: '采购邮件 Agent',
    status: '在建',
    state: 'wip',
    body: '读审批回复、匹配供应商、拟好询价邮件，直接放进工作邮箱的草稿箱。发不发，我说了算。',
  },
  {
    title: 'Obsidian 三库',
    status: '每天在用',
    state: 'live',
    body: '网页、AI 对话、工作里的判断，都沉淀进三个长期库。下次再问，AI 能接着上次往下说。',
  },
  {
    title: 'Agent 分工',
    status: '实验中',
    state: 'wip',
    body: 'Codex、Hermes、OpenClaw 各管一摊：目录分开、记忆分开，先用真实任务看谁接得住，再放权。',
  },
];

const mainWork = {
  seal: '智',
  title: 'IWS 智慧工作系统',
  tag: '主力作品 · 每天在跑',
  body: '把自己的采购工作搬进一套系统：采购批次、供应商、邮件、线上订单对账都在里面跑。SQLite + FastAPI + HTMX，和 AI 一起写的。',
};

const works = [
  {
    seal: '网',
    title: 'IWS 供应商生态图谱',
    tag: '交互图谱',
    href: '/iws-graph/',
    body: 'IWS 里的供应商、地区和客户连成一张网：谁供谁、分布在哪，一眼看清，可拖可点。数据已脱敏。',
  },
  {
    seal: '山',
    title: '山河长卷',
    tag: '代码画',
    href: '/shanhe/',
    body: '一幅永远画不完的青绿山水。念一句诗，画就变成诗里的样子；没有一张图片、一段录音，全部由代码当场生成。',
  },
];

const profileRows = [
  ['现职', '罗安达机场运维项目总经理'],
  ['履历', '13 年采购 · 6 年海外 · 机场运维'],
  ['在做', '工作流自动化 · AI 场景落地'],
  ['常用', 'Claude Code · Codex · Obsidian · FastAPI'],
  ['业余', '说唱、用代码画山水'],
];

const beliefs = [
  {
    title: '结果要落进草稿箱，不是聊天框。',
    body: '建议写得再好，没进草稿箱、附件夹和状态表，就等于没干。',
  },
  {
    title: '记忆不是收藏夹。',
    body: '收藏了不看等于没收藏。能让下一次对话接得上的，才叫记忆。',
  },
  {
    title: '先核验，再放权。',
    body: '事实、合规、发送这几步必须我点头；Agent 先在真实任务里证明自己，再接管。',
  },
];

const links = [
  { label: 'GitHub', value: 'github.com/silencezx007', href: 'https://github.com/silencezx007' },
  { label: 'Email', value: 'silencezx009@gmail.com', href: 'mailto:silencezx009@gmail.com' },
];

type Heartbeat = {
  updated_at: string;
  batches_managed: number;
  suppliers: number;
  adyen_orders: number;
  tests: number;
};

// IWS 的计数由本机 heartbeat_export.py 推到站点根目录；读不到就不显示，不影响页面。
function useHeartbeat() {
  const [data, setData] = useState<Heartbeat | null>(null);

  useEffect(() => {
    fetch('/heartbeat.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && typeof d.tests === 'number' && setData(d))
      .catch(() => {});
  }, []);

  return data;
}

export default function Home() {
  const { mode } = useMode();
  const dark = mode !== 'zen';
  const [playing, setPlaying] = useState(false);
  const heartbeat = useHeartbeat();

  return (
    <Layout>
      <div id="top" className="archive-page mx-auto flex w-full max-w-[1520px] flex-col">
        <section className="archive-hero">
          <div className="hero-copy">
            <p className="archive-kicker">HELLO · ZHANG XU</p>
            <h1 className="display-title">我是张旭。</h1>
            <p className="hero-subtitle">
              罗安达内图博士国际机场运维项目总经理，带着 8 个部门、500 多人，把一座新机场从“建”带到“管”。现在把带队伍的办法用到 AI 上，让业务流程自己跑起来。
            </p>
            <div className="hero-actions">
              <a href="#now" className="archive-button primary">
                我在做什么
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#career" className="archive-button">
                看经历
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/shanhe/" target="_blank" rel="noopener" className="archive-button">
                全屏展卷
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="hero-shanhe-tip">
              这幅山水是代码实时画的：点山种树，点天空惊起飞鸟、夜里放孔明灯，点水跃出锦鲤。
            </p>
          </div>

          <div className="hero-visual">
            {/* 山河长卷直接在 Hero 里玩：#embed 自动展卷、默认静音；深色模式直接入夜。改了 shanhe 就改 ?v=，否则浏览器会用缓存的旧版 */}
            <iframe
              key={mode}
              src={`/shanhe/?v=20261008b#embed&tod=${dark ? '0.86' : '0.42'}`}
              title="山河长卷：可点击的程序化青绿山水"
              allow="fullscreen; autoplay"
              allowFullScreen
            />
          </div>
        </section>

        <section id="now" className="archive-section now-section">
          <div className="section-heading">
            <div>
              <p className="archive-kicker">NOW / 在做</p>
              <h2 className="section-title">最近在忙的几件事</h2>
            </div>
            <p className="section-stamp">更新于 {LAST_UPDATED}</p>
          </div>

          <div className="now-grid">
            {nowItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ delay: index * 0.06 }}
                className="now-card"
              >
                <span className="now-status" data-state={item.state}>
                  {item.status}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="works" className="archive-section works-section">
          <div className="section-heading">
            <div>
              <p className="archive-kicker">WORKS / 作品</p>
              <h2 className="section-title">做出来的东西</h2>
            </div>
            <p className="section-stamp">都是和 AI 一起做出来的</p>
          </div>

          <div className="works-grid">
            <motion.article
              initial={{ opacity: 0.72, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              className="work-card is-main"
            >
              <div className="work-main-copy">
                <span className="work-seal" aria-hidden="true">
                  {mainWork.seal}
                </span>
                <div className="work-copy">
                  <span className="note-tag">{mainWork.tag}</span>
                  <h3>{mainWork.title}</h3>
                  <p>{mainWork.body}</p>
                </div>
              </div>
              {heartbeat && (
                <div className="now-stats">
                  <dl>
                    <div>
                      <dt>自动化测试</dt>
                      <dd>{heartbeat.tests}</dd>
                    </div>
                    <div>
                      <dt>采购批次</dt>
                      <dd>{heartbeat.batches_managed}</dd>
                    </div>
                    <div>
                      <dt>供应商画像</dt>
                      <dd>{heartbeat.suppliers}</dd>
                    </div>
                    <div>
                      <dt>订单自动对账</dt>
                      <dd>{heartbeat.adyen_orders}</dd>
                    </div>
                  </dl>
                  <small>数字由系统自动导出，不是手写的 · 截至 {heartbeat.updated_at.slice(0, 10)}</small>
                </div>
              )}
            </motion.article>

            {works.map((work, index) => (
              <motion.a
                key={work.href}
                href={work.href}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0.72, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ delay: (index + 1) * 0.05 }}
                className="work-card"
              >
                <span className="work-seal" aria-hidden="true">
                  {work.seal}
                </span>
                <div className="work-copy">
                  <span className="note-tag">{work.tag}</span>
                  <h3>{work.title}</h3>
                  <p>{work.body}</p>
                </div>
                <span className="work-open">
                  打开
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="career" className="archive-section career-section">
          <div className="section-heading">
            <div>
              <p className="archive-kicker">CAREER / 经历</p>
              <h2 className="section-title">
                把一座新机场，
                <br />
                从“建”带到“管”。
              </h2>
            </div>
            <p className="section-stamp">安哥拉 · 罗安达 · 2024 至今</p>
          </div>

          <div className="career-grid">
            <motion.div
              initial={{ opacity: 0.72, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              className="career-main"
            >
              <p className="career-lead">
                我是罗安达内图博士国际机场运维项目的总经理。机场由建转营那段窗口期，我牵头做运维方案，跟了一年多拿下运维合同；之后从零搭队伍、立规矩、上系统。
              </p>
              <dl className="career-stats">
                {careerStats.map((stat) => (
                  <div key={stat.note}>
                    <dt>{stat.note}</dt>
                    <dd>
                      <strong>{stat.value}</strong>
                      <span>{stat.unit}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <a href="/airport/" className="archive-button primary">
                看团队架构
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.72, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ delay: 0.08 }}
              className="career-path"
            >
              <p className="belief-heading">一路走过来</p>
              <p className="career-path-note">累计 13 年采购经验，其中 6 年在海外</p>
              <ol>
                {careerPath.map((step) => (
                  <li key={step.when} className={step.current ? 'is-current' : undefined}>
                    <span className="career-when">{step.when}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
              <p className="career-awards">{awards}</p>
            </motion.div>
          </div>
        </section>

        <section className="impact-section">
          <div className={`impact-frame${playing ? ' is-playing' : ''}`}>
            {playing ? (
              <video
                className="impact-video"
                src="/videos/ep01-baogongtou.mp4"
                poster="/videos/ep01-baogongtou.jpg"
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            ) : (
              <>
                <div className="rec-line">
                  <span>REC 00:00:00</span>
                  <span>EP.01 · 一人公司说唱 · 02:00</span>
                </div>
                <div className="impact-center">
                  <button
                    type="button"
                    className="impact-play"
                    aria-label="播放 EP.01 说唱视频《包工头》"
                    onClick={() => setPlaying(true)}
                  >
                    <Play className="h-7 w-7" />
                  </button>
                  <h2>《包工头》</h2>
                  <p>一人公司说唱第一集，从海外唱到回国。点一下，听两分钟。</p>
                </div>
                <div className="impact-progress">
                  <span>00:00</span>
                  <div />
                  <span>点击播放</span>
                </div>
              </>
            )}
          </div>
        </section>

        <section id="about" className="archive-section about-grid">
          <motion.div
            initial={{ opacity: 0.72, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            className="dossier-card"
          >
            <p className="archive-kicker">ABOUT / 关于</p>
            <h2 className="section-title">
              重复的活交给机器，
              <br />
              判断留给自己。
            </h2>
            <p className="section-copy">
              在工作里，这意味着把采购批次、供应商、邮件和订单装进一套自己写的系统；在生活里，它是一幅用代码画、永远画不完的山水。比起“AI 无所不能”，我更信一件件落了地、能复盘的小系统。
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

          <div className="belief-column">
            <p className="belief-heading">最近想明白的几件事</p>
            <div className="ranked-notes">
              {beliefs.map((belief, index) => (
                <motion.article
                  key={belief.title}
                  initial={{ opacity: 0.72, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="rank-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{belief.title}</h3>
                    <p>{belief.body}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="archive-kicker">CONTACT / 联系</p>
          <h2 className="display-title">Let's build.</h2>
          <p>想聊 AI 怎么进真实工作、采购流程怎么自动化、一人公司怎么起步，或者只是想说一句山水好看——发邮件最快。</p>
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
      </div>
    </Layout>
  );
}
