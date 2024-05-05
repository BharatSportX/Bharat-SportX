import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import './LeagueDetails.css';

const LeagueDetails = () => {
  const { id } = useParams();
  const [leagueData, setLeagueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [selectedSeasonYear, setSelectedSeasonYear] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [year,setYear]=useState(null);
  

  useEffect(() => {
    const fetchLeagueData = async () => {
      try {
        const response = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/leagues`, {
          params: {
            type: 'league',
            id,
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
     

        const { seasons, league } = response.data.response[0]; // Destructuring to get league
        const leagueSessionData = seasons.map(session => ({ year: session.year }));
        setLeagueData(leagueSessionData);
        setYear(league); // Set year to league
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeagueData();
  }, [id]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
          params: {
            season: selectedSeasonYear || new Date().getFullYear().toString(),
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
  }, [id, selectedSeasonYear]);


  useEffect(() => {
    // Reset selected date when selectedSeasonYear changes
    setSelectedDate(null);
  }, [selectedSeasonYear]);

  const handleShowFixture = async (year) => {
    setSelectedSeasonYear(year);
    setLoading(true); // Set loading to true when fetching data
  };

  const handleOpenModal = (fixture) => {
    if (!fixture || !fixture.teams || !fixture.fixture || !fixture.fixture.status) {
      // If fixture or its necessary properties are undefined, handle error gracefully
      console.error("Invalid fixture object");
      return;
    }

    // Destructuring fixtureDetails to get required properties
    const { teams, fixture: fixtureDetails, goals, score } = fixture;

    const homeTeamName = teams.home ? teams.home.name : "Unknown";
    const awayTeamName = teams.away ? teams.away.name : "Unknown";

    const goalsHome = goals ? goals.home : 0;
    const goalsAway = goals ? goals.away : 0;
    const shortStatus = fixtureDetails.status.short || "Not available";
    const venueName = fixtureDetails.venue?.name || "Not available";
    const cityName = fixtureDetails.venue?.city || "Not available";
    const referee = fixtureDetails.referee || "Not specified";
    const elapsed = fixtureDetails.status?.elapsed || "Not available";
    const firstPeriod = fixtureDetails.periods?.first || "Not available";
    const secondPeriod = fixtureDetails.periods?.second || "Not available";
    const winner = teams.home?.winner ? homeTeamName : teams.away?.winner ? awayTeamName : "NA";

    const extraTimeScoreHome = score.extratime?.home || 0;
    const extraTimeScoreAway = score.extratime?.away || 0;
    const penaltyScoreHome = score.penalty?.home || 0;
    const penaltyScoreAway = score.penalty?.away || 0;

    const modalContent = (
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-auto">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Fixture Details
            </h3>
            <div className="mt-2 flex justify-between">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12 rounded-full mb-2" src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
                <p className="text-sm">{fixture.teams.home.name}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl">{goalsHome} - {goalsAway}</p>
                <p className="text-xs">{shortStatus}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12 rounded-full mb-2" src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
                <p className="text-sm">{fixture.teams.away.name}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs">Venue: {venueName}</p>
              <p className="text-xs">City: {cityName}</p>
              <p className="text-xs">Referee: {referee}</p>
              <p className="text-xs">Elapsed: {elapsed}</p>
              <p className="text-xs">First Period: {firstPeriod}</p>
              <p className="text-xs">Second Period: {secondPeriod}</p>
              <p className="text-xs">Winner: {winner}</p>
              <p className="text-xs">Extra-Time Score: {extraTimeScoreHome} - {extraTimeScoreAway}</p>
              <p className="text-xs">Penalty Score: {penaltyScoreHome} - {penaltyScoreAway}</p>
            </div>
          </div>
        </div>
      </div>
    );
    setModalContent(modalContent);
    setShowModal(true);
  };

  const sortedFixtures = [...fixtures].sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

  const filteredFixtures = selectedDate ? sortedFixtures.filter(fixture => {
    const fixtureDate = new Date(fixture.fixture.date);
    return fixtureDate.toDateString() === selectedDate.toDateString();
  }) : sortedFixtures;
  
  return (
    <div className="container mx-auto py-8">
      {loading && <Spinner />}
      <div className="league-details">
        <h1 className="text-3xl font-bold mb-4">{year && year.name}</h1> {/* Displaying league name */}
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
        </div>

        <div className="flex flex-wrap justify-center">
          {leagueData.map(session => (
            <div key={session.year} className="m-2">
              <button onClick={() => handleShowFixture(session.year)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Season {session.year}</button>
            </div>
          ))}
        </div>

        {!loading && (
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input 
              type="date" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Select date"
              value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
          </div>
        )}
      </div>
      <div className="fixtures-container">

      <div  className=" mt-3 font-semibold"> {selectedSeasonYear}</div>
      {filteredFixtures.length > 0 ? (
  filteredFixtures.map((fixture, index) => (
    
    <div key={fixture.fixture.id} className="fixture-card bg-gray-200 rounded-lg shadow-md p-4 my-4">
    
      <p className={`font-semibold ${selectedSeasonYear ? 'text-blue-500' : ''}`}> {index + 1}</p>
      <p className="font-semibold 'text-blue-500" > {fixture.league.country}</p>

      <div className="flex flex-col md:flex-row md:justify-between items-center mt-2">
        <div className="team flex items-center">
          <img className="w-8 h-8 rounded-full" src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
          <p className="ml-2">{fixture.teams.home.name}</p>
        </div>
        <div className="time-date flex flex-col md:flex-row">
          <p>{new Date(fixture.fixture.date).toLocaleDateString()}</p>
          <p>{new Date(fixture.fixture.date).toLocaleTimeString()}</p>
        </div>
        <div className="comparison hidden md:block">
          <p>VS</p>
        </div>
        <div className="team flex items-center">
          <img className="w-8 h-8 rounded-full" src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
          <p className="ml-2">{fixture.teams.away.name}</p>
        </div>
        <div>
          <h1>Goal:</h1>
          <p>{fixture.goals.home} - {fixture.goals.away}</p>
          <p>Short: {fixture.fixture.status.short}</p>
        </div>
        <button onClick={() => handleOpenModal(fixture)} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded flex items-center gap-2 mt-4 md:mt-0">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M8.707 15.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L13.586 10 8.707 14.879a1 1 0 0 0 0 1.414z" />
          </svg>
        </button>
      </div>
    </div>
  ))
) : (
  <div className="text-center font-semibold text-gray-600 mt-8">
    No match Found
  </div>
)}

      </div>
      <div id="static-modal" data-modal-backdrop="static" className={`fixed z-50 inset-0 overflow-y-auto overflow-x-hidden ${showModal ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            {modalContent}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
