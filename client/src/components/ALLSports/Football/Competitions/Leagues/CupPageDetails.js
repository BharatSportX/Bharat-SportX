import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CupPageDetails = () => {
  const { id } = useParams();
  const [cupData, setCupData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    const fetchCupData = async () => {
      try {
        const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
          params: {
            type: 'Cup',
            id: id
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });

        const cupSessionData = response.data.response[0].seasons.map(session => ({
          year: session.year,
          start: session.start,
          end: session.end,
          coverage: session.coverage
        }));

        setCupData(cupSessionData);
        setLeague(response.data.response[0].league);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCupData();
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div>Loading...</div>
      ) : cupData ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{league.name}</h1>
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
          </div>
          {cupData.map(session => (
            <div key={session.year} className="year-card">
              <h2 className="text-xl font-semibold mb-2">{session.year}</h2>
              <p>Start Date: {session.start}</p>
              <p>End Date: {session.end}</p>
              <p>Fixtures: {session.coverage.fixtures ? 'Available' : 'Unavailable'}</p>
              <p>Standings: {session.coverage.standings ? 'Available' : 'Unavailable'}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No cup data available</div>
      )}
    </div>
  );
};

export default CupPageDetails;
