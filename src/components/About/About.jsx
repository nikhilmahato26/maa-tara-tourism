import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Compass, Award } from 'lucide-react';
import aboutImage from '../../assets/green_hills.png';

const About = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "100% Safe & Secure",
      description: "Fully verified hotels, transport, and certified local guides for secure travel."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-red-500" />,
      title: "Trusted Customer Support",
      description: "Dedicated 24/7 helpline to guide you before, during, and after your journey."
    },
    {
      icon: <Compass className="w-6 h-6 text-green-600" />,
      title: "Customized Itineraries",
      description: "Tailor-made tour plans crafted precisely according to your budget and interests."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Unmatched Experience",
      description: "Serving thousands of happy travelers with top-notch lodging, logistics, and guidance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image with badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={aboutImage} 
                alt="About Maa Tara Tourism" 
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            {/* Overlay trust badge */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-slate-900 px-8 py-5 rounded-2xl shadow-xl flex items-center space-x-3 border-2 border-white">
              <span className="text-4xl font-extrabold">20k+</span>
              <span className="text-sm font-semibold leading-tight block">Happy<br/>Travelers</span>
            </div>
          </motion.div>

          {/* Right Column: Story & Values */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Crafting Breathtaking Journeys Since 2018
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Maa Tara Tourism is a premier, trusted travel agency dedicated to making your holiday dreams come true. Based in Kolkata, we specialize in offering comprehensive domestic and international tour packages, customized getaways, hotel bookings, flight/train reservations, and secure car rentals.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Whether you're looking for a relaxing beach getaway, a thrilling mountain trek, a spiritual pilgrimage, or a corporate retreat, our experienced tour managers ensure hassle-free execution, budget-friendly rates, and memories to cherish forever.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-slate-100 p-2.5 rounded-lg shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">{value.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
