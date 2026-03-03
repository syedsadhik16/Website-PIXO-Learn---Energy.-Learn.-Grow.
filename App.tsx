import React, { useEffect } from 'react';
// Fix: Use type casting for react-router-dom members to bypass environment-specific export errors
import * as ReactRouterDOM from 'react-router-dom';
const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM as any;
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Programs from './pages/Programs';
import Mascot from './pages/Mascot';
import Parents from './pages/Parents';
import Support from './pages/Support';
import About from './pages/About';
import Enrollment from './pages/Enrollment';
import { LanguageProvider } from './translations';
import { MascotProvider } from './contexts/MascotContext';
import { ThemeType } from './config/mascots';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<ThemeType>('light');

  return (
    <LanguageProvider>
      <MascotProvider theme={theme}>
        <HashRouter>
          <ScrollToTop />
          <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
            <Navbar />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/philosophy" element={<Philosophy />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/mascot" element={<Mascot />} />
                <Route path="/parents" element={<Parents />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about" element={<About />} />
                <Route path="/enroll" element={<Enrollment />} />
                <Route path="/join" element={<Enrollment />} />
              </Routes>
            </main>
            <Footer />
            
            {/* Theme Toggle for Demo */}
            <div className="fixed bottom-8 right-8 z-50 flex gap-2 bg-white/80 backdrop-blur p-2 rounded-full shadow-2xl border border-slate-200">
              {(['light', 'dark', 'vibrant', 'minimal'] as ThemeType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`w-10 h-10 rounded-full text-[10px] font-black uppercase transition-all ${
                    theme === t ? 'bg-slate-900 text-white scale-110' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {t[0]}
                </button>
              ))}
            </div>
          </div>
        </HashRouter>
      </MascotProvider>
    </LanguageProvider>
  );
};

export default App;
