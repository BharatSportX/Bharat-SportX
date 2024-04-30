import React from "react";
import BodyCard from "./BodyCard";
import BodyQN from "./BodyQN";

const FrontBody = () => {

  
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
          answer=" Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! "
        />
        <BodyQN
          title="what is Bharat SportX"
          answer=" You find your favourite sports here ans also you get live train with special branch "
        />
        <BodyQN title="what is Bharat SportX" answer=" You find your favourite sports here ans also you get live train with special branch " />
        <BodyQN title="what is Bharat SportX" answer=" You find your favourite sports here ans also you get live train with special branch " />
        <BodyQN title="what is Bharat SportX" answer=" You find your favourite sports here ans also you get live train with special branch " />
        
      </div>
      {/* <div className="p-4 bg-gray-200 rounded-lg">
      
    </div> */}
    </div>
  );
};

export default FrontBody;
