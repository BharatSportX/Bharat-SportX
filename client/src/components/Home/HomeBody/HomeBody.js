import React, { useState } from "react";
import LiveMatch from "./LiveMatch";
import Blogs from "./Blogs";

const HomeBody = () => {
  const [activeButtons, setActiveButtons] = useState([false, true, true]);

  const handleClick = (index) => {
    const newActiveButtons = activeButtons.map((isActive, i) =>
      i === index ? !isActive : true
    );
    setActiveButtons(newActiveButtons);
  };

  return (
    <div className="relative top-36 m-4">
      <div className="">
        <h1 className="text-4xl font-medium">Matches</h1>
      </div>
      <div className="mt-5">
        <button
          className={
            activeButtons[0]
              ? " border-2 border-orange-100 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5  rounded-full dark:bg-orange-50 cursor-pointer dark:border-orange-900 dark:text-orange-800"
              : "bg-orange-100 border-2 dark:border-orange-950 border-orange-300 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5  rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300  "
          }
          onClick={() => handleClick(0)}
        >
          Live<span className="hidden xl:inline-block"> Matches</span>
        </button>
        <button
          className={
            activeButtons[1]
              ? " border-2 border-orange-100 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5 pl-5 rounded-full dark:bg-orange-50 cursor-pointer dark:border-orange-900 dark:text-orange-800"
              : "bg-orange-100 border-2 dark:border-orange-950 border-orange-300 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5 pl-5 rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300"
          }
          onClick={() => handleClick(1)}
        >
          Recent<span className="hidden xl:inline-block"> Matches</span>
        </button>
        <button
          className={
            activeButtons[2]
              ? " border-2 border-orange-100 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5 pl-5 rounded-full dark:bg-orange-50 cursor-pointer dark:border-orange-900 dark:text-orange-800"
              : "bg-orange-100 border-2 dark:border-orange-950 border-orange-300 text-orange-800 text-lg font-medium me-2.5 px-4 py-0.5 pl-5 rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300"
          }
          onClick={() => handleClick(2)}
        >
          Upcoming<span className="hidden xl:inline-block"> Matches</span>
        </button>
      </div>
      <LiveMatch />
      <Blogs />
    </div>
  );
};

export default HomeBody;
