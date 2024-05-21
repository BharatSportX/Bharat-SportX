import React, { useEffect } from 'react';


export default function TeamStatistics() {
  useEffect(() => {
    // Trigger an alert when the component mounts
    alert('Welcome to Team Statistics! Data will be added soon.');
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Added Statistics Soon...</strong>
      <span className="block sm:inline"> Stay Tuned</span>
      <h1> For team statistics For attacker Stat Progress</h1>
    </div>
    <div>
      
    </div>
    </>
  );
  
}
