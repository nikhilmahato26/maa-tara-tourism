import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PackageCard from './PackageCard';
import { customizedPackages, featuredDomestic, internationalPackages } from '../../data/packages';

export const CustomizedPackages = () => {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-2 block">Personalized For You</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Customized Tour Packages</h2>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-800 hidden md:block">View All Destinations →</button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {customizedPackages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <PackageCard data={pkg} type="domestic" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export const FeaturedDomestic = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-red-500 font-bold uppercase tracking-wider text-sm mb-2 block">Incredible India</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Featured Domestic Packages</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDomestic.slice(0, 8).map((pkg) => (
            <PackageCard key={pkg.id} data={pkg} type="domestic" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
            Load More Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export const InternationalPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-green-500 font-bold uppercase tracking-wider text-sm mb-2 block">Global Adventures</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">International Packages</h2>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-800 hidden md:block">View All International →</button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {internationalPackages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <PackageCard data={pkg} type="international" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
