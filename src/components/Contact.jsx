import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#0F172A] dark:text-white mb-6">
              Get in <span className="text-[#14B8A6]">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
              Whether you have a question about our programs, want to volunteer, or are interested in partnering with us, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#14B8A6] group-hover:text-white transition-colors duration-300">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Our Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">123 Empowerment Avenue, Global City, GC 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#FF7F6A]/10 text-[#FF7F6A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7F6A] group-hover:text-white transition-colors duration-300">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Phone Number</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#14B8A6] group-hover:text-white transition-colors duration-300">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Email Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">contact@shecanfoundation.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism-card p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-gray-50 dark:bg-[#0F172A]/50 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 outline-none text-[#0F172A] dark:text-white transition-colors duration-300 focus:border-[#14B8A6] dark:focus:border-[#14B8A6] peer rounded-t-md"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'name' || formData.name ? '-top-3 text-xs text-[#14B8A6]' : 'top-3 text-gray-500'
                    }`}
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-gray-50 dark:bg-[#0F172A]/50 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 outline-none text-[#0F172A] dark:text-white transition-colors duration-300 focus:border-[#FF7F6A] dark:focus:border-[#FF7F6A] peer rounded-t-md"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'email' || formData.email ? '-top-3 text-xs text-[#FF7F6A]' : 'top-3 text-gray-500'
                    }`}
                  >
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-gray-50 dark:bg-[#0F172A]/50 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 outline-none text-[#0F172A] dark:text-white transition-colors duration-300 focus:border-[#14B8A6] dark:focus:border-[#14B8A6] peer rounded-t-md"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="subject" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'subject' || formData.subject ? '-top-3 text-xs text-[#14B8A6]' : 'top-3 text-gray-500'
                  }`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-gray-50 dark:bg-[#0F172A]/50 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 outline-none text-[#0F172A] dark:text-white transition-colors duration-300 focus:border-[#FF7F6A] dark:focus:border-[#FF7F6A] peer rounded-t-md resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'message' || formData.message ? '-top-3 text-xs text-[#FF7F6A]' : 'top-3 text-gray-500'
                  }`}
                >
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#14B8A6] dark:hover:bg-[#14B8A6] dark:hover:text-white transition-colors duration-300"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
