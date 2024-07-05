import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <>
      <hr className="border-4 border-gray-900 my-2" />
      <div className=" min-h-screen mt-4 text-black bg-gray-200 dark:text-white dark:bg-slate-950 lg:px-24">
        <div className="w-full max-w-screen-2xl py-4 px-2 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 px-2 py-4 lg:p-4 bg-slate-900 rounded-lg border border-gray-700">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="User Avatar"
              />
            </div>
            <textarea
              placeholder="Write something on your mind..."
              className=" textBtn btn-input p-2.5 flex-grow pr-12 relative bg-transparent text-gray-100 border-0 border-b"
              rows="2"
              style={{ wordWrap: "break-word", resize: "none" }}
            ></textarea>
            <button className="btnStyle px-2 py-1 absolute right-6 bg-[#129318]">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="w-full mt-4 p-2 bg-zinc-300 text-gray-900 rounded-lg hover:bg-zinc-400">
            <span className="font-bold">Create your post</span>
          </button>
        </div>
      </div>
      <hr className="border-4 border-gray-900 my-2" />
    </>
  );
};

export default Blogs;
