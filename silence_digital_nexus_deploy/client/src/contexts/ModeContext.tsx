import React, { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'zen' | 'cyberpunk';

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('zen');

  useEffect(() => {
    // Sync with Tailwind's dark mode class
    const root = window.document.documentElement;
    if (mode === 'cyberpunk') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  const toggleMode = () => {
    setModeState((prev) => (prev === 'zen' ? 'cyberpunk' : 'zen'));
  };

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
