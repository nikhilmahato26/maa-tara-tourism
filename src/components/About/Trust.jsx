import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Map, Clock } from 'lucide-react';
import { companyInfo } from '../../data/company';

const Trust = () => {
  const icons = [<Award className="w-8 h-8 text-yellow-500" />, <Users className="w-8 h-8 text-blue-500" />, <Map className="w-8 h-8 text-green-500" />, <Clock className="w-8 h-8 text-red-500" />];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyInfo.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
