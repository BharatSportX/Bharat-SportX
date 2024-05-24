// import React, { useState, useRef, useEffect } from "react";
// import LiveMatch from "./LiveMatch";

// const CarouselLive = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const items = [
//     { component: <LiveMatch /> },
//     { component: <LiveMatch /> },
//     { component: <LiveMatch /> },
//     { component: <LiveMatch /> },
//     { component: <LiveMatch /> },
//   ];

//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const [isTouchEnabled, setIsTouchEnabled] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) { // lg breakpoint (>= 1024px)
//         setIsTouchEnabled(false);
//       } else {
//         setIsTouchEnabled(true);
//       }
//     };

//     handleResize(); // Set initial state
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (currentIndex < items.length - 1) {
//       setCurrentIndex((next) => next + 1);
//     }
//   };

//   const handleTouchStart = (e) => {
//     if (isTouchEnabled) {
//       touchStartX.current = e.targetTouches[0].clientX;
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (isTouchEnabled) {
//       touchEndX.current = e.targetTouches[0].clientX;
//     }
//   };

//   const handleTouchEnd = () => {
//     if (isTouchEnabled) {
//       if (touchStartX.current - touchEndX.current > 50) {
//         // Swiped left
//         nextSlide();
//       }
//       if (touchStartX.current - touchEndX.current < -50) {
//         // Swiped right
//         prevSlide();
//       }
//     }
//   };

//   return (
//     <div
//       className="relative overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {items.map((item, index) => (
//           <div key={index} className="flex-none w-full">
//             {item.component}
//           </div>
//         ))}
//       </div>
//       <button
//         className={`carousel-control-prev absolute top-1/2 transform -translate-y-1/2 -left-1 bg-gray-800 text-white p-2 rounded-full ${
//           currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         onClick={prevSlide}
//         disabled={currentIndex === 0}
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true">
//           <i className="fas fa-caret-left"></i>
//         </span>
//         <span className="sr-only">Previous</span>
//       </button>
//       <button
//         className={`carousel-control-next absolute top-1/2 transform -translate-y-1/2 -right-1 float-end bg-gray-800 text-white p-2 rounded-full ${
//           currentIndex === items.length - 1 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         onClick={nextSlide}
//         disabled={currentIndex === items.length - 1}
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true">
//           <i className="fas fa-caret-right"></i>
//         </span>
//         <span className="sr-only">Next</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselLive;


import React, { useState, useRef, useEffect } from "react";
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
  const [isTouchEnabled, setIsTouchEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false); // New state for debounce

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // lg breakpoint (>= 1024px)
        setIsTouchEnabled(false);
      } else {
        setIsTouchEnabled(true);
      }
    }; //touch ch not used fr lg device

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
//prev button
  const prevSlide = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < items.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((next) => next + 1);
    }
  };

  // Ensure that the transition is complete before allowing another slide
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const carousel = document.querySelector('.carousel-content');
    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        carousel.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    if (isTouchEnabled) {
      touchStartX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (isTouchEnabled) {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (isTouchEnabled) {
      if (touchStartX.current - touchEndX.current > 50) {
        // Swiped left
        nextSlide();
      }
      if (touchStartX.current - touchEndX.current < -50) {
        // Swiped right
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out carousel-content"
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
        disabled={currentIndex === 0 || isTransitioning}
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
        disabled={currentIndex === items.length - 1 || isTransitioning}
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
