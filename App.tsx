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
import { LanguageProvider } from './translations';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
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
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
