import React, { useState } from "react";
import BodyCard from "./BodyCard";
import BodyQN from "./BodyQN";

const FrontBody = () => {
  const [accordionState, setAccordionState] = useState({});

  const toggleAccordion = (targetAns) => {
    setAccordionState((prevState) => {
      // Close any other open accordions
      const newState = {};
      for (const key in prevState) {
        if (key !== targetAns) {
          newState[key] = false;
        }
      }
      // Toggle the clicked accordion
      return { ...newState, [targetAns]: !prevState[targetAns] || false };
    });
  };
  return (
    <div className="">
      <BodyCard
        paragraphorder="1"
        imgorder="2"
        img="https://source.unsplash.com/random/500x450/?football"
      />
      <BodyCard
        paragraphorder="2"
        imgorder="1"
        img="https://source.unsplash.com/random/500x450/?cricket"
      />
      <BodyCard
        paragraphorder="1"
        imgorder="2"
        img="https://source.unsplash.com/random/500x450/?chess"
      />
      <BodyCard
        paragraphorder="2"
        imgorder="1"
        img="https://source.unsplash.com/random/500x450/?basketball"
      />
      <div className="bg-black">
        <h1 className=" text-4xl p-11 leading-snug lg:text-5xl text-white text-center pt-12 pb-6 font-[Rowdies,sans-serif] lg:font-bold">
          FAQ{" "}
        </h1>
        <BodyQN
          title="what is Bharat SportX"
          answer=" You find your favourite sports here ans also you get live train with special branch "
        />
        <BodyQN
          title="what is Bharat SportX"
          answer=" You find your favourite sports here ans also you get live train with special branch "
        />
        <BodyQN title="what is Bharat SportX" answer=" You find your favourite sports here ans also you get live train with special branch " />
        
      </div>
      {/* <div className="p-4 bg-gray-200 rounded-lg">
      
    </div> */}
    </div>
  );
};

export default FrontBody;
