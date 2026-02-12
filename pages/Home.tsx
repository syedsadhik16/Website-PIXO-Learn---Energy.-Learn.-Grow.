
import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for both libraries to resolve property errors
const m = motion as any;
import { ArrowRight, Star, ShieldCheck, Heart, Zap } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;
import PixelMascot from '../components/PixelMascot';
import { useLanguage } from '../translations';

// Helper component for floating background elements
const FloatingBlob = ({ color, size, duration, delay, xRange, yRange, initialX, initialY }: any) => (
  <m.div
    className={`absolute rounded-full blur-[140px] opacity-20 ${color} ${size} pointer-events-none -z-10`}
    initial={{ x: initialX, y: initialY }}
    animate={{
      x: [initialX, initialX + xRange, initialX - xRange / 2, initialX],
      y: [initialY, initialY - yRange, initialY + yRange / 1.5, initialY],
      scale: [1, 1.2, 0.9, 1],
      opacity: [0.15, 0.25, 0.18, 0.15],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  />
);

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Cinematic Background Blobs (Global for the page) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <FloatingBlob 
          color="bg-rose-300" size="w-[600px] h-[600px]" 
          duration={20} delay={0} xRange={150} yRange={100} 
          initialX="70%" initialY="-10%" 
        />
        <FloatingBlob 
          color="bg-emerald-300" size="w-[500px] h-[500px]" 
          duration={25} delay={2} xRange={-120} yRange={150} 
          initialX="-10%" initialY="60%" 
        />
        <FloatingBlob 
          color="bg-amber-300" size="w-[400px] h-[400px]" 
          duration={18} delay={4} xRange={100} yRange={-120} 
          initialX="10%" initialY="10%" 
        />
        <FloatingBlob 
          color="bg-blue-300" size="w-[450px] h-[450px]" 
          duration={22} delay={1} xRange={-80} yRange={180} 
          initialX="80%" initialY="80%" 
        />
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <m.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200/50 text-rose-600 px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-10 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                Official Mascot v2.0
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.9] mb-8 font-kids tracking-tighter">
                {t('hero.title1')} <br />
                <span className="text-emerald-500 relative">
                  {t('hero.title2')}
                  <m.svg 
                    className="absolute -bottom-2 left-0 w-full" 
                    viewBox="0 0 400 20" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <path d="M5 15 Q 100 5 395 15" stroke="#10b981" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </m.svg>
                </span>
              </h1>
              
              <p className="text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-[2rem] font-bold text-xl shadow-2xl shadow-slate-300 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group">
                  {t('hero.cta')}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/philosophy" className="w-full sm:w-auto text-center px-12 py-6 rounded-[2rem] font-bold text-xl text-slate-600 border-2 border-slate-100 bg-white/50 backdrop-blur hover:bg-white transition-all shadow-sm">
                  {t('hero.vision')}
                </Link>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    50k+
                  </div>
                </div>
                <div className="text-slate-400 text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  {t('hero.trusted')}
                </div>
              </div>
            </m.div>

            <m.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {/* Premium Mascot Illustration (Official Reference Style) */}
              <div className="relative z-20 flex justify-center items-center py-20">
                <PixelMascot size="xl" pose="learning" />
                
                {/* Floating Micro-UI elements */}
                <m.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -right-8 glass p-4 rounded-2xl border border-white/50 shadow-xl z-30 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center text-white">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] uppercase font-black text-slate-400">Energy Level</p>
                    <p className="text-sm font-bold text-slate-900">100% Sparked</p>
                  </div>
                </m.div>

                <m.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 -left-8 glass p-4 rounded-2xl border border-white/50 shadow-xl z-30 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] uppercase font-black text-slate-400">Mood Tracking</p>
                    <p className="text-sm font-bold text-slate-900">Super Happy</p>
                  </div>
                </m.div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-30">
                 <div className="w-full h-full border border-slate-200 rounded-full animate-spin-slow" />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-32 bg-slate-50/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-kids">{t('philosophy.title')}</h2>
            <p className="text-xl text-slate-500">{t('philosophy.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { color: 'rose', title: t('philosophy.energy'), icon: <Zap />, desc: t('philosophy.energyDesc') },
              { color: 'amber', title: t('philosophy.learn'), icon: <Star />, desc: t('philosophy.learnDesc') },
              { color: 'emerald', title: t('philosophy.grow'), icon: <ShieldCheck />, desc: t('philosophy.growDesc') }
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 text-center overflow-hidden">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-${item.color}-50 text-${item.color}-500 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                  </div>
                  <h3 className={`text-2xl font-black mb-4 text-${item.color}-600 uppercase tracking-widest`}>{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
