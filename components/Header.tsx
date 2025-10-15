import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLinkClass = 'bg-emerald-500 text-white';
  const inactiveLinkClass = 'text-gray-700 hover:bg-emerald-100/60 hover:text-emerald-700';

  return (
    <header className={`bg-white/80 backdrop-blur-lg sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://i.ibb.co/688w7y1/logo.png" alt="Nuôi Em Phú Thọ Logo" className="h-16 w-auto" />
              <span className="hidden sm:block font-bold text-xl md:text-2xl text-emerald-800 tracking-wide">
                Nuôi Em Phú Thọ
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex items-baseline space-x-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-base font-semibold transition-colors duration-200 whitespace-nowrap ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
          
          {/* Right Side: Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-emerald-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;