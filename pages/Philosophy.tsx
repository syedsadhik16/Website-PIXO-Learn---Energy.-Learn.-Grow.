import React from 'react';
import { motion } from 'framer-motion';
// Fix: Bypass framer-motion property errors with any-casting
const m = motion as any;
import { Zap, BookOpen, TrendingUp } from 'lucide-react';
import PIXOMascot from '../components/PIXOMascot';
import { useLanguage } from '../translations';

const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  // Helper function to generate premium radial mesh gradients from a single hex color
  const generateDynamicGradient = (hex: string) => {
    return `radial-gradient(at 0% 0%, ${hex}1a 0px, transparent 50%), radial-gradient(at 100% 0%, ${hex}0d 0px, transparent 50%), radial-gradient(at 50% 100%, ${hex}0a 0px, transparent 50%), #FFFFFF`;
  };

  const sections = [
    {
      id: 'energy',
      title: t('philosophy.energy'),
      tagline: t('philosophy.energyTag'),
      description: t('philosophy.energyDesc'),
      theme: {
        primary: '#f43f5e', // rose-500
        accent: 'text-rose-600',
        bgGradient: generateDynamicGradient('#f43f5e'),
        iconGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
        blobColor: 'rgba(244, 63, 94, 0.15)'
      },
      icon: <Zap size={32} />,
      pose: 'celebrating' as const
    },
    {
      id: 'learning',
      title: t('philosophy.learn'),
      tagline: t('philosophy.learnTag'),
      description: t('philosophy.learnDesc'),
      theme: {
        primary: '#fbbf24', // amber-400
        accent: 'text-amber-600',
        bgGradient: generateDynamicGradient('#fbbf24'),
        iconGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        blobColor: 'rgba(251, 191, 36, 0.15)'
      },
      icon: <BookOpen size={32} />,
      pose: 'learning' as const
    },
    {
      id: 'growth',
      title: t('philosophy.grow'),
      tagline: t('philosophy.growTag'),
      description: t('philosophy.growDesc'),
      theme: {
        primary: '#10b981', // emerald-500
        accent: 'text-emerald-600',
        bgGradient: generateDynamicGradient('#10b981'),
        iconGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        blobColor: 'rgba(16, 185, 129, 0.15)'
      },
      icon: <TrendingUp size={32} />,
      pose: 'thinking' as const
    }
  ];

  // Subtle animation settings for icons and text
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.1, 
        ease: [0.21, 1.02, 0.47, 0.98] 
      }
    })
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Premium Header */}
      <section className="pt-24 pb-20 text-center container mx-auto px-6 relative overflow-hidden">
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          custom={0}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-kids tracking-tighter text-slate-900">
            {t('hero.title1')} <span className="text-emerald-500">{t('hero.title2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('philosophy.subtitle')}
          </p>
        </m.div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
           <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-100 blur-[100px] rounded-full opacity-40 animate-pulse" />
           <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-100 blur-[100px] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Dynamic Themed Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id} 
          style={{ background: section.theme.bgGradient }}
          className="py-32 md:py-48 overflow-hidden relative"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              {/* Text Content */}
              <div className="flex-1">
                <m.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={iconVariant}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  style={{ background: section.theme.iconGradient }}
                  className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl mb-10 cursor-pointer"
                >
                  {section.icon}
                </m.div>
                
                <m.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariant}
                  custom={1}
                  className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${section.theme.accent} font-kids`}
                >
                  {section.title}
                </m.h2>
                
                <m.h3 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariant}
                  custom={2}
                  className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
                >
                  {section.tagline}
                </m.h3>
                
                <m.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariant}
                  custom={3}
                  className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium"
                >
                  {section.description}
                </m.p>
                
                {/* Visual Progress Indicators */}
                <div className="mt-12 flex gap-4">
                  {[1, 2, 3].map(i => (
                    <div 
                      key={i} 
                      className="w-16 h-2 rounded-full overflow-hidden bg-slate-200/40 backdrop-blur-sm"
                    >
                      {index >= i-1 && (
                        <m.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.2, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                          style={{ background: section.theme.iconGradient }}
                          className="h-full"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Character Column */}
              <m.div 
                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 flex justify-center relative"
              >
                <div className="relative z-20 hover:scale-105 transition-transform duration-500">
                  <PIXOMascot pose={section.pose} size="lg" />
                </div>
                 
                 <m.div 
                   animate={{ 
                     scale: [1, 1.2, 1],
                     rotate: [0, 90, 0],
                     x: [0, 20, 0],
                     y: [0, -20, 0]
                   }}
                   transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                   style={{ backgroundColor: section.theme.blobColor }}
                   className="absolute -z-10 w-[110%] h-[110%] rounded-full blur-[100px]" 
                 />
              </m.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        </section>
      ))}

      {/* Engaging Final Footer CTA */}
      <section className="py-40 text-center bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUpVariant}
            custom={0}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 font-kids leading-tight">
              {t('phil.footer.title')} <br />
              <span className="text-emerald-400">{t('phil.footer.fear')}</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              {t('phil.footer.desc')}
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-14 py-6 rounded-[2rem] font-bold text-2xl shadow-2xl shadow-emerald-900/50 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4 mx-auto">
              {t('phil.footer.cta')}
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                 <Zap size={18} fill="white" />
              </div>
            </button>
          </m.div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: ['10%', '-10%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: Math.random() * 8 + 4, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
