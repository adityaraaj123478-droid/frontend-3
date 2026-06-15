import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiHeart, FiStar } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Education Support",
      desc: "Providing educational opportunities and resources for underprivileged children and youth."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Community Welfare",
      desc: "Supporting communities through awareness programs, donations, and social initiatives."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Health & Hygiene",
      desc: "Promoting healthcare awareness and menstrual hygiene through campaigns and support programs."
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Youth Leadership",
      desc: "Empowering young individuals to become leaders and create positive social change."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#14B8A6] font-semibold tracking-wider uppercase text-sm mb-3">
              About Us
            </h2>

            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-6">
              Giving <span className="text-[#FF7F6A]">Wings to Hope</span>,
              Transforming Lives.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-inter text-lg">
              NayePankh Foundation was born during the challenging days of the
              COVID-19 pandemic with a mission to support underprivileged
              communities. What started as a small initiative by passionate
              young volunteers has grown into a dedicated organization working
              towards education, healthcare, hygiene awareness, food
              distribution, clothing support, and community development.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-inter text-lg">
              Since officially beginning its journey on 28th March 2021,
              NayePankh Foundation has positively impacted thousands of lives
              through various social welfare programs. Led primarily by the
              youth of India, we believe that meaningful change starts with
              collective action and compassion.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <FiHeart className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-2">
                    Our Mission
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400">
                    To uplift underprivileged communities by providing access to
                    education, healthcare, hygiene awareness, food support,
                    clothing assistance, and essential resources while
                    empowering youth to become catalysts of positive social
                    change.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7F6A]/10 flex items-center justify-center text-[#FF7F6A]">
                  <FiStar className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-2">
                    Our Vision
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400">
                    To create an inclusive and compassionate society where every
                    individual has access to opportunities, dignity, education,
                    healthcare, and support needed to build a better future for
                    themselves and their communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
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
                  index % 2 === 0
                    ? 'border-t-[#14B8A6] md:translate-y-8'
                    : 'border-t-[#FF7F6A]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index % 2 === 0
                      ? 'bg-[#14B8A6]/10 text-[#14B8A6]'
                      : 'bg-[#FF7F6A]/10 text-[#FF7F6A]'
                  }`}
                >
                  {card.icon}
                </div>

                <h4 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2 font-poppins">
                  {card.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;