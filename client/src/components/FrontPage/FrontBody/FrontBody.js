import React, { useState } from "react";
import BodyCard from "./BodyCard";
import BodyQN from "./BodyQN";

const FrontBody = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
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
          title="What is Bharat SportX?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
          isOpen={openAccordionIndex === 0}
          toggleAccordion={() => toggleAccordion(0)}
        />
        <BodyQN
          title="What is Bharat SportX?"
          answer="You find your favourite sports here and also you get live train with special branch"
          isOpen={openAccordionIndex === 1}
          toggleAccordion={() => toggleAccordion(1)}
        />
        <BodyQN
          title="What is Bharat SportX?"
          answer="You find your favourite sports here and also you get live train with special branch"
          isOpen={openAccordionIndex === 2}
          toggleAccordion={() => toggleAccordion(2)}
        />
        <BodyQN
          title="What is Bharat SportX?"
          answer="You find your favourite sports here and also you get live train with special branch"
          isOpen={openAccordionIndex === 3}
          toggleAccordion={() => toggleAccordion(3)}
        />
        <BodyQN
          title="What is Bharat SportX?"
          answer="You find your favourite sports here and also you get live train with special branch"
          isOpen={openAccordionIndex === 4}
          toggleAccordion={() => toggleAccordion(4)}
        />
        <BodyQN
          title="What is Bharat SportX?"
          answer="You find your favourite sports here and also you get live train with special branch"
          isOpen={openAccordionIndex === 5}
          toggleAccordion={() => toggleAccordion(5)}
        />
        
      </div>
    </div>
  );
};

export default FrontBody;
