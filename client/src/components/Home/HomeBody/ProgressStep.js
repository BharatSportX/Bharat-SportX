import React from "react";

const ProgressStep = () => {
  return (
    <div className="flex px-4 mt-4.5 justify-center items-center mb-4 h-full">
      <ol className="flex flex-row justify-center items-center w-full max-w-md">
        <li className="flex w-full items-center text-green-200  dark:text-green-200  after:content-[''] after:w-full after:h-1 after:border-b after:border-[#46c252] after:border-4 after:inline-block dark:after:border-[#46c252]">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4  rounded-full   shrink-0">
            <span className="text-2xs font-bold text-green-900 border-2 rounded-full border-[#46c252] dark:bg-[#46c252] p-0.5 ">ST</span>
          </span>
        </li>
            
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#FF400A] after:border-4 after:inline-block dark:after:border-[#FF400A]">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4  rounded-full   shrink-0">
          <span className=" text-2xs font-bold text-green-200 border-2 rounded-full border-[#FF400A]  py-0.5 px-[0.05rem] ">HT</span>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#FF400A] after:border-4 after:inline-block dark:after:border-[#FF400A]">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4  rounded-full   shrink-0">
          <span className="text-2xs font-bold text-green-200 border-2 rounded-full border-[#FF400A] p-0.5 ">FT</span>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4  rounded-full   shrink-0">
          <span className="text-2xs font-bold text-green-200 border-2 rounded-full border-[#FF400A] p-0.5 ">ET</span>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default ProgressStep;
