import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Food distribution drive" },
    { src: gallery2, alt: "Menstrual hygiene awareness campaign" },
    { src: gallery3, alt: "Clothing distribution to poor families" },
    { src: gallery4, alt: "Feeding stray animals in local sectors" },
    { src: "/hero.png", alt: "Underprivileged youth education program" },
    { src: "/story_bg.png", alt: "Youth leadership team mobilization" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-4"
          >
            Moments of <span className="text-[#F97316]">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A look into our on-ground hustle to solve daily problems and make this world a better place for all creatures.
          </motion.p>
        </div>

        {/* Masonry-style Grid Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              
              {/* Overlay with dynamic slide-up text content and animated bottom highlight anchor */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-semibold font-poppins translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
                <div className="w-8 h-1 bg-[#0EA5E9] mt-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;