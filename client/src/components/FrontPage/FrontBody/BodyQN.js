import React from "react";

const BodyQN = (props) => {
  const {qn,ans,targetAns,targetQn,body,isOpen,toggleAccordion}=props
  return (
    <>
      {/* Accordings */}
      <div  data-accordion="collapse" className="m-2 mx-6 lg:mx-44">
        <h2 id={`${targetQn}`}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white  border-gray-200 rounded-t-lg   hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 bg-gray-800"
            onClick={() => toggleAccordion(targetAns)}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={body}
          >
            <span className="text-white">{qn}</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isOpen ? "" : "rotate-180"} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`${targetAns}`}
          className={`${isOpen ? "" : "hidden"}`}//here add animation
          aria-labelledby={`${targetQn}`}
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
             {ans}
            </p>
            {/* <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyQN;
