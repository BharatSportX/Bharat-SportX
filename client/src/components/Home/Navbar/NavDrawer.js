import React, { useState } from "react";
import {NavLink} from "react-router-dom";
const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to toggle drawer */}
      <div className="text-center">
        <button onClick={toggleDrawer} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" mb-2  text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500"
            width="44"
            height="44"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
        </button>
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer component */}
      <div
        className={`fixed z-40 w-full h-auto [@media(max-height:450px)]:h-64 overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-900 transition-transform transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } bottom-0 left-0 right-0 xl:hidden`}
        tabIndex="-1"
      >
        <div
          className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={toggleDrawer}
        >
          <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
          <h5 className="inline-flex items-center text-base text-gray-600 dark:text-white font-medium">
            <svg
              className=" size-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
            </svg>
            <span className="text-2xl font-[600]">Browse</span>
          </h5>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 xl:grid-cols-4">
          <NavLink className="p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-opacity-15 dark:bg-gray-800" to="/">
            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-300 dark:bg-gray-700 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
              <svg
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
                className="inline size-6 text-black dark:text-white"
                fill="currentColor"
              >
                <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" />
              </svg>
            </div>
            <div className="font-medium text-center text-black dark:text-gray-400">
              Premium
            </div>
          </NavLink>
          <NavLink className="p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-opacity-15 dark:bg-gray-800" to="/">
            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-300 dark:bg-gray-700 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline size-6 text-black dark:text-white"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
              </svg>
            </div>
            <div className="font-medium text-center text-black dark:text-gray-400">
              Top News
            </div>
          </NavLink>
          <NavLink className="p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-opacity-15 dark:bg-gray-800" to="/">
            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-300 dark:bg-gray-700 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
              <svg
                className="inline size-8 text-black dark:text-white"
                fill="none"
                viewBox="0 0 164 125"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2329 89.0831C17.3341 89.4211 15.7432 89.7559 14.1371 89.9817C7.06966 90.976 1.51901 86.5687 0.48068 79.5288C-1.0289 69.307 6.73229 58.1139 14.141 55.0389C16.6482 53.9986 19.5794 53.9795 23.0364 53.3665C32.2494 32.1615 49.7618 21.7934 73.5423 20.3488C73.8921 16.4462 74.238 12.5935 74.6022 8.54059C73.5751 8.11988 72.3431 7.95977 71.6796 7.26077C70.7134 6.24344 69.5996 4.84016 69.5957 3.59771C69.5918 2.53116 70.9221 0.709891 71.8974 0.535306C74.597 0.0535535 77.542 -0.276629 80.1608 0.325233C83.5048 1.0938 83.9852 3.75262 81.8548 6.48561C81.4171 6.9389 81.1341 7.51899 81.0462 8.14288C81.224 11.6156 81.5273 15.081 81.7616 18.179C88.0211 18.7375 94.0055 19.0381 99.9211 19.8421C119.273 22.472 132.088 33.3508 139.077 51.3896C139.194 51.6909 139.333 51.9849 139.478 52.2744C139.549 52.3747 139.633 52.4656 139.727 52.5448C142.943 52.5448 146.247 52.1103 149.393 52.6347C156.138 53.7583 161.178 57.4004 162.853 64.3477C164.528 71.2951 161.862 77.0616 156.759 81.6435C151.742 86.1493 145.621 87.389 138.993 86.5404C138.746 86.7453 138.532 86.987 138.359 87.2571C130.949 104.691 117.203 114.915 99.7662 120.658C84.6227 125.684 68.3154 126.026 52.9746 121.639C36.0424 116.958 23.8017 107.182 19.2329 89.0831ZM74.3653 116.033C77.9548 115.728 81.5686 115.59 85.1292 115.09C99.4118 113.083 112.05 107.628 121.744 96.6153C138.759 77.2881 134.524 42.1123 104.846 32.3558C93.8566 28.746 82.3857 26.5243 70.7233 27.2725C57.6687 28.1106 46.2832 33.0968 37.8617 43.4256C30.0513 53.0022 26.6062 64.3694 26.3233 76.5471C25.9125 94.2223 34.5276 106.232 51.1808 112.095C58.6448 114.649 66.4731 115.979 74.362 116.032L74.3653 116.033ZM20.0205 60.3756C19.7421 60.3376 19.4597 60.3412 19.1824 60.3861C12.7641 62.2757 6.45466 73.2929 8.09026 79.6823C8.58579 81.6199 9.81316 82.7712 11.7592 82.8092C13.8765 82.8512 16.0005 82.5894 17.5501 82.4949C18.4092 74.7881 19.2099 67.6156 20.0185 60.3742L20.0205 60.3756ZM141.736 77.21C145.278 77.15 148.678 75.8064 151.305 73.4289C154.874 70.1905 155.296 65.2817 152.224 62.4522C149.242 59.7061 145.667 58.9152 141.736 59.7146V77.21Z"
                  fill="currentColor"
                />
                <path
                  d="M84.8075 82.0252C86.4018 82.3193 88.1725 82.2825 89.5331 83.0097C90.1516 83.3495 90.6946 83.8115 91.129 84.3676C91.5634 84.9238 91.8802 85.5624 92.06 86.2448C92.3344 88.1095 90.7172 89.0671 88.9411 89.2994C88.0814 89.4143 87.2076 89.3635 86.367 89.1498C84.8505 88.6937 83.2428 88.6309 81.6954 88.9674C80.148 89.304 78.7116 90.0287 77.5215 91.0734C76.1714 92.182 74.5896 93.0209 73.233 91.3781C72.0319 89.9236 72.5832 88.2348 73.7817 86.9346C75.1549 85.3673 76.8518 84.1166 78.7554 83.269C80.659 82.4214 82.7239 81.9971 84.8075 82.0252Z"
                  fill="currentColor"
                />
                <path
                  d="M57.7186 52.5112C61.4295 52.6392 63.7503 55.2876 63.5495 59.1645C63.3893 62.2533 60.9084 64.7434 58.1203 64.6154C54.9698 64.4703 52.4724 61.3206 52.607 57.6582C52.7442 53.9453 54.2853 52.3924 57.7186 52.5112Z"
                  fill="currentColor"
                />
                <path
                  d="M93.575 57.3327C93.5684 54.2361 94.7564 52.8328 97.4244 52.7856C100.873 52.7245 103.039 54.689 102.96 57.8066C102.891 60.4916 100.78 62.7678 98.3 62.8282C95.4672 62.8971 93.5822 60.7024 93.575 57.3327Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="font-medium text-center text-black dark:text-gray-400">
              Match Predictor
            </div>
          </NavLink>
          <NavLink className="p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-opacity-15 dark:bg-gray-800" to="/">
            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-300 dark:bg-gray-700 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
              <svg
                className="inline size-7 text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
              </svg>
            </div>
            <div className="font-medium text-center text-black dark:text-gray-400">
              Settings
            </div>
          </NavLink>
          <NavLink className="p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 dark:hover:bg-opacity-15 dark:bg-gray-800" to="/">
            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-300 dark:bg-gray-700 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
              <svg
                className="inline size-6 text-black dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z" />
              </svg>
            </div>
            <div className="font-medium text-center text-black dark:text-gray-400">
              Saved Blogs
            </div>
          </NavLink>
        </div>
        <div className="p-4  ">
          <h5 className="inline-flex mb-2 items-center text-base text-gray-600 dark:text-white font-medium">
            <svg
              viewBox="0 0 64 64"
              className=" size-6 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Trophy">
                <path d="M48.0632,55.4387H15.8288a3.03,3.03,0,0,0-3.03,3.03v3.0323a.9121.9121,0,0,0,.9121.9124h36.47a.9124.9124,0,0,0,.9124-.9124V58.4691A3.03,3.03,0,0,0,48.0632,55.4387Z" />
                <path d="M55.6941,6.1826H50.64V4.5367A1.9506,1.9506,0,0,0,48.69,2.5861H15.5432a1.9506,1.9506,0,0,0-1.9507,1.9506V6.1826H8.3064a4.5171,4.5171,0,0,0-4.5117,4.5117v2.9228a13.4035,13.4035,0,0,0,6.5009,11.6592,13.212,13.212,0,0,0,5.708,1.7373q.0645.0043.129.0044a1.7133,1.7133,0,0,0,.2121-.02,18.592,18.592,0,0,0,8.12,7.1725,7.1072,7.1072,0,0,1,4.0617,6.5071v3.3494A2.2628,2.2628,0,0,1,26.2639,46.29H21.5862a2.7452,2.7452,0,0,0-2.7451,2.7452v3.7528H45.3918V49.0347A2.7452,2.7452,0,0,0,42.6465,46.29H37.9687a2.263,2.263,0,0,1-2.2629-2.2629V40.6772a7.1071,7.1071,0,0,1,4.062-6.5071,18.5922,18.5922,0,0,0,8.1082-7.1523c.04,0,.0805-.0015.1208-.0042a13.2033,13.2033,0,0,0,5.707-1.7373,13.4039,13.4039,0,0,0,6.502-11.6592V10.6943A4.5171,4.5171,0,0,0,55.6941,6.1826ZM12.0486,22.2465a9.896,9.896,0,0,1-4.7539-8.6294V10.6943A1.0128,1.0128,0,0,1,8.3064,9.6826h5.2861v7.62a18.4666,18.4666,0,0,0,.9871,5.9428A9.5264,9.5264,0,0,1,12.0486,22.2465ZM39.1211,18.18l-2.13,1.5474a1.429,1.429,0,0,0-.519,1.5979l.8132,2.5034a1.4293,1.4293,0,0,1-2.1994,1.5981l-2.13-1.5472a1.4293,1.4293,0,0,0-1.68,0l-2.13,1.5472a1.4293,1.4293,0,0,1-2.1994-1.5981l.8134-2.5034a1.4293,1.4293,0,0,0-.5193-1.5979L25.112,18.18a1.4293,1.4293,0,0,1,.84-2.5857h2.6321a1.4293,1.4293,0,0,0,1.3594-.9875l.8135-2.5034a1.4293,1.4293,0,0,1,2.7187,0l.8135,2.5034a1.43,1.43,0,0,0,1.3594.9875H38.281A1.4294,1.4294,0,0,1,39.1211,18.18Zm17.5847-4.563a9.8973,9.8973,0,0,1-4.7549,8.63,9.5091,9.5091,0,0,1-2.2764.9368,18.4662,18.4662,0,0,0,.9659-5.8815v-7.62h5.0537a1.0128,1.0128,0,0,1,1.0117,1.0117Z" />
              </g>
            </svg>
            <span className="text-2xl font-[600] ">My Matches</span>
          </h5>
          <div className="text-black dark:text-gray-400 hover:bg-gray-700 hover:bg-opacity-10   dark:hover:bg-gray-50 dark:hover:bg-opacity-10  rounded-lg">
            <span className="py-3 px-1  inline-flex items-center text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=" size-5 mr-4 mt-0.5 "
                viewBox="0 0 16 16"
              >
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
              </svg>
              Pinned Matches
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
