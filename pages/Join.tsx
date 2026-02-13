import React from 'react';
import { motion } from 'framer-motion';
const m = motion as any;
import PIXOMascot from '../components/PIXOMascot';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const Join: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-8 font-kids tracking-tighter text-slate-900 leading-tight">
              Ready to <br />
              <span className="text-emerald-500">Join PIXO?</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-light">
              Become part of India's fastest-growing educational community. Transform your child's future today.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Fearless English Speaking",
                "World-Class 3D Animations",
                "Personalized Learning Path",
                "Safe & Ad-Free Environment"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={18} />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <form className="space-y-4 max-w-md">
              <input 
                type="email" 
                placeholder="Parent's Email Address" 
                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
              />
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group">
                Create Free Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </m.div>

          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative z-10">
              <PIXOMascot pose="celebrating" size="xl" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 bg-emerald-50 blur-[120px] rounded-full" />
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Join;