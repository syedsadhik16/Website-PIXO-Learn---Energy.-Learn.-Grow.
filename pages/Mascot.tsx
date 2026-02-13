import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for motion to resolve property errors
const m = motion as any;
import PixelMascot from '../components/PixelMascot';
import { useLanguage } from '../translations';

const Mascot: React.FC = () => {
  const { t } = useLanguage();

  const pixelVersions = [
    { title: t('mascot.v1.title'), description: t('mascot.v1.desc'), pose: 'hero' as const },
    { title: t('mascot.v2.title'), description: t('mascot.v2.desc'), pose: 'thinking' as const },
    { title: t('mascot.v3.title'), description: t('mascot.v3.desc'), pose: 'learning' as const },
    { title: t('mascot.v4.title'), description: t('mascot.v4.desc'), pose: 'celebrating' as const },
  ];

  return (
    <div className="py-20 bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl font-black mb-6">
              {t('mascot.title')} <br />
              <span className="text-rose-500">{t('mascot.guide')}</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('mascot.desc')}
            </p>
          </m.div>
          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-amber-400 blur-[100px] opacity-20 -z-10" />
             <PixelMascot size="lg" pose="hero" />
          </m.div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-slate-400">The Pixel Universe</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pixelVersions.map((v, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-6">
                 <PixelMascot size="md" pose={v.pose} />
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm px-4">{v.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mascot;