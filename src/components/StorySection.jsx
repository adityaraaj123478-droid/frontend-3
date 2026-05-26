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
          src="/story_bg.png"
          alt="Empowered Woman"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-[#FF7F6A] mb-8 rounded-full"></div>

            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
              "When women rise,{' '}
              <span className="text-[#14B8A6]">communities</span> grow stronger."
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed mb-8 italic border-l-4 border-[#14B8A6] pl-6">
              Amina was once a marginalized artisan in her village. Through the
              She Can skill development program, she not only mastered modern
              design techniques but also learned how to manage a business.
              Today, she employs 15 other women and her products are sold
              nationwide.
            </p>

            {/* Founder Info Without Image */}
            <div>
              <p className="text-[#FF7F6A] font-semibold font-poppins tracking-[0.2em] uppercase">
                Reeta Mishra
              </p>

              <p className="text-white text-sm">
                Founder & President, She Can Foundation
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Read More Stories
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;