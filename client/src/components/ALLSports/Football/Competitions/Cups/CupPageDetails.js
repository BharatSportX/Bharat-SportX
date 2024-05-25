// import React, { useState, useEffect } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from "../Leagues/Spinner";
// import './CupPageDetails.css';

// const CupPageDetails = () => {
//   const { id } = useParams();
  
//   const [cupData, setCupData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fixtures, setFixtures] = useState([]);
//   const [selectedSessionYear, setSelectedSessionYear] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [year, setYear] = useState(null);
//   const [cupDetails, setCupDetails] = useState({});
//   const [activeSection, setActiveSection] = useState('details');

//   useEffect(() => {
//     const fetchCupData = async () => {
//       try {
//         const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
//           params: { type: 'Cup', id },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });

//         const { seasons, league, country } = response.data.response[0];
//         const cupSessionData = seasons.map(session => ({
//           year: session.year,
//           start: session.start,
//           end: session.end,
//         }));

//         setCupData(cupSessionData);
//         setYear(league);
//         setCupDetails({ name: league.name, type: league.type, country: country.name, logo: league.logo });
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCupData();
//   }, [id]);

//   useEffect(() => {
//     const fetchFixtures = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
//           params: {
//             season: selectedSessionYear || new Date().getFullYear().toString(),
//             league: id,
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });

//         setFixtures(response.data.response);
//       } catch (error) {
//         console.error("Error fetching fixtures:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (selectedSessionYear) fetchFixtures();
//   }, [id, selectedSessionYear]);

//   useEffect(() => {
//     setSelectedDate(null);
//   }, [selectedSessionYear]);

//   const handleShowFixture = (year) => {
//     setSelectedSessionYear(year);
//     setLoading(true);
//   };

//   const handleOpenModal = (fixture) => {
//     if (!fixture || !fixture.teams || !fixture.fixture || !fixture.fixture.status) {
//       console.error("Invalid fixture object");
//       return;
//     }

//     const { teams, fixture: fixtureDetails, goals, score } = fixture;
//     const homeTeamName = teams.home ? teams.home.name : "Unknown";
//     const awayTeamName = teams.away ? teams.away.name : "Unknown";
//     const goalsHome = goals ? goals.home : 0;
//     const goalsAway = goals ? goals.away : 0;
//     const shortStatus = fixtureDetails.status.short || "Not available";
//     const venueName = fixtureDetails.venue?.name || "Not available";
//     const cityName = fixtureDetails.venue?.city || "Not available";
//     const referee = fixtureDetails.referee || "Not specified";
//     const elapsed = fixtureDetails.status?.elapsed || "Not available";
//     const firstPeriod = fixtureDetails.periods?.first || "Not available";
//     const secondPeriod = fixtureDetails.periods?.second || "Not available";
//     const winner = teams.home?.winner ? homeTeamName : teams.away?.winner ? awayTeamName : "Session Not Started";
//     const extraTimeScoreHome = score.extratime?.home || 0;
//     const extraTimeScoreAway = score.extratime?.away || 0;
//     const penaltyScoreHome = score.penalty?.home || 0;
//     const penaltyScoreAway = score.penalty?.away || 0;

//     const modalContent = (
//       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-auto">
//         <div className="sm:flex sm:items-start">
//           <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//             <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
//               Fixture Details
//             </h3>
//             <div className="mt-2 flex justify-between">
//               <div className="flex flex-col items-center">
//                 <img className="w-12 h-12 rounded-full mb-2" src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
//                 <p className="text-sm">{fixture.teams.home.name}</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-xl">{goalsHome} - {goalsAway}</p>
//                 <p className="text-xs">{shortStatus}</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <img className="w-12 h-12 rounded-full mb-2" src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
//                 <p className="text-sm">{fixture.teams.away.name}</p>
//               </div>
//             </div>
//             <div className="mt-4">
//               <p className="text-xs">Venue: {venueName}</p>
//               <p className="text-xs">City: {cityName}</p>
//               <p className="text-xs">Referee: {referee}</p>
//               <p className="text-xs">Elapsed: {elapsed}</p>
//               <p className="text-xs">First Period: {firstPeriod}</p>
//               <p className="text-xs">Second Period: {secondPeriod}</p>
//               <p className="text-xs">Winner: {winner}</p>
//               <p className="text-xs">Extra-Time Score: {extraTimeScoreHome} - {extraTimeScoreAway}</p>
//               <p className="text-xs">Penalty Score: {penaltyScoreHome} - {penaltyScoreAway}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//     setModalContent(modalContent);
//     setShowModal(true);
//   };

