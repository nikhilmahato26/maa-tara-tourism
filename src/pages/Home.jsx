import React from 'react';
import Hero from '../components/Hero/Hero';
import Trust from '../components/About/Trust';
import About from '../components/About/About';
import { CustomizedPackages, FeaturedDomestic, InternationalPackages } from '../components/Packages/PackageSections';
import Services from '../components/Services/Services';
import WhyChooseUs from '../components/About/WhyChooseUs';
import BookingRules from '../components/About/BookingRules';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Trust />
      <About />
      <FeaturedDomestic />
      <CustomizedPackages />
      <InternationalPackages />
      
      <WhyChooseUs />
      <Services />
      <BookingRules />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
