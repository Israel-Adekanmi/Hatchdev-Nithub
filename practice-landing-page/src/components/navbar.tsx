import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import '../styles/navbar.css'

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-radial-gradient h-[500px] w-full absolute top-0 left-0 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-60">
        <div className="head1 text-2xl font-bold">Besnik.</div>

        {/* Center - Navigation Links */}
        <div className="nav-link flex space-x-8 items-center">
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
        <a
          href="#"
          className="request-demo hover:bg-pink-600 text-white px-4 py-3 w-[154px] h-[42px] rounded-full"
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
