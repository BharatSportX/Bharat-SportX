import React from "react";

const FrontBody = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row mx-3 items-center">
        <div class="md:w-7/12 md:order-1">
          <h2 class="text-2xl font-normal leading-normal mb-2">
            Other Places{" "}
            <span class="text-gray-600">It'll also blow your mind.</span>
          </h2>
          <p class="text-lg leading-relaxed mb-4">
            Here we add some another beautiful but this is desert like place so,
            those are most beautiful because totally peace and calm you find
            there.
          </p>
        </div>
        <div class="md:w-5/12 md:order-2">
          <img
            class="w-full h-auto mx-auto md:float-right rounded"
            src="FrontBg1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FrontBody;
