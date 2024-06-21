import React, { useState, useRef, useEffect, useContext } from "react";
import Blogs from "./Blogs";
import LiveMatch from "./LiveMatch/LiveMatch";
import RecentMatch from "./RecentMatch/RecentMatch";
import UpcomingMatch from "./UpcomingMatch/UpcomingMatch";
import NoLive from "./LiveMatch/NoLive"; // Import NoLive
import NavContext from "../Navbar/NavContext/NavContext";

const HomeBody = () => {
  const {
    activeButtons,
    containerRef,
    currentComponent,
    indicatorColor,
    handleClick,
  } = useContext(NavContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
      setCurrentIndex(index);
    };

    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (currentIndex < 3) { // Adjust the limit according to your needs
      setCurrentIndex((next) => next + 1);
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (index, component) => {
    setCurrentIndex(0); // Reset the current index
    sliderRef.current.scrollTo({ left: 0,  }); // Reset scroll position
    handleClick(index, component); // Call existing handleClick function
  };

  return (
    <div className="relative top-36 mb-44 lg:mb-0">
      <div className="m-4 lg:mx-10 lg:mt-5">
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
              ? "relative border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-6 rounded-full cursor-pointer bg-orange-800 text-orange-300"
              : "relative border-2 text-lg font-medium px-6 rounded-full cursor-pointer dark:text-orange-500 dark:border-orange-500 border-orange-800 text-orange-800"
          }
          onClick={() => handleCategoryClick(0, "LiveMatch")}
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
              ? " border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-4 rounded-full cursor-pointer bg-orange-800 text-orange-300"
              : "border-2 text-lg font-medium dark:text-orange-500 dark:border-orange-500 px-4 rounded-full cursor-pointer border-orange-800 text-orange-800"
          }
          onClick={() => handleCategoryClick(1, "RecentMatch")}
        >
          Recent<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
        <button
          className={
            activeButtons[2]
              ? "border-2 border-orange-800 dark:border-orange-500 dark:bg-orange-500 dark:text-orange-950 text-lg font-medium px-4 rounded-full cursor-pointer bg-orange-800 text-orange-300"
              : "border-2 text-lg font-medium dark:text-orange-500 dark:border-orange-500 px-4 rounded-full cursor-pointer border-orange-800 text-orange-800"
          }
          onClick={() => handleCategoryClick(2, "UpcomingMatch")}
        >
          Upcoming<span className="hidden xl:inline-block ml-2"> Matches</span>
        </button>
      </div>
      <div className="mx-7 lg:mx-9">
      <div className="relative z-10">
        <div className="overflow-hidden w-full">
          <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar">
            <div
              className="w-full flex-shrink-0 px-2 py-3 flex min-w-full space-x-8 md:space-x-6"
              ref={containerRef}
            >
              {currentComponent === "LiveMatch" && <LiveMatch />}
              {currentComponent === "RecentMatch" && <RecentMatch />}
              {currentComponent === "UpcomingMatch" && <UpcomingMatch />}
            </div>
          </div>

          <button
            className={`carousel-control-prev absolute z-40 top-1/2 transform -translate-y-1/2 -left-7 p-2 rounded-md ${
              currentIndex === 0
                ? "opacity-80  cursor-not-allowed dark:bg-gray-900 bg-[#b4beca8d] dark:text-white text-black"
                : "dark:bg-gray-800 bg-[#b4beca] dark:text-white text-black"
            }`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              <i className="fas fa-caret-left"></i>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className={`carousel-control-next absolute z-40 top-1/2 transform -translate-y-1/2 -right-7 p-2 rounded-md ${
              currentIndex === 3
                ? " opacity-80  cursor-not-allowed dark:bg-gray-900 bg-[#b4beca8d] dark:text-white text-black"
                : "dark:bg-gray-800 bg-[#b4beca] dark:text-white text-black"
            }`}
            onClick={nextSlide}
            disabled={currentIndex === 3}
          >
            <span className="carousel-control-next-icon" aria-hidden="true">
              <i className="fas fa-caret-right"></i>
            </span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
      </div>
      <Blogs />
    </div>
  );
};

export default HomeBody;
