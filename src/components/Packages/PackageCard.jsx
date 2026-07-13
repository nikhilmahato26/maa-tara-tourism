import React, { useState } from 'react';
import { Clock, Star, X, Check, Compass } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const PackageCard = ({ data, type = 'domestic', hideDetails = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookWhatsApp = () => {
    const textMessage = `Hello Maa Tara Tourism,

I'm interested in booking the following package:
- *Package:* ${data.title} ${data.subtitle ? `(${data.subtitle})` : ''}
- *Duration:* ${data.duration}
- *Price:* ${data.price ? `₹${data.price.toLocaleString()}` : 'On Request'}`;
    const url = `https://wa.me/919163264242?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
  };

  const itineraryPoints = data.itinerary 
    ? data.itinerary.split(',').map(item => item.trim().replace(/\.$/, '')).filter(Boolean) 
    : [];

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Badges */}
          <div className="absolute top-4 left-4 bg-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full text-slate-900 shadow-md">
            Top Rated
          </div>
          {type === 'international' && (
            <div className="absolute top-4 right-4 bg-blue-600 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-md">
              International
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
            <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold">
              <Star className="w-3 h-3 mr-1 fill-current" /> 4.9
            </div>
          </div>
          
          {data.subtitle && <p className="text-sm text-blue-600 font-medium mb-3">{data.subtitle}</p>}
          {data.highlights && <p className="text-sm text-slate-500 mb-4 line-clamp-2">{data.highlights}</p>}
          
          <div className="flex items-center text-sm text-slate-500 mb-4 mt-auto">
            <Clock className="w-4 h-4 mr-1.5 text-slate-400" />
            {data.duration}
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-slate-500 font-medium">Starting from</p>
              <p className="text-xl font-bold text-red-600">{data.price ? `₹${data.price.toLocaleString()}` : 'On Request'}</p>
            </div>
            {hideDetails ? (
              <button 
                onClick={handleBookWhatsApp}
                className="bg-green-50 text-green-700 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors border border-green-100"
              >
                Enquire Now
              </button>
            ) : (
              <button 
                onClick={() => setIsOpen(true)}
                className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                View Details
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] md:max-h-[80vh] overflow-y-auto md:overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 bg-slate-900/80 hover:bg-slate-950 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image & Highlights */}
              <div className="w-full md:w-5/12 relative h-64 md:h-auto overflow-hidden bg-slate-950 flex-shrink-0">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold bg-yellow-400 text-slate-950 px-2.5 py-1 rounded-full w-max mb-3 uppercase tracking-wider">
                    {type === 'international' ? 'International' : 'Domestic'}
                  </span>
                  <h3 className="text-3xl font-extrabold mb-1">{data.title}</h3>
                  {data.subtitle && <p className="text-sm text-blue-300 font-semibold mb-3">{data.subtitle}</p>}
                  <p className="text-2xl font-bold text-yellow-400 mt-2">
                    {data.price ? `₹${data.price.toLocaleString()}` : 'On Request'}
                  </p>
                  <p className="text-xs text-slate-300">{data.price ? 'per person (excluding taxes)' : 'Contact for best quote'}</p>
                </div>
              </div>

              {/* Right Column: Itinerary Details & Dates */}
              <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-visible md:overflow-y-auto flex flex-col justify-between space-y-6 md:h-full">
                
                {/* Itinerary */}
                {itineraryPoints.length > 0 ? (
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center">
                      <Compass className="w-5 h-5 mr-2 text-blue-600" /> Tour Plan & Destinations
                    </h4>
                    <ul className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {itineraryPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center">
                      <Compass className="w-5 h-5 mr-2 text-blue-600" /> Package Description
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      We offer customized tours to {data.title}. Please request a quote to get detailed day-wise itinerary matching your preferences.
                    </p>
                  </div>
                )}

                {/* Inclusions */}
                <div className="space-y-4">
                  {/* Highlights/Inclusions */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-800">Inclusions & Fare Details</h4>
                    <div className="flex flex-col gap-1.5 text-xs text-slate-600">
                      {data.trainFareIncluded && (
                        <div className="flex items-center text-green-700 font-medium">
                          <Check className="w-4 h-4 mr-1.5 text-green-600" /> Including 3AC Train Fare
                        </div>
                      )}
                      {data.airFareExtra && (
                        <div className="flex items-center text-yellow-700 font-medium">
                          <Check className="w-4 h-4 mr-1.5 text-yellow-600" /> Air Fare Extra
                        </div>
                      )}
                      {data.visaAirFareExtra && (
                        <div className="flex items-center text-red-600 font-semibold">
                          <Check className="w-4 h-4 mr-1.5 text-red-500" /> Visa & Air Fare Extra
                        </div>
                      )}
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-1.5 text-blue-600" /> Lodging & Deluxe Hotel Stays
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-1.5 text-blue-600" /> Daily Sightseeing & Deluxe Transportation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleBookWhatsApp}
                    className="flex-grow bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-green-600/20"
                  >
                    Enquire & Book on WhatsApp
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 px-6 rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PackageCard;
