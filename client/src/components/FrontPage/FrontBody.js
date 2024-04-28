import React from "react";

const FrontBody = (props) => {
  const {img,header,mutedheader,content}=props;
  return (
    <div>
      <div className="flex flex-col md:flex-row my-2 py-16 px-0 lg:px-40 items-center bg-black">
        <div className="md:w-7/12 md:order-1 text-center lg:text-start lg:p-3 px-10 py-4 text-white">
          <h1 className=" lg:text-5xl text-3xl  font-bold leading-normal mb-2">
            {header},
            <span className="text-gray-600 md:text-[2rem] ml-2">{mutedheader}</span>
          </h1>
          <p className="lg:text-2xl text-xl py-3 leading-relaxed mb-4">
           {content}
          </p>
        </div>
        <div className="md:w-5/12 md:order-2">
        {/* img must be 500x450 */}
           
          <img
            className="w-full h-auto mx-auto px-6 md:float-right rounded"
            src={img}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

FrontBody.defaultProps = {
  header: "Watch All Sports",
  mutedheader: "for Free !!",
  content: "You Get Every Sports Related Update,Live also freely watch every Sports",
  img: "https://source.unsplash.com/random/500x450/?sports",
};
export default FrontBody;
