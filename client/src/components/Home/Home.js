import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import HomeBody from './HomeBody/HomeBody';
import { useLocation } from 'react-router-dom';

;

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=' text-black bg-gray-200 dark:text-white  dark:bg-gray-950 h-screen'>
      <Navbar />
      <HomeBody/>
    </div>
  );
}
