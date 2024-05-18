import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from '../FrontPage/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <LiveUpdateNav />
      <LiveUpdatesContent /> */}
      <div>
        <h1 className='text-center text-red-600 text-4xl md:text-6xl font-bold shadow-lg'>
          Por por Kaj kor thik kore  nale emon khisit marbo na nijer nam ule jabi
        </h1>
      </div>
      <Footer />
    </div>
  );
}
