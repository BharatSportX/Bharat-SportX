import React, { useState } from "react";

const CreatePost = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setIsTyping(event.target.value !== "");
  };
  return (
    <>
      <div className=" h-auto  mt-4 text-black bg-gray-200 dark:text-white dark:bg-slate-950 px-4 lg:px-24">
        <div className="w-full max-w-screen-2xl py-4 px-2 md:px-16 lg:px-32 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 px-2 py-4 lg:p-4 bg-gray-800 rounded-lg border border-gray-600">
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
          <button className="w-full mt-4 p-2 bg-gray-800  text-gray-200 rounded-lg hover:bg-[#1b2638]">
            <span className="font-bold  text-lg md:text-2xl">Create your post</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
