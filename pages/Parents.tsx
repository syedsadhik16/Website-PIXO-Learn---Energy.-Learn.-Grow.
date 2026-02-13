import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for motion to bypass property type errors
const m = motion as any;
import { ShieldCheck, Eye, Headphones, BarChart, Star } from 'lucide-react';
import { useLanguage } from '../translations';

const Parents: React.FC = () => {
  const { t } = useLanguage();

  const trustPoints = [
    {
      title: t('parents.safe.title'),
      text: t('parents.safe.desc'),
      icon: <ShieldCheck className="text-emerald-500" />
    },
    {
      title: t('parents.india.title'),
      text: t('parents.india.desc'),
      icon: <Eye className="text-rose-500" />
    },
    {
      title: t('parents.stress.title'),
      text: t('parents.stress.desc'),
      icon: <BarChart className="text-amber-500" />
    },
    {
      title: t('parents.hub.title'),
      text: t('parents.hub.desc'),
      icon: <Headphones className="text-blue-500" />
    }
  ];

  return (
    <div className="bg-[#fcfdfd] py-24 min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Column: Trust Information */}
            <m.div 
              className="flex-1 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-600 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-8">
                <ShieldCheck size={16} fill="currentColor" className="opacity-50" />
                Safety First Protocol
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] text-slate-900 font-kids tracking-tighter">
                {t('parents.hero')}
              </h1>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {trustPoints.map((point, i) => (
                  <m.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="w-14 h-14 bg-white shadow-xl shadow-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-50 group-hover:scale-110 transition-transform">
                      {React.cloneElement(point.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                    </div>
                    <h4 className="font-black text-xl mb-3 text-slate-900">{point.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{point.text}</p>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* Right Column: Testimonial Visual */}
            <div className="flex-1 order-1 lg:order-2 w-full flex justify-center">
              <m.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative group w-full max-w-[550px]"
              >
                <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_80px_100px_-30px_rgba(0,0,0,0.2)] bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Happy Child Learning" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <m.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-8 -left-8 md:-left-12 max-w-[340px] glass backdrop-blur-[40px] bg-white/70 p-10 rounded-[3rem] border border-white/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-30"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#FBBF24" className="text-amber-400" />)}
                  </div>
                  
                  <blockquote className="text-slate-800 text-xl font-medium leading-relaxed italic mb-8">
                    "{t('parents.quote')}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                       <img src="https://i.pravatar.cc/100?u=mom" alt="Parent avatar" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">— Ananya M.</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Parent, Mumbai</p>
                    </div>
                  </div>
                </m.div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-[60px] rounded-full animate-pulse" />
              </m.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Symbols Bar */}
      <section className="mt-32 py-16 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-2xl font-black tracking-tighter">KIDSAFE+</div>
              <div className="text-2xl font-black tracking-tighter">MUM-PRENNEUR</div>
              <div className="text-2xl font-black tracking-tighter">EDU-GROW</div>
              <div className="text-2xl font-black tracking-tighter">INDIA TRUSTED</div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;