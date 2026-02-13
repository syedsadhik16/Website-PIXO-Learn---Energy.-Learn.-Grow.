import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for motion to bypass property type errors
const m = motion as any;
import { Target, Eye, Users, Heart, Zap, ShieldCheck } from 'lucide-react';
import PIXOMascot from '../components/PIXOMascot';
import ActionButton from '../components/ActionButton';
import { useLanguage } from '../translations';

const About: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    { name: 'Arjun K.', role: t('about.team.role1'), image: 'https://i.pravatar.cc/150?u=arjun' },
    { name: 'Dr. Sarah P.', role: t('about.team.role2'), image: 'https://i.pravatar.cc/150?u=sarah' },
    { name: 'Vikram S.', role: t('about.team.role3'), image: 'https://i.pravatar.cc/150?u=vikram' },
    { name: 'Priya R.', role: t('about.team.role4'), image: 'https://i.pravatar.cc/150?u=priya' }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.1, ease: [0.21, 1.02, 0.47, 0.98] }
    })
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <m.div 
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              custom={0}
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-8">
                <Users size={16} fill="currentColor" className="opacity-50" />
                The Team Behind PIXO
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 font-kids tracking-tighter text-slate-900 leading-[0.9]">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t('about.hero.subtitle')}
              </p>
            </m.div>

            <m.div 
              className="flex-1 relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative z-20">
                <PIXOMascot size="lg" pose="thinking" />
              </div>
              {/* Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-blue-100/30 blur-[100px] rounded-full animate-pulse" />
            </m.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-black mb-6 font-kids">{t('about.mission.title')}</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                {t('about.mission.text')}
              </p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </m.div>

            {/* Vision Card */}
            <m.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-black mb-6 font-kids">{t('about.vision.title')}</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                {t('about.vision.text')}
              </p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </m.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-[#fcfdfd]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-kids">{t('about.team.title')}</h2>
            <p className="text-xl text-slate-500">{t('about.team.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-lg relative z-10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{member.name}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section - DIRECT TO ENROLL */}
      <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur rounded-[2rem] flex items-center justify-center mb-12 shadow-2xl">
            <Heart size={40} className="text-rose-400" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 font-kids leading-tight max-w-4xl">
            We're on a mission to make <br />
            every Indian child <span className="text-blue-400">fearless.</span>
          </h2>
          
          <ActionButton text="Join Our Mission" variant="secondary" to="/enroll" />
        </div>
        {/* Dynamic Orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 blur-[150px] rounded-full" />
      </section>
    </div>
  );
};

export default About;
