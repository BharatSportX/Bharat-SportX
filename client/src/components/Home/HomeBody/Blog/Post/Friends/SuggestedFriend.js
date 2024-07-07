import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SuggestedFriend.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute md:left-full  md:transform md:-translate-y-1/2 md:ml-2 bg-black text-white text-sm p-2 rounded shadow-lg z-10 transition-opacity duration-300 opacity-100 top-auto bottom-full mb-2 md:mb-0 left-1/2 transform -translate-x-1/2 md:-translate-x-0">
          {text}
        </div>
      )}
    </div>
  );
};

const SuggestedFriend = () => {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-xl font-semibold px-4 pt-3 text-gray-900 dark:text-white">
        Suggestions for you
      </p>
      <hr className="border-gray-700 m-0" />
      <div className="space-y-4 px-4 sm:px-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User avatar"
              />
              <div className="ml-4">
                <p className="font-semibold">acme_inc</p>
                <p className="text-sm text-gray-500">Suggested for you</p>
              </div>
            </div>
            <Tooltip text="Follow">
              <button className="bg-blue-500 text-white px-2 flex justify-center items-center py-1 md:py-0.5 rounded-full md:px-2 Follow">
                <i className={"fas fa-plus text-sm md:text-lg"}></i>
              </button>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User avatar"
              />
              <div className="ml-4">
                <p className="font-semibold">acme_inc</p>
                <p className="text-sm text-gray-500">Suggested for you</p>
              </div>
            </div>
            <Tooltip text="Follow">
              <button className="bg-blue-500 text-white px-2 flex justify-center items-center py-1 md:p-0.5 rounded-full md:px-2 Follow">
                <i className={"fas fa-plus text-sm md:text-lg"}></i>
              </button>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User avatar"
              />
              <div className="ml-4">
                <p className="font-semibold">acme_inc</p>
                <p className="text-sm text-gray-500">Suggested for you</p>
              </div>
            </div>
            <Tooltip text="Follow">
              <button className="bg-blue-500 text-white px-2 flex justify-center items-center py-1 md:p-0.5 rounded-full md:px-2 Follow">
                <i className={"fas fa-plus text-sm md:text-lg"}></i>
              </button>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User avatar"
              />
              <div className="ml-4">
                <p className="font-semibold">acme_inc</p>
                <p className="text-sm text-gray-500">Suggested for you</p>
              </div>
            </div>
            <Tooltip text="Follow">
              <button className="bg-blue-500 text-white px-2 flex justify-center items-center py-1 md:p-0.5 rounded-full md:px-2 Follow">
                <i className={"fas fa-plus text-sm md:text-lg"}></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <NavLink
        to="/"
        className="flex w-full items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 font-medium hover:bg-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800 hover:underline text-blue-950 text-xl"
      >
        See More
      </NavLink>
    </div>
  );
};

export default SuggestedFriend;
