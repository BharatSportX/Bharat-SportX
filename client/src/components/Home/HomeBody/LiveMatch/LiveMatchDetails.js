// import React, { useState } from 'react';

// // Dummy data
// const dummyCupData = {
//   league: {
//     logo: 'https://dummyimage.com/64x64/000/fff.png&text=League+Logo',
//     name: 'Dummy League'
//   },
//   country: {
//     name: 'Dummy Country'
//   }
// };

// const dummyMatchDetails = {
//   fixture: {
//     date: '2023-06-01T17:00:00Z',
//     status: {
//       short: 'FT'
//     }
//   },
//   teams: {
//     home: {
//       logo: 'https://dummyimage.com/32x32/000/fff.png&text=Home+Logo',
//       name: 'Home Team'
//     },
//     away: {
//       logo: 'https://dummyimage.com/32x32/000/fff.png&text=Away+Logo',
//       name: 'Away Team'
//     }
//   },
//   goals: {
//     home: 2,
//     away: 3
//   },
//   score: {
//     halftime: {
//       home: 1,
//       away: 1
//     },
//     fulltime: {
//       home: 2,
//       away: 3
//     },
//     extratime: {
//       home: null,
//       away: null
//     },
//     penalty: {
//       home: null,
//       away: null
//     }
//   }
// };

// const dummySeasons = [2022, 2023, 2024];
// const dummyRounds = ['Round 1', 'Round 2', 'Round 3'];

// export default function LiveMatchDetails() {
//   const [selectedYear, setSelectedYear] = useState(dummySeasons[0]);
//   const [selectedRound, setSelectedRound] = useState(dummyRounds[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedTeam, setSelectedTeam] = useState('home');
//   const [selectedScore, setSelectedScore] = useState('halftime');

//   const handleSelectSeason = (year) => {
//     setSelectedYear(year);
//   };

//   const handleSelectRound = (round) => {
//     setSelectedRound(round);
//   };

//   const handleOpenScoreModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSelectTeam = (team) => {
//     setSelectedTeam(team);
//   };

//   const handleSelectScore = (score) => {
//     setSelectedScore(score);
//   };

//   const convertToIST = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
//   };

//   return (
//     <div className="w-full p-6 text-gray-900 flex flex-col items-center mt-28">
//       <div className="w-full lg:w-2/3 grid gap-6">
//         {/* CupDetails Section */}
//         <section className="bg-gradient-to-r from-blue-200 to-green-200 text-gray-900 rounded-lg shadow-lg p-6">
//           <div className="flex items-center mb-6">
//             <img src={dummyCupData.league.logo} alt="Club" className="w-16 h-16 mr-4 rounded-full border-2 border-white" />
//             <div>
//               <h2 className="text-2xl font-bold mb-1">{dummyCupData.league.name}</h2>
//               <p>{dummyCupData.country.name}</p>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="season" className="block text-sm font-medium mb-2">
//               Select Season:
//             </label>
//             <select
//               id="season"
//               onChange={(e) => handleSelectSeason(e.target.value)}
//               value={selectedYear}
//               className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//             >
//               {dummySeasons.map((season, index) => (
//                 <option key={index} value={season}>
//                   {season}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <p className="text-sm font-medium mt-4">Standings for {selectedYear}</p>
//         </section>

//         {/* MatchDetails Section */}
//         {dummyMatchDetails && (
//           <section className="bg-gradient-to-r from-green-200 to-blue-200 text-gray-900 rounded-lg shadow-lg p-6">
//             <h1 className="text-2xl font-bold mb-6">Featured Match</h1>
//             <div className="mb-6">
//               <p className="text-lg font-semibold">{dummyCupData.league.name}</p>
//               <p>{dummyCupData.country.name}</p>
//               <p>{selectedRound}</p>

//               <label htmlFor="round" className="block text-sm font-medium mt-4 mb-2">
//                 Select Round:
//               </label>
//               <select
//                 id="round"
//                 name="round"
//                 className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//                 value={selectedRound}
//                 onChange={(e) => handleSelectRound(e.target.value)}
//               >
//                 {dummyRounds.map((round, index) => (
//                   <option key={index} value={round}>
//                     {round}
//                   </option>
//                 ))}
//               </select>

//               <div className="flex items-center justify-between p-4 bg-white text-gray-900 rounded-lg shadow-inner mt-4">
//                 <p className="text-sm md:text-lg font-semibold">
//                   Date: {convertToIST(dummyMatchDetails.fixture.date)}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col items-center gap-6 mb-6">
//               <div className="flex items-center justify-between w-full">
//                 <div className="flex items-center">
//                   <img src={dummyMatchDetails.teams.home.logo} alt="Home Team Logo" className="w-10 h-10 mr-3" />
//                   <span className="text-lg font-semibold">{dummyMatchDetails.teams.home.name}</span>
//                 </div>
//                 <div className="flex items-center text-lg font-semibold">
//                   <span className={`mr-3 ${dummyMatchDetails.goals.home > dummyMatchDetails.goals.away ? 'text-blue-600' : ''}`}>
//                     {dummyMatchDetails.goals.home}
//                   </span>
//                   <span className="mx-3">Vs</span>
//                   <span className={`ml-3 ${dummyMatchDetails.goals.away > dummyMatchDetails.goals.home ? 'text-blue-600' : ''}`}>
//                     {dummyMatchDetails.goals.away}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <img src={dummyMatchDetails.teams.away.logo} alt="Away Team Logo" className="w-10 h-10 ml-3" />
//                   <span className="text-lg font-semibold">{dummyMatchDetails.teams.away.name}</span>
//                 </div>
//               </div>
//               <div className="text-gray-900 text-lg font-semibold">Status: {dummyMatchDetails.fixture.status.short}</div>
//             </div>

