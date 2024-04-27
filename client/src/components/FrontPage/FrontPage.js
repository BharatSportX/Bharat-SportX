// import React from "react";
// import "./FrontPage.css";
// import FrontNavbar from "./FrontNavbar";
// import { Link } from "react-router-dom";

// const FrontPage = () => {
//   return (
//     <div className="frontBody h-screen flex flex-col relative">
//       <FrontNavbar/>
//       <section className="">
//         <div className="flex flex-col justify-center text-center items-center h-full px-3 absolute top-0 left-0 right-0 bottom-0">
//           <h1 className="mb-4 text-4xl font-bold tracking-tight  leading-none text-white md:text-5xl lg:text-6xl">
//             {/* write user anme here */}
//             Hey!.. Welcome to <span className="leading-[2]">BharatSportX</span>
//           </h1>

//           <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
//             Here We Update All sports related News ,Keep On touch to get all
//             Current updates.
//             <p className="my-2">
//               Click <b>GeT Started</b> to enter Our Website.
//             </p>
//           </p>
//           <div className=" ">
//             <Link
//               href="#"
//               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-300  hover:font-semibold dark:focus:ring-blue-900 button shadow-lg "
//             >
//               Get started
//               <svg
//                 className="w-3.5 h-3.5 ms-2 rtl:rotate-180 icon"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FrontPage;
import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import FrontNavbar from "./FrontNavbar";
import { Link } from "react-router-dom";

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

  return (
    <div className="frontBody h-screen flex flex-col relative">
      <FrontNavbar />
      <section className="">
        <div className="flex flex-col justify-center text-center items-center h-full px-3 absolute top-0 left-0 right-0 bottom-0">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {text}
            {/* <span className="leading-[2]">BharatSportX</span> */}
          </h1>

          <p className="mb-8 text-xl font-normal pt-2  text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
            Stay ahead with the latest updates on all sports news! Keep your finger on the pulse of the sporting world.
            <p className="my-2 text-lg pt-2 lg:text-xl">
              Ready to dive in? Click <b>Get Started</b> to explore our our sports paradise.
            </p>
          </p>
          <div className=" ">
            <Link
              to="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-300 hover:bg-yellow-300  hover:font-semibold dark:focus:ring-blue-900 button shadow-lg"
            >
              Get started
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
  );
};

export default FrontPage;
