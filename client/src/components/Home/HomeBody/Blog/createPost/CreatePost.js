import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CreatePost = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setIsTyping(event.target.value !== "");
  };
  return (
    <>
      <div className=" h-auto  mt-4 text-black bg-gray-200 dark:text-white dark:bg-slate-950 px-4 lg:px-24 flex justify-center items-center">
        <div className="w-full max-w-screen-2xl py-4 px-2 md:px-16 lg:px-32 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 px-2 py-4 lg:p-4  border   dark:border-gray-700 dark:bg-[#15202fb0] rounded-lg  border-gray-600">
            <div className="flex-shrink-0 mx-2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User Avatar"
              />
            </div>
            <span className="flex-grow relative">
              <textarea
                placeholder="Write something on your mind..."
                className="caret-[#129318] textBtn text-lg md:text-2xl btn-input pl-0 py-2.5 w-[84%] md:w-[90%] lg:w-[95%]  md:pr-16 bg-transparent text-gray-100 border-0 border-b"
                rows="2"
                style={{ wordWrap: "break-word", resize: "none" }}
                onChange={handleInputChange}
              ></textarea>
              <button
                className="btnStyle px-2 py-1 absolute right-1 md:right-1.5 bottom-3 bg-[#129318]"
                style={{ transition: "transform 200ms ease-in" }}
              >
                <i
                  className={
                    isTyping ? "fas fa-paper-plane rotate-45" : "fas fa-plus"
                  }
                ></i>
              </button>
            </span>
          </div>
          {/* <button className="w-full mt-4 p-2  border   dark:border-gray-700 dark:bg-[#15202fb0]  text-gray-200 rounded-lg hover:bg-[#1b2638]"> */}
          <NavLink
        to="/Create-post"
        className="flex w-full items-center mt-4   justify-center rounded-md bg-sky-700 px-5 py-2.5 font-medium hover:bg-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800 hover:underline text-blue-950 text-xl"
      >
        Create Your Post
      </NavLink>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
