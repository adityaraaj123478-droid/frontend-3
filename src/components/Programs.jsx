import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiTool, FiActivity, FiBriefcase, FiGlobe, FiAward, FiArrowRight } from 'react-icons/fi';

const Programs = () => {
  const programs = [
    {
      title: "Women Education",
      desc: "Comprehensive educational support including scholarships, school supplies, and adult literacy programs.",
      icon: <FiBook className="w-8 h-8" />,
    },
    {
      title: "Skill Development",
      desc: "Vocational training in technology, tailoring, and business management to foster financial independence.",
      icon: <FiTool className="w-8 h-8" />,
    },
    {
      title: "Healthcare Support",
      desc: "Free medical camps, hygiene awareness, and maternal health support for underserved communities.",
      icon: <FiActivity className="w-8 h-8" />,
    },
    {
      title: "Career Guidance",
      desc: "Mentorship programs and career counseling to help women navigate the professional world.",
      icon: <FiBriefcase className="w-8 h-8" />,
    },
    {
      title: "Community Outreach",
      desc: "Grassroots initiatives aimed at solving local problems through collaborative efforts.",
      icon: <FiGlobe className="w-8 h-8" />,
    },
    {
      title: "Leadership Workshops",
      desc: "Empowering women with leadership skills to take charge in their communities and workplaces.",
      icon: <FiAward className="w-8 h-8" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="programs" className="py-24 bg-[#F8FAFC] dark:bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-[#FF7F6A] uppercase mb-2"
          >
            What We Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-6"
          >
            Our Core <span className="text-[#14B8A6]">Programs</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            We implement comprehensive solutions designed to address the root causes of inequality and provide stepping stones for lasting success.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-white dark:bg-[#0F172A] p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/5 overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-[#FF7F6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] dark:bg-[#1e293b] flex items-center justify-center text-[#14B8A6] group-hover:text-white group-hover:bg-[#FF7F6A] transition-colors duration-300 mb-6 shadow-sm">
                  {prog.icon}
                </div>
                
                <h4 className="text-xl font-bold font-poppins text-[#0F172A] dark:text-white mb-4 group-hover:text-[#14B8A6] transition-colors duration-300">
                  {prog.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {prog.desc}
                </p>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-[#FF7F6A] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn more <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