//   const sortedFixtures = [...fixtures].sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

//   const filteredFixtures = selectedDate ? sortedFixtures.filter(fixture => {
//     const fixtureDate = new Date(fixture.fixture.date);
//     return fixtureDate.toDateString() === selectedDate.toDateString();
//   }) : sortedFixtures;

//   return (
//     <div className="container mx-auto py-8 relative overflow-x-hidden">
//       <div className="navbar">
//         <h1 className={activeSection === 'details' ? 'active' : ''} onClick={() => setActiveSection('details')}>Details</h1>
//         <h1 className={activeSection === 'matches' ? 'active' : ''} onClick={() => setActiveSection('matches')}>Matches</h1>
//         <h1 className={activeSection === 'standings' ? 'active' : ''} onClick={() => setActiveSection('standings')}>Standings</h1>
//         <h1 className={activeSection === 'knockout' ? 'active' : ''} onClick={() => setActiveSection('knockout')}>KnockOut</h1>
//         <h1 className={activeSection === 'topplayers' ? 'active' : ''} onClick={() => setActiveSection('topplayers')}>Top Players</h1>
//         <h1 className={activeSection === 'statistics' ? 'active' : ''} onClick={() => setActiveSection('statistics')}>Statistics</h1>
//         <h1 className={activeSection === 'prediction' ? 'active' : ''} onClick={() => setActiveSection('prediction')}>Prediction</h1>
//       </div>

//       {loading && <Spinner />}
//       <div className="cup-details">
//         <span className='flex justify-start'>
//           <img src={cupDetails.logo} alt={cupDetails.name} className="w-16 h-16 mx-auto mb-4" />
//         </span>
//         <h1 className="text-2xl mb-4 font-sans">{year && year.name}</h1>
//         <div><p className="text-lg">{cupDetails.type} - {cupDetails.country}</p></div>

//         <div className="flex flex-wrap justify-center">
//           {cupData.map(session => (
//             <div key={session.year} className="m-3">
//               <button onClick={() => handleShowFixture(session.year)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Season {session.year}
//               </button>
//             </div>
//           ))}
//         </div>

//         {selectedSessionYear && (
//           <div className="mt-4">
//             <div className="flex items-center">
//               <span>{new Date(cupData.find(session => session.year === selectedSessionYear)?.start).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</span>
//               <div className="flex-1 mx-2 bg-gray-200 h-2 rounded">
//                 <div className="bg-blue-500 h-2 rounded" style={{ width: '100%' }}></div>
//               </div>
//               <span>{new Date(cupData.find(session => session.year === selectedSessionYear)?.end).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="fixtures-container">
//         <div className="mt-3 font-semibold">{selectedSessionYear}</div>
//         {filteredFixtures.map(fixture => (
//           <div key={fixture.fixture.id} onClick={() => handleOpenModal(fixture)} className="cursor-pointer p-4 bg-white shadow mb-4">
//             <div className="flex justify-between">
//               <div>{new Date(fixture.fixture.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
//               <div>{fixture.teams.home.name} vs {fixture.teams.away.name}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div id="static-modal" data-modal-backdrop="static" className={`fixed z-50 inset-0 overflow-y-auto overflow-x-hidden ${showModal ? '' : 'hidden'}`}>
//         <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
//           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//           <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//             {modalContent}
//             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//               <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
//                 Got it!
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CupPageDetails;



