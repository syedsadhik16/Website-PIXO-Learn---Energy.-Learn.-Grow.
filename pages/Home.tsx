import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for both libraries to resolve property errors
const m = motion as any;
import { ArrowRight, Star, ShieldCheck, Heart, Zap } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useNavigate } = ReactRouterDOM as any;
import Mascot from '../components/Mascot';
import ActionButton from '../components/ActionButton';
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
  const navigate = useNavigate();

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

      {/* Cinematic Hero Section - Headline Color/Layout Update */}
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
              
              <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] mb-8 font-kids tracking-tighter flex flex-col">
                <span className="text-red-500 drop-shadow-sm">{t('hero.title.energy')}</span>
                <span className="text-yellow-500 drop-shadow-sm">{t('hero.title.learn')}</span>
                <span className="text-emerald-500 relative inline-block">
                  {t('hero.title.grow')}
                  <m.svg 
                    className="absolute -bottom-4 left-0 w-full max-w-[300px]" 
                    viewBox="0 0 400 20" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <path d="M5 15 Q 100 5 395 15" stroke="#10b981" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </m.svg>
                </span>
              </h1>
              
              <p className="text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <ActionButton text={t('hero.cta')} onClick={() => navigate('/enroll')} />
                <Link to="/philosophy" className="w-full sm:w-auto text-center px-12 py-6 rounded-[2.5rem] font-bold text-xl text-slate-600 border-2 border-slate-100 bg-white/50 backdrop-blur hover:bg-white transition-all shadow-sm">
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
              <div className="relative z-20 flex justify-center items-center py-20">
                <Mascot size="xl" pose="standing" />
                
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
              { 
                bgColor: 'bg-red-50', 
                textColor: 'text-red-500', 
                title: t('philosophy.energy'), 
                icon: <Zap className="text-red-500" />, 
                desc: t('philosophy.energyDesc'),
                pose: 'hero' as const
              },
              { 
                bgColor: 'bg-yellow-50', 
                textColor: 'text-yellow-500', 
                title: t('philosophy.learn'), 
                icon: <Star className="text-yellow-500" />, 
                desc: t('philosophy.learnDesc'),
                pose: 'learning' as const
              },
              { 
                bgColor: 'bg-green-50', 
                textColor: 'text-green-600', 
                title: t('philosophy.grow'), 
                icon: <ShieldCheck className="text-green-600" />, 
                desc: t('philosophy.growDesc'),
                pose: 'growth' as const
              }
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
                  <div className="mb-8 flex justify-center">
                    <Mascot size="md" pose={item.pose} />
                  </div>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                  </div>
                  <h3 className={`text-2xl font-black mb-4 ${item.textColor} uppercase tracking-[0.2em]`}>{item.title}</h3>
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
