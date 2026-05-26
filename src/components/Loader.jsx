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
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-[#14B8A6] border-r-transparent border-b-[#FF7F6A] border-l-transparent"
          />
          <div className="text-3xl text-[#14B8A6] font-bold">
            SC
          </div>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-poppins font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-wide"
        >
          She Can <span className="text-[#14B8A6]">Foundation</span>
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;