import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const CupPageDetails = () => {
  const { id } = useParams();
  const [cupData, setCupData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  useEffect(() => {
    const fetchCupDetails = async () => {
      try {
        const res = await axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06'  
          },
          params: {
            type: "Cup",
            id: id
          }
        });
        setCupData(res.data.response[0]);
        setSelectedYear(0); // Set the initial selectedYear to 0 (first year)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCupDetails();
  }, [id]);

  const handleYearChange = (index) => {
    setSelectedYear(index);
    setIsDropdownOpen(false); 
    setLoading(true); // Set loading to true when a year is selected
  
    // Simulate loading for 1 second
    setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000);
  };
  
  
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    let suffix = "";
    if (day === 1 || day === 21 || day === 31) {
      suffix = "st";
    } else if (day === 2 || day === 22) {
      suffix = "nd";
    } else if (day === 3 || day === 23) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
    const month = date.toLocaleString('default', { month: 'long' });
    return `${day}${suffix} ${month}`;
  };

  if (loading) {
    return (
      <div class="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
  <div>
    <h1 class="text-xl md:text-7xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
        viewBox="0 0 24 24" class="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
        </path>
      </svg> ading . . .</h1>
  </div>
</div>
    );
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!cupData) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-2 relative overflow-x-hidden top-40">
        <div className="col-span-2 sm:col-span-1 mr-3 lg:col-span-2 ml-3 ">
          <div className="border rounded-lg bg-red-200 bg-opacity-75 p-4 flex items-center">
            <div className="flex-none mr-4">
              <img src={cupData.league.logo} alt="Club" className="w-16 h-16 rounded-full" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{cupData.league.name}</h2>
              <p>{cupData.country.name}</p>
              <span>
               
                  <button
                    id="dropdownHoverButton"
                    onClick={toggleDropdown}
                    className=" text-rose-950  hover:bg-state-200 border-solid border-2 border-indigo-600 w-13 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    
                  >
                    {selectedYear !== null ? cupData.seasons[selectedYear].year : 'Select Year'}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                
              </span>
    
{isDropdownOpen && (
  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-35 mt-1 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 overflow-y-auto max-h-48" aria-labelledby="dropdownHoverButton">
      
      {cupData.seasons.map((season, index) => (
        <li key={index}>
        
            

            <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"  onClick={() => handleYearChange(index)}>
           
            <label for="checkbox-item-12" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{season.year}</label>
          </div>
         
        </li>
      ))}
    </ul>
  </div>
)}
<div className="h-2 bg-gray-200 rounded-lg overflow-hidden mt-3">
  <div className="h-full bg-blue-500" style={{ width: '10%' }}></div> 
</div>

                <div className="flex justify-between mt-1">
                  <p>{selectedYear !== null ? formatDate(cupData.seasons[selectedYear].start) : 'Start Date'}</p>
                  <p>{selectedYear !== null ? formatDate(cupData.seasons[selectedYear].end) : 'End Date'}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-span-1 sm:col-span-1 ml-4  lg:col-span-1 mr-3  border rounded-lg p-4 shadow-md ">
            {/* Title for the Featured Match */}
            <h1 className="text-xl font-bold mb-4">Featured Match</h1>
            
            {/* Club name and type of club */}
            <div className="mb-4">
              <p className="text-lg font-semibold">Club Name</p>
              <p>Type of Club</p>
              <p>Final Match</p>
            </div>
  
            {/* Match details */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Image for German */}
                  <img src="german_logo.jpg" alt="German Logo" className="w-8 h-8 mr-2" />
                  <span className="mr-2">German</span>
                </div>
                {/* Score */}
                <div className="flex items-center">
                  <span className="mr-2">3</span>
                  <span className="mr-2 flex justify-center">Vs</span>
                  <span className="mr-2">2</span>
                </div>
                <div className="flex items-center">
                  {/* Image for Newlikand */}
                  <img src="newlikand_logo.jpg" alt="Newlikand Logo" className="w-8 h-8 mr-2" />
                  <span>Newlikand</span>
                </div>
              </div>
              {/* Finished */}
              <div className="text-gray-500">Finished</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CupPageDetails;
  