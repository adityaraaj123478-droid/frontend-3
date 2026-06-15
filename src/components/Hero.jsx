import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiHeart } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500 opacity-10 blur-[120px] rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-400 opacity-10 blur-[100px] rounded-tr-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-teal-600 text-sm font-semibold mb-6">
              <FiHeart className="text-orange-500" />
              <span>Giving Wings to Hope Since 2021</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
              Empowering Lives.
              <br />
              <span className="text-teal-500">Transforming</span> Communities.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              NayePankh Foundation is dedicated to uplifting
              underprivileged communities through education,
              healthcare awareness, food distribution, clothing
              support, menstrual hygiene awareness, and youth-led
              social initiatives across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#donate"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition"
              >
                Join Our Mission <FiHeart />
              </a>

              <a
                href="#about"
                className="px-8 py-4 rounded-full font-semibold border-2 border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2 transition"
              >
                Learn More <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/hero.png"
                alt="NayePankh Foundation"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                  <FiHeart className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-white font-bold text-xl">
                    200,000+
                  </p>
                  <p className="text-gray-200 text-sm">
                    Lives Impacted
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;