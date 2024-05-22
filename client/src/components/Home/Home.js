import React from 'react';
import Navbar from './Navbar/Navbar';
import HomeBody from './HomeBody/HomeBody';
;

export default function Home() {
  return (
    <div className=' text-black bg-gray-200 dark:text-white  dark:bg-gray-950 h-screen'>
      <Navbar />
      <HomeBody/>
    </div>
  );
}
