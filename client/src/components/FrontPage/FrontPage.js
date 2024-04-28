import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import FrontNavbar from "./FrontNavbar";
import { Link } from "react-router-dom";
import FrontBody from "./FrontBody";

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
    <div className="bg-[#232323]">
      <div className="frontBody h-[90vh] max-[320px]:h-screen md:h-[95vh] lg:h-[95vh]    flex flex-col relative">
        <FrontNavbar />
        <section className="">
          <div className="flex flex-col  justify-center text-center items-center px-3 absolute top-0 left-0 right-0 bottom-0 ">
            <h1 className="mb-4 text-4xl font-bold font-[Acme,sans-serif]  leading-normal text-white tracking-wide md:text-5xl min-[667px]:pt-20 ">
              {text}
              {/* <span className="leading-[2]">BharatSportX</span> */}
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
                to="/LeagueHome"
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
      <FrontBody />
    </div>
  );
};

export default FrontPage;
