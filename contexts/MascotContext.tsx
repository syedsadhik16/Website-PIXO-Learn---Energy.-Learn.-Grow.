
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MASCOTS, DEFAULT_MASCOT_ID, MascotConfig } from '../config/mascots';

interface MascotContextType {
  currentMascot: MascotConfig;
  setMascot: (id: string) => void;
  availableMascots: MascotConfig[];
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

export const MascotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentMascotId, setCurrentMascotId] = useState<string>(() => {
    // Try to load from localStorage if available
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pixo_mascot_id') || DEFAULT_MASCOT_ID;
    }
    return DEFAULT_MASCOT_ID;
  });

  const currentMascot = MASCOTS[currentMascotId] || MASCOTS[DEFAULT_MASCOT_ID];

  const setMascot = (id: string) => {
    if (MASCOTS[id]) {
      setCurrentMascotId(id);
      localStorage.setItem('pixo_mascot_id', id);
    }
  };

  const availableMascots = Object.values(MASCOTS);

  return (
    <MascotContext.Provider value={{ currentMascot, setMascot, availableMascots }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
};
