import React, { useState } from "react";
import PrevNext from "./PrevNext";
import { Link, NavLink } from "react-router-dom";
import ProgressStep from "./ProgressStep";
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
      <div className="m-4  relative z-10">
        <PrevNext />
        <div className=" no-scrollbar overflow-x-auto">
          <div className=" container inline-flex space-x-6 whitespace-nowrap ">
            <div className="flex-none md:relative   w-full  md:w-[30rem] mt-4 md:mt-6 ">
              <div className="bg-zinc-800 md:h-[25rem] p-4 md:p-0    text-white  rounded-lg  mx-auto ">
                <div className="flex pb-3 md:p-4 md:pb-5 md:text-[#220000] md:bg-orange-700 md:rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2">
                  <div className=" flex justify-center items-center space-x-2">
                    <img
                      class="size-7  rounded-full float-left"
                      src="https://thumbs.dreamstime.com/b/uefa-europa-conference-league-logo-vector-illustrated-official-210043040.jpg"
                      alt="logo"
                    />
                    <span className="md:text-base md:tracking-wide font-medium">
                      UERO Europa Cup
                    </span>
                  </div>
                  <div className="float-end space-x-2 relative">
                    <button onClick={togglePin}>
                      {pin ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        toggleDropdown(e);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Option 1
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Option 2
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Option 3
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" md:absolute md:bottom-0 md:left-0 md:right-0 md:rounded-b-lg hidden md:flex md:flex-col md:text-[#220000] font-medium md:bg-orange-700 ">
                  <hr className="  border-gray-900" />
                  <NavLink to="/" className="text-center py-2">
                    See More Details
                  </NavLink>
                </div>
                <div className="hidden md:flex md:absolute md:bottom-1/2   md:right-[47%] translate-y-1/2">
                  <span className="text-base text-green-400">Live</span>
                </div>
                <section className="md:pt-10 md:pb-4 md:px-14">
                  <div className="flex justify-between items-center mb-4">
                    <img
                      src="https://placehold.co/50x50"
                      alt="Sevilla U19"
                      className=""
                    />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">
                        1 - 2
                      </div>

                      <div className="text-xs text-zinc-400">ET-116:14</div>
                    </div>
                    <img
                      src="https://placehold.co/50x50"
                      alt="Real Betis"
                      className="w-12 h-12"
                    />
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
                  <ProgressStep />
                </div>
                <div className="hidden md:flex md:flex-col  md:justify-center md:items-center text-center ">
                  <hr className="  border-gray-900 w-[28rem] " />
                  <div className="py-2">
                    <span className=" text-sm px-2 text-gray-300">
                      Sevilla needs two More Goal to win this match . CRP 13.9
                      RRR 6.89
                    </span>
                    <p className=" text-xs text-gray-400 py-1.5">
                      Play-Off . UERO Europa 78 of 20
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveMatch;
