
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import './CupPageDetails.css';

const CupPageDetails = () => {
  const { id } = useParams();
  const [cupData, setCupData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [fixtures, setFixtures] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [league, setLeague] = useState(null);
  const [selectedSessionYear, setSelectedSessionYear] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

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

  const handleOpenModal = (fixture) => {
    if (!fixture || !fixture.teams || !fixture.fixture || !fixture.fixture.status) {
      // If fixture or its necessary properties are undefined, handle error gracefully
      console.error("Invalid fixture object");
      return;
    }
  
    const homeTeamName = fixture.teams.home ? fixture.teams.home.name : "Unknown";
    const awayTeamName = fixture.teams.away ? fixture.teams.away.name : "Unknown";
    const goalsHome = fixture.goals ? fixture.goals.home : 0;
    const goalsAway = fixture.goals ? fixture.goals.away : 0;
    const shortStatus = fixture.fixture.status.short || "Not available";
    const venueName = fixture.fixture.venue?.name || "Not available";
    const cityName = fixture.fixture.venue?.city || "Not available";
    const referee = fixture.fixture.referee || "Not specified";
    const elapsed = fixture.fixture.status?.elapsed || "Not available";
    const firstPeriod = fixture.fixture.periods?.first || "Not available";
    const secondPeriod = fixture.fixture.periods?.second || "Not available";
    const winner = fixture.teams.home?.winner ? homeTeamName : fixture.teams.away?.winner ? awayTeamName : "Draw";
    const extraTimeScoreHome = fixture.score.extratime?.home || 0;
    const extraTimeScoreAway = fixture.score.extratime?.away || 0;
    const penaltyScoreHome = fixture.score.penalty?.home || 0;
    const penaltyScoreAway = fixture.score.penalty?.away || 0;
  
    const modalContent = (
      <div>
        <p>{homeTeamName} vs {awayTeamName}</p>
        <p>Goals: {goalsHome} - {goalsAway}</p>
        <p>Full-Time: {shortStatus}</p>
        <p>Venue: {venueName}</p>
        <p>City: {cityName}</p>
        <p>Referee: {referee}</p>
        <p>Elapsed: {elapsed}</p>
        <p>First Period: {firstPeriod}</p>
        <p>Second Period: {secondPeriod}</p>
        <p>Winner: {winner}</p>
        <p>Extra-Time Score: {extraTimeScoreHome} - {extraTimeScoreAway}</p>
        <p>Penalty Score: {penaltyScoreHome} - {penaltyScoreAway}</p>
      </div>
    );
    setModalContent(modalContent);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto py-8">
      {loading && <Spinner />}
      <div className="cup-details">
        <h1 className="text-3xl font-bold mb-4">{league?.name}</h1>
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Alert!</span> The page is under construction. Thank you for your patience!
        </div>
        <div className="flex flex-wrap justify-center">
          {cupData.map(session => (
            <div key={session.year} className="m-2">
              <button onClick={() => handleShowFixture(session.year)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Session {session.year}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="fixtures-container">
        <p className="font-semibold">{selectedSessionYear}</p>
        {sortedFixtures.map((fixture, index) => (
          <div key={fixture.fixture.id} className="fixture-card bg-gray-200 rounded-lg shadow-md p-4 my-4">
            <p className="font-semibold">Serial No {index + 1}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="team flex items-center">
                <img className="w-8 h-8 rounded-full" src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
                <p className="ml-2">{fixture.teams.home.name}</p>
              </div>
              <div className="time-date">
                <p>{new Date(fixture.fixture.date).toLocaleDateString()}</p>
                <p>{new Date(fixture.fixture.date).toLocaleTimeString()}</p>
              </div>
              <div className="time-date">
                <p>VS</p>
              </div>
              <div className="team flex items-center">
                <p className="mr-2">{fixture.teams.away.name}</p>
                <img className="w-8 h-8 rounded-full" src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
              </div>
              <button onClick={() => handleOpenModal(fixture)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
            </div>
            {/* Display goal status and short status (FT) */}
            <div>
            Goal:{fixture.goals.home} - {fixture.goals.away}
              <p>Short : {fixture.fixture.status.short}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Fixture Details
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{modalContent}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CupPageDetails;
