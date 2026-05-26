import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#020617] dark:to-[#0F172A]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-teal opacity-10 dark:opacity-20 blur-[120px] rounded-bl-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#FF7F6A] opacity-5 dark:opacity-10 blur-[100px] rounded-tr-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism-card text-[#14B8A6] text-sm font-semibold mb-6"
            >
              <FiHeart className="w-4 h-4 text-[#FF7F6A]" />
              <span>Making a Difference Since 2010</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6 text-[#0F172A] dark:text-white"
            >
              Empowering Women.<br />
              <span className="text-gradient-teal">Transforming</span> Communities.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg font-inter leading-relaxed"
            >
              She Can Foundation helps women and underserved communities through education, healthcare, skill development, and leadership opportunities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#donate" className="bg-[#FF7F6A] hover:bg-[#ff6850] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,127,106,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(255,127,106,0.6)] hover:-translate-y-1 flex items-center gap-2">
                Join Our Mission <FiHeart />
              </a>
              <a href="#about" className="px-8 py-4 rounded-full font-semibold transition-all duration-300 text-[#0F172A] dark:text-white border-2 border-[#14B8A6]/30 hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 flex items-center gap-2">
                Learn More <FiArrowRight />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="/hero.png" 
                alt="Women empowerment and community" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 glassmorphism-card rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="bg-[#14B8A6]/20 p-3 rounded-full text-[#14B8A6]">
                  <FiHeart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">5,000+</p>
                  <p className="text-gray-200 text-sm">Women Empowered</p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#14B8A6_2px,transparent_2px)] [background-size:16px_16px] opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#FF7F6A_2px,transparent_2px)] [background-size:16px_16px] opacity-30"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 dark:text-gray-500 hidden md:flex"
      >
        <span className="text-sm font-medium mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#14B8A6] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
