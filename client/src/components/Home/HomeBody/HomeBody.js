import React, { useContext } from "react";
import NavContext from "../Navbar/NavContext/NavContext";
import LiveMatch from "./LiveMatch";
import Blogs from "./Blogs";
const HomeBody = () => {
  return (
    <div className="  relative z-[-10] top-40 m-7">
      {/*  for z index button may not be work think any oter way to access this search bar */}
      <div className="">
        <h1 className="text-4xl font-semibold ">Matches</h1>
      </div>
      <div className="">
        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-3 px-4 py-1.5 rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300">
          Live Matches
        </span>
        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-3 px-4 py-1.5 rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300">
          Recent Matches
        </span>
        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-3 px-4 py-1.5 rounded-full cursor-pointer dark:bg-orange-900 dark:text-orange-300">
          Upcoming Matches
        </span>
      </div>
      <LiveMatch/>
      <Blogs/>
    </div>
  );
};

export default HomeBody;
