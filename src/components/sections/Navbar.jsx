import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scroll when mobile overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${isOpen ? '' : 'transition-all duration-300'} ${
        scrolled && !isOpen
          ? 'glass-navbar py-4 shadow-lg shadow-black/15'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Logo: wordmark "Novix" with "i" in accent color, bold 800 weight */}
        <Link to="/" className="tracking-tight select-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold flex items-center"
          >
            <span className="text-white font-extrabold">Nov</span>
            <span className="text-accent font-black">i</span>
            <span className="text-white font-extrabold">x</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative py-1 hover:text-white transition-colors duration-200 ${
                      isActive ? 'text-white font-semibold' : 'text-neutral-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link to="/contact">
            <Button variant="accent" className="!px-5 !py-2 text-sm font-semibold flex items-center gap-1">
              Start a project →
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button (Highest z-index so it sits above full-screen drawer) */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1 transition-transform duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Full-screen overlay menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-[#080810]/98 backdrop-blur-2xl z-40 flex flex-col justify-center items-center px-8"
          >
            <ul className="flex flex-col gap-8 text-center select-none">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                        isActive ? 'text-accent' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-6"
              >
                <Link to="/contact">
                  <Button variant="accent" className="w-full text-base !px-8 !py-3 font-bold">
                    Start a project →
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
