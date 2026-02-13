import React, { useState, useEffect, useRef } from 'react';
// Fix: Use type casting for react-router-dom and framer-motion to bypass property/export errors
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useLocation } = ReactRouterDOM as any;
import { motion, AnimatePresence } from 'framer-motion';
const m = motion as any;
import { Menu, X, Globe, ChevronDown, Check, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage, LanguageCode } from '../translations';

const languages: { code: LanguageCode; name: string; native: string }[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
];

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  
  const currentLang = languages.find(l => l.code === language) || languages[0];
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.philosophy'), path: '/philosophy' },
    { name: t('nav.programs'), path: '/programs' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.mascot'), path: '/mascot' },
    { name: t('nav.parents'), path: '/parents' },
    { name: t('nav.support'), path: '/support' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6">
          <div className={`glass rounded-[2rem] border border-white/40 shadow-xl px-8 py-3 flex items-center justify-between transition-all ${scrolled ? 'bg-white/80' : 'bg-white/50'}`}>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-200"></div>
                <span className="relative z-10 text-white font-black text-2xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none flex items-center">
                  <span className="text-rose-500">P</span>
                  <span className="text-orange-500">I</span>
                  <span className="text-amber-500">X</span>
                  <span className="text-emerald-500">O</span>
                  <m.span
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-1 text-amber-400 opacity-80 group-hover:opacity-100 group-hover:text-amber-500 transition-all"
                  >
                    <Sparkles size={16} fill="currentColor" />
                  </m.span>
                </span>
                <span className="text-[9px] font-black text-slate-400 tracking-[0.1em] uppercase -mt-0.5">Energy. Learn. Grow.</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-tight hover:text-blue-500 transition-colors relative ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <m.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-slate-200 mx-2" />

              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <m.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 font-bold text-sm"
                >
                  <Globe size={18} className="text-blue-500" />
                  <span className="uppercase">{currentLang.code}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </m.button>

                <AnimatePresence>
                  {langOpen && (
                    <m.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-48 bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-blue-50 group ${
                            language === lang.code ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">{lang.name}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-blue-400">{lang.native}</span>
                          </div>
                          {language === lang.code && <Check size={16} />}
                        </button>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              <m.button 
                onClick={() => setIsJoinModalOpen(true)}
                whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-500 text-white px-7 py-2.5 rounded-full font-black text-sm shadow-xl shadow-emerald-200/50 transition-all cursor-pointer"
              >
                {t('nav.join')}
              </m.button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative"
              >
                <Globe size={22} />
                {langOpen && (
                  <div className="absolute top-full right-0 mt-4 w-40 glass rounded-2xl p-2 shadow-2xl border border-white/40">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-blue-50 rounded-lg transition-colors flex justify-between items-center"
                      >
                        {lang.name}
                        {language === lang.code && <Check size={12} className="text-blue-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </button>
              <button className="text-slate-700 p-2 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-24 left-6 right-6 glass rounded-[2.5rem] border border-white/40 shadow-2xl p-10 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-black ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-800 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsJoinModalOpen(true);
                }}
                className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 mt-4"
              >
                {t('hero.cta')}
              </button>
            </m.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Join PIXO Modal with Video Background */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
              onClick={() => setIsJoinModalOpen(false)}
            />
            <m.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-110 opacity-60 filter blur-sm"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-animation-of-pixels-and-light-43400-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-white/70" />
              </div>

              <div className="relative z-10 p-10 md:p-14">
                <button 
                  onClick={() => setIsJoinModalOpen(false)}
                  className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-100">
                    <Zap size={36} fill="currentColor" />
                  </div>
                  <h2 className="text-3xl font-black mb-3 font-kids">{t('modal.title')}</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">{t('modal.desc')}</p>
                </div>

                <form className="space-y-4" onSubmit={(e: any) => {
                  e.preventDefault();
                  alert("Thank you for joining! PIXO is getting your desk ready.");
                  setIsJoinModalOpen(false);
                }}>
                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder={t('modal.placeholder')}
                      className="w-full px-8 py-5 rounded-2xl bg-white/60 backdrop-blur border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all text-lg font-medium"
                    />
                  </div>
                  <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group">
                    {t('modal.cta')}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="text-center mt-8 text-[10px] uppercase font-black tracking-widest text-slate-400">
                  Join 50k+ Happy Indian Parents
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
