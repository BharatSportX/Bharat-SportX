// Navbar.js

import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-baseline space-x-4">
              <img className="h-8 w-auto" src="path/to/logo.png" alt="Logo" />
              <span className="text-white font-bold ml-2">Company Name</span>
              <form>
                <button className="w-24 px-0 font-semibold text-xs BtnEx1 z-10" style={{ height: '31px' }}>
                  SUBSCRIBE
                </button>
              </form>
              
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>

              {/* Dropdown menu */}
              <div 
                className="relative inline-block text-left" 
                onMouseEnter={handleMouseEnter} 
                // onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={toggleDropdown}
                >
                  More
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Option 3</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Search bar and user profile */}
          <div className="flex items-center">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:bg-gray-900"
              />
              <button className="absolute right-0 top-0 mt-2 mr-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.291 12.227l5.373 5.373-1.414 1.414-5.373-5.373a7 7 0 1 1 1.414-1.414zM7 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* User profile */}
            <div className="ml-4 flex items-center">
              <span className="text-gray-300 text-sm font-medium mr-2">
                Username
              </span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/30"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
