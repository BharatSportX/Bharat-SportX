import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import FrontNavbar from "./FrontNavbar";
import { Link } from "react-router-dom";
import FrontBody from "./FrontBody/FrontBody";
import Footer from "./Footer";
import FrontAuth from "./FrontAuth"

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
    <div className="bg-[#232323] h-full">
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
              <FrontAuth/>
            </div>
          </div>
        </section>
      </div>
     <FrontBody/>
     <div>
      <Footer/>
     </div>
    </div>
  );
};

export default FrontPage;