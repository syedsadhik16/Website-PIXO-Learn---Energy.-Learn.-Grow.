
import React, { useState, useEffect } from 'react';
// Fix: Use type casting for react-router-dom and framer-motion to bypass property/export errors
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useLocation } = ReactRouterDOM as any;
import { motion, AnimatePresence } from 'framer-motion';
const m = motion as any;
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Programs', path: '/programs' },
    { name: 'Pixel World', path: '/mascot' },
    { name: 'For Parents', path: '/parents' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-[2rem] border border-white/40 shadow-xl px-8 py-3 flex items-center justify-between transition-all ${scrolled ? 'bg-white/80' : 'bg-white/50'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-200"></div>
              <span className="relative z-10 text-white font-black text-2xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none flex">
                <span className="text-rose-500">P</span>
                <span className="text-orange-500">I</span>
                <span className="text-amber-500">X</span>
                <span className="text-emerald-500">O</span>
              </span>
              <span className="text-[9px] font-black text-slate-400 tracking-[0.1em] uppercase -mt-0.5">Energy. Learn. Grow.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
            <m.button 
              whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 text-white px-7 py-2.5 rounded-full font-black text-sm shadow-xl shadow-emerald-200/50 transition-all cursor-pointer"
            >
              Join Free
            </m.button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            <button className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 mt-4">
              Start Learning
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
