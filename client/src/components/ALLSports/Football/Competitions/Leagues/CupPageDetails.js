
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CupPageDetails() {
  const { id } = useParams();
  const [cupData, setCupData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setCupData(response.data.response[0]); 
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
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">{cupData.league.name}</h1>
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium">Alert!</span> The page is under Construction.Thank you for your Patient!!.
            </div>

        </div>
      )}
    </div>
  );
}
