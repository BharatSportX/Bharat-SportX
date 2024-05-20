// import React, { useState, useEffect } from "react";
// import "./FrontPage.css";
// import FrontNavbar from "./FrontNavbar";
// import { Link } from "react-router-dom";
// import FrontBody from "./FrontBody/FrontBody";
// import Footer from "./Footer";


// const FrontPage = () => {
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const message = "Hey!.. Welcome to BharatSportX";

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (index < message.length) {
//         setText((prevText) => prevText + message[index]);
//         setIndex((prevIndex) => prevIndex + 1);
//       }
//     }, 100); // Adjust the speed here (milliseconds)

//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div className="bg-[#232323] h-full">
//       <div className="frontBody h-[90vh] max-[320px]:h-screen md:h-[95vh] lg:h-[95vh]    flex flex-col relative">
//         <FrontNavbar />
//         <section className="">
//           <div className="flex flex-col  justify-center text-center items-center px-3 absolute top-0 left-0 right-0 bottom-0 ">
//             <h1 className="mb-4 text-4xl font-bold font-[Acme,sans-serif]  leading-normal text-white tracking-wide md:text-5xl min-[667px]:pt-20 ">
//               {text}
//               {/* <span className="leading-[2]">BharatSportX</span> */}
//             </h1>

//             <p className="mb-8 text-xl  font-[Quicksand,sans-serif] font-normal pt-2  text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
//               Stay ahead with the latest updates on all sports news! Keep your
//               finger on the pulse of the sporting world.
//               <p className="my-2 text-lg pt-2 lg:text-xl">
//                 Ready to dive in? Click <b>Get Started</b> to explore our our
//                 sports paradise.
//               </p>
//             </p>
//             <div className=" ">
//               <Link
//                 to="/football/home"
//                 className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-300  hover:font-semibold dark:focus:ring-blue-900 button shadow-lg     md:font-semibold  md:text-2xl font-[Josefin Sans,sans-serif]  sm:py-3  sm:px-5 "
//               >
//                 Get Started
//                 <svg
//                   className="w-3.5 h-3.5 ms-2 rtl:rotate-180 icon"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//      <FrontBody/>
//      <div>
//       <Footer/>
//      </div>
//     </div>
//   );
// };

// export default FrontPage;













import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import FrontNavbar from "./FrontNavbar";
import { Link } from "react-router-dom";
import FrontBody from "./FrontBody/FrontBody";
import Footer from "./Footer";

const FrontPage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const message = "Hey!.. Welcome to BharatSportX";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < message.length) {
        setText((prevText) => prevText + message[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Adjust the speed here (milliseconds)

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const modal = document.getElementById('popup-modal');
    modal.classList.remove('hidden');
    modal.focus();
  }, []);

  const closePopupModal = () => {
    const modal = document.getElementById('popup-modal');
    modal.classList.add('hidden');
  };

  return (
    <div className="bg-[#232323] h-full">
      <div className="frontBody h-[90vh] max-[320px]:h-screen md:h-[95vh] lg:h-[95vh]    flex flex-col relative">
        <FrontNavbar />
        <section className="">
          <div className="flex flex-col  justify-center text-center items-center px-3 absolute top-0 left-0 right-0 bottom-0 ">
            <h1 className="mb-4 text-4xl font-bold font-[Acme,sans-serif]  leading-normal text-white tracking-wide md:text-5xl min-[667px]:pt-20 ">
              {text}
            </h1>

            <p className="mb-8 text-xl  font-[Quicksand,sans-serif] font-normal pt-2  text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
              Stay ahead with the latest updates on all sports news! Keep your
              finger on the pulse of the sporting world.
              <p className="my-2 text-lg pt-2 lg:text-xl">
                Ready to dive in? Click <b>Get Started</b> to explore our our
                sports paradise.
              </p>
            </p>
            <div className=" ">
              <Link
                to="/football/home"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-300  hover:font-semibold dark:focus:ring-blue-900 button shadow-lg     md:font-semibold  md:text-2xl font-[Josefin Sans,sans-serif]  sm:py-3  sm:px-5 "
              >
                Get Started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180 icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <FrontBody/>
      <div>
        <Footer/>
      </div>
      <div id="popup-modal" tabIndex="-1" className="hidden fixed inset-x-0 top-0 z-50 overflow-y-auto">
        <div className="flex justify-center items-start min-h-screen pt-2">
          <div className="bg-white rounded-lg shadow-lg relative w-full max-w-md">
            <button type="button" onClick={closePopupModal} className="absolute top-3 end-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> This site is under construction. Thank you for your patience! We will get back to you soon.</h3>
              <button onClick={closePopupModal} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Yes, Thank you
              </button>
              <button onClick={closePopupModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Okay Got it!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
