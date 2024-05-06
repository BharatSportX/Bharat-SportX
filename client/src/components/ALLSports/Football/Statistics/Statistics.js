// Statistics.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function StatisticsPage() {
  const [statData, setStatData] = useState(null);
  const { fixture } = useParams(); // Extract fixture from URL params

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
          params: {
            fixture: fixture
          },
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setStatData(response.data.response[0].statistics);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };
    fetchStatistics();
  }, [fixture]);

  return (
    <div className='container'>
      {statData ? (
        <div>
          <h1>Statistics</h1>
          <ul>
            {statData.map((stat, index) => (
              <li key={index}>
                <strong>{stat.type}: </strong>{stat.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3' role='alert'>
          <strong className='font-bold'>No statistics available!</strong>
          <span className='block sm:inline'>Please check back later.</span>
        </div>
      )}
    </div>
  );
}
