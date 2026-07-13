import React from 'react';
import { ChevronRight } from 'lucide-react';
import { companyInfo } from '../../data/company';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoImg} alt="Maa Tara Tourism Logo" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
              <span className="text-xl font-extrabold text-white tracking-tight">Maa Tara Tourism</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              {companyInfo.description.substring(0, 150)}...
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                tw
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Packages', 'Gallery', 'Testimonials', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="flex items-center hover:text-yellow-400 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Top Services</h4>
            <ul className="space-y-3">
              {['Domestic Tours', 'International Tours', 'Customized Tours', 'Hotel Booking', 'Air Ticket Booking', 'Corporate Tours'].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="flex items-center hover:text-yellow-400 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to get special offers and travel inspiration.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Maa Tara Tourism. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
