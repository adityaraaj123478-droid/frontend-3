import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 relative border-t-4 border-[#14B8A6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="text-2xl font-poppins font-bold flex items-center gap-2 mb-6">
              <span className="text-[#14B8A6] text-3xl">✽</span>
              <span className="text-white">She Can</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering women and transforming communities through education, healthcare, and sustainable development initiatives globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF7F6A] hover:text-white transition-all duration-300">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-poppins text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300">Our Programs</a></li>
              <li><a href="#stories" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300">Success Stories</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300">Our Impact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-bold font-poppins text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li><a href="#donate" className="text-gray-400 hover:text-[#FF7F6A] transition-colors duration-300">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7F6A] transition-colors duration-300">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7F6A] transition-colors duration-300">Partner with Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7F6A] transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold font-poppins text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get the latest updates and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#14B8A6] transition-colors duration-300"
                required
              />
              <button 
                type="submit" 
                className="bg-[#14B8A6] hover:bg-[#0d9488] text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} She Can Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 w-12 h-12 bg-[#FF7F6A] hover:bg-[#ff6850] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
