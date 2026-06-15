import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC] dark:bg-[#020617] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        {/* Animated Wing/Spinner Container */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-[#0EA5E9] border-r-transparent border-b-[#F97316] border-l-transparent"
          />
          {/* Logo Initials */}
          <div className="text-3xl text-[#0EA5E9] font-bold tracking-wider">
            NP
          </div>
        </div>

        {/* NGO Name Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-wide text-center"
        >
          NayePankh <span className="text-[#0EA5E9]">Foundation</span>
        </motion.h2>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2 text-xs md:text-sm font-medium text-[#64748B] dark:text-[#94A3B8] tracking-widest uppercase"
        >
          Giving Wings to Dreams
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;