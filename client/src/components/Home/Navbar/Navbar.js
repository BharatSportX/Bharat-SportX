import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="dark:bg-gray-800 bg-white">
      <div className="px-4 md:px-14  lg:px-16 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="text-white space-x-3 flex items-center xl:space-x-6">
            <img
              className="h-8 w-auto cursor-pointer"
              src="sportlogo.svg"
              alt="Logo"
            />
            <form>
              <button
                className="w-28 xl:w-24 px-0 font-semibold text-xs BtnEx1 z-10"
                style={{ height: "31px" }}
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Navigation */}
            <NavLink
              to="#"
              className="hidden xl:block xl:font-semibold xl:text-gray-900 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Home
            </NavLink>
            <NavLink
              to="#"
              className="hidden xl:block xl:font-semibold xl:text-gray-900 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              About
            </NavLink>
            <NavLink
              to="#"
              className="hidden xl:block xl:font-semibold xl:text-gray-900 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Services
            </NavLink>
            <NavLink
              to="#"
              className="hidden xl:block xl:font-semibold xl:text-gray-900 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              Contact
            </NavLink>
            <NavLink
              to="#"
              className="hidden xl:block xl:font-semibold xl:text-gray-900 xl:dark:text-gray-300 xl:text-[1.1rem]"
            >
              <div className="paste-button">
                <button className="button45 font-semibold  text-[1.1rem]">
                  More{" "}
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[20px] stroke-white stroke-[1px] animate-paste-arrow opacity-70 text-white "
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
                  <Link id="top" href="#">
                    Keep source formatting
                  </Link>
                  <Link id="middle" href="#">
                    Merge formatting
                  </Link>
                  <Link id="bottom" href="#">
                    Keep text only
                  </Link>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Search bar */}
          <div className="hidden flex-1 xl:flex justify-center xl:justify-end">
            <div className="relative z-0">
              <input
                type="text"
                placeholder="Search... Here!!"
                className="bg-gray-700 text-white rounded-full pl-12 w-80 pr-14 py-1 focus:outline-none focus:bg-gray-900"
              />
              <button className="absolute px-1 left-2 top-0 mt-[0.4rem] mr-2 ">
                <svg
                  className="size-5 text-gray-400"
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

          {/* Mobile Search button */}
          <div className="flex xl:items-center xl:ml-4">
            <button
              className="hover:rounded-full mx-4 my-0 size-8 hover:border hover:border-gray-700 hover:focus:ring-slate-900 hover:focus:ring-4 items-center flex justify-center xl:hidden  hover:bg-opacity-5 "
              title="Search"
              onClick={toggleSearch}
            >
              <svg
                className="size-6 dark:text-white text-gray-500 xl:hidden"
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
            {isSearchOpen && (
              <div
                className="xl:hidden z-[-1] absolute w-full top-14 left-0 mt-1 pb-4 bg-gray-800 p-2"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search... Here!!"
                    className="bg-gray-700 w-full text-white rounded-full pl-12 pr-14 py-1 focus:outline-none focus:bg-gray-900"
                  />
                  <button className="absolute px-1 left-2 top-0 mt-[0.4rem] mr-2 ">
                    <svg
                      className="size-5 text-gray-400"
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
            )}
            {/* User profile */}
            <button
              className="hover:rounded-full size-8 hover:border hover:border-gray-700 hover:focus:ring-slate-900 hover:focus:ring-4 items-center flex justify-center hover:bg-slate-200 hover:bg-opacity-5"
              title="Search"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/30"
                alt="User"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}

      <div className=" xl:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 m-auto  font-medium md:flex md:justify-center">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 md:px-14  lg:px-16 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="size-4 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 md:px-14  lg:px-16 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="size-4 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
              <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500">
              Wallet
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 md:px-14  lg:px-16 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" mb-2  text-gray-500 dark:text-gray-400
            group-hover:text-red-600 dark:group-hover:text-red-500"
            width="44" height="44"
              fill="gray"
              class="bi bi-arrow-up-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
            </svg>
            
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 md:px-14  lg:px-16 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="size-4 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500">
              Settings
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 md:px-14  lg:px-16 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="size-4 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500">
              Profile
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
