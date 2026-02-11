
import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use any-casting for motion to resolve property errors
const m = motion as any;
import PixelMascot from '../components/PixelMascot';

const Mascot: React.FC = () => {
  const pixelVersions = [
    { title: 'The Hero', description: 'Brave, fast, and always ready to help.', pose: 'hero' as const },
    { title: 'The Thinker', description: 'Solving puzzles and finding new ways to learn.', pose: 'thinking' as const },
    { title: 'The Learner', description: 'Absorbing every word like a sponge.', pose: 'learning' as const },
    { title: 'The Celebrator', description: 'Your child\'s #1 fan! Yay for progress!', pose: 'celebrating' as const },
  ];
  return (
    <div className="py-20 bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black mb-6">Meet Pixel, <br /><span className="text-rose-500">The Guide.</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pixel isn't just a mascot. He's a friend, a mentor, and a digital companion who grows alongside your child. 
              Designed with Pixar-level care, Pixel responds to your child's emotions and progress.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-amber-400 blur-[100px] opacity-20 -z-10" />
             <PixelMascot size="lg" pose="hero" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-16">The Pixel Universe</h2>
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
