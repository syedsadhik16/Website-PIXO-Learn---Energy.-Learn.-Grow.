import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for motion to resolve property errors
const m = motion as any;
import MascotComponent from '../components/Mascot';
import { useLanguage } from '../translations';
import { useMascot } from '../contexts/MascotContext';
import { MascotPose } from '../config/mascots';

const MascotPage: React.FC = () => {
  const { t } = useLanguage();
  const { currentMascot, setMascot, availableMascots } = useMascot();

  const pixoUniverse: { title: string; description: string; pose: MascotPose }[] = [
    { title: t('mascot.v1.title'), description: t('mascot.v1.desc'), pose: 'hero' },
    { title: t('mascot.v2.title'), description: t('mascot.v2.desc'), pose: 'thinking' },
    { title: t('mascot.v3.title'), description: t('mascot.v3.desc'), pose: 'learning' },
    { title: t('mascot.v4.title'), description: t('mascot.v4.desc'), pose: 'celebrating' },
    { title: 'The Detective', description: 'Exploring logic and solving the hardest riddles.', pose: 'logic' },
    { title: 'The Zen Master', description: 'Finding calm and emotional balance every day.', pose: 'meditating' },
    { title: 'The Architect', description: 'Building the future with code and creativity.', pose: 'tech' },
    { title: 'The Finisher', description: 'Reaching goals and celebrating every milestone.', pose: 'growth' },
  ];

  return (
    <div className="py-20 bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
               Digital Companion v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-kids tracking-tighter leading-none">
              {t('mascot.title')} <br />
              <span className="text-rose-500">{t('mascot.guide')}</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light mb-10">
              {t('mascot.desc')}
            </p>

            <div className="flex flex-wrap gap-4">
              {availableMascots.map((msc) => (
                <button
                  key={msc.id}
                  onClick={() => setMascot(msc.id)}
                  className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${
                    currentMascot.id === msc.id 
                      ? 'bg-slate-900 text-white shadow-xl scale-105' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {msc.name}
                </button>
              ))}
            </div>
          </m.div>
          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-amber-400 to-emerald-500 blur-[120px] opacity-20 -z-10 animate-pulse" />
             <MascotComponent size="xl" pose="standing" />
          </m.div>
        </div>

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-kids tracking-tight">The {currentMascot.name} Universe</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {pixoUniverse.map((v, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-10 relative">
                 <div className="absolute inset-0 bg-slate-100 rounded-[3rem] scale-90 -rotate-3 group-hover:rotate-3 transition-transform duration-500 opacity-50" />
                 <div className="relative z-10 p-6 transform group-hover:scale-110 transition-transform duration-500">
                    <MascotComponent size="md" pose={v.pose} />
                 </div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900">{v.title}</h3>
              <p className="text-slate-500 text-sm px-4 font-medium leading-relaxed">{v.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MascotPage;
