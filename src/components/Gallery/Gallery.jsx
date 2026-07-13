import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../../data/company';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-2 block">Captured Moments</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Travel Gallery</h2>
          <p className="text-slate-400 text-lg">Glimpses of beautiful destinations and unforgettable experiences.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => {
            // Create an irregular grid by making some items span 2 rows or 2 columns
            const isLarge = index === 0 || index === 5;
            const isWide = index === 3 || index === 8;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  isLarge ? 'md:row-span-2 md:col-span-2' : ''
                } ${isWide ? 'md:col-span-2' : ''}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
