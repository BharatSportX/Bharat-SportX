import React from "react";
import { NavLink } from "react-router-dom";

const FrontNavbar = () => {
  return (
    <div>
      <nav className=" bg-transparent border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 pt-3 md:p-4 md:pt-7">
        <NavLink
            to="/" className="cursor-pointer"
            // className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl  max-320:text-2xl font-semibold whitespace-nowrap  font-[Charm,cursive] pl-3 md:text-[2.5rem]">
              <span className="text-orange-700 text-4xl md:text-[2.9rem] max-320:text-3xl">B</span>
              <span className="text-orange-700">h</span>
              <span className=" text-white">ar</span>
              <span className=" text-green-600">at</span>
              <span className=" text-[#ffb300]">SportX</span>
            </span>
          </NavLink>

          <div class=" block w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <form>
                <button className=" w-24 py-0 md:py-3 text-sm   md:w-36 BtnEx z-10  ">
                  SUBSCRIBE
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FrontNavbar;
