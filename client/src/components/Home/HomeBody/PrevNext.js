import React, { useState } from "react";

const PrevNext = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    // if (currentIndex > 0) {
    //   setCurrentIndex((prevIndex) => prevIndex - 1);
    // }
  };

  const nextSlide = () => {
    // if (currentIndex < items.length - 1) {
    //   setCurrentIndex((next) => next + 1);
    // }
  };

  return (
    <div>
      <button
        className={`carousel-control-prev absolute z-40 top-1/2 transform -translate-y-1/2 -left-4 dark:bg-gray-800 bg-[#b4beca] dark:text-white  text-black p-2 rounded-md `}
        onClick={prevSlide}
        // disabled={currentIndex === 0 }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <i className="fas fa-caret-left"></i>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className={`carousel-control-next absolute top-1/2 transform -translate-y-1/2 -right-4 dark:bg-gray-800 bg-[#b4beca] dark:text-white  text-black p-2 rounded-md `}
        onClick={nextSlide}
        // disabled={currentIndex === items.length - 1 }
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i className="fas fa-caret-right"></i>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default PrevNext;
