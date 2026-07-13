import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, Map, Calendar, Users, Search } from 'lucide-react';
import heroBackground from '../../assets/hero_background.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center min-h-[90vh]">
      {/* Background Image/Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBackground} 
          alt="Beautiful Travel Destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto text-white mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Explore India & The World With <span className="text-yellow-400">Maa Tara Tourism</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-200 mb-8">
            Domestic Tours • International Tours • Customized Holidays
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#packages" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              View Packages
            </a>
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Search Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-2 md:p-4 mt-8"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-100 mb-4 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('packages')}
              className={`flex items-center px-6 py-3 font-semibold transition-colors ${activeTab === 'packages' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              <Map className="w-5 h-5 mr-2" /> Packages
            </button>
            <button 
              onClick={() => setActiveTab('flights')}
              className={`flex items-center px-6 py-3 font-semibold transition-colors ${activeTab === 'flights' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              <Plane className="w-5 h-5 mr-2" /> Flights
            </button>
            <button 
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center px-6 py-3 font-semibold transition-colors ${activeTab === 'hotels' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              <Building2 className="w-5 h-5 mr-2" /> Hotels
            </button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            <div className="bg-slate-50 p-3 rounded-xl border border-gray-100">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Destination</label>
              <div className="flex items-center">
                <Map className="w-4 h-4 text-slate-400 mr-2" />
                <input type="text" placeholder="Where to?" className="w-full bg-transparent outline-none font-medium text-slate-700" />
              </div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-xl border border-gray-100">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Date</label>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-slate-400 mr-2" />
                <input type="text" placeholder="Choose dates" className="w-full bg-transparent outline-none font-medium text-slate-700" />
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-gray-100">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Travelers</label>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-slate-400 mr-2" />
                <input type="text" placeholder="2 Adults, 1 Child" className="w-full bg-transparent outline-none font-medium text-slate-700" />
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center py-3 transition-colors">
              <Search className="w-5 h-5 mr-2" /> Search
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
