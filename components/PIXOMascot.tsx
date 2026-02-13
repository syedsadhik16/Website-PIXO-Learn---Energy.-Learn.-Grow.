import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Use any-casted motion for bypassing property type errors
const m = motion as any;

interface PIXOMascotProps {
  pose?: 'standing' | 'thinking' | 'celebrating' | 'learning' | 'hero';
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
        return { rotate: [0, -5, 5, 0], y: [0, -6, 0] };
      case 'celebrating':
        return { y: [0, -35, 0], scale: [1, 1.1, 1] };
      case 'learning':
        return { rotate: [-2, 2, -2] };
      case 'hero':
        return { scale: [1, 1.05, 1], y: [0, -10, 0] };
      default:
        return { y: [0, -8, 0] };
    }
  };

  return (
    <m.div
      className={`${sizes[size]} relative flex items-center justify-center`}
      animate={getPoseAnimation()}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Soft Aura */}
      <div className="absolute inset-0 bg-blue-400/10 blur-[90px] rounded-full" />

      {/* Mascot Image (SOURCE OF TRUTH) */}
      <m.img
        src={`/mascot/${pose}.png`}
        alt={`PIXO mascot ${pose}`}
        className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
        draggable={false}
      />

      {/* Ambient Pixel Effects */}
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <m.span
            key={i}
            className={`absolute w-2 h-2 rounded-[2px] opacity-40 ${
              ['bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-blue-500'][i % 4]
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 180 - 90,
              y: Math.random() * -140 - 40,
              rotate: 360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </AnimatePresence>
    </m.div>
  );
};

export default PIXOMascot;
