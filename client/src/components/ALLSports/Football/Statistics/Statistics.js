import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Statistics() {
  const [StatData, SetStatData] = useState(null)
  const { id } = useParams()
  const {fixture}=useParams()
  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics", {
        params: {
          fixture: fixture,
          id: id
        }

      }

      )
      SetStatData(response.response[0].data)
    }
    fetchStatistics()
  }, [id, fixture])
  return (
    <div className='container '>

      <div className="bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3" role="alert">
        <strong className="font-bold">Added Statistics Soon...</strong>
        <span className="block sm:inline"> Stay Tuned</span>
      </div>
      <div>
        <h1> {StatData.statistics.type.value}</h1>
      </div>

    </div>
  );
}
