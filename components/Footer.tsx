
import React from 'react';
// Fix: Use type casting to resolve react-router-dom Link export error
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;
import { useLanguage } from '../translations';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter flex">
                  <span className="text-rose-500">P</span>
                  <span className="text-orange-500">I</span>
                  <span className="text-amber-500">X</span>
                  <span className="text-emerald-500">O</span>
                </span>
                <span className="text-[8px] font-black text-slate-400 tracking-[0.1em] uppercase">Energy. Learn. Grow.</span>
              </div>
            </Link>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              Empowering the next generation of confident speakers. Built with love for children across India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/philosophy" className="hover:text-rose-500 transition-colors">{t('nav.philosophy')}</Link></li>
              <li><Link to="/programs" className="hover:text-rose-500 transition-colors">{t('nav.programs')}</Link></li>
              <li><Link to="/about" className="hover:text-rose-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/mascot" className="hover:text-rose-500 transition-colors">{t('nav.mascot')}</Link></li>
              <li><Link to="/parents" className="hover:text-rose-500 transition-colors">{t('nav.parents')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/support" className="hover:text-emerald-500 transition-colors">{t('nav.support')}</Link></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© 2024 PIXO Learn. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Child Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
