import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function StatisticsPage() {
  const [teamStats, setTeamStats] = useState(null);
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
        setTeamStats(response.data.response);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };
    fetchStatistics();
  }, [fixtureId]);

  if (!teamStats) {
    return <div className='loading'>Loading team statistics...</div>;
  }

  // Combine statistics of both teams into a single array
  const combinedStats = [];
  teamStats.forEach(teamStat => {
    const teamName = teamStat.team.name;
    teamStat.statistics.forEach(stat => {
      const existingStatIndex = combinedStats.findIndex(item => item.type === stat.type);
      if (existingStatIndex !== -1) {
        combinedStats[existingStatIndex][teamName] = stat.value;
      } else {
        const newStat = { type: stat.type, [teamName]: stat.value };
        combinedStats.push(newStat);
      }
    });
  });

  return (
    <div className='container'>
      <h1 className='title'>Match Statistics</h1>
      <div className='chart-container'>
        <LineChart width={800} height={400} data={combinedStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          {teamStats.map((teamStat, index) => (
            <Line key={index} type="monotone" dataKey={teamStat.team.name} stroke={index === 0 ? "#8884d8" : "#82ca9d"} animationDuration={1000} />
          ))}
        </LineChart>
      </div>
    </div>
  );
}
