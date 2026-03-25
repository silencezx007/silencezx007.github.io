import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { Moon, Sun, Zap } from 'lucide-react';

export function ModeSwitcher() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center justify-center w-16 h-8 rounded-full bg-muted border border-border shadow-inner overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-500"
      aria-label="切换模式"
    >
      {/* Background Track Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-200 to-indigo-200 dark:from-purple-900 dark:to-cyan-900 opacity-50"
        animate={{
          opacity: mode === 'zen' ? 0.5 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Sliding Knob */}
      <motion.div
        className="absolute left-1 w-6 h-6 rounded-full bg-background shadow-md flex items-center justify-center z-10"
        animate={{
          x: mode === 'zen' ? 0 : 32,
          backgroundColor: mode === 'zen' ? '#ffffff' : '#000000',
          borderColor: mode === 'zen' ? 'transparent' : 'var(--neon-cyan)',
          borderWidth: mode === 'zen' ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: mode === 'zen' ? 0 : 180, scale: mode === 'zen' ? 1 : 0 }}
          className="absolute"
        >
          <Sun className="w-4 h-4 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ rotate: mode === 'cyberpunk' ? 0 : -180, scale: mode === 'cyberpunk' ? 1 : 0 }}
          className="absolute"
        >
          <Zap className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Icons on the track */}
      <div className="absolute left-2 text-muted-foreground opacity-50">
        <Sun className="w-4 h-4" />
      </div>
      <div className="absolute right-2 text-muted-foreground opacity-50">
        <Moon className="w-4 h-4" />
      </div>
    </button>
  );
}
