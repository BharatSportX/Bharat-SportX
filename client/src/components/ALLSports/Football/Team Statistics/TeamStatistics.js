// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const TeamStatistics = () => {
//   const [teamDetails, setTeamDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         console.log('Fixture Data:', fixtureData);

//         if (!fixtureData || !fixtureData.league || !fixtureData.league.id || !fixtureData.league.season || !fixtureData.fixture || !fixtureData.fixture.date || !fixtureData.fixture.id || !fixtureData.teams || !fixtureData.teams.home || !fixtureData.teams.home.id || !fixtureData.teams.away || !fixtureData.teams.away.id) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//     const fixtureDate = fixtureData.fixture.date;
// const leagueId = fixtureData.league.id;
// const season = fixtureData.league.season;
// const homeTeamId = fixtureData.teams.home.id;
// const awayTeamId = fixtureData.teams.away.id;


//         console.log("Date:", fixtureDate);
//         console.log("Home Team ID:", homeTeamId);
//         console.log("Away Team ID:", awayTeamId);
//         console.log("League ID:", leagueId);
//         console.log("Season:", season);

    

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="spin">
//         <iframe
//           src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
//           title="Loading animation"
//           className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center spin"
//         ></iframe>
//       </div>
//     );
//   }

//   if (!teamDetails.length) {
//     return <div>No team statistics available.</div>;
//   }

//   return (
//     <div className="team-details mt-6 p-4 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-center text-xl mb-4">Team Statistics</h2>
//       <div>
        
//       </div>
//     </div>
//   );
// };

// export default TeamStatistics;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const TeamStatistics = () => {
//   const [teamDetails, setTeamDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [fixtureData, setFixtureData] = useState({});
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         if (!fixtureData) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//         setFixtureData(fixtureData);

//         const { date: fixtureDate, league, teams } = fixtureData;
//         const leagueId = league.id;
//         const season = league.season;
//         const homeTeamId = teams.home.id;
//         const awayTeamId = teams.away.id;

//         console.log("Date:", fixtureDate);
//         console.log("Home Team ID:", homeTeamId);
//         console.log("Away Team ID:", awayTeamId);
//         console.log("League ID:", leagueId);
//         console.log("Season:", season);

//         const fetchTeamStatistics = async () => {
//           try {
//             const teamstatResponse = await axios.get(
//               'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//               {
//                 params: {
//                   league: leagueId,
//                   season: season,
//                   team: homeTeamId,
//                   date: fixtureDate
//                 },
//                 headers: {
//                   'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//                   'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//               }
//             );

//             setTeamDetails(teamstatResponse.data.response);
//           } catch (error) {
//             console.log("Error Fetching team statistics", error.message);
//           } finally {
//             setLoading(false);
//           }
//         };

//         fetchTeamStatistics();
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
//       <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//         <div className="px-4 py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">Fixture Details</h3>
//           <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
//             <p className="sm:col-span-2">Fixture ID: {fixtureData.fixture?.id}</p>
//             <p className="sm:col-span-2">Fixture Date: {fixtureData.fixture?.date}</p>
//             <p className="sm:col-span-2">Home Team ID: {fixtureData.teams?.home?.id}</p>
//             <p className="sm:col-span-2">Away Team ID: {fixtureData.teams?.away?.id}</p>
//             <p className="sm:col-span-2">League ID: {fixtureData.league?.id}</p>
//             <p className="sm:col-span-2">Season: {fixtureData.league?.season}</p>
//           </div>
//         </div>
//       </div>

