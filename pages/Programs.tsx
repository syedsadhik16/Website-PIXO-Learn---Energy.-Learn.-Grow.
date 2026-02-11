
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Bypass property check errors by casting motion
const m = motion as any;
import { 
  MessageCircle, 
  Smile, 
  BookOpen, 
  Brain, 
  Palette, 
  Heart, 
  Play, 
  X 
} from 'lucide-react';

export interface ProgramCard {
  title: string;
  outcome: string;
  icon: React.ReactElement;
  color: string;
  image: string;
  video?: string;
}

export const programs: ProgramCard[] = [
  {
    title: 'Communication',
    outcome: 'Mastering the art of expression. Your child will learn to articulate thoughts, share stories, and listen with empathy.',
    icon: <MessageCircle className="text-blue-500" />,
    color: 'blue',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_1',
    video: 'https://drive.google.com/file/d/1J8dEp1DOJrstmGFD8EHtdZ1KbD35d17l/view?usp=drive_link'
  },
  {
    title: 'Personality & Confidence',
    outcome: 'Building inner strength and public presence. Through role-play and social challenges, we nurture self-assured leaders.',
    icon: <Smile className="text-rose-500" />,
    color: 'rose',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_2',
    video: 'https://drive.google.com/uc?export=view&id=DRIVE_VIDEO_FILE_ID_2'
  },
  {
    title: 'Reading & Phonics',
    outcome: 'Decoding the magic of language. A phonics-first approach that turns every word into a discovery and every book into a friend.',
    icon: <BookOpen className="text-amber-500" />,
    color: 'amber',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_3',
    video: 'https://drive.google.com/uc?export=view&id=DRIVE_VIDEO_FILE_ID_3'
  },
  {
    title: 'Logical Thinking',
    outcome: 'Puzzles, patterns, and problem-solving. We stimulate cognitive growth through algorithmic thinking and spatial reasoning.',
    icon: <Brain className="text-emerald-500" />,
    color: 'emerald',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_4',
    video: 'https://drive.google.com/uc?export=view&id=DRIVE_VIDEO_FILE_ID_4'
  },
  {
    title: 'Creativity',
    outcome: 'Imagination without limits. From visual arts to creative writing, we encourage children to think outside the box.',
    icon: <Palette className="text-purple-500" />,
    color: 'purple',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_5',
    video: 'https://drive.google.com/uc?export=view&id=DRIVE_VIDEO_FILE_ID_5'
  },
  {
    title: 'Emotional Intelligence',
    outcome: 'Understanding self and others. Nurturing empathy, resilience, and emotional regulation for a balanced life.',
    icon: <Heart className="text-pink-500" />,
    color: 'pink',
    image: 'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_FILE_ID_6',
    video: 'https://drive.google.com/uc?export=view&id=DRIVE_VIDEO_FILE_ID_6'
  }
];

const Programs: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    try {
      // Basic validation: if not a string or doesn't look like a URL, return as is
      if (!url || typeof url !== 'string' || !url.startsWith('http')) return url;

      if (url.includes('drive.google.com')) {
        const urlObj = new URL(url);
        // Try getting ID from search params first (uc?id=...)
        let id = urlObj.searchParams.get('id');
        
        // If not found, try extracting from the path (/file/d/ID/view)
        if (!id) {
          const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
          if (match && match[1]) {
            id = match[1];
          }
        }
        
        if (id) return `https://drive.google.com/file/d/${id}/preview`;
      }
    } catch (e) {
      console.warn("Could not parse URL for embedding:", url);
    }
    return url;
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black mb-6 font-kids">Focus on Outcomes.</h1>
          <p className="text-lg text-slate-500">
            We don't teach curriculum. We nurture transformations. See how your child evolves across our primary focus areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-slate-100 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-[2rem] mb-6 bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 opacity-50" />
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                {program.video && (
                  <button 
                    onClick={() => setActiveVideo(program.video!)}
                    className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="text-slate-900 ml-1" fill="currentColor" size={24} />
                    </div>
                  </button>
                )}

                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur rounded-2xl shadow-lg z-20">
                  {program.icon}
                </div>
              </div>
              
              <div className="px-4 pb-4 flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                  {program.video && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-1 rounded-md">Demo Video</span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{program.outcome}</p>
              </div>
              
              <div className="px-4 pb-4">
                <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all
                  ${program.color === 'rose' ? 'bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white' : ''}
                  ${program.color === 'amber' ? 'bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white' : ''}
                  ${program.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white' : ''}
                  ${program.color === 'blue' ? 'bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white' : ''}
                  ${program.color === 'purple' ? 'bg-purple-50 text-purple-600 hover:bg-purple-500 hover:text-white' : ''}
                  ${program.color === 'pink' ? 'bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white' : ''}
                `}>
                  Learn More
                </button>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
              onClick={() => setActiveVideo(null)}
            />
            <m.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              
              <iframe
                src={getEmbedUrl(activeVideo)}
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs;
