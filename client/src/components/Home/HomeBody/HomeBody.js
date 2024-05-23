import React, { useState } from "react";
import LiveMatch from "./LiveMatch";
import Blogs from "./Blogs";
import CarouselLive from "./CarouselLive";

const HomeBody = () => {
  const [activeButtons, setActiveButtons] = useState([false, true, true]);

  const handleClick = (index) => {
    const newActiveButtons = activeButtons.map((isActive, i) =>
      i === index ? !isActive : true
    );
    setActiveButtons(newActiveButtons);
  };

  return (
    <div className="relative top-36 ">
      <div className="m-4">
        <h1
          className="text-3xl font-semibold "
          style={{ fontFamily: '"Varela Round", sans-serif' }}
        >
          Matches
        </h1>
      </div>
      <div className="m-4 ">
        <button
          className={
            activeButtons[0]
              ? " border-2  text-lg font-medium me-2.5 px-4   rounded-full  cursor-pointer dark:text-orange-500 dark:border-orange-500 border-orange-800 text-orange-800 "
              : " border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950  text-lg font-medium me-2.5 px-4   rounded-full cursor-pointer bg-orange-800 text-orange-300  "
          }
          onClick={() => handleClick(0)}
        >
        {/* 2 live */}
          Live(2)<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
        <button
          className={
            activeButtons[1]
              ? " border-2  text-lg font-medium me-2.5 dark:text-orange-500 dark:border-orange-500  px-4  rounded-full  cursor-pointer border-orange-800 text-orange-800"
              : " border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950  text-lg font-medium me-2.5 px-4  rounded-full cursor-poin9er bg-orange-800 text-orange-300"
          }
          onClick={() => handleClick(1)}
        >
          Recent<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
        <button
          className={
            activeButtons[2]
              ? " border-2  text-lg font-medium me-2.5 dark:text-orange-500 dark:border-orange-500  px-4  rounded-full  cursor-pointer border-orange-800 text-orange-800"
              : " border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950  text-lg font-medium me-2.5 px-4  rounded-full cursor-poin9er bg-orange-800 text-orange-300"
          }
          onClick={() => handleClick(2)}
        >
          Upcoming<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
      </div>
      <CarouselLive/>
      <Blogs />
    </div>
  );
};

export default HomeBody;
