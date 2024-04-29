import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import './CupPageDetails.css';

const CupPageDetails = () => {
  const { id } = useParams();
  const [cupData, setCupData] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [fixtures, setFixtures] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [league, setLeague] = useState(null);
  const [selectedSessionYear, setSelectedSessionYear] = useState(null);

  useEffect(() => {
    const fetchCupData = async () => {
      try {
        const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
          params: {
            type: 'Cup',
            id: id,
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });

        const cupSessionData = response.data.response[0].seasons.map(session => ({
          year: session.year,
        }));
        setLoading(true)
        setCupData(cupSessionData);
        setLeague(response.data.response[0].league);

        setLoading(false); // Set loading to false after data is fetched
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
            season: selectedSessionYear || new Date().getFullYear().toString(),
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
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if there's an error
      }
    }

    fetchFixtures();
  }, [id, selectedSessionYear]);

  const handleShowFixture = async (year) => {
    setSelectedSessionYear(year);
    setLoading(true); // Set loading to true when fetching data
  };

  const filteredFixtures = selectedDate ? fixtures.filter(fixture => fixture.fixture.date.includes(selectedDate)) : fixtures;

  // Sort fixtures by date
  const sortedFixtures = filteredFixtures.sort((a, b) => {
    return new Date(a.fixture.date) - new Date(b.fixture.date);
  });

  return (
    <div className="container mx-auto py-8">
      {loading && <Spinner />} {/* Render spinner when loading */}
      <div className="cup-details">
        <h1 className="text-3xl font-bold mb-4">{league?.name}</h1>
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
        </div>
        <div className="flex flex-wrap justify-center">
          {cupData.map(session => (
            <div key={session.year} className="m-2">
              <button onClick={() => handleShowFixture(session.year)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{session.year}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="fixtures-container">
        {sortedFixtures.map((fixture, index) => (
          <div key={fixture.fixture.id} className="fixture-card bg-gray-200 rounded-lg shadow-md p-4 my-4">
            <p className="font-semibold">Serial No {index + 1}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="team flex items-center">
                <img className="team-logo w-12 h-12 mr-2" src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
                <p className="team-name">{fixture.teams.home.name}</p>
              </div>
              <div className="hidden md:flex items-center" style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "18px"
              }}>VS</div> {/* Hide on mobile, show on tablet and larger screens */}
              <div className="vs flex items-center md:hidden" style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "14px"
              }}>VS</div>
              <div className="team flex items-center">
                <img className="team-logo w-12 h-12 mr-2" src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
                <p className="team-name">{fixture.teams.away.name}</p>
              </div>
            </div>
            <div className="goals-info mt-2">
              <p>Status: {fixture.fixture.status?.long||"Not available"}</p>
              <p>Short Status: {fixture.fixture.status?.short||"Not available"}</p>
              <p>Elapsed: {fixture.fixture.status?.elapsed||"Not available"}</p>
              <p>Venue: {fixture.fixture.venue?.name||"Not available"}</p>
              <p>City: {fixture.fixture.venue?.city||"Not available"}</p>
              <p>Referee: {fixture.fixture.referee || 'Not specified'}</p>
              <p>First Period: {fixture.fixture.periods?.first||"Not available"}</p>
              <p>Second Period: {fixture.fixture.periods?.second||"Not available"}</p>
              <p>Goals: {fixture.goals.home} - {fixture.goals.away||"Not available"}</p>
              <p>Winner: {fixture.teams.home.winner ? fixture.teams.home.name : fixture.teams.away.winner ? fixture.teams.away.name : 'Draw'||"Not available"}</p>
              <p>Full-Time Score: {fixture.score.fulltime.home} - {fixture.score.fulltime.away||"Not available"}</p>
              <p>Extra-Time Score: {fixture.score.extratime.home} - {fixture.score.extratime.away||"Not available"}</p>
              <p>Penalty Score: {fixture.score.penalty.home} - {fixture.score.penalty.away||"Not available"}</p>
            </div>



          </div>
        ))}
      </div>
    </div>
  );
};

export default CupPageDetails;
