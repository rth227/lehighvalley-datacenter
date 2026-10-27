import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Impacts from './pages/Impacts.jsx';
import Community from './pages/Community.jsx';
import HumanCenteredAI from './pages/HumanCenteredAI.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import { useContent } from './i18n/LanguageContext.jsx';

export default function App() {
  const { pathname } = useLocation();
  const { content } = useContent();

  // start each page at the top when switching tabs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">{content.site.skipToContent}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/community" element={<Community />} />
          <Route path="/human-centered-ai" element={<HumanCenteredAI />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}