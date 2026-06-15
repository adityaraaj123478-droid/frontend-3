import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 relative border-t-4 border-[#14B8A6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold flex items-center gap-2 mb-6"
            >
              <span className="text-[#14B8A6] text-3xl">✽</span>
              <span className="text-white">NayePankh</span>
            </a>

            <p className="text-gray-400 mb-6 leading-relaxed">
              NayePankh Foundation is dedicated to uplifting underprivileged
              communities through education, healthcare awareness, food
              distribution, clothing support, and youth-driven social impact
              initiatives across India.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
              >
                <FiTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF7F6A] hover:text-white transition-all duration-300"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#14B8A6] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#14B8A6] transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-[#14B8A6] transition-colors"
                >
                  Our Programs
                </a>
              </li>

              <li>
                <a
                  href="#impact"
                  className="text-gray-400 hover:text-[#14B8A6] transition-colors"
                >
                  Our Impact
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#14B8A6] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Get Involved
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#donate"
                  className="text-gray-400 hover:text-[#FF7F6A] transition-colors"
                >
                  Donate
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FF7F6A] transition-colors"
                >
                  Volunteer
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FF7F6A] transition-colors"
                >
                  Partner With Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FF7F6A] transition-colors"
                >
                  Join Our Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-400 text-sm">
              <p>📧 contact@nayepankh.com</p>
              <p>📞 +91 8318500748</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NayePankh Foundation. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 w-12 h-12 bg-[#FF7F6A] hover:bg-[#ff6850] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      >
        <FiArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;