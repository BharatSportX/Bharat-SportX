import React, { useState } from "react";
import "./Test.css"; // Updated CSS file import

const Test = () => {
  const [modalClass, setModalClass] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  const handleButtonClick = (id) => {
    setModalClass(id);
    setIsModalActive(true);
  };

  const handleModalClick = () => {
    setModalClass("out");
    setIsModalActive(false);
  };

  return (
    <>
      <div
        id="modal-container"
        className={modalClass}
        onClick={handleModalClick}
      >
        <div className="modal-background">
          <div className="modal">
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
            
          </div>
        </div>
      </div>
      <div className="content">
        <div className="buttons">
          <div
            id="two"
            className="buttonPost cursor-pointer flex w-full items-center mt-4 justify-center rounded-md bg-sky-700 px-5 py-2.5 font-medium hover:bg-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800 hover:underline text-blue-950 text-xl"
            onClick={() => handleButtonClick("two")}
          >
        Create Your Post
      
          </div>
        </div>
      </div>
      {isModalActive && (
        <div className="modal-backdrop" onClick={handleModalClick}></div>
      )}
    </>
  );
};

export default Test;
