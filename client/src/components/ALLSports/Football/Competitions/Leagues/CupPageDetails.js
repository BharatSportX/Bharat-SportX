// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const CupPageDetails = () => {
//   const { id } = useParams();
//   const [cupData, setCupData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fixtures, setFixtures] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [league, setLeague] = useState(null);

//   useEffect(() => {
//     const fetchCupData = async () => {
//       try {
//         const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
//           params: {
//             type: 'Cup',
//             id: id,
//             season: "2024",
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });

//         const cupSessionData = response.data.response[0].seasons.map(session => ({
//           year: session.year,
//           start: session.start,
//           end: session.end,
//           coverage: session.coverage
//         }));

//         setCupData(cupSessionData);
//         setLeague(response.data.response[0].league);

//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCupData();
//   }, [id]);

//   useEffect(() => {
//     const fetchFixtures = async () => {
//       try {
//         const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
//           params: {
//             season: "2024",
//             league: id,
//           },
//           headers: {
//             'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//           }
//         });

//         setFixtures(response.data.response);
//       } catch (error) {
//         alert("Error: " + error);
//       }
//     }

//     fetchFixtures();
//   }, [id]);

//   const filteredFixtures = selectedDate ? fixtures.filter(fixture => fixture.fixture.date.includes(selectedDate)) : fixtures;

//   return (
//     <div className="container mx-auto py-8">
//       {loading ? (
//         <div>Loading...</div>
//       ) : cupData ? (
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{league.name}</h1>
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//             <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
//           </div>
//           {cupData.map(session => (
//             <div key={session.year} className="year-card">
//               <h2 className="text-xl font-semibold mb-2">{session.year}</h2>
//               <p>Start Date: {session.start}</p>
//               <p>End Date: {session.end}</p>
//               <p>Fixtures: {session.coverage.fixtures ? 'Available' : 'Unavailable'}</p>
//               <p>Standings: {session.coverage.standings ? 'Available' : 'Unavailable'}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No cup data available</div>
//       )}

//       <div className="fixtures-container">
        
//         <div className="date-panel">
//           {/* Add your date selection UI here */}
//         </div>
//         {filteredFixtures.map(fixture => (
//           <div key={fixture.fixture.id} className="fixture-card">
//           <p> Home</p>
//           <p>{fixture.teams.home.name}</p>
//             <div className="team-logo">
//               <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
//             </div>
//             <p> Away</p>
//             <p>{fixture.teams.away.name}</p>
//             <div className="team-logo">
//               <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
//             </div>
           
//             <div className="goals-info">
//               <p>Goals: {fixture.goals.home} - {fixture.goals.away}</p>
//               <p>Winner: {fixture.teams.home.winner ? fixture.teams.home.name : fixture.teams.away.winner ? fixture.teams.away.name : 'Draw'}</p>
//               <p>Full-Time Score: {fixture.score.fulltime.home} - {fixture.score.fulltime.away}</p>
//               <p>Extra-Time Score: {fixture.score.extratime.home} - {fixture.score.extratime.away}</p>
//               <p>Penalty Score: {fixture.score.penalty.home} - {fixture.score.penalty.away}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CupPageDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CupPageDetails = () => {
  const { id } = useParams();
  const [cupData, setCupData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    const fetchCupData = async () => {
      try {
        const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
          params: {
            type: 'Cup',
            id: id,
            season: "2024",
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

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
          params: {
            season: "2024",
            league: id,
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });

        setFixtures(response.data.response);
      } catch (error) {
        alert("Error: " + error);
      }
    }

    fetchFixtures();
  }, [id]);

  const filteredFixtures = selectedDate ? fixtures.filter(fixture => fixture.fixture.date.includes(selectedDate)) : fixtures;

  // Sort fixtures by date
  const sortedFixtures = filteredFixtures.sort((a, b) => {
    return new Date(a.fixture.date) - new Date(b.fixture.date);
  });

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

      <div className="fixtures-container">
        <div className="date-panel">
          {/* Add your date selection UI here */}
        </div>
        
        {/* Display sorted fixtures */}
        {sortedFixtures.map((fixture, index) => (
  <div key={fixture.fixture.id} className="fixture-card">
    <p> {index + 1}</p>
    <p> Home</p>
    <p>{fixture.teams.home.name}</p>
    <div className="team-logo">
      <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
    </div>
    <p> Away</p>
    <p>{fixture.teams.away.name}</p>
    <div className="team-logo">
      <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
    </div>
   
    <div className="goals-info">
      <p>Goals: {fixture.goals.home} - {fixture.goals.away}</p>
      <p>Winner: {fixture.teams.home.winner ? fixture.teams.home.name : fixture.teams.away.winner ? fixture.teams.away.name : 'Draw'}</p>
      <p>Full-Time Score: {fixture.score.fulltime.home} - {fixture.score.fulltime.away}</p>
      <p>Extra-Time Score: {fixture.score.extratime.home} - {fixture.score.extratime.away}</p>
      <p>Penalty Score: {fixture.score.penalty.home} - {fixture.score.penalty.away}</p>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default CupPageDetails;
