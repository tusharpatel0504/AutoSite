import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/ui/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import WorkflowPage from './components/WorkflowPage';
import { DotBackgroundDemo } from './components/DotBackgroundDemo';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot1" element={<DotBackgroundDemo />} />
        <Route path="/workflow" element={<WorkflowPage />} />
      </Routes>

      <Footer />
    </>
  );
}
