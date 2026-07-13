import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-slate-600 text-lg">We provide a comprehensive range of travel services to ensure your journey is seamless and unforgettable.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col items-center text-center group cursor-pointer transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-blue-600 transition-colors">{service.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
