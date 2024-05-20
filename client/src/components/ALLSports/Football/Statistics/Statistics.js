// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   } else {
//     // Combine statistics of both teams into a single array
//     const combinedStats = [];
  
//     teamStats.forEach(teamStat => {
//       const teamName = teamStat.team.name;
//       teamStat.statistics.forEach(stat => {
//         const existingStatIndex = combinedStats.findIndex(item => item.type === stat.type);
//         if (existingStatIndex !== -1) {
//           combinedStats[existingStatIndex][teamName] = stat.value;
//         } else {
//           const newStat = { type: stat.type, [teamName]: stat.value };
//           combinedStats.push(newStat);
//         }
//       });
//     });

//     return (
//       <div className='container'>
//         <h1 className='title'>Match Statistics</h1>
//         <div className='chart-container'>
//           <LineChart width={800} height={400} data={combinedStats}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="type" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             {teamStats.map((teamStat, index) => (
//               <Line key={index} type="monotone" dataKey={teamStat.team.name} stroke={index === 0 ? "#8884d8" : "#82ca9d"} animationDuration={1000} />
//             ))}
//           </LineChart>
//         </div>
//       </div>
//     );
//   }
// }
// import React, { useEffect, useState } from 'react';
// import {CanvasJSChart} from "canvasjs-react-charts"
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Flatten the data structure
//   const flatStats = teamStats.flatMap(teamStat => teamStat.statistics);

//   // Format data for CanvasJS
//   const chartData = flatStats.reduce((acc, stat) => {
//     if (!acc[stat.type]) {
//       acc[stat.type] = {};
//     }
//     teamStats.forEach((teamStat, index) => {
//       acc[stat.type][teamStat.team.name] = stat.value;
//     });
//     return acc;
//   }, {});

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       valueFormatString: "DD MMM"
//     },
//     axisY: {
//       title: "Value"
//     },
//     toolTip: {
//       shared: true
//     },
//     legend: {
//       cursor: "pointer",
//       verticalAlign: "bottom",
//       horizontalAlign: "left",
//       dockInsidePlotArea: true,
//       itemclick: toggleDataSeries
//     },
//     data: Object.entries(chartData).map(([type, data]) => ({
//       type: "line",
//       showInLegend: true,
//       name: type,
//       dataPoints: Object.entries(data).map(([team, value]) => ({ x: team, y: value }))
//     }))
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }

// function toggleDataSeries(e) {
//   if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
//     e.dataSeries.visible = false;
//   } else {
//     e.dataSeries.visible = true;
//   }
//   e.chart.render();
// }
// import React, { useEffect, useState } from 'react';
// import {CanvasJSChart} from "canvasjs-react-charts"
// import axios from 'axios';
// import { useParams } from 'react-router-dom';



// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Flatten the data structure
//   const flatStats = teamStats.flatMap(teamStat => teamStat.statistics);

//   // Format data for CanvasJS
//   const chartData = flatStats.reduce((acc, stat) => {
//     if (!acc[stat.type]) {
//       acc[stat.type] = {};
//     }
    
//     teamStats.forEach((teamStat, index) => {
//       acc[stat.type][teamStat.team.name] = stat.value;
//     });
//     return acc;
//   }, {});

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       valueFormatString: "DD MMM"
//     },
//     axisY: {
//       title: "Value"
//     },
//     toolTip: {
//       shared: true
//     },
//     legend: {
//       cursor: "pointer",
//       verticalAlign: "bottom",
//       horizontalAlign: "left",
//       dockInsidePlotArea: true,
//       itemclick: toggleDataSeries
//     },
//     data: Object.entries(chartData).map(([type, data]) => ({
//       type: "line",
//       showInLegend: true,
//       name: type,
//       dataPoints: Object.entries(data).map(([team, value]) => ({ x: team, y: value }))
//     }))
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }

// function toggleDataSeries(e) {
//   if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
//     e.dataSeries.visible = false;
//   } else {
//     e.dataSeries.visible = true;
//   }
//   e.chart.render();
// }
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Extract team names
//   const teamNames = teamStats.map(teamStat => teamStat.team.name);

//   // Extract statistic types
//   const statisticTypes = teamStats[0].statistics.map(stat => stat.type);

