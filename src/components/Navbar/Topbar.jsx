import React from 'react';
import { Plane, Trophy, ShieldCheck, Headset } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white py-2 text-xs md:text-sm hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><Plane className="w-4 h-4 mr-2" /> Free cancellation</span>
          <span className="flex items-center"><Trophy className="w-4 h-4 mr-2" /> Best price guarantee</span>
          <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Secure booking</span>
        </div>
        <div className="flex items-center">
          <span className="flex items-center"><Headset className="w-4 h-4 mr-2" /> 24/7 Customer support</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
