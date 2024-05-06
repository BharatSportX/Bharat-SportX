import React from "react";
import Navbar from "./Navbar/Navbar";
import { useLocation } from "react-router-dom";
import HomeNav from "./HomeNav";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <div className="relative z-[0] h-screen bg-slate-200">
        <Navbar />
      </div>
      {/* Navbar code should be placed inside the div containing the relative positioning */}
      <HomeNav location={location} />
    </div>
  );
};

export default Home;
