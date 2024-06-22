import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import ProgressStep from "./ProgressStep";
import "./LiveMatch.css";
import NoLive from "./NoLive";
import NavContext from "../../Navbar/NavContext/NavContext";

const LiveMatch = () => {
  const { handleExternalLinkClick } = useContext(NavContext);

  return (
    <>
      <div className="flex-none relative    w-full  md:w-[30rem] my-4 md:my-6 ">
        <section className="md:mx-5 ">
          {/* <div className=" bg-[#1e2026]   md:h-[25.3rem] p-4 md:p-0    text-white  rounded-lg  mx-auto "> */}
          <div
            className=" bg-custom-radial-gradient dark:match h-auto p-0    text-white  rounded-lg  mx-auto "
            style={
              {
                // background:'black'
              }
            }
          >
            <div className="flex pb-3 p-4 md:pb-5 bg-orange-800 text-orange-300 shadow-orange-950  dark:bg-orange-500 dark:text-orange-950  rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2  shadow-sm  dark:shadow-orange-700">
              <div className=" flex justify-center items-center space-x-2">
                {/* <span className=" hover:border-2 hover:border-white p-[0.8px] rounded-full"> */}
                <img
                  className="size-7  rounded-full float-left  cursor-pointer"
                  src="https://thumbs.dreamstime.com/b/uefa-europa-conference-league-logo-vector-illustrated-official-210043040.jpg"
                  alt="logo"
                />
                {/* </span> */}
                <span className=" text-base tracking-wide font-medium">
                  UERO Europa Cup
                </span>
              </div>
              <div className="float-end flex space-x-2 relative">
                <label className="container_box">
                  <input type="checkbox" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 75 100"
                    className="pin dark:text-[#333] size-4"
                  >
                    <line
                      strokeWidth="12"
                      stroke="currentColor"
                      y2="100"
                      x2="37"
                      y1="64"
                      x1="37"
                    ></line>
                    <path
                      strokeWidth="10"
                      stroke="currentColor"
                      d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
                    ></path>
                  </svg>
                </label>

                <label className="popup">
                  <input type="checkbox" />
                  <div className="burger size-[18px] md:size-5 " tabIndex="0">
                    <span className="dark:bg-[#333] bg-current "></span>
                    <span className="dark:bg-[#333] bg-current "></span>
                    <span className="dark:bg-[#333] bg-current "></span>
                  </div>
                  <nav className="popup-window">
                    <legend>More Details</legend>
                    <ul>
                      <li>
                        <button className="">
                          <svg
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle r="4" cy="7" cx="9"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          <span>Votes</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                          </svg>
                          <span>Set Reminder</span>
                        </button>
                      </li>
                      <hr />
                      <li>
                        <button>
                          <svg
                            className="inline  text-black dark:text-white"
                            fill="none"
                            height="14"
                            width="14"
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
                          <span>AI Predictor</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            strokeWidth="10"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                            />
                          </svg>
                          <span>Graphs</span>
                        </button>
                      </li>
                      <hr />
                      <li>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
                          </svg>
                          <span>Players</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            {/* <div className=" md:absolute md:bottom-0 md:left-0 md:right-0 md:rounded-b-lg hidden md:flex md:mx-5 md:flex-col md:text-[#220000] font-medium md:bg-orange-700 "> */}

            <div className=" border-x dark:border-slate-700 border-slate-500  mx-[0.5px] md:ml-0 md:mr-[0.45px]">
              <section className="md:pt-10 pb-4 md:px-14 px-4 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Sevilla U19"
                    className=""
                  />
                  <div className="text-center">
                    <div className="text-2xl  font-bold dark:text-red-500 text-red-700">
                      1 - 2
                    </div>

                    <div className="text-xs  dark:md:text-zinc-400 dark:text-red-500  text-blue-800 font-medium dark:font-medium">
                      ET-116:14
                    </div>
                  </div>

                  <img
                    src="https://placehold.co/50x50"
                    alt="Real Betis"
                    className="w-12 h-12"
                  />
                </div>
                <div className=" ">
                  <span className="text-base  absolute top-[45%] left-[45%] md:left-[47%] pos-tight dark:text-green-400  text-green-800 font-medium">
                    <span className=" btn-shine dark:live-dark-shine  live-light-shine ">
                      Live
                    </span>
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="dark:text-white font-medium text-black">
                      Sevilla U19
                    </div>
                    <div className="text-zinc-800 dark:text-zinc-400">
                      B. Sow 36'
                    </div>
                    <span className="text-zinc-800 dark:text-zinc-400 hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                      . . .
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="dark:text-white font-medium text-black">
                      Real Betis
                    </div>
                    <div className="text-zinc-800 dark:text-zinc-400">
                      <div>Goal 96'</div>
                      <div>Pablo García 48'</div>
                      <span className=" hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                        . . .
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <div className=" ">
                <hr className="  dark:border-slate-600 border-slate-500  mx-2 w-auto md:hidden mb-4" />
                <ProgressStep />
              </div>
              <div className="hidden mt-6 md:flex md:flex-col  md:justify-center md:items-center text-center text-wrap ">
                <hr className="  dark:border-slate-600  w-[26rem] " />
                <div className="py-2 pt-3">
                  {/* here just only few words are taken otherwise responsive ness break so use lenghth property else ('...') which leads to seemore */}
                  <span className="text-black text-sm px-2  dark:text-gray-300">
                    Sevilla nedds Two more goal to Win. CRO 13.9. PPR 89
                    <span className=" hover:underline dark:hover:text-sky-400 hover:text-blue-800 cursor-pointer mx-1">
                      . . .
                    </span>
                  </span>
                  <p className="text-black text-xs dark:text-gray-400 py-1.5">
                    Play-Off . UERO Europa 78 of 20
                  </p>
                </div>
              </div>
            </div>
            <div className=" rounded-b-lg  flex  flex-col bg-orange-800 text-orange-300 shadow-orange-950  dark:bg-orange-500 dark:text-orange-950 font-medium   shadow-sm  dark:shadow-orange-500">
              <NavLink to="/" className="  text-center py-2">
                <span className="hover:underline">See More Details</span>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      

      {/* <NoLive onUpcomingClick={() => handleExternalLinkClick("UpcomingMatch")} /> */}
    </>
  );
};

export default LiveMatch;
