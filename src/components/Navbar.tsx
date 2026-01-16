import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  // { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "#services" },
  { name: "Contact", to: "/contact" },
  { name: "Request Demo", to: "/demo" },
  { name: "Pricing", to: "/pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const calendlyUrl = "https://calendly.com/guptaritik67856/30min?month=2025-09";

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === "/") {
      // If already on home, scroll to top
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate to home without refresh
        navigate("/", { state: { scrollTo: "home" } });
      }
      return;
    }

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        // Navigate to home and pass target section in state
        navigate("/", { state: { scrollTo: href.substring(1) } });
      } else {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For other routes
      navigate(href);
    }
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 px-4 sm:px-8 md:px-12 py-4 md:py-6 bg-transparent backdrop-blur-sm z-50 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex-1 flex justify-start">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleScroll(e, "/")}
          className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
        >
          <img src="LOGO.webp" alt="Logo" className="h-8 sm:h-10" />
          <span className="font-extrabold text-white text-lg sm:text-xl md:text-2xl select-none">
            Autosite
          </span>
        </a>
      </div>

      {/* Center Section (Desktop Menu) */}
      <div className="hidden md:flex items-center justify-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
        <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={(e) => handleScroll(e, link.to)}
                className="relative text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Desktop CTA) */}
      <div className="hidden md:flex flex-1 justify-end">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-3xl bg-white text-black dark:bg-black dark:text-white font-semibold transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 overflow-hidden"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            <div className="absolute inset-0 rounded-3xl border border-gray-600"></div>
            <div className="absolute inset-0 rounded-3xl border-2 border-white dark:border-gray-300 animate-border-pulse"></div>
          </div>
          <span className="relative z-10">Book Appointment</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-md border-t border-white/20`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={(e) => handleScroll(e, link.to)}
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-4"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300"
            >
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    {/* Animations */}
    <style>{`
      @keyframes borderPulse {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.02);
        }
      }
      .animate-border-pulse {
        animation: borderPulse 2s ease-in-out infinite;
      }
    `}</style>
    </>
  );
};

export default Navbar;
