import React, { useState } from "react";

import LiveMatch from "./LiveMatch";

const CarouselLive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
  ];

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-none w-full">
            {item.component}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-1/2 transform -translate-y-1/2 -left-1 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <i class="fas fa-caret-left"></i>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-1/2 transform -translate-y-1/2 -right-1 float-end bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i class="fas fa-caret-right"></i>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default CarouselLive;
