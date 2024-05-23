import React, { useState, useRef } from "react";
import LiveMatch from "./LiveMatch";

const CarouselLive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
    { component: <LiveMatch /> },
  ];

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      prevSlide();
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={currentIndex === 0 ? undefined : handleTouchStart}
      onTouchMove={currentIndex === 0 ? undefined : handleTouchMove}
      onTouchEnd={currentIndex === 0 ? undefined : handleTouchEnd}
    >
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
        className={`carousel-control-prev absolute top-1/2 transform -translate-y-1/2 -left-1 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
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
        className={`carousel-control-next absolute top-1/2 transform -translate-y-1/2 -right-1 float-end bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === items.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={nextSlide}
        disabled={currentIndex === items.length - 1}
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i className="fas fa-caret-right"></i>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default CarouselLive;
