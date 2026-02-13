import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Use any-casted motion for bypassing property type errors
const m = motion as any;

export type PIXOPose = 
  | 'standing' 
  | 'thinking' 
  | 'celebrating' 
  | 'learning' 
  | 'hero' 
  | 'logic' 
  | 'growth' 
  | 'meditating' 
  | 'tech';

interface PIXOMascotProps {
  pose?: PIXOPose;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const PIXOMascot: React.FC<PIXOMascotProps> = ({
  pose = 'standing',
  size = 'md',
}) => {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80 md:w-[400px] md:h-[400px]',
  };

  const getPoseAnimation = () => {
    switch (pose) {
      case 'thinking':
        return { 
          rotate: [0, -3, 3, 0], 
          y: [0, -5, 0],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } 
        };
      case 'celebrating':
        return { 
          y: [0, -40, 0], 
          scale: [1, 1.15, 1],
          transition: { duration: 0.8, repeat: Infinity, ease: 'easeOut' }
        };
      case 'learning':
        return { 
          rotate: [-1, 1, -1],
          y: [0, -2, 0],
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'hero':
        return { 
          scale: [1, 1.08, 1], 
          y: [0, -12, 0],
          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'],
          transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'logic':
        return {
          x: [-5, 5, -5],
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'growth':
        return {
          scale: [1, 1.05, 1],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'meditating':
        return {
          y: [0, -15, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'tech':
        return {
          scale: [1, 1.02, 1],
          transition: { duration: 1, repeat: Infinity }
        };
      default:
        return { 
          y: [0, -8, 0],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        };
    }
  };

  return (
    <m.div
      className={`${sizes[size]} relative flex items-center justify-center`}
      animate={getPoseAnimation()}
    >
      {/* Background Glow based on pose */}
      <div className={`absolute inset-0 blur-[90px] rounded-full opacity-20 ${
        pose === 'hero' ? 'bg-red-400' :
        pose === 'learning' ? 'bg-yellow-400' :
        pose === 'growth' ? 'bg-green-400' :
        'bg-blue-400'
      }`} />

      {/* Mascot Image - Path corresponds to the character variants from user images */}
      <m.img
        src={`/mascot/${pose}.png`}
        alt={`PIXO mascot ${pose}`}
        className="relative z-10 w-full h-full object-contain select-none pointer-events-none drop-shadow-2xl"
        draggable={false}
        onError={(e: any) => {
          // Fallback to a placeholder if specific images are missing in the local directory
          e.target.src = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${pose}&backgroundColor=transparent`;
        }}
      />

      {/* Dynamic Pixel Particles */}
      <AnimatePresence>
        {[...Array(pose === 'celebrating' ? 12 : 6)].map((_, i) => (
          <m.span
            key={i}
            className={`absolute w-2 h-2 rounded-[2px] opacity-40 ${
              ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'][i % 4]
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * -180 - 40,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </AnimatePresence>
    </m.div>
  );
};

export default PIXOMascot;
