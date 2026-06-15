import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      id="stories"
      className="relative py-32 overflow-hidden bg-[#0F172A]"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/story_bg.png" /* Tip: Consider updating this background image in your public directory to match your focus */
          alt="Youth Empowerment"
          className="w-full h-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Border Accent Line */}
            <div className="w-16 h-1 bg-[#F97316] mb-8 rounded-full"></div>

            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
              "The main hope of a nation lies in the{' '}
              <span className="text-[#0EA5E9]">arms of its youth</span>."
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed mb-8 italic border-l-4 border-[#0EA5E9] pl-6">
              In the grim shadows of 2020, we started off as a small bunch of 
              high schoolers with nothing but hope and a strong urge to make an impact. 
              Today, we have evolved into a massive team of driven individuals spanning across 
              the city and state—proving that the youth can step up to bridge the gaps in society 
              and truly become 'Badalte Bharat Ki Nayi Tasveer'.
            </p>

            {/* NGO Meta / Motto Focus */}
            <div>
              <p className="text-[#F97316] font-semibold font-poppins tracking-[0.2em] uppercase">
                NayePankh Foundation
              </p>

              <p className="text-gray-400 text-sm mt-1">
                A 12A & 80G Certified Youth-Led Initiative
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Our Journey So Far
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;