import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { FiPhone, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0c29] text-gray-300 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              I build responsive, fast, and modern websites using the latest tech.
              Let's create something amazing together.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Home", "About", "Projects", "Contact"].map((tab) => (
                <li key={tab}>
                  <ScrollLink
                    to={tab.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    {tab}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FiPhone className="text-pink-400" />
                <span>+94 752069762</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FiMail className="text-pink-400" />
                <span>gayak3088@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-10 border-t border-zinc-700"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base">
          <p className="text-white text-center sm:text-left">
            &copy; 2025 All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;