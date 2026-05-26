import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Volunteer",
      image: "https://i.pravatar.cc/150?img=1",
      quote: "Volunteering with She Can Foundation has been the most rewarding experience. Seeing the direct impact of our work on these women's lives is truly inspiring."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Medical Partner",
      image: "https://i.pravatar.cc/150?img=2",
      quote: "The healthcare initiatives driven by this foundation have significantly reduced maternal mortality rates in the rural areas we serve. They are doing phenomenal work."
    },
    {
      name: "Priya Sharma",
      role: "Program Graduate",
      image: "https://i.pravatar.cc/150?img=3",
      quote: "Because of the scholarship provided by She Can, I was able to complete my degree in Computer Science. Now I'm working at a top tech firm and supporting my family."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#14B8A6]/5 rounded-bl-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-4"
          >
            Voices of <span className="text-[#14B8A6]">Change</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the people whose lives have been touched by our programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-[#020617] p-8 rounded-3xl shadow-lg relative border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="absolute top-6 right-8 w-12 h-12 text-[#14B8A6]/10 dark:text-[#14B8A6]/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#14B8A6]">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white font-poppins">{testi.name}</h4>
                  <p className="text-sm text-[#FF7F6A] font-medium">{testi.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic relative z-10 leading-relaxed">
                "{testi.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
