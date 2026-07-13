import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919163264242" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:-translate-y-1 transition-all group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919163264242" 
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 hover:-translate-y-1 transition-all group relative"
      >
        <PhoneCall className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
