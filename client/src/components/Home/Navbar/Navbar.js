import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className=" px-4 md:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}

          <div className=" text-white space-x-3 flex items-center xl:space-x-6">
            <img
              className="h-8 w-auto cursor-pointer "
              src="sportlogo.svg"
              alt="Logo"
            />
            <form>
              <button
                className=" w-28 xl:w-24 px-0 font-semibold text-xs BtnEx1 z-10"
                style={{ height: "31px" }}
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Navigation */}

            <a
              href="#"
              className=" hidden  xl:block  xl:font-semibold xl:text-gray-300 xl:text-[1.1rem]"
            >
              Home
            </a>
            <a
              href="#"
              className=" hidden xl:block xl:font-semibold xl:text-gray-300 xl:text-[1.1rem]"
            >
              About
            </a>
            <a
              href="#"
              className=" hidden xl:block xl:font-semibold xl:text-gray-300 xl:text-[1.1rem]"
            >
              Services
            </a>
            <a
              href="#"
              className=" hidden xl:block xl:font-semibold xl:text-gray-300 xl:text-[1.1rem]"
            >
              Contact
            </a>
            <a
              href="#"
              className=" hidden xl:block xl:font-semibold xl:text-gray-300 xl:text-[1.1rem]"
            >
              <div className="paste-button">
                <button className="button45  font-semibold text-gray-300 text-[1.1rem]">
                  More{" "}
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" size-[20px] stroke-white stroke-[1px] animate-paste-arrow  opacity-70  text-white "
                      aria-hidden="true"
                    >
                      <path
                        d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
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
          <div className="hidden flex-1 xl:flex justify-center xl:justify-end ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search... Here!!"
                className="bg-gray-700 text-white rounded-full pl-12 w-80 pr-14 py-1 focus:outline-none focus:bg-gray-900"
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
              <button className="absolute hover:rounded-full hover:bg-slate-300 size-7 items-center flex justify-center right-2 top-0 mt-1 mr-1  ">
                <svg
                  className="h-5 w-5 text-gray-400 hover:text-gray-700 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 19"
                >
                  <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                  <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="   flex xl:items-center xl:ml-4" >
          <button className="hover:rounded-full mx-4 my-0 size-8 hover:border hover:border-gray-700   hover:focus:ring-slate-900 hover:focus:ring-4 items-center flex justify-center hover:bg-slate-200 hover:bg-opacity-5" title="Search" >
            <svg
              className=" size-6 text-white   xl:hidden"
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
          {/* User profile */}
          
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
