import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProgressStep from "./ProgressStep";
import "./LiveMatch.css";
const LiveMatch = () => {
  const [pin, setPin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const togglePin = () => {
    setPin(!pin);
  };

  const toggleDropdown = (e) => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen) {
      // Disable slide when dropdown is opened
    }
  };

  return (
    <>
      <div className="flex-none md:relative    w-full  md:w-[30rem] my-4 md:my-6 ">
        <section className="md:mx-5 ">
          {/* <div className=" bg-[#1e2026]   md:h-[25.3rem] p-4 md:p-0    text-white  rounded-lg  mx-auto "> */}
          <div
            className="   h-auto p-0    text-white  rounded-lg  mx-auto "
            style={{
              backgroundImage:
                "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, rgb(24,24,24),rgb(24,24,24))",
            }}
          >
            <div className="flex pb-3 p-4 md:pb-5  bg-[#FF7D29]  dark:bg-orange-500 dark:text-orange-950  rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2  shadow-sm  shadow-orange-700">
              <div className=" flex justify-center items-center space-x-2">
                {/* <span className=" hover:border-2 hover:border-white p-[0.8px] rounded-full"> */}
                <img
                  className="size-7  rounded-full float-left  cursor-pointer"
                  src="https://thumbs.dreamstime.com/b/uefa-europa-conference-league-logo-vector-illustrated-official-210043040.jpg"
                  alt="logo"
                />
                {/* </span> */}
                <span className=" text-base tracking-wide font-medium">
                  UERO Europa Cup
                </span>
              </div>
              <div className="float-end space-x-2 relative">
                <button onClick={togglePin}>
                  {pin ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[18px] md:size-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[18px] md:size-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z" />
                    </svg>
                  )}
                </button>

                <label className="popup">
                  <input type="checkbox" />
                  <div className="burger size-[18px] md:size-5 " tabIndex="0">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <nav className="popup-window">
                    <legend>Actions</legend>
                    <ul>
                      <li>
                        <button className="">
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle r="4" cy="7" cx="9"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          <span>Colloborators</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                          <span>Magic Link</span>
                        </button>
                      </li>
                      <hr />
                      <li>
                        <button>
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              ry="2"
                              rx="2"
                              height="13"
                              width="13"
                              y="9"
                              x="9"
                            ></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          <span>Clone</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                          </svg>
                          <span>Edit</span>
                        </button>
                      </li>
                      <hr />
                      <li>
                        <button>
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line y2="18" x2="6" y1="6" x1="18"></line>
                            <line y2="18" x2="18" y1="6" x1="6"></line>
                          </svg>
                          <span>Delete</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            {/* <div className=" md:absolute md:bottom-0 md:left-0 md:right-0 md:rounded-b-lg hidden md:flex md:mx-5 md:flex-col md:text-[#220000] font-medium md:bg-orange-700 "> */}

            <div className=" border-x border-slate-700 mx-[0.5px] md:ml-0 md:mr-[0.45px]">
              <section className="md:pt-10 pb-4 md:px-14 px-4 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Sevilla U19"
                    className=""
                  />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">1 - 2</div>

                    <div className="text-xs md:text-zinc-400 text-red-500 font-normal">
                      ET-116:14
                    </div>
                  </div>

                  <img
                    src="https://placehold.co/50x50"
                    alt="Real Betis"
                    className="w-12 h-12"
                  />
                </div>
                <div className=" ">
                  <span className="text-base text-center flex justify-center text-green-400 font-medium">
                    Live
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div>Sevilla U19</div>
                    <div className="text-zinc-400">B. Sow 36'</div>
                  </div>
                  <div className="text-center">
                    <div>Real Betis</div>
                    <div className="text-zinc-400">
                      <div>Goal 96'</div>
                      <div>Pablo García 48'</div>
                    </div>
                  </div>
                </div>
              </section>
              <div className=" ">
                <hr className="  border-slate-600  mx-2 w-auto md:hidden mb-4" />
                <ProgressStep />
              </div>
              <div className="hidden mt-6 md:flex md:flex-col  md:justify-center md:items-center text-center text-wrap ">
                <hr className="  border-slate-600  w-[26rem] " />
                <div className="py-2 pt-3">
                  {/* here just only few words are taken otherwise responsive ness break so use lenghth property else ('...') which leads to seemore */}
                  <span className=" text-sm px-2  text-gray-300">
                    Sevilla nedds Two more goal to Win. CRO 13.9. PPR 89
                  </span>
                  <p className=" text-xs text-gray-400 py-1.5">
                    Play-Off . UERO Europa 78 of 20
                  </p>
                </div>
              </div>
            </div>
            <div className=" rounded-b-lg  flex  flex-col  dark:bg-orange-500 dark:text-orange-950 font-medium bg-orange-700    shadow-sm  shadow-orange-500">
              <NavLink to="/" className="  text-center py-2">
                <span className="hover:underline">See More Details</span>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LiveMatch;
