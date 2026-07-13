import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '#packages' },
    { name: 'Services', path: '#services' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'About Us', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow-md py-3' : 'absolute bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logoImg} alt="Maa Tara Tourism Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tight">Maa Tara Tourism</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.path} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons & CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-slate-600">
            <button className="hover:text-blue-600 transition-colors"><Search className="w-5 h-5" /></button>
            <button className="hover:text-blue-600 transition-colors"><Heart className="w-5 h-5" /></button>
            <button className="hover:text-blue-600 transition-colors"><User className="w-5 h-5" /></button>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-blue-600/30">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 absolute w-full"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-medium py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center shadow-md">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
