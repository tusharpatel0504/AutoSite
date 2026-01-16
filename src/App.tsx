import './App.css';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/ui/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
// import Chatbot from './components/Chatbot';
import WorkflowPage from './components/WorkflowPage';
import { DotBackgroundDemo } from './components/DotBackgroundDemo';
import { Toaster } from './components/ui/toaster';
import { VideoPlayerPage } from './components/Videopage';
import Demo from './components/Demo';
import About from './components/About';
import Pricing from './components/Pricing';
import CustomCursor from './components/CustomCursor';

const GA_ID = 'G-QNF2VCFNQW';

function sendPageView(pathname: string) {
  if (typeof window === 'undefined') return;
  // safe-call gtag if loaded
  (window as any).gtag?.('config', GA_ID, { page_path: pathname });
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/chatbot" element={<DotBackgroundDemo />} />
          <Route path="/workflow" element={<WorkflowPage />} />
          <Route path="/videoplayer" element={<VideoPlayerPage />} />
          {/* fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
      <Toaster />
    </>
  );
}