//       {teamDetails && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">Team Statistics</h3>
//             <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
//               <p className="sm:col-span-2">Team Name: {teamDetails.team?.name}</p>
//               <p className="sm:col-span-2">Form: {teamDetails.form}</p>
//               <h4 className="sm:col-span-2 text-xl font-semibold mt-4">Fixtures</h4>
//               <p className="sm:col-span-2">Played: Home: {teamDetails.fixtures?.played.home}, Away: {teamDetails.fixtures?.played.away}, Total: {teamDetails.fixtures?.played.total}</p>
//               <p className="sm:col-span-2">Wins: Home: {teamDetails.fixtures?.wins.home}, Away: {teamDetails.fixtures?.wins.away}, Total: {teamDetails.fixtures?.wins.total}</p>
//               <p className="sm:col-span-2">Draws: Home: {teamDetails.fixtures?.draws.home}, Away: {teamDetails.fixtures?.draws.away}, Total: {teamDetails.fixtures?.draws.total}</p>
//               <p className="sm:col-span-2">Loses: Home: {teamDetails.fixtures?.loses.home}, Away: {teamDetails.fixtures?.loses.away}, Total: {teamDetails.fixtures?.loses.total}</p>
//               <h4 className="sm:col-span-2 text-xl font-semibold mt-4">Goals</h4>
//               <p className="sm:col-span-2">For: Home: {teamDetails.goals?.for.total.home}, Away: {teamDetails.goals?.for.total.away}, Total: {teamDetails.goals?.for.total.total}</p>
//               <p className="sm:col-span-2">Against: Home: {teamDetails.goals?.against.total.home}, Away: {teamDetails.goals?.against.total.away}, Total: {teamDetails.goals?.against.total.total}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamStatistics;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import ReactApexChart from 'react-apexcharts';

// const TeamStatistics = () => {
//   const [teamDetails, setTeamDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [fixtureData, setFixtureData] = useState({});
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         if (!fixtureData) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//         setFixtureData(fixtureData);

//         const { date: fixtureDate, league, teams } = fixtureData;
//         const leagueId = league.id;
//         const season = league.season;
//         const homeTeamId = teams.home.id;
//         const awayTeamId = teams.away.id;

//         console.log("Date:", fixtureDate);
//         console.log("Home Team ID:", homeTeamId);
//         console.log("Away Team ID:", awayTeamId);
//         console.log("League ID:", leagueId);
//         console.log("Season:", season);

//         const fetchTeamStatistics = async () => {
//           try {
//             const teamstatResponse = await axios.get(
//               'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//               {
//                 params: {
//                   league: leagueId,
//                   season: season,
//                   team: homeTeamId,
//                   date: fixtureDate
//                 },
//                 headers: {
//                   'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//                   'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//               }
//             );

//             setTeamDetails(teamstatResponse.data.response);
//           } catch (error) {
//             console.log("Error Fetching team statistics", error.message);
//           } finally {
//             setLoading(false);
//           }
//         };

//         fetchTeamStatistics();
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   // Prepare data for the chart
//   const goalMinutes = teamDetails?.goals?.for?.minute;
//   const goalData = Object.keys(goalMinutes).map((key) => ({
//     x: key,
//     y: goalMinutes[key]?.total || 0,
//   }));

//   const chartOptions = {
//     chart: {
//       height: 350,
//       type: 'line',
//     },
//     annotations: {
//       yaxis: [{
//         y: 1,
//         borderColor: '#00E396',
//         label: {
//           borderColor: '#00E396',
//           style: {
//             color: '#fff',
//             background: '#00E396',
//           },
//           text: 'Goal',
//         }
//       }],
//       xaxis: goalData.map(({ x, y }) => ({
//         x: x,
//         borderColor: '#775DD0',
//         label: {
//           borderColor: '#775DD0',
//           style: {
//             color: '#fff',
//             background: '#775DD0',
//           },
//           text: `${x} min`,
//         }
//       })),
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'straight'
//     },
//     title: {
//       text: 'Goals by Minute',
//       align: 'left'
//     },
//     xaxis: {
//       type: 'category',
//       categories: Object.keys(goalMinutes),
//     },
//     yaxis: {
//       title: {
//         text: 'Goals'
//       }
//     }
//   };

