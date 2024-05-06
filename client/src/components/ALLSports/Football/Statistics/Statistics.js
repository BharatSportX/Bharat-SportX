import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function StatisticsPage() {
  const [statData, setStatData] = useState(null);
  const { id: fixtureId } = useParams(); // Extract fixture id from URL params

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
          params: {
            fixture: fixtureId
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        console.log("Statistics data:", response.data); // Log the data received from the API
        console.log("Fixture ID:", fixtureId);

        // Check if there's any statistics available
        if (response.data.results > 0) {
          setStatData(response.data.response[0].statistics);
        } else {
          setStatData([]); // No statistics available
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };
    fetchStatistics();
  }, [fixtureId]);
  

  return (
    <div className='container'>
      {/* Notification Banner */}
      <div className="bg-yellow-200 text-yellow-800 p-4 mb-4 mt-3">
        Statistics chart will be added soon! Stay Tuned with us!!
      </div>

      {statData !== null ? (
        <div>
          <h1>Statistics</h1>
          <div>Fixture ID: {fixtureId}</div> {/* Display fixtureId instead of fixture */}
  
          <ul>
            {statData.length > 0 ? (
              statData.map((stat, index) => (
                <li key={index}>
                  <strong>{stat.type}: </strong>{stat.value}
                </li>
              ))
            ) : (
              <li className="bg-red-200 text-red-800 p-2 rounded">No statistics available!</li>
            )}
          </ul>
        </div>
      ) : (
        <div className='bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3' role='alert'>
          <strong className='font-bold'>Loading...</strong>
          <span className='block sm:inline'>Please wait while we fetch the statistics.</span>
        </div>
      )}
    </div>
  );
}