//             <button
//               className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg group"
//               onClick={handleOpenScoreModal}
//             >
//               <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-200 to-green-200 group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-200"></span>
//               <span className="relative">Score Card</span>
//             </button>
//           </section>
//         )}

//         {/* Additional Section */}
//         <section className="bg-gradient-to-r from-purple-200 to-pink-200 text-gray-900 rounded-lg shadow-lg p-6">
//           <h1 className="text-2xl font-bold mb-4">Additional Information</h1>
//           <p>This section can be used to display more information about the league, matches, or any other relevant details.</p>
//         </section>

//           {/* Additional Section - Blog Posts */}
//           <section className="bg-gradient-to-r from-yellow-200 to-orange-200 text-gray-900 rounded-lg shadow-lg p-6">
//           {/* Blog Posts Content */}
//           <h1 className="text-2xl font-bold mb-4">Blog Post</h1>
//           <p>This section can be used to display more information about the league, matches, or any other relevant details.</p>
//         </section>

//         {/* Additional Section - Player Names */}
//         <section className="bg-gradient-to-r from-red-200 to-purple-200 text-gray-900 rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold mb-4">Player Section</h1>
//           <p>This section can be used to display more information about the league, matches, or any other relevant details.</p>
//         </section>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2">
//             <h2 className="text-xl font-bold mb-4 text-center">Score Card</h2>
//             <div className="flex items-center justify-center mb-4 space-x-4">
//               <div
//                 className={`flex flex-col items-center cursor-pointer p-3 ${selectedTeam === 'home' ? 'border-b-4 border-blue-500' : ''}`}
//                 onClick={() => handleSelectTeam('home')}
//               >
//                 <img src={dummyMatchDetails.teams.home.logo} alt="Home Team Logo" className="w-14 h-auto" />
//               </div>
//               <div
//                 className={`flex flex-col items-center cursor-pointer p-3 ${selectedTeam === 'away' ? 'border-b-4 border-blue-500' : ''}`}
//                 onClick={() => handleSelectTeam('away')}
//               >
//                 <img src={dummyMatchDetails.teams.away.logo} alt="Away Team Logo" className="w-16 h-auto" />
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-center mb-4 space-x-4">
//               <div
//                 className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'halftime' ? 'border-blue-500' : ''}`}
//                 onClick={() => handleSelectScore('halftime')}
//               >
//                 <h1>Halftime</h1>
//               </div>
//               <div
//                 className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'fulltime' ? 'border-blue-500' : ''}`}
//                 onClick={() => handleSelectScore('fulltime')}
//               >
//                 <h2>Fulltime</h2>
//               </div>
//               <div
//                 className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'extratime' ? 'border-blue-500' : ''}`}
//                 onClick={() => handleSelectScore('extratime')}
//               >
//                 <h2>Extratime</h2>
//               </div>
//               <div
//                 className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'penalty' ? 'border-blue-500' : ''}`}
//                 onClick={() => handleSelectScore('penalty')}
//               >
//                 <h2>Penalty</h2>
//               </div>
//             </div>

//             <div className="overflow-x-hidden">
//               <div className="flex transition-transform duration-500" style={{ transform: `translateX(${selectedTeam === 'home' ? '0' : '-100%'})` }}>
//                 {/* Home team details */}
//                 <div className="min-w-full">
//                   <h3 className="text-center text-lg font-bold mb-2 underline">{dummyMatchDetails.teams.home.name} Details</h3>
//                   {selectedScore === 'halftime' && (
//                     <p className="mt-3">Halftime Score: {dummyMatchDetails.score.halftime.home}</p>
//                   )}
//                   {selectedScore === 'fulltime' && (
//                     <p className="mt-3">Fulltime Score: {dummyMatchDetails.score.fulltime.home}</p>
//                   )}
//                   {selectedScore === 'extratime' && (
//                     <p className="mt-3">Extra Time Score: {dummyMatchDetails.score.extratime.home || '0'}</p>
//                   )}
//                   {selectedScore === 'penalty' && (
//                     <p className="mt-3">Penalty Score: {dummyMatchDetails.score.penalty.home || '0'}</p>
//                   )}
//                 </div>
//                 {/* Away team details */}
//                 <div className="min-w-full">
//                   <h3 className="text-center text-lg font-bold mb-2 underline">{dummyMatchDetails.teams.away.name} Details</h3>
//                   {selectedScore === 'halftime' && (
//                     <p className="mt-3">Halftime Score: {dummyMatchDetails.score.halftime.away}</p>
//                   )}
//                   {selectedScore === 'fulltime' && (
//                     <p className="mt-3">Fulltime Score: {dummyMatchDetails.score.fulltime.away}</p>
//                   )}
//                   {selectedScore === 'extratime' && (
//                     <p className="mt-3">Extra Time Score: {dummyMatchDetails.score.extratime.away || '0'}</p>
//                   )}
//                   {selectedScore === 'penalty' && (
//                     <p className="mt-3">Penalty Score: {dummyMatchDetails.score.penalty.away || '0'}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-6">
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
//                 onClick={handleOpenScoreModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react';
import { useLocation } from 'react-router-dom';

const LiveMatchDetails = () => {
  const location = useLocation();
  const matchDetails = location.state?.matchDetails;

  if (!matchDetails) {
    return <div>No match details available</div>;
  }

  return (
    <div>
      <h1>Match Details</h1>
      <p>League: {matchDetails.league.name}</p>
      <p>Home Team: {matchDetails.teams.home.name}</p>
      <p>Away Team: {matchDetails.teams.away.name}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default LiveMatchDetails;
