import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navLinks = [
  { name: 'Services', to: '#services' }, 
  { name: 'Features', to: '#features' },
  { name: 'Testimonials', to: '#testimonials' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);

      if (location.pathname === '/' || location.pathname === '/home') {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: targetId } });
      }

      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 px-4 sm:px-14 py-3 bg-transparent backdrop-blur-sm z-50 flex items-center justify-between">
      <div className="flex-shrink-0 flex items-center space-x-2">
        <img src="LOGO.webp" alt="Autosite logo" className="h-10" />
        <span className="font-extrabold text-white text-lg sm:text-2xl select-none">Autosite</span>
      </div>

      <div className="hidden sm:flex items-center justify-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
        <ul className="flex items-center divide-x divide-gray-600">
          {navLinks.map((link) => (
            <li key={link.name} className="px-3 sm:px-4">
              <a
                href={link.to}
                onClick={(e) => handleScroll(e, link.to)}
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* desktop contact -> navigate to /contact */}
      <div className="hidden sm:block">
        <button
          onClick={() => navigate('/contact')}
          className="px-4 py-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300"
        >
          Contact
        </button>
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/20 sm:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  onClick={(e) => handleScroll(e, link.to)}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/contact'); // mobile contact -> navigate
                }}
                className="px-4 py-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
