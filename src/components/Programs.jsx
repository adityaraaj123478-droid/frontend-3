import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCoffee, FiHeart, FiSmile, FiUsers, FiArrowRight, FiShoppingBag } from 'react-icons/fi';

const Programs = () => {
  const programs = [
    {
      title: "Food Distribution",
      desc: "Fighting hunger at the grassroots level by distributing fresh, nutritious meals to underprivileged communities across the society.",
      icon: <FiCoffee className="w-8 h-8" />,
    },
    {
      title: "Menstrual Hygiene Awareness",
      desc: "Breaking social taboos by conducting awareness campaigns and providing sanitary napkins to young women to preserve health and dignity.",
      icon: <FiHeart className="w-8 h-8" />,
    },
    {
      title: "Clothing Drives",
      desc: "Collecting and safely distributing clean, reliable clothing items to impoverished families protection against changing seasons.",
      icon: <FiShoppingBag className="w-8 h-8" />, 
    },
    {
      title: "Underprivileged Education",
      desc: "Providing fundamental educational support and teaching youth sectors directly to pave a path toward a self-reliant and better future.",
      icon: <FiBookOpen className="w-8 h-8" />,
    },
    {
      title: "Stray Animal Welfare",
      desc: "Extending our care framework to all living creatures by running consistent feeding drives for stray animals in local neighborhoods.",
      icon: <FiSmile className="w-8 h-8" />, 
    },
    {
      title: "Youth Mobilization",
      desc: "Empowering high schoolers and college students to take immediate field roles, leading active social change across cities and states.",
      icon: <FiUsers className="w-8 h-8" />,
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
            className="text-sm font-semibold tracking-wider text-[#F97316] uppercase mb-2"
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
            Our Core <span className="text-[#0EA5E9]">Initiatives</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            We are dedicated to resolving daily operational challenges faced by common citizens of India, making this earth a safer home for all creatures.
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-[#F97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] dark:bg-[#1e293b] flex items-center justify-center text-[#0EA5E9] group-hover:text-white group-hover:bg-[#F97316] transition-colors duration-300 mb-6 shadow-sm">
                  {prog.icon}
                </div>
                
                <h4 className="text-xl font-bold font-poppins text-[#0F172A] dark:text-white mb-4 group-hover:text-[#0EA5E9] transition-colors duration-300">
                  {prog.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {prog.desc}
                </p>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-[#F97316] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Support this cause <FiArrowRight />
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