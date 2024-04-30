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
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="Firstans"
          targetQn="Firstqn"
          body="body1"
           isOpen={accordionState["Firstans"]}
           toggleAccordion={toggleAccordion}
        />
        <BodyQN
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="Secondans"
          targetQn="Secondqn"
          body="body2"
           isOpen={accordionState["Secondans"]}
           toggleAccordion={toggleAccordion}
        />
        <BodyQN
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="Thirdans"
          targetQn="Thirdqn"
          body="body3"
           isOpen={accordionState["Thirdans"]}
           toggleAccordion={toggleAccordion}
        />
        <BodyQN
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="fourthans"
          targetQn="fourthqn"
          body="body4"
           isOpen={accordionState["fourthans"]}
           toggleAccordion={toggleAccordion}
        />
        <BodyQN
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="fifthans"
          targetQn="fifthqn"
          body="body5"
           isOpen={accordionState["fifthans"]}
           toggleAccordion={toggleAccordion}
        />
        <BodyQN
          qn="What is Special in BharatSportX"
          ans=" You find your favourite sports here ans also you get live train with special branch "
          targetAns="Sixthans"
          targetQn="Sixthqn"
          body="body6"
           isOpen={accordionState["Sixthans"]}
           toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
};

export default FrontBody;
