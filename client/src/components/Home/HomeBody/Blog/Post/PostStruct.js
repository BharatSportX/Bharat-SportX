import React from "react";

const PostStruct = () => {
  return (
    <>
      <div className="space-y-6">
        <div className=" flex flex-col items-center  rounded-lg">
          <div className="border-gray-200 bg-white   dark:border-gray-700 dark:bg-gray-800 w-full lg:w-[80%]  rounded-lg   shadow-lg">
            <div className="flex  items-center  py-4 px-3 justify-between  rounded-lg  ">
              <div className=" flex justify-center items-center">
                <img
                  className="size-12 rounded-full"
                  src="https://placehold.co/40x40"
                  alt="User avatar"
                />
                <div className="flex flex-col ml-4">
                  <span className=" font-semibold mr-4  italic text-sm">
                    {/* max 15 letter(CAPS NOT ALLOWED) */}
                    <span className="text-sm md:text-base">
                      i_am_souma_7889
                    </span>
                    <button
                      type="button"
                      className="py-1 px-2 mx-1  md:px-4 md:mx-3 my-0.5 md:text-sm text-xs font-medium text-gray-900  bg-white rounded-full border border-gray-200  dark:bg-gray-950 shadow-md dark:text-white dark:border-gray-600 "
                    >
                      <span className="  font-bold mr-1">
                        <i className="fas fa-plus "></i>
                      </span>{" "}
                      Follow
                    </button>
                  </span>
                  <div className=" text-sm text-gray-300 md:text-base">
                    <i className="far fa-clock"></i> . 2d
                  </div>
                </div>
              </div>
              <span className=" cursor-pointer gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </span>
            </div>

            <div className="bg-gray-200 flex items-center justify-center h-96 md:h-[30rem] lg:h-[34rem]">
              <img
                className="w-full h-full object-cover"
                src="https://placehold.co/500x500"
                alt="Post image"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex space-x-5">
                <button className="dark:text-white text-black hover:text-blue-500">
                  <i className="far fa-heart text-xl"></i>
                </button>
                <button className="dark:text-white text-black hover:text-blue-500">
                  <i className="far fa-comment text-xl"></i>
                </button>
                <button className="dark:text-white text-black hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 5C15 2.79086 16.7909 1 19 1C21.2091 1 23 2.79086 23 5C23 7.20914 21.2091 9 19 9C17.7961 9 16.7164 8.46811 15.9831 7.6265L8.91208 11.162C8.96969 11.4322 9 11.7126 9 12C9 12.2874 8.96969 12.5678 8.91208 12.838L15.9831 16.3735C16.7164 15.5319 17.7961 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19C15 18.7126 15.0303 18.4322 15.0879 18.162L8.01694 14.6265C7.28363 15.4681 6.20393 16 5 16C2.79086 16 1 14.2091 1 12C1 9.79086 2.79086 8 5 8C6.20393 8 7.28363 8.53189 8.01694 9.3735L15.0879 5.83801C15.0303 5.56777 15 5.28742 15 5ZM19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3ZM5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="dark:text-white text-black hover:text-blue-500">
                  <i className="far fa-bookmark text-xl"></i>
                </button>
              </div>
              <button className="dark:text-white text-black hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bar-chart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                </svg>
              </button>
            </div>
            <div className=" px-4 text-xs md:text-sm">
              341 Likes . 2589 Comments . 3 Share
            </div>
            <div className=" pt-2 p-4 text-black dark:text-white  text-xs pr-8">
              <p className="">
                <strong>john</strong> Wow, this photo is absolutely stunning!
                😍✨
              </p>
              <p className="">
                <strong>amelia</strong> This post just made{" "}
                <span className="text-gray-500 cursor-pointer hover:text-orange-500 hover:underline ">
                  ... more
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostStruct;
