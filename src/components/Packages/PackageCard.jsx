import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const PackageCard = ({ data, type = 'domestic' }) => {
  return (
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
          <button className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