//   const chartSeries = [{
//     name: 'Goals',
//     data: goalData.map(({ y }) => y),
//   }];

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
//       <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//         <div className="px-4 py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">Fixture Details</h3>
//           <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
//             <p className="sm:col-span-2">Fixture ID: {fixtureData.fixture?.id}</p>
//             <p className="sm:col-span-2">Fixture Date: {fixtureData.fixture?.date}</p>
//             <p className="sm:col-span-2">Home Team ID: {fixtureData.teams?.home?.id}</p>
//             <p className="sm:col-span-2">Away Team ID: {fixtureData.teams?.away?.id}</p>
//             <p className="sm:col-span-2">League ID: {fixtureData.league?.id}</p>
//             <p className="sm:col-span-2">Season: {fixtureData.league?.season}</p>
//           </div>
//         </div>
//       </div>

//       {teamDetails && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">Team Statistics</h3>
//             <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
//               <p className="sm:col-span-2">Team Name: {teamDetails.team?.name}</p>
//               <p className="sm:col-span-2">Form: {teamDetails.form}</p>
//               <h4 className="sm:col-span-2 text-xl font-semibold mt-4">Fixtures</h4>
//               <p className="sm:col-span-2">Played: Home: {teamDetails.fixtures?.played.home}, Away: {teamDetails.fixtures?.played.away}, Total: {teamDetails.fixtures?.played.total}</p>
//               <p className="sm:col-span-2">Wins: Home: {teamDetails.fixtures?.wins.home}, Away: {teamDetails.fixtures?.wins.away}, Total: {teamDetails.fixtures?.wins.total}</p>
//               <p className="sm:col-span-2">Draws: Home: {teamDetails.fixtures?.draws.home}, Away: {teamDetails.fixtures?.draws.away}, Total: {teamDetails.fixtures?.draws.total}</p>
//               <p className="sm:col-span-2">Loses: Home: {teamDetails.fixtures?.loses.home}, Away: {teamDetails.fixtures?.loses.away}, Total: {teamDetails.fixtures?.loses.total}</p>
//               <h4 className="sm:col-span-2 text-xl font-semibold mt-4">Goals</h4>
//               <p className="sm:col-span-2">For: Home: {teamDetails.goals?.for.total.home}, Away: {teamDetails.goals?.for.total.away}, Total: {teamDetails.goals?.for.total.total}</p>
//               <p className="sm:col-span-2">Against: Home: {teamDetails.goals?.against.total.home}, Away: {teamDetails.goals?.against.total.away}, Total: {teamDetails.goals?.against.total.total}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {teamDetails && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">Goals Distribution</h3>
//             <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamStatistics;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import ReactApexChart from 'react-apexcharts';

// const TeamStatistics = () => {
//   const [homeTeamStats, setHomeTeamStats] = useState(null);
//   const [awayTeamStats, setAwayTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         if (!fixtureData) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//         const { date: fixtureDate, league, teams } = fixtureData;
//         const leagueId = league.id;
//         const season = league.season;
//         const homeTeamId = teams.home.id;
//         const awayTeamId = teams.away.id;

//         const fetchTeamStatistics = async (teamId) => {
//           try {
//             const teamStatResponse = await axios.get(
//               'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//               {
//                 params: {
//                   league: leagueId,
//                   season: season,
//                   team: teamId,
//                   date: fixtureDate
//                 },
//                 headers: {
//                   'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//                   'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//               }
//             );

//             return teamStatResponse.data.response;
//           } catch (error) {
//             console.log("Error Fetching team statistics", error.message);
//             return null;
//           }
//         };

//         const homeStats = await fetchTeamStatistics(homeTeamId);
//         const awayStats = await fetchTeamStatistics(awayTeamId);

