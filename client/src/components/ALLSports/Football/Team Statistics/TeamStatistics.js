// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const TeamStatistics = () => {
//   const [teamDetails, setTeamDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id: fixtureId } = useParams();

//   useEffect(() => {
//     const fetchFixtureData = async () => {
//       try {
//         const fixtureResponse = await axios.get(
//           'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//           {
//             params: { id: fixtureId },
//             headers: {
//               'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
//               'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//             }
//           }
//         );

//         const fixtureData = fixtureResponse.data.response[0];

//         console.log('Fixture Data:', fixtureData);

//         if (!fixtureData || !fixtureData.league || !fixtureData.league.id || !fixtureData.league.season || !fixtureData.fixture || !fixtureData.fixture.date || !fixtureData.fixture.id || !fixtureData.teams || !fixtureData.teams.home || !fixtureData.teams.home.id || !fixtureData.teams.away || !fixtureData.teams.away.id) {
//           console.error('Invalid fixture data structure:', fixtureData);
//           setLoading(false);
//           return;
//         }

//     const fixtureDate = fixtureData.fixture.date;
// const leagueId = fixtureData.league.id;
// const season = fixtureData.league.season;
// const homeTeamId = fixtureData.teams.home.id;
// const awayTeamId = fixtureData.teams.away.id;


//         console.log("Date:", fixtureDate);
//         console.log("Home Team ID:", homeTeamId);
//         console.log("Away Team ID:", awayTeamId);
//         console.log("League ID:", leagueId);
//         console.log("Season:", season);

    

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching fixture data:', error);
//         setLoading(false);
//       }
//     };

//     fetchFixtureData();
//   }, [fixtureId]);

//   if (loading) {
//     return (
//       <div className="spin">
//         <iframe
//           src="https://lottie.host/embed/cd29fa7c-026f-43db-85bb-f7c2595f0bca/6CVeJY1HpL.json"
//           title="Loading animation"
//           className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center spin"
//         ></iframe>
//       </div>
//     );
//   }

//   if (!teamDetails.length) {
//     return <div>No team statistics available.</div>;
//   }

//   return (
//     <div className="team-details mt-6 p-4 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-center text-xl mb-4">Team Statistics</h2>
//       <div>
        
//       </div>
//     </div>
//   );
// };

// export default TeamStatistics;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TeamStatistics = () => {
  const [teamDetails, setTeamDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fixtureData, setFixtureData] = useState({});
  const { id: fixtureId } = useParams();

  useEffect(() => {
    const fetchFixtureData = async () => {
      try {
        const fixtureResponse = await axios.get(
          'https://api-football-v1.p.rapidapi.com/v3/fixtures',
          {
            params: { id: fixtureId },
            headers: {
              'X-RapidAPI-Key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          }
        );

        const fixtureData = fixtureResponse.data.response[0];

        if (!fixtureData) {
          console.error('Invalid fixture data structure:', fixtureData);
          setLoading(false);
          return;
        }

        const fixtureDate = fixtureData.fixture.date;
        const leagueId = fixtureData.league.id;
        const season = fixtureData.league.season;
        const homeTeamId = fixtureData.teams.home.id;
        const awayTeamId = fixtureData.teams.away.id;


        console.log("Date:", fixtureDate);
        console.log("Home Team ID:", homeTeamId);
        console.log("Away Team ID:", awayTeamId);
        console.log("League ID:", leagueId);
        console.log("Season:", season);

        setFixtureData(fixtureData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fixture data:', error);
        setLoading(false);
      }
    };

    fetchFixtureData();
  }, [fixtureId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative overflow-x-hidden top-40">
      <h2 className="text-center text-2xl font-bold mb-4">Team Statistics</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Fixture Details</h3>
          <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
            <p className="sm:col-span-2">Fixture ID: {fixtureData.fixture?.id}</p>
            <p className="sm:col-span-2">Fixture Date: {fixtureData.fixture?.date}</p>
            <p className="sm:col-span-2">Home Team ID: {fixtureData.teams?.home?.id}</p>
            <p className="sm:col-span-2">Away Team ID: {fixtureData.teams?.away?.id}</p>
            <p className="sm:col-span-2">League ID: {fixtureData.league?.id}</p>
            <p className="sm:col-span-2">Season: {fixtureData.league?.season}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStatistics;
