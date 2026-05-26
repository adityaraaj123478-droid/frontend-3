import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percent, 4);
      
      setCount(Math.floor(from + (to - from) * easeOutQuart));

      if (percent < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
};

const Impact = () => {
  const stats = [
    { value: 5000, suffix: "+", label: "Women Empowered", color: "teal" },
    { value: 200, suffix: "+", label: "Active Volunteers", color: "coral" },
    { value: 50, suffix: "+", label: "Communities Supported", color: "teal" },
    { value: 100, suffix: "+", label: "Educational Programs", color: "coral" },
  ];

  return (
    <section id="impact" className="py-20 relative bg-gradient-to-r from-[#0F172A] to-[#1e293b] overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:30px_30px]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6] opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F6A] opacity-20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4"
          >
            Our Impact in <span className="text-[#14B8A6]">Numbers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Real change is measurable. Together, we've made significant strides towards a more equitable world.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#14B8A6]/50 transition-colors duration-500"
            >
              <div className="bg-[#0F172A]/80 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className={`text-4xl md:text-5xl font-bold font-poppins mb-2 ${
                  stat.color === 'teal' ? 'text-gradient-teal drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]' : 'text-gradient-coral drop-shadow-[0_0_10px_rgba(255,127,106,0.3)]'
                }`}>
                  <Counter to={stat.value} />{stat.suffix}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10 ${
                  stat.color === 'teal' ? 'bg-[#14B8A6]' : 'bg-[#FF7F6A]'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
