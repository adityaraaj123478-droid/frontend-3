import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiHeart, FiStar } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Women Education",
      desc: "Providing access to quality education for young girls and women."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Community Support",
      desc: "Building strong, self-reliant communities through active engagement."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Healthcare",
      desc: "Promoting awareness and access to essential healthcare services."
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Leadership",
      desc: "Cultivating the next generation of female leaders and changemakers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#14B8A6] font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-6">
              Driven by <span className="text-[#FF7F6A]">Compassion</span>, Defined by Action.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-inter text-lg">
              At She Can Foundation, we believe that empowering a woman transforms an entire community. Since our inception, we have dedicated ourselves to providing tools, resources, and opportunities for women to thrive.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <FiHeart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-2">Our Mission</h4>
                  <p className="text-gray-600 dark:text-gray-400">To create a safe, supportive environment where women can access education, healthcare, and skill development to build sustainable livelihoods.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7F6A]/10 flex items-center justify-center text-[#FF7F6A]">
                  <FiStar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-2">Our Vision</h4>
                  <p className="text-gray-600 dark:text-gray-400">A world where every woman has the power, confidence, and resources to shape her own destiny and uplift her community.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#14B8A6] opacity-10 dark:opacity-20 blur-[80px] rounded-full pointer-events-none" />
            
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glassmorphism-card p-6 rounded-2xl border-t-4 hover:-translate-y-2 transition-transform duration-300 ${
                  index % 2 === 0 ? 'border-t-[#14B8A6] md:translate-y-8' : 'border-t-[#FF7F6A]'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? 'bg-[#14B8A6]/10 text-[#14B8A6]' : 'bg-[#FF7F6A]/10 text-[#FF7F6A]'
                }`}>
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2 font-poppins">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
