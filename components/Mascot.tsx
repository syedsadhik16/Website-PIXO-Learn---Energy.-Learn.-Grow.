
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMascot } from '../contexts/MascotContext';
import { MascotPose, MASCOTS } from '../config/mascots';

const m = motion as any;

interface MascotProps {
  pose?: MascotPose;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mascotId?: string; // Optional override for specific contexts
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({
  pose = 'standing',
  size = 'md',
  mascotId,
  className = '',
}) => {
  const { currentMascot: globalMascot } = useMascot();
  
  // Use provided mascotId or fallback to global mascot from context
  const mascot = mascotId ? (MASCOTS[mascotId] || globalMascot) : globalMascot;

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80 md:w-[400px] md:h-[400px]',
  };

  const getPoseAnimation = () => {
    const animation = mascot.animations[pose] || mascot.animations['standing'] || { animate: {}, transition: {} };
    return animation;
  };

  const getGlowColor = () => {
    if (pose === 'hero') return 'bg-red-400';
    if (pose === 'learning') return 'bg-yellow-400';
    if (pose === 'growth') return 'bg-green-400';
    return mascot.glowColor;
  };

  const animation = getPoseAnimation();

  return (
    <m.div
      className={`${sizes[size]} relative flex items-center justify-center ${className}`}
      animate={animation.animate}
      transition={animation.transition}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 blur-[90px] rounded-full opacity-20 ${getGlowColor()}`} />

      {/* Mascot Image */}
      <m.img
        src={`${mascot.basePath}/${pose}.png`}
        alt={`${mascot.name} mascot ${pose}`}
        className="relative z-10 w-full h-full object-contain select-none pointer-events-none drop-shadow-2xl"
        draggable={false}
        onError={(e: any) => {
          // Fallback to a placeholder if specific images are missing
          e.target.src = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${mascot.id}-${pose}&backgroundColor=transparent&eyes=happy&mouth=smile`;
        }}
      />

      {/* Dynamic Particles */}
      <AnimatePresence>
        {[...Array(pose === 'celebrating' ? 12 : 6)].map((_, i) => (
          <m.span
            key={i}
            className={`absolute w-2 h-2 rounded-[2px] opacity-40 ${
              mascot.particleColors[i % mascot.particleColors.length]
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

export default Mascot;
