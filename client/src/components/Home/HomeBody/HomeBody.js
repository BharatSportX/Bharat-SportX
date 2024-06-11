import React, { useState, useEffect } from "react"
import PrevNext from "./PrevNext";

import Blogs from "./Blogs";
import LiveMatch from "./LiveMatch/LiveMatch";

const HomeBody = () => {
  const [activeButtons, setActiveButtons] = useState([false, true, true]);
  const [indicatorColor, setIndicatorColor] = useState(
    "bg-[greenyellow] dark:bg-green-900"
  );

  const handleClick = (index) => {
    const newActiveButtons = activeButtons.map((isActive, i) =>
      i === index ? !isActive : true
    );
    setActiveButtons(newActiveButtons);

    if (index === 0) {
      setIndicatorColor(
        newActiveButtons[0]
          ? "bg-red-600 dark:bg-[greenyellow]"
          : "bg-[greenyellow] dark:bg-green-900"
      );
    } else {
      setIndicatorColor("bg-red-600 dark:bg-[greenyellow]");
    }
  };

  return (
    <div className="relative top-36">
      <div className="m-4 lg:mx-10 lg:mt-5 ">
        <h1
          className="text-3xl font-semibold"
          style={{ fontFamily: '"Varela Round", sans-serif' }}
        >
          Matches
        </h1>
      </div>
      <div className="m-4 lg:mx-10 space-x-2.5 max-370:space-x-1.5 mr-0">
        <button
          className={
            activeButtons[0]
              ? "relative border-2 text-lg font-medium px-6 rounded-full cursor-pointer dark:text-orange-500 dark:border-orange-500 border-orange-800 text-orange-800"
              : "relative border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-6 rounded-full cursor-pointer bg-orange-800 text-orange-300"
          }
          onClick={() => handleClick(0)}
        >
          <span
            className={`absolute top-2.5 left-2.5 flex size-[0.4rem] ${indicatorColor} rounded-full `}
          ></span>
          <span
            className={`absolute top-[0.59rem] left-[0.58rem] flex size-2 ${indicatorColor} rounded-full animate-ping `}
          ></span>
          Live<span className="hidden xl:inline-block ml-2"> Matches</span>
          <span className="">(2)</span>
        </button>
        <button
          className={
            activeButtons[1]
              ? "border-2 text-lg font-medium dark:text-orange-500 dark:border-orange-500 px-4 rounded-full cursor-pointer border-orange-800 text-orange-800"
              : "border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-4 rounded-full cursor-pointer bg-orange-800 text-orange-300"
          }
          onClick={() => handleClick(1)}
        >
          Recent<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
        <button
          className={
            activeButtons[2]
              ? "border-2 text-lg font-medium dark:text-orange-500 dark:border-orange-500 px-4 rounded-full cursor-pointer border-orange-800 text-orange-800"
              : "border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-4 rounded-full cursor-pointer bg-orange-800 text-orange-300"
          }
          onClick={() => handleClick(2)}
        >
          Upcoming<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
      </div>
      <div className="m-4 md:mx-7   relative z-10">
        <PrevNext />
        <div className=" no-scrollbar overflow-x-auto">
          <div className=" container inline-flex  space-x-6 whitespace-nowrap ">
            <LiveMatch/>
           
          </div>
        </div>
      </div>

      <Blogs />
    </div>
  );
};

export default HomeBody;
