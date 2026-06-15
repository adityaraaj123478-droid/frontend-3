import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiUserPlus } from "react-icons/fi";

const CTA = () => {
  return (
    <section id="donate" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#0F766E]"></div>

      {/* Floating Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-10 w-96 h-96 bg-white opacity-5 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF7F6A] opacity-20 rounded-full blur-[100px]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <FiHeart className="w-8 h-8 text-[#FF7F6A]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Be the Change,
            <br className="hidden md:block" />
            Give Someone <span className="text-[#FF7F6A]">New Wings</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Your support helps NayePankh Foundation provide food,
            education, healthcare awareness, clothing support,
            and opportunities to underserved communities.
            Together, we can build a brighter future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF7F6A] hover:bg-[#ff6850] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              Donate Now <FiHeart />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              Join Our Mission <FiUserPlus />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;