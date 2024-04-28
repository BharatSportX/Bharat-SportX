// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import SoccerLineUp from 'react-soccer-lineup';

// const CupPageDetails = () => {
//   const { id } = useParams();
//   const [cupData, setCupData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [league, setLeague] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [fixtures, setFixtures] = useState([]);
//   const [showFixtures, setShowFixtures] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('home');
//   const [homeTeamsData, setHomeTeamsData] = useState([]);
//   const [awayTeamsData, setAwayTeamsData] = useState([]);

//   useEffect(() => {
//     const fetchCupData = async () => {
//       try {
//         const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
//           params: {
//             type: 'Cup',
//             id: id
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });

//         const cupSessionData = response.data.response[0].seasons.map(session => ({
//           year: session.year,
//           start: session.start,
//           end: session.end,
//           coverage: session.coverage
//         }));

//         setCupData(cupSessionData);
//         setLeague(response.data.response[0].league);

//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCupData();
//   }, [id]);

//   const fetchFixturesForYear = async (year) => {
//     try {
//       const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/fixtures`, {
//         params: {
//           league: id,
//           season: year
//         },
//         headers: {
//           'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//           'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//         }
//       });
//       setFixtures(response.data.response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const accumulateHomeTeamData = () => {
//     const uniqueHomeTeams = new Set();
//     fixtures.forEach(fixture => {
//       uniqueHomeTeams.add(fixture.teams.home.name);
//     });
//     setHomeTeamsData(Array.from(uniqueHomeTeams));
//   };

//   const accumulateAwayTeamData = () => {
//     const uniqueAwayTeams = new Set();
//     fixtures.forEach(fixture => {
//       uniqueAwayTeams.add(fixture.teams.away.name);
//     });
//     setAwayTeamsData(Array.from(uniqueAwayTeams));
//   };

//   useEffect(() => {
//     if (fixtures.length > 0) {
//       accumulateHomeTeamData();
//       accumulateAwayTeamData();
//     }
//   }, [fixtures]);

//   return (
//     <div className="container mx-auto py-8">
//       {loading ? (
//         <div>Loading...</div>
//       ) : cupData ? (
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{league.name}</h1>
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//             <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
//           </div>
//           {cupData.map(session => (
//             <div key={session.year} className="year-card">
//               <h2 className="text-xl font-semibold mb-2">{session.year}</h2>
//               <p>Start Date: {session.start}</p>
//               <p>End Date: {session.end}</p>
//               <p>Fixtures: {session.coverage.fixtures ? 'Available' : 'Unavailable'}</p>
//               <p>Standings: {session.coverage.standings ? 'Available' : 'Unavailable'}</p>
//               <button onClick={() => {
//                 setSelectedYear(session.year);
//                 setShowFixtures(true);
//                 fetchFixturesForYear(session.year);
//               }}>Fixtures</button>
//               {showFixtures && selectedYear === session.year && (
//                 <div>
//                   <div className="radio-buttons">
//                     <input
//                       type="radio"
//                       id="home"
//                       value="home"
//                       checked={selectedOption === 'home'}
//                       onChange={() => handleOptionChange('home')}
//                     />
//                     <label htmlFor="home">Home</label>

//                     <input
//                       type="radio"
//                       id="away"
//                       value="away"
//                       checked={selectedOption === 'away'}
//                       onChange={() => handleOptionChange('away')}
//                     />
//                     <label htmlFor="away">Away</label>
//                   </div>
//                   {selectedOption === 'home' && (
//                     <div>
//                       <h3>Home Teams</h3>
//                       <SoccerLineUp
//                         size={"small"}
//                         color={"lightseagreen"}
//                         pattern={"lines"}
//                         homeTeam={{
//                           squad: {
//                             gk: { name: homeTeamsData.join(', ') },
//                             df: [],
//                             cdm: [],
//                             cm: [],
//                             cam: [],
//                             fw: []
//                           }
//                         }}
//                       />
//                     </div>
//                   )}
//                   {selectedOption === 'away' && (
//                     <div>
//                       <h3>Away Teams</h3>
//                       <SoccerLineUp
//                         size={"small"}
//                         color={"lightseagreen"}
//                         pattern={"lines"}
//                         homeTeam={{
//                           squad: {
//                             gk: { name: awayTeamsData.join(', ') },
//                             df: [],
//                             cdm: [],
//                             cm: [],
//                             cam: [],
//                             fw: []
//                           }
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No cup data available</div>
//       )}
//     </div>
//   );
// };

// export default CupPageDetails;
