






import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ButtonModal from './ButtonModal';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toPng } from 'html-to-image';
import { useNavigate } from 'react-router-dom';

const TableFormat = () => {
  const [teamStats, setTeamStats] = useState(null);
  const { id: fixtureId } = useParams();
  const tableRef = useRef(null);
const navigate= useNavigate()
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

      <div className="flex justify-start items-start mt-3 ml-2">
        
      <button class="relative inline-flex items-center justify-center p-0.5  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      onClick={()=>{
        navigate(`/football/league/world-cup/team-statistics/${fixtureId}`);
      }}>
          <span class="relative px-5 py-2.5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See Team Statitics
          </span>
        </button>
      </div>

       <div className="overflow-x-auto mt-4">
        <div className="overflow-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200 " style={{ overflowX: 'auto' }}>
          <table
            ref={tableRef}
            className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-700  "
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
