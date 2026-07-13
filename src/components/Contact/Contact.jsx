import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { companyInfo } from '../../data/company';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-wider text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Plan Your Next Trip</h2>
          <p className="text-slate-600 text-lg">Contact us to customize your holiday package or inquire about our services.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-yellow-400 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-100 mb-1">Our Location</h4>
                  <p className="text-lg leading-relaxed">{companyInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-yellow-400 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-100 mb-1">Phone Number</h4>
                  {companyInfo.phones.map((phone, i) => (
                    <p key={i} className="text-lg">{phone}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-yellow-400 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-100 mb-1">Email Address</h4>
                  <p className="text-lg">{companyInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/50 relative z-10 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span className="font-bold">fb</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span className="font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span className="font-bold">yt</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const firstName = data.get('firstName');
                const lastName = data.get('lastName');
                const email = data.get('email');
                const phone = data.get('phone');
                const msg = data.get('message');
                
                const formattedMessage = `Hello Maa Tara Tourism,

I'd like to make an inquiry:
- *Name:* ${firstName} ${lastName}
- *Email:* ${email}
- *Phone:* ${phone}
- *Message:* ${msg}`;
                
                const url = `https://wa.me/919163264242?text=${encodeURIComponent(formattedMessage)}`;
                window.open(url, '_blank');
              }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">First Name</label>
                  <input name="firstName" required type="text" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Last Name</label>
                  <input name="lastName" required type="text" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Phone Number</label>
                  <input name="phone" required type="tel" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Tell us about your travel plans..."></textarea>
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl w-full md:w-auto flex items-center justify-center transition-colors shadow-lg shadow-blue-600/30">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