//         setHomeTeamStats(homeStats);
//         setAwayTeamStats(awayStats);
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   const prepareChartData = (teamStats) => {
//     if (!teamStats) return [];

//     const goalMinutes = teamStats?.goals?.for?.minute;
//     return Object.keys(goalMinutes).map((key) => ({
//       x: key,
//       y: goalMinutes[key]?.total || 0,
//     }));
//   };

//   const homeChartData = prepareChartData(homeTeamStats);
//   const awayChartData = prepareChartData(awayTeamStats);

//   const chartOptions = {
//     chart: {
//       height: 350,
//       type: 'line',
//       id: 'areachart-2'
//     },
//     annotations: {
//       yaxis: [{
//         y: 1,
//         borderColor: '#00E396',
//         label: {
//           borderColor: '#00E396',
//           style: {
//             color: '#fff',
//             background: '#00E396',
//           },
//           text: 'Goal',
//         }
//       }],
//       xaxis: homeChartData.map(({ x }) => ({
//         x: x,
//         borderColor: '#775DD0',
//         label: {
//           borderColor: '#775DD0',
//           style: {
//             color: '#fff',
//             background: '#775DD0',
//           },
//           text: `${x} min`,
//         }
//       })),
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'straight'
//     },
//     title: {
//       text: 'Goals by Minute',
//       align: 'left'
//     },
//     xaxis: {
//       type: 'category',
//       categories: Object.keys(homeTeamStats?.goals?.for?.minute || {}),
//     },
//     yaxis: {
//       title: {
//         text: 'Goals'
//       }
//     }
//   };

//   const homeChartSeries = [{
//     name: 'Home Team Goals',
//     data: homeChartData.map(({ y }) => y),
//   }];

//   const awayChartSeries = [{
//     name: 'Away Team Goals',
//     data: awayChartData.map(({ y }) => y),
//   }];

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
//       <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>

//       {homeTeamStats && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">{homeTeamStats.team.name} Statistics</h3>
//             <ReactApexChart options={chartOptions} series={homeChartSeries} type="line" height={350} />
//           </div>
//         </div>
//       )}

//       {awayTeamStats && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">{awayTeamStats.team.name} Statistics</h3>
//             <ReactApexChart options={chartOptions} series={awayChartSeries} type="line" height={350} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamStatistics;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import ReactApexChart from 'react-apexcharts';

// const TeamStatistics = () => {
//   const [homeTeamStats, setHomeTeamStats] = useState(null);
//   const [awayTeamStats, setAwayTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         if (!fixtureData) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//         const { date: fixtureDate, league, teams } = fixtureData;
//         const leagueId = league.id;
//         const season = league.season;
//         const homeTeamId = teams.home.id;
//         const awayTeamId = teams.away.id;

//         const fetchTeamStatistics = async (teamId) => {
//           try {
//             const teamStatResponse = await axios.get(
//               'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//               {
//                 params: {
//                   league: leagueId,
//                   season: season,
//                   team: teamId,
//                   date: fixtureDate
//                 },
//                 headers: {
//                   'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//                   'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//               }
//             );

//             return teamStatResponse.data.response;
//           } catch (error) {
//             console.log("Error Fetching team statistics", error.message);
//             return null;
//           }
//         };

//         const homeStats = await fetchTeamStatistics(homeTeamId);
//         const awayStats = await fetchTeamStatistics(awayTeamId);

//         setHomeTeamStats(homeStats);
//         setAwayTeamStats(awayStats);
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   const prepareChartData = (teamStats) => {
//     if (!teamStats) return [];

//     const goalMinutes = teamStats?.goals?.for?.minute;
//     return Object.keys(goalMinutes).map((key) => ({
//       x: key,
//       y: goalMinutes[key]?.total || 0,
//     }));
//   };

//   const homeChartData = prepareChartData(homeTeamStats);
//   const awayChartData = prepareChartData(awayTeamStats);

//   const chartOptions = {
//     chart: {
//       height: 350,
//       type: 'line',
//       id: 'areachart-2'
//     },
//     annotations: {
//       yaxis: [{
//         y: 1,
//         borderColor: '#00E396',
//         label: {
//           borderColor: '#00E396',
//           style: {
//             color: '#fff',
//             background: '#00E396',
//           },
//           text: 'Goal',
//         }
//       }],
//       xaxis: homeChartData.map(({ x }) => ({
//         x: x,
//         borderColor: '#775DD0',
//         label: {
//           borderColor: '#775DD0',
//           style: {
//             color: '#fff',
//             background: '#775DD0',
//           },
//           text: `${x} min`,
//         }
//       })),
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'straight'
//     },
//     title: {
//       text: 'Goals by Minute',
//       align: 'left'
//     },
//     xaxis: {
//       type: 'category',
//       categories: Object.keys(homeTeamStats?.goals?.for?.minute || {}),
//     },
//     yaxis: {
//       title: {
//         text: 'Goals'
//       }
//     }
//   };

//   const homeChartSeries = [{
//     name: 'Home Team Goals',
//     data: homeChartData.map(({ y }) => y),
//   }];

//   const awayChartSeries = [{
//     name: 'Away Team Goals',
//     data: awayChartData.map(({ y }) => y),
//   }];

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
//       <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>

//       {homeTeamStats && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">{homeTeamStats.team.name} Statistics</h3>
//             <ReactApexChart options={chartOptions} series={homeChartSeries} type="line" height={350} />
//           </div>
//         </div>
//       )}

//       {awayTeamStats && (
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">{awayTeamStats.team.name} Statistics</h3>
//             <ReactApexChart options={chartOptions} series={awayChartSeries} type="line" height={350} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamStatistics;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import ReactApexChart from 'react-apexcharts';

// const TeamStatistics = () => {
//   const [homeTeamStats, setHomeTeamStats] = useState(null);
//   const [awayTeamStats, setAwayTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         if (!fixtureData) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//         const { date: fixtureDate, league, teams } = fixtureData;
//         const leagueId = league.id;
//         const season = league.season;
//         const homeTeamId = teams.home.id;
//         const awayTeamId = teams.away.id;

//         const fetchTeamStatistics = async (teamId) => {
//           try {
//             const teamStatResponse = await axios.get(
//               'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//               {
//                 params: {
//                   league: leagueId,
//                   season: season,
//                   team: teamId,
//                   date: fixtureDate
//                 },
//                 headers: {
//                   'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//                   'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//               }
//             );

//             return teamStatResponse.data.response;
//           } catch (error) {
//             console.log("Error Fetching team statistics", error.message);
//             return null;
//           }
//         };

//         const homeStats = await fetchTeamStatistics(homeTeamId);
//         const awayStats = await fetchTeamStatistics(awayTeamId);

//         setHomeTeamStats(homeStats);
//         setAwayTeamStats(awayStats);
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   const prepareCardData = (teamStats) => {
//     if (!teamStats) return [];

//     return Object.keys(teamStats?.cards).map((cardType) => ({
//       x: cardType,
//       y: teamStats.cards[cardType]['total'] || 0,
//     }));
//   };

//   const homeCardData = prepareCardData(homeTeamStats);
//   const awayCardData = prepareCardData(awayTeamStats);

//   const cardOptions = {
//     chart: {
//       type: 'bar',
//       height: 350,
//       id: 'areachart-2'
//     },
//     plotOptions: {
//       bar: {
//         horizontal: true,
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     xaxis: {
//       categories: homeCardData.map(({ x }) => x),
//       title: {
//         text: 'Number of Cards'
//       }
//     },
//     yaxis: {
//       title: {
//         text: 'Card Type'
//       }
//     },
//     title: {
//       text: 'Card Penalties',
//       align: 'left'
//     },
//   };

//   const homeCardSeries = [{
//     name: 'Home Team',
//     data: homeCardData.map(({ y }) => y),
//   }];

//   const awayCardSeries = [{
//     name: 'Away Team',
//     data: awayCardData.map(({ y }) => y),
//   }];

//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
//       <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>

//       <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
//         <div className="px-4 py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">Card Penalties</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <div>
//               <h4 className="text-lg font-medium mb-2">Home Team</h4>
//               <ReactApexChart options={cardOptions} series={homeCardSeries} type="bar" height={350} />
//             </div>
//             <div>
//               <h4 className="text-lg font-medium mb-2">Away Team</h4>
//               <ReactApexChart options={cardOptions} series={awayCardSeries} type="bar" height={350} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamStatistics;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import ApexChart from './LineUpsStat';
const TeamStatistics = () => {
  const [homeTeamStats, setHomeTeamStats] = useState(null);
  const [awayTeamStats, setAwayTeamStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: fixtureId } = useParams();

  useEffect(() => {
    const fetchFixtureData = async () => {
      try {
        const fixtureResponse = await axios.get(
          'https://api-football-v1.p.rapidapi.com/v3/fixtures',
          {
            params: { id: fixtureId },
            headers: {
              'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          }
        );

        const fixtureData = fixtureResponse.data.response[0];

        if (!fixtureData) {
          console.error('Invalid fixture data structure:', fixtureData);
          setLoading(false);
          return;
        }

        const { date: fixtureDate, league, teams } = fixtureData;
        const leagueId = league.id;
        const season = league.season;
        const homeTeamId = teams.home.id;
        const awayTeamId = teams.away.id;

        const fetchTeamStatistics = async (teamId) => {
          try {
            const teamStatResponse = await axios.get(
              'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
              {
                params: {
                  league: leagueId,
                  season: season,
                  team: teamId,
                  date: fixtureDate
                },
                headers: {
                  'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
                  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
              }
            );

            return teamStatResponse.data.response;
          } catch (error) {
            console.log("Error Fetching team statistics", error.message);
            return null;
          }
        };

        const homeStats = await fetchTeamStatistics(homeTeamId);
        const awayStats = await fetchTeamStatistics(awayTeamId);

        setHomeTeamStats(homeStats);
        setAwayTeamStats(awayStats);
      } catch (error) {
        console.error('Error fetching fixture data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtureData();
  }, [fixtureId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const prepareChartData = (teamStats) => {
    if (!teamStats) return [];

    const goalMinutes = teamStats?.goals?.for?.minute;
    return Object.keys(goalMinutes).map((key) => ({
      x: key,
      y: goalMinutes[key]?.total || 0,
    }));
  };

  const prepareStatData = (teamStats) => {
    if (!teamStats) return [];

    return [
      { label: 'Clean Sheets', value: teamStats.clean_sheet.total },
      { label: 'Failed to Score', value: teamStats.failed_to_score.total },
      { label: 'Penalty Scored', value: teamStats.penalty.scored.total },
      { label: 'Penalty Missed', value: teamStats.penalty.missed.total },
    ];
  };

  const homeChartData = prepareChartData(homeTeamStats);
  const awayChartData = prepareChartData(awayTeamStats);
  const homeStatData = prepareStatData(homeTeamStats);
  const awayStatData = prepareStatData(awayTeamStats);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      id: 'areachart-2'
    },
    annotations: {
      yaxis: [{
        y: 1,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Goal',
        }
      }],
      xaxis: homeChartData.map(({ x }) => ({
        x: x,
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: `${x} min`,
        }
      })),
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Goals by Minute',
      align: 'left'
    },
    xaxis: {
      type: 'category',
      categories: Object.keys(homeTeamStats?.goals?.for?.minute || {}),
    },
    yaxis: {
      title: {
        text: 'Goals'
      }
    }
  };

  const homeChartSeries = [{
    name: 'Home Team Goals',
    data: homeChartData.map(({ y }) => y),
  }];

  const awayChartSeries = [{
    name: 'Away Team Goals',
    data: awayChartData.map(({ y }) => y),
  }];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
      <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>

      {homeTeamStats && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{homeTeamStats.team.name} Statistics</h3>
            <ReactApexChart options={chartOptions} series={homeChartSeries} type="line" height={350} />
          </div>
        </div>
      )}

      {awayTeamStats && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{awayTeamStats.team.name} Statistics</h3>
            <ReactApexChart options={chartOptions} series={awayChartSeries} type="line" height={350} />
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Additional Statistics</h3>
          <div
            className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <h4 className="text-lg font-medium text-gray-900">Home Team Stats</h4>
                <ul className="mt-2 divide-y divide-gray-200">
                  {homeStatData.map((item, index) => (
                    <li key={index} className="py-2 flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium text-gray-500">{item.label}:</span>
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Away Team Stats</h4>
                <ul className="mt-2 divide-y divide-gray-200">
                  {awayStatData.map((item, index) => (
                    <li key={index} className="py-2 flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium text-gray-500">{item.label}:</span>
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ApexChart/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamStatistics;
  