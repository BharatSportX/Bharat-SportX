import React from "react";

const ProgressStep = () => {
  return (
    <div className="flex px-4 mt-4.5 justify-center items-center mb-4 h-full">
      <ol className="flex flex-row justify-center items-center w-full max-w-md">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4 bg-blue-100 rounded-full  dark:bg-blue-800 shrink-0">
            <span className="text-2xs font-bold text-green-500">ST</span>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4 bg-gray-100 rounded-full  dark:bg-gray-700 shrink-0">
          <span className="text-2xs font-bold text-green-500">HT</span>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4 bg-gray-100 rounded-full  dark:bg-gray-700 shrink-0">
          <span className="text-2xs font-bold text-green-500">FT</span>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center lg:w-5 lg:h-5 w-4 h-4 bg-gray-100 rounded-full  dark:bg-gray-700 shrink-0">
          <span className="text-2xs font-bold text-green-500">ET</span>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default ProgressStep;
