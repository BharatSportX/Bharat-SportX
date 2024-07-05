import React from "react";
import "./Matchloading.css";
const MatchLoading = () => {
  return (
    <>
      <div
        role="status"
        className="flex justify-center items-center w-full h-[24.62rem] md:h-[30.47rem]"
      >
        <button className="loader__btn">
          <div className=" border-2 border-orange-700 dark:border-white border-solid  loader"></div>
          
        </button>
      </div>
    </>
  );
};

export default MatchLoading;
