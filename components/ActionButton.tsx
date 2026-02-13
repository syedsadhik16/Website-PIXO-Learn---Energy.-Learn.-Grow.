import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
const { useNavigate } = ReactRouterDOM as any;

// Fix: Use any-casting for framer-motion to resolve environment property errors
const m = motion as any;

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  to?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  text, 
  onClick, 
  className = "", 
  type = 'button',
  variant = 'primary',
  to
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  const isPrimary = variant === 'primary';

  return (
    <m.button
      type={type}
      onClick={handleClick}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={`group relative px-10 py-5 rounded-[2.5rem] font-bold text-xl transition-all overflow-hidden flex items-center justify-center gap-5 min-w-[280px] border ${
        isPrimary 
          ? 'bg-[#10b981] text-white border-transparent shadow-[0_20px_40px_rgba(16,185,129,0.25)]' 
          : 'bg-white text-slate-900 border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.05)]'
      } ${className}`}
    >
      {/* 1. Powerful Glow Background */}
      <m.div
        variants={{
          initial: { opacity: isPrimary ? 0.5 : 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1.2 }
        }}
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 ${
          isPrimary ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-blue-100/50'
        }`}
      />

      {/* 2. Light Sweep Animation */}
      <m.div
        variants={{
          initial: { x: '-100%' },
          hover: { x: '200%' }
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 0.5
        }}
        className={`absolute top-0 bottom-0 left-0 w-1/3 -skew-x-12 z-0 pointer-events-none ${
          isPrimary ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-50/50 to-transparent'
        }`}
      />

      {/* 3. Button Text */}
      <span className="relative z-10 tracking-tight">
        {text}
      </span>

      {/* 4. Power Icon Badge */}
      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border shadow-inner ${
        isPrimary ? 'bg-white/20 border-white/30' : 'bg-blue-50 border-blue-100'
      }`}>
        {/* Pulsing Lightning Bolt */}
        <m.div
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [1, 0.8, 1],
            filter: isPrimary ? ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] : 'none'
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Zap 
            size={22} 
            fill={isPrimary ? "white" : "#3b82f6"} 
            className={`${isPrimary ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' : 'text-blue-500'}`} 
          />
        </m.div>

        {/* Expanding Energy Rings */}
        <m.div 
          animate={{ 
            scale: [1, 1.8],
            opacity: [0.4, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeOut"
          }}
          className={`absolute inset-0 rounded-full border-2 ${isPrimary ? 'border-white/40' : 'border-blue-400/20'}`}
        />
      </div>

      {/* 5. Electric Sparkles on Hover (Primary Only) */}
      {isPrimary && (
        <m.div 
          className="absolute inset-0 pointer-events-none"
          variants={{
            hover: { opacity: 1 }
          }}
          initial={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{ 
                y: [0, -40],
                x: [0, (i % 2 === 0 ? 20 : -20)],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeOut" 
              }}
              style={{ 
                left: `${20 + (i * 15)}%`,
                top: '80%'
              }}
            />
          ))}
        </m.div>
      )}
    </m.button>
  );
};

export default ActionButton;