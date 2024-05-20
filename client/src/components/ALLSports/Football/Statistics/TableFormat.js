

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Fragment } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// const ComparisonTable = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: { fixture: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <div>Loading...</div>;
//   }
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
//   }
  
//   const uniqueStatTypes = [
//     ...new Set(teamStats.flatMap(team => team.statistics.map(stat => stat.type)))
//   ];

//   return (
//     <div className="relative overflow-x-hidden top-36 shadow-md sm:rounded-lg mt-8 mx-auto w-11/12">
//         <div className='flex justify-center items-center'>
//         <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
//             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Download Data 
//             </span>
//         </button>
//         </div>
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Statistic</th>
//             {teamStats.map((team, index) => (
//               <th key={index} scope="col" className="px-6 py-3">
//                 <div className="flex items-center font-bold font-poppins">
//                   <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
//                   {team.team.name}
//                 </div>
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Comparison</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uniqueStatTypes.map((type, index) => (
//             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
//               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
//                 {type}
//               </th>
//               {teamStats.map((team, idx) => (
//                 <td key={idx} className="px-6 py-4">
//                   {team.statistics.find(stat => stat.type === type)?.value || 'N/A'}
//                 </td>
//               ))}
//               <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
//                 {teamStats.length === 2 && (
//                   <div>
//                     <span className={parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) ? "text-green-500" : "text-red-500"}>
//                       {parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                         ? teamStats[0].team.name
//                         : teamStats[1].team.name}
//                     </span>
//                     <img src={
//                         parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                         parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                           ? teamStats[0].team.logo
//                           : teamStats[1].team.logo} 
//                     alt="Team Logo" className="w-6 h-6 ml-2" />
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="absolute right-10 bottom-10">
//         <Menu as="div" className="relative inline-block text-left">
          

//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//               <div className="py-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       className={classNames(
//                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                         'block px-4 py-2 text-sm w-full text-left'
//                       )}
//                     >
//                       Download as CSV
//                     </button>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       className={classNames(
//                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                         'block px-4 py-2 text-sm w-full text-left'
//                       )}
//                     >
//                       Download as PDF
//                     </button>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       className={classNames(
//                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                         'block px-4 py-2 text-sm w-full text-left'
//                       )}
//                     >
//                       Download as Image
//                     </button>
//                   )}
//                 </Menu.Item>
//               </div>
//             </Menu.Items>
//           </Transition>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default ComparisonTable;


// import React, { useEffect, useState,useRef } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import NoDataModal from './NoDataModal';
// import ButtonModal from './ButtonModal';

// const TableFormat= () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams();
//   const tableRef = useRef(null);
//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: { fixture: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <NoDataModal/>;
//   }

//   const uniqueStatTypes = [
//     ...new Set(teamStats.flatMap(team => team.statistics.map(stat => stat.type)))
//   ];
//   const tableDataCSV = [
//     ['Team', ...uniqueStatTypes.map(type => type.toString())], // Header row converted to strings
//     ...teamStats.map(team => [
//       team.team.name,
//       ...uniqueStatTypes.map(type =>
//         (team.statistics.find(stat => stat.type === type)?.value || 'N/A').toString()
//       )
//     ])
//   ];
  
  
  
//   return (
//     <div className="relative overflow-x-hidden top-36 shadow-md sm:rounded-lg mt-8 mx-auto w-11/12">
//         <div className='flex justify-center items-center'>
//           <ButtonModal tableData={tableDataCSV} tableRef={tableRef}/>
//         </div>
        
//       <table  ref={tableRef} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
//         <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Statistic</th>
//             {teamStats.map((team, index) => (
//               <th key={index} scope="col" className="px-6 py-3">
//                 <div className="flex items-center font-bold font-poppins">
//                   <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
//                   {team.team.name}
//                 </div>
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Comparison</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uniqueStatTypes.map((type, index) => (
//             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
//               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
//                 {type}
//               </th>
//               {teamStats.map((team, idx) => (
//                 <td key={idx} className="px-6 py-4">
//                   {team.statistics.find(stat => stat.type === type)?.value || 'N/A'}
//                 </td>
//               ))}
//               <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
//                 {teamStats.length === 2 && (
//                   <div>
//                     <span className={parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) ? "text-green-500" : "text-red-500"}>
//                       {parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                         ? teamStats[0].team.name
//                         : teamStats[1].team.name}
//                     </span>
//                     <img src={
//                         parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                         parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                           ? teamStats[0].team.logo
//                           : teamStats[1].team.logo} 
//                     alt="Team Logo" className="w-6 h-6 ml-2" />
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
   
//   );
// };

// export default TableFormat;


// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import NoDataModal from './NoDataModal';
// import ButtonModal from './ButtonModal';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { toPng } from 'html-to-image';

// const TableFormat = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams();
//   const tableRef = useRef(null);

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: { fixture: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return <NoDataModal />;
//   }

//   const uniqueStatTypes = [
//     ...new Set(teamStats.flatMap(team => team.statistics.map(stat => stat.type)))
//   ];

//   const tableDataCSV = [
//     ['Team', ...uniqueStatTypes], // Header row
//     ...teamStats.map(team => [
//       team.team.name,
//       ...uniqueStatTypes.map(type =>
//         team.statistics.find(stat => stat.type === type)?.value || 'N/A'
//       )
//     ])
//   ];

//   const handlePDFDownload = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['Team', ...uniqueStatTypes]],
//       body: teamStats.map(team => [
//         team.team.name,
//         ...uniqueStatTypes.map(type =>
//           team.statistics.find(stat => stat.type === type)?.value || 'N/A'
//         )
//       ]),
//     });
//     doc.save('table_data.pdf');
//   };

//   const handleImageDownload = () => {
//     toPng(tableRef.current)
//       .then(dataUrl => {
//         const link = document.createElement('a');
//         link.href = dataUrl;
//         link.download = 'table_data.png';
//         link.click();
//       })
//       .catch(err => {
//         console.error('Error generating image:', err);
//       });
//   };

//   return (
//     <div className="relative overflow-x-hidden top-36 shadow-md sm:rounded-lg mt-8 mx-auto w-11/12">
//       <div className='flex justify-center items-center'>
//         <ButtonModal 
//           tableData={tableDataCSV}
//           handlePDFDownload={handlePDFDownload}
//           handleImageDownload={handleImageDownload}
//         />
//       </div>

//       <table ref={tableRef} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Statistic</th>
//             {teamStats.map((team, index) => (
//               <th key={index} scope="col" className="px-6 py-3">
//                 <div className="flex items-center font-bold font-poppins">
//                   <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
//                   {team.team.name}
//                 </div>
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Comparison</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uniqueStatTypes.map((type, index) => (
//             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
//               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
//                 {type}
//               </th>
//               {teamStats.map((team, idx) => (
//                 <td key={idx} className="px-6 py-4">
//                   {team.statistics.find(stat => stat.type === type)?.value || 'N/A'}
//                 </td>
//               ))}
//               <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
//                 {teamStats.length === 2 && (
//                   <div>
//                     <span className={parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) ? "text-green-500" : "text-red-500"}>
//                       {parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                         ? teamStats[0].team.name
//                         : teamStats[1].team.name}
//                     </span>
//                     <img src={
//                         parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                         parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                           ? teamStats[0].team.logo
//                           : teamStats[1].team.logo} 
//                     alt="Team Logo" className="w-6 h-6 ml-2" />
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableFormat;



// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import ButtonModal from './ButtonModal';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { toPng } from 'html-to-image';

// const TableFormat = () => {
//   const [teamStats, setTeamStats] = useState(null);
//   const { id: fixtureId } = useParams();
//   const tableRef = useRef(null);

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
//           {
//             params: { fixture: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );
//         setTeamStats(response.data.response);
//       } catch (error) {
//         console.error('Error fetching statistics:', error);
//       }
//     };
//     fetchStatistics();
//   }, [fixtureId]);

//   if (!teamStats) {
//     return (
//       <div className="spin">
//         <iframe
//           src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
//           title="Loading animation"
//           className="fixed top-0 right-0 h-screen w-screen  z-50 flex justify-center items-center spin"
//         ></iframe>
//       </div>
//     );
//   }
  

//   const uniqueStatTypes = [
//     ...new Set(teamStats.flatMap(team => team.statistics.map(stat => stat.type)))
//   ];

//   const tableDataCSV = [
//     ['Team', ...uniqueStatTypes], // Header row
//     ...teamStats.map(team => [
//       team.team.name,
//       ...uniqueStatTypes.map(type =>
//         team.statistics.find(stat => stat.type === type)?.value || 'N/A'
//       )
//     ])
//   ];



  


  
//   const handlePDFDownload = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['Team', ...uniqueStatTypes]],
//       body: teamStats.map(team => [
//         team.team.name,
//         ...uniqueStatTypes.map(type =>
//           team.statistics.find(stat => stat.type === type)?.value || 'N/A'
//         )
//       ]),
//     });
//     doc.save('table_data.pdf');
//   };

//   const handleImageDownload = () => {
//     toPng(tableRef.current)
//       .then(dataUrl => {
//         const link = document.createElement('a');
//         link.href = dataUrl;
//         link.download = 'table_data.png';
//         link.click();
//       })
//       .catch(err => {
//         console.error('Error generating image:', err);
//       });
//   };

//   return (
//     <div className="relative overflow-x-hidden top-36 shadow-md sm:rounded-lg mt-8 mx-auto w-11/12">
//       <div className='flex justify-center items-center'>
//         <ButtonModal 
//           tableData={tableDataCSV}
//           handlePDFDownload={handlePDFDownload}
//           handleImageDownload={handleImageDownload}
//         />
//       </div>

//       <table ref={tableRef} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Statistic</th>
//             {teamStats.map((team, index) => (
//               <th key={index} scope="col" className="px-6 py-3">
//                 <div className="flex items-center font-bold font-poppins">
//                   <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
//                   {team.team.name}
//                 </div>
//               </th>
//             ))}
//             <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Comparison</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uniqueStatTypes.map((type, index) => (
//             <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
//               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
//                 {type}
//               </th>
//               {teamStats.map((team, idx) => (
//                 <td key={idx} className="px-6 py-4">
//                   {team.statistics.find(stat => stat.type === type)?.value || 'N/A'}
//                 </td>
//               ))}
//               <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
//                 {teamStats.length === 2 && (
//                   <div>
//                     <span className={parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) ? "text-green-500" : "text-red-500"}>
//                       {parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                       parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                         ? teamStats[0].team.name
//                         : teamStats[1].team.name}
//                     </span>
//                     <img src={
//                         parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
//                         parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
//                           ? teamStats[0].team.logo
//                           : teamStats[1].team.logo} 
//                     alt="Team Logo" className="w-6 h-6 ml-2" />
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableFormat;


import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ButtonModal from './ButtonModal';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toPng } from 'html-to-image';

const TableFormat = () => {
  const [teamStats, setTeamStats] = useState(null);
  const { id: fixtureId } = useParams();
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
          {
            params: { fixture: fixtureId },
            headers: {
              'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          }
        );
        setTeamStats(response.data.response);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchStatistics();
  }, [fixtureId]);

  if (!teamStats) {
    return (
      <div className="spin">
        <iframe
          src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
          title="Loading animation"
          className="fixed top-0 right-0 h-screen w-screen  z-50 flex justify-center items-center spin"
        ></iframe>
      </div>
    );
  }

  const uniqueStatTypes = [
    ...new Set(teamStats.flatMap(team => team.statistics.map(stat => stat.type)))
  ];

  const tableDataCSV = [
    ['Team', ...uniqueStatTypes], // Header row
    ...teamStats.map(team => [
      team.team.name,
      ...uniqueStatTypes.map(type =>
        team.statistics.find(stat => stat.type === type)?.value || 'N/A'
      )
    ])
  ];

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Team', ...uniqueStatTypes]],
      body: teamStats.map(team => [
        team.team.name,
        ...uniqueStatTypes.map(type =>
          team.statistics.find(stat => stat.type === type)?.value || 'N/A'
        )
      ]),
    });
    doc.save('table_data.pdf');
  };

  const handleImageDownload = () => {
    toPng(tableRef.current)
      .then(dataUrl => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'table_data.png';
        link.click();
      })
      .catch(err => {
        console.error('Error generating image:', err);
      });
  };

  return (
    <div className="relative overflow-x-hidden top-36 shadow-md sm:rounded-lg mt-8 mx-auto w-11/12">
      <div className="flex justify-center items-center">
        <ButtonModal
          tableData={tableDataCSV}
          handlePDFDownload={handlePDFDownload}
          handleImageDownload={handleImageDownload}
        />
      </div>

      <div className="overflow-x-auto mt-4">
        <div className="overflow-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200 " style={{ overflowX: 'auto' }}>
          <table
            ref={tableRef}
            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-700 "
          >
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 sm:px-6 sm:py-3 bg-gray-50 dark:bg-gray-800">Statistic</th>
                {teamStats.map((team, index) => (
                  <th key={index} className="px-6 py-3">
                    <div className="flex items-center font-bold font-poppins">
                      <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
                      {team.team.name}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 sm:px-6 sm:py-3 bg-gray-50 dark:bg-gray-800">Comparison</th>
              </tr>
            </thead>
            <tbody>
              {uniqueStatTypes.map((type, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-4 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {type}
                  </th>
                  {teamStats.map((team, idx) => (
                    <td key={idx} className="px-6 py-4">
                      {team.statistics.find(stat => stat.type === type)?.value || 'N/A'}
                    </td>
                  ))}
                  {/* <td className="px-4 py-4 sm:px-6 sm:py-4 bg-gray-50 dark:bg-gray-800">
                    {teamStats.length === 2 && (
                      <div>
                        <span
                          className={
                            parseFloat(
                              teamStats[0].statistics.find(stat => stat.type === type)?.value
                            ) >
                            parseFloat(
                              teamStats[1].statistics.find(stat => stat.type === type)?.value
                            )
                              ? 'text-green-500'
                              : 'text-red-500'
                          }
                        >
                          {parseFloat(
                            teamStats[0].statistics.find(stat => stat.type === type)?.value
                          ) >
                          parseFloat(
                            teamStats[1].statistics.find(stat => stat.type === type)?.value
                          )
                            ? teamStats[0].team.name
                            : teamStats[1].team.name}
                        </span>
                        <img
                          src={
                            parseFloat(
                              teamStats[0].statistics.find(stat => stat.type === type)?.value
                            ) >
                            parseFloat(
                              teamStats[1].statistics.find(stat => stat.type === type)?.value
                            )
                              ? teamStats[0].team.logo
                              : teamStats[1].team.logo
                          }
                          alt="Team Logo"
                          className="w-6 h-6 ml-2"
                        />
                      </div>
                    )}
                  </td> */}
                  {/* <td className="px-4 py-4 sm:px-6 sm:py-4 bg-gray-50 dark:bg-gray-800">
  {teamStats.length === 2 && (
    <div>
      <span
        className={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? 'text-green-500'
            : 'text-red-500'
        }
      >
        {parseFloat(
          teamStats[0].statistics.find(stat => stat.type === type)?.value
        ) >
        parseFloat(
          teamStats[1].statistics.find(stat => stat.type === type)?.value
        )
          ? `${teamStats[0].team.name} (+${parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)})`
          : `${teamStats[1].team.name} (+${parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value)})`}
      </span>
      <img
        src={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? teamStats[0].team.logo
            : teamStats[1].team.logo
        }
        alt="Team Logo"
        className="w-6 h-6 ml-2"
      />
    </div>
  )}
</td> */}

{/* <td className="px-4 py-4 sm:px-6 sm:py-4 bg-gray-50 dark:bg-gray-800">
  {teamStats.length === 2 && (
    <div>
      <span
        className={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? 'text-green-500'
            : 'text-red-500'
        }
      >
        {isNaN(parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value)) || isNaN(parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)) ? 
          'N/A' 
          : 
          (parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
          parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
            ? `${teamStats[0].team.name} (+${parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)})`
            : `${teamStats[1].team.name} (+${parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value)})`)
        }
      </span>
      <img
        src={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? teamStats[0].team.logo
            : teamStats[1].team.logo
        }
        alt="Team Logo"
        className="w-6 h-6 ml-2"
      />
    </div>
  )}
</td> */}

<td className="px-4 py-4 sm:px-6 sm:py-4 bg-gray-50 dark:bg-gray-800">
  {teamStats.length === 2 && (
    <div>
      <span
        className={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? 'text-green-500'
            : 'text-red-500'
        }
      >
        {isNaN(parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value)) || isNaN(parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)) ? 
          'N/A' 
          : 
          (parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) >
          parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)
            ? `${teamStats[0].team.name} (+${parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value)})`
            : `${teamStats[1].team.name} (+${parseFloat(teamStats[1].statistics.find(stat => stat.type === type)?.value) - parseFloat(teamStats[0].statistics.find(stat => stat.type === type)?.value)})`)
        }
      </span>
      <img
        src={
          parseFloat(
            teamStats[0].statistics.find(stat => stat.type === type)?.value
          ) >
          parseFloat(
            teamStats[1].statistics.find(stat => stat.type === type)?.value
          )
            ? teamStats[0].team.logo
            : teamStats[1].team.logo
        }
        alt="Team Logo"
        className="w-6 h-6 ml-2"
      />
     
    </div>
  )}
</td>



                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableFormat;
