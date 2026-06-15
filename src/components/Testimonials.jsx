import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aman Verma",
      role: "Youth Volunteer",
      image: "https://i.pravatar.cc/150?img=11",
      quote: "Joining NayePankh as a college student changed my perspective completely. We don't just wait for big authorities to step up; as the youth, we are out on the streets actively distributing food and clothes to those who need it most."
    },
    {
      name: "Sneha Das",
      role: "Community Member",
      image: "https://i.pravatar.cc/150?img=5",
      quote: "The menstrual hygiene awareness campaigns by NayePankh have been a blessing. They distributed sanitary napkins and taught us to talk about health without humiliation or shame. They are truly giving wings to young women."
    },
    {
      name: "Rajesh Kumar",
      role: "Resident, Support Sector",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "During the hardest phases of the lockdown when everything closed down, NayePankh’s young team arrived with rations and food for our families and even took care of the stray animals in our locality. Their hustle is relentless."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden">
      {/* Decorative Brand Accent Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0EA5E9]/5 rounded-bl-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-4"
          >
            Badalte Bharat Ki <span className="text-[#0EA5E9]">Nayi Tasveer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            With over 2 Lakh lives impacted, hear directly from the youth leaders and community members transforming society with NayePankh.
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
              {/* Dynamic Styled Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-8 w-12 h-12 text-[#0EA5E9]/10 dark:text-[#0EA5E9]/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0EA5E9]">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white font-poppins">{testi.name}</h4>
                  <p className="text-sm text-[#F97316] font-medium">{testi.role}</p>
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