//   // Prepare data for the chart
//   const chartData = statisticTypes.map(type => ({
//     type: "line",
//     showInLegend: true,
//     name: type,
//     dataPoints: teamStats.map(teamStat => ({
//       label: teamStat.team.name,
//       y: parseFloat(teamStat.statistics.find(stat => stat.type === type).value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Teams",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function Statistics() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Extract team names
//   const teamNames = teamStats.map(teamStat => teamStat.team.name);

//   // Extract statistic types
//   const statisticTypes = teamStats[0].statistics.map(stat => stat.type);

//   // Prepare data for the chart
//   const chartData = statisticTypes.map(type => ({
//     type: "spline", // Change type to spline
//     showInLegend: true,
//     name: type,
//     dataPoints: teamStats.map(teamStat => ({
//       label: teamStat.team.name,
//       y: parseFloat(teamStat.statistics.find(stat => stat.type === type).value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Teams",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Prepare data for the chart
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics.map(stat => ({
//       label: stat.type,
//       y: parseFloat(stat.value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Prepare data for the chart
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics.map(stat => ({
//       label: stat.type,
//       y: parseFloat(stat.value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container'>
//       <h1 className='title'>Match Statistics</h1>
//       <div className='chart-container'>
//         <CanvasJSChart options={options} />
//       </div>
//       <style jsx>{`
//         .container {
//           max-width: 800px;
//           margin: auto;
//           padding: 20px;
//         }
//         .title {
//           text-align: center;
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .chart-container {
//           border: 1px solid #ccc;
//           border-radius: 10px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           margin-bottom: 20px;
//         }
//         .loading {
//           text-align: center;
//           font-size: 18px;
//           margin-top: 50px;
//         }
//         @media (max-width: 768px) {
//           .container {
//             padding: 10px;
//           }
//           .title {
//             font-size: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Prepare data for the chart
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics.map(stat => ({
//       label: stat.type,
//       y: parseFloat(stat.value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container mx-auto px-4 md:px-0'>
//       <h1 className='title text-center text-2xl md:text-3xl my-6'>Match Statistics</h1>
//       <div className='chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6'>
//         <CanvasJSChart options={options} />
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function StatisticsPage() {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div className='loading'>Loading team statistics...</div>;
//   }

//   // Prepare data for the chart
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics.map(stat => ({
//       label: stat.type,
//       y: parseFloat(stat.value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container mx-auto px-4 md:px-0'>
//       <h1 className='title text-center text-2xl md:text-3xl my-6'> Detailed Match  Statistics
//        <span>
//        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//       <path d="M0 0h24v24H0z" fill="none"/>
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v-2h-2v2zm0-4h2v-6h-2v6zm4 4h2v-2h-2v2zm0-4h2v-6h-2v6z"/>
//     </svg>
//         </span>
//        </h1>
//       <div className='chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6'>
//         <CanvasJSChart options={options} />
//       </div>
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .canvasjs-chart-credit {
//             display: none; /* Hide CanvasJS chart credit in mobile view */
//           }
//           .canvasjs-chart-legend {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .canvasjs-chart-legend-item {
//             margin: 0 10px 10px 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// // Import FontAwesome icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';

// const Statistics = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//         setLoading(false); // Data fetched, set loading to false
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//         setLoading(false); // Error occurred, set loading to false
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (loading) {
//     // Show spinner while loading
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (!teamStats || teamStats.length === 0) {
//     // Show alert if no data found
//     return (
//       <div className="alert-container">
//         <div className="alert">No statistics data found</div>
//       </div>
//     );
//   }

//   // Prepare data for the chart
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics.map(stat => ({
//       label: stat.type,
//       y: parseFloat(stat.value)
//     }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart
//   return (
//     <div className='container mx-auto px-4 md:px-0'>
//       <h1 className='title text-center text-2xl md:text-3xl my-6'>Detailed Match Statistics
//         <span className="icon">
//           <FontAwesomeIcon icon={faChartLine} />
//         </span>
//       </h1>
//       <div className='chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6'>
//         <CanvasJSChart options={options} />
//       </div>
//       <style jsx>{`
//         /* Styles for loading spinner */
//         .loading-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .spinner {
//           border: 5px solid #f3f3f3;
//           border-top: 5px solid #3498db;
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* Styles for alert */
//         .alert-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .alert {
//           padding: 10px 20px;
//           background-color: #f44336;
//           color: white;
//           border-radius: 5px;
//           font-size: 18px;
//         }

//         /* Styles for icon */
//         .icon {
//           margin-left: 10px;
//           vertical-align: middle;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Statistics;
// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// // Import FontAwesome icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';

// const Statistics = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [visibleStats, setVisibleStats] = useState({}); // State to track visible statistic types
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//         setLoading(false); // Data fetched, set loading to false
//         // Initialize visibleStats state with all statistic types initially visible
//         setVisibleStats(
//           response.data.response.reduce((acc, teamStat) => {
//             teamStat.statistics.forEach(stat => {
//               acc[stat.type] = true;
//             });
//             return acc;
//           }, {})
//         );
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//         setLoading(false); // Error occurred, set loading to false
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   const handleCheckboxChange = (type) => {
//     // Toggle visibility status of the statistic type
//     setVisibleStats(prevState => ({
//       ...prevState,
//       [type]: !prevState[type]
//     }));
//   };

//   if (loading) {
//     // Show spinner while loading
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (!teamStats || teamStats.length === 0) {
//     // Show alert if no data found
//     return (
//       <div className="alert-container">
//         <div className="alert">No statistics data found</div>
//       </div>
//     );
//   }

//   // Prepare data for the chart, filtering out invisible statistic types
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics
//       .filter(stat => visibleStats[stat.type])
//       .map(stat => ({
//         label: stat.type,
//         y: parseFloat(stat.value)
//       }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: "Statistic Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart with checkboxes
//   return (
//     <div className='container mx-auto px-4 md:px-0'>
//       <h1 className='title text-center text-2xl md:text-3xl my-6'>Detailed Match Statistics
//         <span className="icon">
//           <FontAwesomeIcon icon={faChartLine} />
//         </span>
//       </h1>
//       <div className='chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6'>
//         <CanvasJSChart options={options} />
//       </div>
//       <div className="checkbox-container">
//         {Object.keys(visibleStats).map((type, index) => (
//           <div key={index} className="checkbox-item">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={visibleStats[type]}
//                 onChange={() => handleCheckboxChange(type)}
//               />
//               {type}
//             </label>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         /* Styles for loading spinner */
//         .loading-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .spinner {
//           border: 5px solid #f3f3f3;
//           border-top: 5px solid #3498db;
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* Styles for alert */
//         .alert-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .alert {
//           padding: 10px 20px;
//           background-color: #f44336;
//           color: white;
//           border-radius: 5px;
//           font-size: 18px;
//         }

//         /* Styles for icon */
//         .icon {
//           margin-left: 10px;
//           vertical-align: middle;
//         }

//         /* Styles for checkbox */
//         .checkbox-container {
//           display: flex;
//           flex-wrap: wrap;
//           margin-top: 20px;
//         }
//         .checkbox-item {
//           margin-right: 10px;
//         }
//         .checkbox-item label {
//           margin-left: 5px;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Statistics;





// <!-- Canava JS Chart -->



// import React, { useEffect, useState } from 'react';
// import { CanvasJSChart } from "canvasjs-react-charts";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Footer from '../../../FrontPage/Footer';
// // Import FontAwesome icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';
// import NoDataModal from './NoDataModal';
// import Lottie from "lottie-react"
// import SpinLottieAnimation from "./SpinLottieAnimation.json";
// const Statistics = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [visibleStats, setVisibleStats] = useState({}); // State to track visible statistic types
 
//   const { id: fixtureId } = useParams(); // Extract fixture id from URL params
//   const handleCloseModal = () => {
   
//     window.history.back();
//   };
//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
//           params: {
//             fixture: fixtureId
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });
//         setTeamStats(response.data.response);
//         setLoading(false); // Data fetched, set loading to false
//         // Initialize visibleStats state with all statistic types initially visible
//         setVisibleStats(
//           response.data.response.reduce((acc, teamStat) => {
//             teamStat.statistics.forEach(stat => {
//               acc[stat.type] = true;
//             });
//             return acc;
//           }, {})
//         );
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//         setLoading(false); // Error occurred, set loading to false
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   const handleCheckboxChange = (type) => {
//     // Toggle visibility status of the statistic type
//     setVisibleStats(prevState => ({
//       ...prevState,
//       [type]: !prevState[type]
//     }));
//   };

//   if (loading) {
//     // Show spinner while loading
//     return (
//       <div className="loading-container">
//         <Lottie SpinLottieAnimation={SpinLottieAnimation}/>
//       </div>
//     );
//   }

// //   if (!teamStats || teamStats.length === 0) {
// //     // Show alert if no data found
// //     return (
// //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// //         <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
// //           <span class="font-medium">Sorry!!</span> No Statistics Data Found.
// //         </div>
// //       </div>
// //     );
// // }

// if (!teamStats || teamStats.length === 0) {
//   return <NoDataModal onClose={handleCloseModal} />;
// }


//   // Prepare data for the chart, filtering out invisible statistic types
//   const chartData = teamStats.map(teamStat => ({
//     type: "line",
//     showInLegend: true,
//     name: teamStat.team.name,
//     dataPoints: teamStat.statistics
//       .filter(stat => visibleStats[stat.type])
//       .map(stat => ({
//         label: stat.type,
//         y: parseFloat(stat.value)
//       }))
//   }));

//   // Chart configuration
//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "Match Statistics"
//     },
//     axisX: {
//       title: " Type",
//       interval: 1,
//       labelAngle: -45
//     },
//     axisY: {
//       title: "Value"
//     },
//     data: chartData
//   };

//   // Render CanvasJS chart with checkboxes
//   return (
//     <React.Fragment>
//     <div className='container mx-auto px-4 md:px-0'>
//       <h1 className='title text-center text-2xl md:text-3xl my-6'>Detailed Match Statistics
//         <span className="icon">
//           <FontAwesomeIcon icon={faChartLine} />
//         </span>
       
//       </h1>
//       <div className='text-center mb-6'>
//       <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 " onClick={()=>{
//         alert("We are working on it... Please wait for few days! Thank You for your Patient!!!");
//       }}>
//         <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//         See in Table Format
//         </span>
//       </button>
//     </div>
//       <div className='chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6'>
//         <CanvasJSChart options={options} />
//       </div>
//       <div className="checkbox-container">
//         {Object.keys(visibleStats).map((type, index) => (
//           <div key={index} className="checkbox-item">
//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 checked={visibleStats[type]}
//                 onChange={() => handleCheckboxChange(type)}
//                 className="checkbox-input"
//               />
//               <span className="checkbox-custom"></span>
//               {type}
//             </label>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         /* Styles for loading spinner */
//         .loading-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .spinner {
//           border: 5px solid #f3f3f3;
//           border-top: 5px solid #3498db;
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* Styles for alert */
//         .alert-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
//         .alert {
//           padding: 10px 20px;
//           background-color: #f44336;
//           color: white;
//           border-radius: 5px;
//           font-size: 18px;
//         }

//         /* Styles for icon */
//         .icon {
//           margin-left: 10px;
//           vertical-align: middle;
//         }

//         /* Styles for checkbox */
//         .checkbox-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 10px;
//         }
//         .checkbox-item {
//           display: flex;
//           align-items: center;
//         }
//         .checkbox-label {
//           display: flex;
//           align-items: center;
//         }
//         .checkbox-input {
//           display: none;
//         }
//         .checkbox-custom {
//           width: 20px;
//           height: 20px;
//           border: 2px solid #000;
//           border-radius: 3px;
//           margin-right: 5px;
//           position: relative;
//         }
//         .checkbox-input:checked + .checkbox-custom::after {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 10px;
//           height: 10px;
//           background-color: #000;
//           border-radius: 50%;
//         }

//         @media (max-width: 768px) {
//           .checkbox-container {
//             grid-template-columns: repeat(3, minmax(100px, 1fr));
//           }
//         }
//       `}</style>
//     </div>

//     <Footer />
//     </React.Fragment>
//   );
// }

// export default Statistics;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';
// import NoDataModal from './NoDataModal';
// import Lottie from 'lottie-react';
// import SpinLottieAnimation from './SpinLottieAnimation.json';
// import ResizableBox from './ResizableBox';
// import useDemoConfig from './useDemoConfig';
// import { AxisOptions, Chart } from 'react-charts';

// const Statistics = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [visibleStats, setVisibleStats] = useState({});

//   const { id: fixtureId } = useParams();

//   const handleCloseModal = () => {
//     window.history.back();
//   };

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: {
//               fixture: fixtureId
//             },
//             headers: {
//               'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//         setLoading(false);
//         setVisibleStats(
//           response.data.response.reduce((acc, teamStat) => {
//             teamStat.statistics.forEach(stat => {
//               acc[stat.type] = true;
//             });
//             return acc;
//           }, {})
//         );
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//         setLoading(false);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   const handleCheckboxChange = type => {
//     setVisibleStats(prevState => ({
//       ...prevState,
//       [type]: !prevState[type]
//     }));
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <Lottie animationData={SpinLottieAnimation} className="spin-animation" />
//       </div>

//     );
//   }

//   if (!teamStats || teamStats.length === 0) {
//     return <NoDataModal onClose={handleCloseModal} />;
//   }

//   const chartData = teamStats.map(teamStat => ({
//     label: teamStat.team.name,
//     data: teamStat.statistics
//       .filter(stat => visibleStats[stat.type])
//       .map(stat => ({
//         primary: stat.type,
//         secondary: parseFloat(stat.value)
//       }))
//   }));

//   const primaryAxis = {
//     getValue: datum => datum.primary
//   };

//   const secondaryAxes = [
//     {
//       getValue: datum => datum.secondary,
//       elementType: 'line'
//     }
//   ];

//   return (
//     <React.Fragment>
//       <div className="container mx-auto px-4 md:px-0  relative overflow-x-hidden top-36">
//         <h1 className="title text-center text-2xl md:text-3xl my-6">
//           Detailed Match Statistics
//           <span className="icon">
//             <FontAwesomeIcon icon={faChartLine} />
//           </span>
//         </h1>
//         <div className="text-center mb-6">
//           <button
//             className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
//             onClick={() => {
//               alert(
//                 'We are working on it... Please wait for a few days! Thank you for your patience!!!'
//               );
//             }}
//           >
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               See in Table Format
//             </span>
//           </button>
//         </div>
//         <div className="chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6">
//           <ResizableBox>
//             <Chart
//               options={{
//                 data: chartData,
//                 primaryAxis,
//                 secondaryAxes
//               }}
//             />
//           </ResizableBox>
//         </div>
//         <div className="checkbox-container">
//           {Object.keys(visibleStats).map((type, index) => (
//             <div key={index} className="checkbox-item">
//               <label className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   checked={visibleStats[type]}
//                   onChange={() => handleCheckboxChange(type)}
//                   className="checkbox-input"
//                 />
//                 <span className="checkbox-custom"></span>
//                 {type}
//               </label>
//             </div>
//           ))}
//         </div>
//         <style jsx>{`
//           .loading-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }
//           .spinner {
//             border: 5px solid #f3f3f3;
//             border-top: 5px solid #3498db;
//             border-radius: 50%;
//             width: 50px;
//             height: 50px;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% {
//               transform: rotate(0deg);
//             }
//             100% {
//               transform: rotate(360deg);
//             }
//           }
//           .alert-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }
//           .alert {
//             padding: 10px 20px;
//             background-color: #f44336;
//             color: white;
//             border-radius: 5px;
//             font-size: 18px;
//           }
//           .icon {
//             margin-left: 10px;
//             vertical-align: middle;
//           }
//           .checkbox-container {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//             gap: 10px;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .checkbox-label {
//             display: flex;
//             align-items: center;
//           }
//           .checkbox-input {
//             display: none;
//           }
//           .checkbox-custom {
//             width: 20px;
//             height: 20px;
//             border: 2px solid #000;
//             border-radius: 3px;
//             margin-right: 5px;
//             position: relative;
//           }
//           .checkbox-input:checked + .checkbox-custom::after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             width: 10px;
//             height: 10px;
//             background-color: #000;
//             border-radius: 50%;
//           }
          
//           .loading-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 30vh;
//           }
        
//           .spin-animation {
//             width: 100px; /* Default size */
//             height: 100px; /* Default size */
//           }
        
//           /* Responsive adjustments */
//           @media (max-width: 768px) {
//             .spin-animation {
//               width: 80px; /* Smaller size for smaller screens */
//               height: 80px;
//             }
//           }
        
//           @media (max-width: 480px) {
//             .spin-animation {
//               width: 60px; /* Even smaller size for mobile devices */
//               height: 60px;
//             }
//           }
//           @media (max-width: 768px) {
//             .checkbox-container {
//               grid-template-columns: repeat(3, minmax(100px, 1fr));
//             }
//           }
//         `}</style>
//       </div>
     
//     </React.Fragment>
//   );
// };

// export default Statistics;





//Final Matreial UI Stat

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons';
// import NoDataModal from './NoDataModal';
// import Lottie from 'lottie-react';

// import ResizableBox from './ResizableBox';
// import useDemoConfig from './useDemoConfig';
// import { AxisOptions, Chart } from 'react-charts';

// const Statistics = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [visibleStats, setVisibleStats] = useState({});

//   const { id: fixtureId } = useParams();

//   const handleCloseModal = () => {
//     window.history.back();
//   };

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: {
//               fixture: fixtureId
//             },
//             headers: {
//               'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//         setLoading(false);
//         setVisibleStats(
//           response.data.response.reduce((acc, teamStat) => {
//             teamStat.statistics.forEach(stat => {
//               acc[stat.type] = true;
//             });
//             return acc;
//           }, {})
//         );
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//         setLoading(false);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   const handleCheckboxChange = type => {
//     setVisibleStats(prevState => ({
//       ...prevState,
//       [type]: !prevState[type]
//     }));
//   };

//   if (loading) {
//     return (
//       <div className="spin">
//       <iframe
//       src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
     
//       title="Loading animation"
//       className="fixed top-0 right-0 h-screen w-screen  z-50 flex justify-center items-center spin "
//     ></iframe>
//     </div>
//     );
//   }

//   if (!teamStats || teamStats.length === 0) {
//     return <NoDataModal onClose={handleCloseModal} />;
//   }

//   const chartData = teamStats.map(teamStat => ({
//     label: teamStat.team.name,
//     data: teamStat.statistics
//       .filter(stat => visibleStats[stat.type])
//       .map(stat => ({
//         primary: stat.type,
//         secondary: parseFloat(stat.value)
//       }))
//   }));

//   const primaryAxis = {
//     getValue: datum => datum.primary
//   };

//   const secondaryAxes = [
//     {
//       getValue: datum => datum.secondary,
//       elementType: 'line'
//     }
//   ];

//   return (
//     <React.Fragment>
//       <div className="container mx-auto px-4 md:px-0 relative overflow-x-hidden top-36">
//         <h1 className="title text-center text-2xl md:text-3xl my-6">
//           Detailed Match Statistics
//           <span className="icon">
//             <FontAwesomeIcon icon={faChartLine} />
//           </span>
//         </h1>
//         <div className="text-center mb-6">
//           <button
//             className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
//             onClick={() => {
//               alert(
//                 'We are working on it... Please wait for a few days! Thank you for your patience!!!'
//               );
//             }}
//           >
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               See in Table Format
//             </span>
//           </button>
//         </div>
//         <div className="chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6">
//           <ResizableBox>
//             <Chart
//               options={{
//                 data: chartData,
//                 primaryAxis,
//                 secondaryAxes
//               }}
//             />
//           </ResizableBox>
//         </div>
//         <div className="checkbox-container">
//           {Object.keys(visibleStats).map((type, index) => (
//             <div key={index} className="checkbox-item">
//               <label className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   checked={visibleStats[type]}
//                   onChange={() => handleCheckboxChange(type)}
//                   className="checkbox-input"
//                 />
//                 <span className="checkbox-custom"></span>
//                 {type}
//               </label>
//             </div>
//           ))}
//         </div>
//         <style jsx>{`
//           .loading-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }
//           .spinner {
//             border: 5px solid #f3f3f3;
//             border-top: 5px solid #3498db;
//             border-radius: 50%;
//             width: 50px;
//             height: 50px;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% {
//               transform: rotate(0deg);
//             }
//             100% {
//               transform: rotate(360deg);
//             }
//           }
//           .alert-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }
//           .alert {
//             padding: 10px 20px;
//             background-color: #f44336;
//             color: white;
//             border-radius: 5px;
//             font-size: 18px;
//           }
//           .icon {
//             margin-left: 10px;
//             vertical-align: middle;
//           }
//           .checkbox-container {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//             gap: 10px;
//           }
//           .checkbox-item {
//             display: flex;
//             align-items: center;
//           }
//           .checkbox-label {
//             display: flex;
//             align-items: center;
//           }
//           .checkbox-input {
//             display: none;
//           }
//           .checkbox-custom {
//             width: 20px;
//             height: 20px;
//             border: 2px solid #000;
//             border-radius: 3px;
//             margin-right: 5px;
//             position: relative;
//           }
//           .checkbox-input:checked + .checkbox-custom::after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             width: 10px;
//             height: 10px;
//             background-color: #000;
//             border-radius: 50%;
//           }
          
//           .loading-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 30vh;
//           }
        
//           .spin-animation {
//             width: 100px;
//             height: 100px;
//           }
       
//           @media (max-width: 768px) {
//             .spin-animation {
//               width: 80px;
//               height: 80px;
//             }
//           }
        
//           @media (max-width: 480px) {
//             .spin-animation {
//               width: 60px;
//               height: 60px;
//             }
//           }
//           @media (max-width: 768px) {
//             .checkbox-container {
//               grid-template-columns: repeat(3, minmax(100px, 1fr));
//             }
//           }
//         `}</style>
//       </div>
     
//     </React.Fragment>
//   );
// };

// export default Statistics;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import NoDataModal from './NoDataModal';
import ResizableBox from './ResizableBox';
import { AxisOptions, Chart } from 'react-charts';

const Statistics = () => {
  const [teamStats, setTeamStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleStats, setVisibleStats] = useState({});

  const { id: fixtureId } = useParams();

  const handleCloseModal = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
          {
            params: { fixture: fixtureId },
            headers: {
              'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          }
        );
        setTeamStats(response.data.response);
        setLoading(false);
        setVisibleStats(
          response.data.response.reduce((acc, teamStat) => {
            teamStat.statistics.forEach(stat => {
              acc[stat.type] = true;
            });
            return acc;
          }, {})
        );
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setLoading(false);
      }
    };
    fetchStatistics();
  }, [fixtureId]);

  const handleCheckboxChange = type => {
    setVisibleStats(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  if (loading) {
    return (
      <div className="spin">
           <iframe
           src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
           
           title="Loading animation"
           className="fixed top-0 right-0 h-screen w-screen  z-50 flex justify-center items-center spin "
         ></iframe>
         </div>
    );
  }

  if (!teamStats || teamStats.length === 0) {
    return <NoDataModal onClose={handleCloseModal} />;
  }

  const chartData = teamStats.map(teamStat => ({
    label: teamStat.team.name,
    data: teamStat.statistics
      .filter(stat => visibleStats[stat.type])
      .map(stat => ({
        primary: stat.type,
        secondary: parseFloat(stat.value)
      }))
  }));

  const primaryAxis = {
    getValue: datum => datum.primary
  };

  const secondaryAxes = [
    {
      getValue: datum => datum.secondary,
      elementType: 'line'
    }
  ];

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 md:px-0 relative overflow-x-hidden top-36">
        <h1 className="title text-center text-2xl md:text-3xl my-6">
          Detailed Match Statistics
          <span className="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </span>
        </h1>
        <div className="text-center mb-6">
          <Link
            to={`/table-format/${fixtureId}`}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              See in Table Format
            </span>
          </Link>
        </div>
        <div className="chart-container border border-gray-200 rounded-lg shadow-md overflow-hidden mb-6">
          <ResizableBox>
            <Chart
              options={{
                data: chartData,
                primaryAxis,
                secondaryAxes
              }}
            />
          </ResizableBox>
        </div>
        {/* <div className="checkbox-container">
          {Object.keys(visibleStats).map((type, index) => (
            <div key={index} className="flex items-center me-4">
              <input
                type="checkbox"
                checked={visibleStats[type]}
                onChange={() => handleCheckboxChange(type)}
                className={`w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800`}
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {type}
              </label>
            </div>
          ))}
        </div> */}

<div className="checkbox-container flex flex-wrap">
  {Object.keys(visibleStats).map((type, index) => (
    <div key={index} className="flex items-center me-4 mb-4 w-full sm:w-auto">
      <input
        type="checkbox"
        checked={visibleStats[type]}
        onChange={() => handleCheckboxChange(type)}
        className={`w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800`}
      />
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {type}
      </label>
    </div>
  ))}
</div>

        <style jsx>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .spin-animation {
            width: 200px;
            height: 200px;
          }
          @media (max-width: 768px) {
            .spin-animation {
              width: 100px;
              height: 100px;
            }
          }
          @media (max-width: 480px) {
            .spin-animation {
              width: 80px;
              height: 80px;
            }
          }
          .checkbox-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .icon {
            margin-left: 10px;
            vertical-align: middle;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
};

export default Statistics;



