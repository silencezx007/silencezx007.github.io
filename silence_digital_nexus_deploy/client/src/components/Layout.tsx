import { useMode } from '@/contexts/ModeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';
import { ModeSwitcher } from './ModeSwitcher';

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { href: '#projects', label: '项目' },
  { href: '#focus', label: '方向' },
  { href: '#process', label: '方法' },
  { href: '#contact', label: '联系' },
];

export function Layout({ children }: LayoutProps) {
  const { mode } = useMode();

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-foreground transition-colors duration-700 ease-in-out">
      <div className="fixed inset-0 -z-10">
        <AnimatePresence mode="wait">
          {mode === 'zen' ? (
            <motion.div
              key="zen-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/zen-bg.jpg)' }}
            >
              <div className="absolute inset-0 bg-white/90" />
            </motion.div>
          ) : (
            <motion.div
              key="cyber-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/cyberpunk-bg.jpg)' }}
            >
              <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 mx-4 mt-4 md:mx-8">
        <div className="glass-panel flex h-16 items-center justify-between rounded-2xl px-4 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors ${
                mode === 'zen'
                  ? 'border-black/5 bg-white text-foreground'
                  : 'border-primary/30 bg-background/70 text-primary'
              }`}
            >
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.2em] text-foreground/80">
                个人主页
              </span>
              <span className="text-xs text-muted-foreground">持续打磨中</span>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  mode === 'zen'
                    ? 'text-muted-foreground hover:bg-black/[0.04] hover:text-foreground'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all md:inline-flex ${
                mode === 'zen'
                  ? 'bg-foreground text-background hover:opacity-90'
                  : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
              }`}
            >
              继续完善
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <ModeSwitcher />
          </div>
        </div>
      </header>

      <main className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-12 pt-28 md:px-8">
        {children}
      </main>

      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 md:hidden"
      >
        继续完善
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
