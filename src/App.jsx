import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Impacts from './pages/Impacts.jsx';
import HumanCenteredAI from './pages/HumanCenteredAI.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import NotFound from './pages/NotFound.jsx';
import { useContent } from './i18n/LanguageContext.jsx';

export default function App() {
  const { pathname, hash } = useLocation();
  const { content } = useContent();

  // start each page at the top when switching tabs,
  // unless the link points to a section (e.g. #community-response)
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">{content.site.skipToContent}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impacts" element={<Impacts />} />
          {/* community response now lives inside the human-centered ai page */}
          <Route path="/community" element={<Navigate to="/human-centered-ai#community-response" replace />} />
          <Route path="/human-centered-ai" element={<HumanCenteredAI />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}