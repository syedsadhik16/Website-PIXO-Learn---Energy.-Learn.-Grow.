
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

export interface MascotConfig {
  id: string;
  name: string;
  basePath: string;
  themeColor: string;
  glowColor: string;
  particleColors: string[];
  description: string;
}

export const MASCOTS: Record<string, MascotConfig> = {
  pixo: {
    id: 'pixo',
    name: 'PIXO',
    basePath: '/mascot',
    themeColor: 'blue',
    glowColor: 'bg-blue-400',
    particleColors: ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'],
    description: 'The energetic and curious PIXO robot.',
  },
  pixel: {
    id: 'pixel',
    name: 'Pixel',
    basePath: '/mascot',
    themeColor: 'emerald',
    glowColor: 'bg-emerald-400',
    particleColors: ['bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-blue-500'],
    description: 'The precise and logical Pixel assistant.',
  },
  spark: {
    id: 'spark',
    name: 'Spark',
    basePath: '/mascot',
    themeColor: 'purple',
    glowColor: 'bg-purple-400',
    particleColors: ['bg-indigo-500', 'bg-pink-500', 'bg-purple-500', 'bg-cyan-500'],
    description: 'The creative and imaginative Spark sprite.',
  }
};

export const DEFAULT_MASCOT_ID = 'pixo';
