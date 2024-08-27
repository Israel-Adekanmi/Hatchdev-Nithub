import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/navbar.css";
import social from "../assets/social icon.png";

const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="w-full mt-24 absolute left-0 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-60">
        <div className="head1 text-2xl font-bold text-besnik">Besnik.</div>

        {/* Center - Navigation Links */}
        <div className="nav-link flex space-x-8 items-center text-sol">
          <div className="relative flex items-center">
            <span>Solution</span>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="ml-1 focus:outline-none"
            >
              <FaChevronDown className="w-5 h-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 p-2 mt-60 rounded shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-400">
            Plans
          </a>
          <a href="#" className="hover:text-gray-400">
            Resource
          </a>
          <a href="#" className="hover:text-gray-400">
            Blog
          </a>
        </div>

        {/* Right Side - Request Demo */}
        <div>
          <img src={social} className="w-[88px] h-[12px]" />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="container mx-auto px-4 lg:px-60">
        <hr className="border-t  mt-10 pt-23" style={{ borderColor: "#E3E3EA" }} />
      </div>

      <p className="pt-4 text-xs" style={{ color: "#959595" }}>
        Copyright © 2020 Besnik
      </p>
    </footer>
  );
};

export default Footer;
