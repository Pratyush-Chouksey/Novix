import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#080810] pt-16 pb-8 text-neutral-400 border-t border-neutral-900/60">
      {/* Subtle top border with accent color gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C6BFF]/45 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Col 1: Logo + Tagline */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="tracking-tight select-none flex items-center">
            <span className="text-white font-extrabold text-2xl">Nov</span>
            <span className="text-accent font-black text-2xl">i</span>
            <span className="text-white font-extrabold text-2xl">x</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            We build what the future runs on.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-secondary font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-secondary transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact Info & Socials */}
        <div className="flex flex-col gap-6">
          <h4 className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Info</h4>
          
          <div className="flex flex-col gap-2 text-sm">
            <p>Delhi, India — Remote friendly</p>
            <a href="mailto:hello@novix.in" className="hover:text-secondary transition-colors duration-200">
              hello@novix.in
            </a>
          </div>

          <div className="flex items-center gap-4 text-secondary">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs select-none">
        <p>© 2026 Novix · novix.in</p>
        <a href="mailto:hello@novix.in" className="hover:text-secondary transition-colors duration-200">
          hello@novix.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
