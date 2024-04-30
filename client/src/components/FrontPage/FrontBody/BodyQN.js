import React, { useState } from "react";

const BodyQN = (props) => {
  const { title, answer, isOpen, toggleAccordion } = props;

  return (
    <div className="py-1 mx-6 lg:mx-44 ">
      <div className="w-full py-5 font-normal text-xl rtl:text-right text-white   rounded-lg gap-3 bg-gray-800 md:py-7 md:text-2xl">
        <button
          onClick={toggleAccordion}
          className="flex justify-between w-full px-5 md:px-8"
        >
          <span className=" ">{title}</span>

          <svg
            className="fill-indigo-500 shrink-0 mt-2 md:mt-3  "
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
            />
          </svg>
        </button>
        
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-gray-500 text-xl md:text-2xl  dark:text-gray-400 mb-0">
            <hr className=" mt-5 border-t-2 border-black"/>
            <p className="my-5 px-5 md:px-8 ">{answer}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BodyQN;
