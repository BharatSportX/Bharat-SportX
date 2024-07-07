import React from "react";
import { NavLink } from "react-router-dom";

const SuggestedFriend = () => {
  return (
    <>
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 ">
        <p className="text-xl font-semibold px-4 pt-3  text-gray-900 dark:text-white ">
          Suggestions for you
        </p>
        <hr className=" border-gray-700 m-0 " />
        <div className="space-y-4 px-4 sm:px-6">
          <div className="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://placehold.co/40x40"
                  alt="User avatar"
                />
                <div class="ml-4">
                  <p class="font-semibold">acme_inc</p>
                  <p class="text-sm text-gray-500">Suggested for you</p>
                </div>
              </div>
              <button class="text-blue-500 hover:text-blue-700">+</button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://placehold.co/40x40"
                  alt="User avatar"
                />
                <div class="ml-4">
                  <p class="font-semibold">acme_inc</p>
                  <p class="text-sm text-gray-500">Suggested for you</p>
                </div>
              </div>
              <button class="text-blue-500 hover:text-blue-700">+</button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://placehold.co/40x40"
                  alt="User avatar"
                />
                <div class="ml-4">
                  <p class="font-semibold">acme_inc</p>
                  <p class="text-sm text-gray-500">Suggested for you</p>
                </div>
              </div>
              <button class="text-blue-500 hover:text-blue-700">+</button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://placehold.co/40x40"
                  alt="User avatar"
                />
                <div class="ml-4">
                  <p class="font-semibold">acme_inc</p>
                  <p class="text-sm text-gray-500">Suggested for you</p>
                </div>
              </div>
              <button class="text-blue-500 hover:text-blue-700">+</button>
            </div>
          </div>
        </div>

        <NavLink
          to="/"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          See More
        </NavLink>
      </div>
    </>
  );
};

export default SuggestedFriend;
