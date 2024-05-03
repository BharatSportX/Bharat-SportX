import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className=" px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}

          <div className="hidden text-white md:flex md:items-center md:space-x-4">
            <img className="h-8 w-auto" src="path/to/logo.png" alt="Logo" />
            <form>
              <button
                className="w-24 px-0 font-semibold text-xs BtnEx1 z-10"
                style={{ height: "31px" }}
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Navigation */}

            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
            <a href="#" className="nav-link">
              <div className="paste-button">
                <button className="button45">
                  Paste <span className="animate-paste-arrow">▽</span>
                </button>
                <div className="dropdown-content">
                  <a id="top" href="#">
                    Keep source formatting
                  </a>
                  <a id="middle" href="#">
                    Merge formatting
                  </a>
                  <a id="bottom" href="#">
                    Keep text only
                  </a>
                </div>
              </div>
            </a>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search... Here!!"
                className="bg-gray-700 text-white rounded-full pl-12 pr-14 py-1 focus:outline-none focus:bg-gray-900"
              />
              <button className="absolute px-1 left-2 top-0 mt-[0.4rem] mr-2 ">
                <svg
                  className=" size-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="absolute right-2 top-0 mt-[0.5rem] mr-1 ">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15c2.21 0 4-1.79 4-4V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v6c0 2.21 1.79 4 4 4z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* User profile */}
          <div className="flex items-center ml-4">
            <span className="text-gray-300 text-sm font-medium mr-2 hidden md:block">
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
    </nav>
  );
};

export default Navbar;
