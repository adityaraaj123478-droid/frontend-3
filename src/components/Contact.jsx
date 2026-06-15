import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting NayePankh Foundation. We will get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
              Connect With{" "}
              <span className="text-[#14B8A6]">
                NayePankh
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
              Have questions, want to volunteer, partner with us,
              or contribute to our mission? We'd love to hear from
              you. Together we can create meaningful change and
              uplift communities across India.
            </p>

            <div className="space-y-8">
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <FiMapPin />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    NayePankh Foundation, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF7F6A]/10 text-[#FF7F6A] flex items-center justify-center">
                  <FiPhone />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 8318500748
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <FiMail />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@nayepankh.com
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F172A] text-black dark:text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F172A] text-black dark:text-white"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F172A] text-black dark:text-white"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F172A] text-black dark:text-white resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-[#14B8A6] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;