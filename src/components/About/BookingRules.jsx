import React from 'react';
import { motion } from 'framer-motion';
import { bookingRules, cancellationPolicy } from '../../data/services';

const BookingRules = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Booking Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Booking Rules
            </h2>
            <div className="relative border-l-2 border-blue-100 ml-4">
              {bookingRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="mb-8 ml-8 relative"
                >
                  <div className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-blue-600 mb-1 block">Step {rule.step}</span>
                    <h4 className="text-lg font-bold text-slate-800">{rule.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy Table */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4 rounded-full"></span>
              Cancellation Policy
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="bg-red-50 py-4 px-6 border-b border-red-100 flex justify-between">
                <span className="font-bold text-red-800">Time Before Journey</span>
                <span className="font-bold text-red-800">Cancellation Fee</span>
              </div>
              <div className="divide-y divide-gray-100">
                {cancellationPolicy.map((item, index) => (
                  <div key={index} className="flex justify-between py-4 px-6 hover:bg-slate-50 transition-colors">
                    <span className="font-medium text-slate-700">{item.days}</span>
                    <span className="font-bold text-slate-900">{item.fee}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingRules;
