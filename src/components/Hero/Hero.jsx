import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Calendar, Users, Search, Globe, ChevronRight } from 'lucide-react';
import heroBackground from '../../assets/hero_background.png';
import { customizedPackages, internationalPackages, featuredDomestic } from '../../data/packages';

const Hero = () => {
  const dropdownRef = useRef(null);
  const travelersRef = useRef(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);

  const allPackages = [
    ...customizedPackages.map(p => ({ ...p, category: 'Customized' })),
    ...internationalPackages.map(p => ({ ...p, category: 'International' })),
    ...featuredDomestic.map(p => ({ ...p, category: 'Domestic' }))
  ];

  // Filter packages based on input search query
  const filteredPackages = allPackages.filter(pkg => {
    const title = (pkg.title || '').toLowerCase();
    const subtitle = (pkg.subtitle || '').toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || subtitle.includes(query);
  });

  // Format travelers string
  const getTravelersSummary = () => {
    const adultText = adults === 1 ? '1 Adult' : `${adults} Adults`;
    const childText = children === 0 ? '' : children === 1 ? ', 1 Child' : `, ${children} Children`;
    return `${adultText}${childText}`;
  };

  // Handle clicking outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (travelersRef.current && !travelersRef.current.contains(event.target)) {
        setIsTravelersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [adults, children]);

  const handleBookWhatsApp = (destinationName) => {
    const formattedStart = startDate ? new Date(startDate).toLocaleDateString('en-IN') : 'Flexible';
    const formattedEnd = endDate ? new Date(endDate).toLocaleDateString('en-IN') : '';
    const formattedDateRange = formattedEnd ? `${formattedStart} to ${formattedEnd}` : formattedStart;
    const formattedTravelers = getTravelersSummary();
    
    const textMessage = `Hello Maa Tara Tourism,

I'd like to make a booking/inquiry with the following details:
- *Destination:* ${destinationName}
- *Dates of Travel:* ${formattedDateRange}
- *Number of Travelers:* ${formattedTravelers}`;

    const url = `https://wa.me/919163264242?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter or select a destination.");
      return;
    }
    handleBookWhatsApp(searchQuery);
  };

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
          {/* Form Fields */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 relative">
            
            {/* Destination Autocomplete */}
            <div ref={dropdownRef} className="bg-slate-50 p-3 rounded-xl border border-gray-100 relative">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Destination</label>
              <div className="flex items-center">
                <Map className="w-4 h-4 text-slate-400 mr-2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  placeholder="Where to?" 
                  className="w-full bg-transparent outline-none font-medium text-slate-700 placeholder:text-slate-400" 
                />
              </div>

              {/* Dynamic Autocomplete Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && searchQuery.trim() !== '' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-50 left-0 top-[calc(100%+8px)] w-full md:w-[450px] lg:w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 max-h-72 overflow-y-auto overflow-x-hidden hide-scrollbar py-2"
                  >
                    {filteredPackages.length > 0 ? (
                      filteredPackages.map((pkg, idx) => (
                        <div 
                          key={idx}
                          onClick={() => {
                            setSearchQuery(pkg.title);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50/50 cursor-pointer transition-all border-b border-slate-50 last:border-0"
                        >
                          <div className="flex flex-col pr-4">
                            <span className="font-semibold text-slate-800 text-sm md:text-base flex items-center">
                              {pkg.title}
                              <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                pkg.category === 'International' 
                                  ? 'bg-green-100 text-green-700' 
                                  : pkg.category === 'Domestic' 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {pkg.category}
                              </span>
                            </span>
                            {pkg.subtitle && (
                              <span className="text-xs text-slate-400 mt-0.5 truncate max-w-[250px] md:max-w-[320px] lg:max-w-[380px]">
                                {pkg.subtitle}
                              </span>
                            )}
                            <span className="text-[11px] text-slate-500 mt-0.5">
                              {pkg.duration || 'Customized'} • {pkg.price ? `₹${pkg.price}` : 'Request Quote'}
                            </span>
                          </div>
                          
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookWhatsApp(pkg.title);
                              setIsDropdownOpen(false);
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-sm hover:shadow flex items-center whitespace-nowrap"
                          >
                            Book Now <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-slate-400 text-sm text-center">
                        No destinations found.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Date Range Field */}
            <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-between">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Travel Dates</label>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="flex items-center space-x-1 w-full text-slate-700">
                  <input 
                    type="date" 
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-transparent outline-none font-medium text-xs md:text-sm cursor-pointer w-full text-center"
                    placeholder="Start"
                  />
                  <span className="text-slate-400 font-bold text-[10px]">to</span>
                  <input 
                    type="date" 
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-transparent outline-none font-medium text-xs md:text-sm cursor-pointer w-full text-center"
                    placeholder="End"
                    min={startDate}
                  />
                </div>
              </div>
            </div>

            {/* Travelers Field */}
            <div 
              ref={travelersRef}
              onClick={() => setIsTravelersOpen(!isTravelersOpen)}
              className="bg-slate-50 p-3 rounded-xl border border-gray-100 relative cursor-pointer select-none"
            >
              <label className="block text-xs font-semibold text-slate-500 mb-1">Travelers</label>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-slate-400 mr-2" />
                <span className="w-full bg-transparent outline-none font-medium text-slate-700">
                  {getTravelersSummary()}
                </span>
              </div>

              {/* Travelers Dropdown */}
              <AnimatePresence>
                {isTravelersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute z-50 left-0 right-0 top-[calc(100%+8px)] bg-white rounded-xl shadow-2xl border border-slate-100 p-4 space-y-4 text-left"
                  >
                    {/* Adults Selector */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800 text-sm">Adults</span>
                        <span className="text-[10px] text-slate-400">Age 12+ yrs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          -
                        </button>
                        <span className="font-semibold text-slate-800 text-sm w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children Selector */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800 text-sm">Children</span>
                        <span className="text-[10px] text-slate-400">Age 2-12 yrs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          -
                        </button>
                        <span className="font-semibold text-slate-800 text-sm w-4 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Submit Button */}
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center py-3 transition-colors shadow-md shadow-blue-600/20"
            >
              <Search className="w-5 h-5 mr-2" /> Search & Book
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
