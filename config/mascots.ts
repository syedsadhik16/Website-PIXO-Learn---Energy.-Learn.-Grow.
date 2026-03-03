
export type MascotPose = 
  | 'standing' 
  | 'thinking' 
  | 'celebrating' 
  | 'learning' 
  | 'hero' 
  | 'logic' 
  | 'growth' 
  | 'meditating' 
  | 'tech';

export type UserType = 'student' | 'parent' | 'teacher' | 'guest';
export type ThemeType = 'light' | 'dark' | 'vibrant' | 'minimal';

export interface MascotAnimation {
  animate: any;
  transition?: any;
}

export interface MascotConfig {
  id: string;
  name: string;
  basePath: string;
  themeColor: string;
  glowColor: string;
  particleColors: string[];
  description: string;
  compatibleUserTypes: UserType[];
  compatibleThemes: ThemeType[];
  animations: Partial<Record<MascotPose, MascotAnimation>>;
}

const DEFAULT_ANIMATIONS: Record<MascotPose, MascotAnimation> = {
  standing: {
    animate: { y: [0, -8, 0] },
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  },
  thinking: {
    animate: { rotate: [0, -3, 3, 0], y: [0, -5, 0] },
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  },
  celebrating: {
    animate: { y: [0, -40, 0], scale: [1, 1.15, 1] },
    transition: { duration: 0.8, repeat: Infinity, ease: 'easeOut' }
  },
  learning: {
    animate: { rotate: [-1, 1, -1], y: [0, -2, 0] },
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  },
  hero: {
    animate: { scale: [1, 1.08, 1], y: [0, -12, 0], filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  },
  logic: {
    animate: { x: [-5, 5, -5] },
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  },
  growth: {
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  },
  meditating: {
    animate: { y: [0, -15, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  },
  tech: {
    animate: { scale: [1, 1.02, 1] },
    transition: { duration: 1, repeat: Infinity }
  }
};

export const MASCOTS: Record<string, MascotConfig> = {
  pixo: {
    id: 'pixo',
    name: 'PIXO',
    basePath: '/mascot',
    themeColor: 'blue',
    glowColor: 'bg-blue-400',
    particleColors: ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'],
    description: 'The energetic and curious PIXO robot.',
    compatibleUserTypes: ['student', 'guest'],
    compatibleThemes: ['vibrant', 'light'],
    animations: DEFAULT_ANIMATIONS,
  },
  pixel: {
    id: 'pixel',
    name: 'Pixel',
    basePath: 'https://ais-pre-r3p5ertfca4mqsy5z2lfaz-134739999685.asia-east1.run.app/mascot', // Fallback path
    themeColor: 'emerald',
    glowColor: 'bg-emerald-400',
    particleColors: ['bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-blue-500'],
    description: 'The precise and logical Pixel assistant, your ultimate learning companion.',
    compatibleUserTypes: ['student', 'teacher', 'parent'],
    compatibleThemes: ['minimal', 'light', 'dark', 'vibrant'],
    animations: {
      ...DEFAULT_ANIMATIONS,
      thinking: {
        animate: { rotate: [0, -5, 5, 0], y: [0, -6, 0] },
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
      },
      hero: {
        animate: { scale: [1, 1.1, 1], y: [0, -15, 0] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }
    },
  },
  spark: {
    id: 'spark',
    name: 'Spark',
    basePath: '/mascot',
    themeColor: 'purple',
    glowColor: 'bg-purple-400',
    particleColors: ['bg-indigo-500', 'bg-pink-500', 'bg-purple-500', 'bg-cyan-500'],
    description: 'The creative and imaginative Spark sprite.',
    compatibleUserTypes: ['student', 'parent'],
    compatibleThemes: ['vibrant', 'dark'],
    animations: {
      ...DEFAULT_ANIMATIONS,
      celebrating: {
        animate: { y: [0, -50, 0], scale: [1, 1.3, 1], rotate: [0, 360] },
        transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
      }
    },
  }
};

export const DEFAULT_MASCOT_ID = 'pixel';
