
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Fix: Bypass framer-motion property errors with any-casting
const m = motion as any;
import { Zap, BookOpen, TrendingUp } from 'lucide-react';
import PixelMascot from '../components/PixelMascot';

const Philosophy: React.FC = () => {
  // Helper function to generate premium radial mesh gradients from a single hex color
  const generateDynamicGradient = (hex: string) => {
    return `radial-gradient(at 0% 0%, ${hex}1a 0px, transparent 50%), radial-gradient(at 100% 0%, ${hex}0d 0px, transparent 50%), radial-gradient(at 50% 100%, ${hex}0a 0px, transparent 50%), #FFFFFF`;
  };

  const sections = [
    {
      id: 'energy',
      title: 'Energy',
      tagline: 'The Spark of Curiosity',
      description: 'We believe every child is naturally curious. Our journey starts by channeling that energy into excitement for new sounds and ideas.',
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
      title: 'Learning',
      tagline: 'The Joy of Discovery',
      description: 'Learning is not a chore, it\'s an adventure. Pixel guides children through immersive English stories and interactive play.',
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
      title: 'Growth',
      tagline: 'The Power of Results',
      description: 'From silence to storytelling. We track progress that matters: confidence, vocabulary, and the courage to speak.',
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

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Premium Header */}
      <section className="pt-24 pb-20 text-center container mx-auto px-6 relative overflow-hidden">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-kids tracking-tighter text-slate-900">
            Energy. Learn. <span className="text-emerald-500">Grow.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            A journey of confidence built on three pillars of emotional and educational development.
          </p>
        </m.div>
        
        {/* Subtle background ambient orbs */}
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
              <m.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <m.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{ background: section.theme.iconGradient }}
                  className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl mb-10"
                >
                  {section.icon}
                </m.div>
                
                <h2 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${section.theme.accent} font-kids`}>
                  {section.title}
                </h2>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                  {section.tagline}
                </h3>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                  {section.description}
                </p>
                
                {/* Visual Indicators */}
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
                          transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
                          style={{ background: section.theme.iconGradient }}
                          className="h-full"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </m.div>

              {/* Character Column */}
              <m.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="flex-1 flex justify-center relative"
              >
                <div className="relative z-20 hover:scale-105 transition-transform duration-500">
                  <PixelMascot pose={section.pose} size="lg" />
                </div>
                 
                 {/* Decorative Dynamic Orbs */}
                 <m.div 
                   animate={{ 
                     scale: [1, 1.4, 1],
                     rotate: [0, 90, 0],
                     x: [0, 40, 0],
                     y: [0, -40, 0]
                   }}
                   transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                   style={{ backgroundColor: section.theme.blobColor }}
                   className="absolute -z-10 w-[110%] h-[110%] rounded-full blur-[100px]" 
                 />
                 <m.div 
                   animate={{ 
                     scale: [1.2, 0.8, 1.2],
                     rotate: [0, -90, 0],
                     x: [0, -30, 0],
                     y: [0, 30, 0]
                   }}
                   transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                   style={{ backgroundColor: section.theme.blobColor, bottom: '-15%', right: '-15%' }}
                   className="absolute -z-10 w-4/5 h-4/5 rounded-full blur-[120px]" 
                 />
              </m.div>
            </div>
          </div>
          
          {/* Subtle line decoration at bottom of each section */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        </section>
      ))}

      {/* Engaging Final Footer CTA */}
      <section className="py-40 text-center bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 font-kids leading-tight">
              A child who speaks <br />
              <span className="text-emerald-400">without fear.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Join thousands of Indian parents who have transformed their child's learning journey with Pixel.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-14 py-6 rounded-[2rem] font-bold text-2xl shadow-2xl shadow-emerald-900/50 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4 mx-auto">
              Start Your Adventure
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                 <Zap size={18} fill="white" />
              </div>
            </button>
          </m.div>
        </div>
        
        {/* Cinematic Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(25)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: ['0%', '-30%'],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      </section>
    </div>
  );
};

export default Philosophy;
