import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setLeagues(response.data.response);
        // console.log(response.data.response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Leagues</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
      " >
        {leagues.map(league => (
          <div
            key={league.league.id}
            className="bg-yellow rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out"
          //   data-aos="fade-up"
          // data-aos-duration="3000"
          >
            <img
              src={league.league.logo}
              alt={league.league.name}
              className="w-20 h-auto mb-4 mx-auto"
              onError={(e) => { e.target.src = ''; e.target.alt = 'Image not available'; }}
            />
            <h2 className="text-xl font-semibold">{league.league.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
