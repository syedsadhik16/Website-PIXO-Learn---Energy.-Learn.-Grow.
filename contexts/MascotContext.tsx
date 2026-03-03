
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MASCOTS, DEFAULT_MASCOT_ID, MascotConfig, UserType, ThemeType } from '../config/mascots';

interface MascotContextType {
  currentMascot: MascotConfig;
  setMascot: (id: string) => void;
  availableMascots: MascotConfig[];
  currentTheme: ThemeType;
  getMascotsForUserType: (userType: UserType) => MascotConfig[];
  getMascotsForTheme: (theme: ThemeType) => MascotConfig[];
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

export const MascotProvider: React.FC<{ children: ReactNode; theme?: ThemeType }> = ({ 
  children, 
  theme = 'light' 
}) => {
  const [currentMascotId, setCurrentMascotId] = useState<string>(() => {
    // Try to load from localStorage if available
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pixo_mascot_id') || DEFAULT_MASCOT_ID;
    }
    return DEFAULT_MASCOT_ID;
  });

  const allMascots = Object.values(MASCOTS);
  
  // Filter available mascots based on the theme prop
  const availableMascots = allMascots.filter(m => m.compatibleThemes.includes(theme as ThemeType));

  // Ensure current mascot is compatible with the current theme
  const currentMascot = MASCOTS[currentMascotId] && MASCOTS[currentMascotId].compatibleThemes.includes(theme as ThemeType)
    ? MASCOTS[currentMascotId]
    : (availableMascots[0] || MASCOTS[DEFAULT_MASCOT_ID]);

  // Sync currentMascotId if the theme makes it invalid
  useEffect(() => {
    if (currentMascot.id !== currentMascotId) {
      setCurrentMascotId(currentMascot.id);
    }
  }, [theme, currentMascot.id, currentMascotId]);

  const setMascot = (id: string) => {
    if (MASCOTS[id]) {
      setCurrentMascotId(id);
      localStorage.setItem('pixo_mascot_id', id);
    }
  };

  const getMascotsForUserType = (userType: UserType) => {
    return allMascots.filter(m => m.compatibleUserTypes.includes(userType));
  };

  const getMascotsForTheme = (t: ThemeType) => {
    return allMascots.filter(m => m.compatibleThemes.includes(t));
  };

  return (
    <MascotContext.Provider value={{ 
      currentMascot, 
      setMascot, 
      availableMascots,
      currentTheme: theme,
      getMascotsForUserType,
      getMascotsForTheme
    }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = (themeOverride?: ThemeType) => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot must be used within a MascotProvider');
  }

  // If a theme override is provided, filter the available mascots accordingly
  if (themeOverride) {
    return {
      ...context,
      availableMascots: context.getMascotsForTheme(themeOverride)
    };
  }

  return context;
};
