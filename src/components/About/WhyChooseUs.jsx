import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { whyChooseUs, inclusions, exclusions } from '../../data/services';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Why Maa Tara Tourism</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Your Trusted Travel Partner</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-24">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center flex items-center justify-center min-h-[100px] hover:border-blue-300 hover:shadow-md transition-all cursor-default"
            >
              <span className="font-semibold text-slate-700 text-sm">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-green-500"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 text-green-500 mr-3" />
              What's Included
            </h3>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-red-500"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <XCircle className="w-8 h-8 text-red-500 mr-3" />
              Exclusions
            </h3>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
