import React, { useState } from 'react';

// Dummy data
const dummyCupData = {
  league: {
    logo: 'https://dummyimage.com/64x64/000/fff.png&text=League+Logo',
    name: 'Dummy League'
  },
  country: {
    name: 'Dummy Country'
  }
};

const dummyMatchDetails = {
  fixture: {
    date: '2023-06-01T17:00:00Z',
    status: {
      short: 'FT'
    }
  },
  teams: {
    home: {
      logo: 'https://dummyimage.com/32x32/000/fff.png&text=Home+Logo',
      name: 'Home Team'
    },
    away: {
      logo: 'https://dummyimage.com/32x32/000/fff.png&text=Away+Logo',
      name: 'Away Team'
    }
  },
  goals: {
    home: 2,
    away: 3
  },
  score: {
    halftime: {
      home: 1,
      away: 1
    },
    fulltime: {
      home: 2,
      away: 3
    },
    extratime: {
      home: null,
      away: null
    },
    penalty: {
      home: null,
      away: null
    }
  }
};

const dummySeasons = [2022, 2023, 2024];
const dummyRounds = ['Round 1', 'Round 2', 'Round 3'];

export default function LiveMatchDetails() {
  const [selectedYear, setSelectedYear] = useState(dummySeasons[0]);
  const [selectedRound, setSelectedRound] = useState(dummyRounds[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('home');
  const [selectedScore, setSelectedScore] = useState('halftime');

  const handleSelectSeason = (year) => {
    setSelectedYear(year);
  };

  const handleSelectRound = (round) => {
    setSelectedRound(round);
  };

  const handleOpenScoreModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  const handleSelectScore = (score) => {
    setSelectedScore(score);
  };

  const convertToIST = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  };

  return (
    <div className="flex items-center justify-stretch w-full text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 p-4 top-40 relative">
        {/* CupDetails Card */}
        <div className="col-span-1 bg-gradient-to-r from-slate-100 to-slate-300 border rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-4">
            <img src={dummyCupData.league.logo} alt="Club" className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-slate-900 to-pink-800 bg-clip-text text-transparent">
                {dummyCupData.league.name}
              </h2>
              <p>{dummyCupData.country.name}</p>
            </div>
          </div>
          <div>
            {/* Season Dropdown */}
            <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-2">
              Select Season:
            </label>
            <select
              id="season"
              onChange={(e) => handleSelectSeason(e.target.value)}
              value={selectedYear}
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm mb-4"
            >
              {dummySeasons.map((season, index) => (
                <option key={index} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>
          <p className="text-sm font-medium text-gray-700">Standings for {selectedYear}</p>
        </div>

        {/* MatchDetails Card */}
        {dummyMatchDetails && (
          <div className="col-span-1 bg-gradient-to-r from-rose-100 to-zinc-100 border rounded-lg p-4 shadow-md">
            <h1 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-blue-700 bg-clip-text text-transparent">
              Featured Match
            </h1>
            <div className="mb-4">
              <p className="text-lg font-semibold">{dummyCupData.league.name}</p>
              <p>{dummyCupData.country.name}</p>
              <p>{selectedRound}</p>

              {/* Dropdown for selecting round */}
              <div>
                <label htmlFor="round" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Round:
                </label>
                <select
                  id="round"
                  name="round"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm mb-4"
                  value={selectedRound}
                  onChange={(e) => handleSelectRound(e.target.value)}
                >
                  {dummyRounds.map((round, index) => (
                    <option key={index} value={round}>
                      {round}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-4 bg-gradient-to-r from-brown-300 via-white to-gray-300 rounded-lg shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:to-black w-full md:w-auto h-auto md:h-16 mb-4">
                <p className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-300 text-center md:text-left">
                  Date: {convertToIST(dummyMatchDetails.fixture.date)}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <img src={dummyMatchDetails.teams.home.logo} alt="Home Team Logo" className="w-8 h-8 mr-2" />
                  <span className="mr-2">{dummyMatchDetails.teams.home.name}</span>
                </div>
                <div className="flex items-center">
                  <span className={`mr-2 ${dummyMatchDetails.goals.home > dummyMatchDetails.goals.away ? 'font-bold text-lg' : ''}`}>
                    {dummyMatchDetails.goals.home}
                  </span>
                  <span className="mr-2">Vs</span>
                  <span className={`mr-2 ${dummyMatchDetails.goals.away > dummyMatchDetails.goals.home ? 'font-bold text-lg' : ''}`}>
                    {dummyMatchDetails.goals.away}
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={dummyMatchDetails.teams.away.logo} alt="Away Team Logo" className="w-8 h-8 mr-2" />
                  <span>{dummyMatchDetails.teams.away.name}</span>
                </div>
              </div>
              <div className="text-gray-500 font-sans text-xl font-bold">Status: {dummyMatchDetails.fixture.status.short}</div>
            </div>

            {/* Main div for score */}
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={handleOpenScoreModal}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Score Card
              </span>
            </button>
          </div>
        )}

        {/* Additional Card */}
        <div className="col-span-1 bg-gradient-to-r from-rose-100 to-zinc-100 border rounded-lg p-4 shadow-md">
          <h1 className="text-xl font-bold mb-4">Additional Card</h1>
          <p>Content for the additional card goes here.</p>
        </div>
      </div>

      {/* Modal for Score Card */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-blue-300 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-center">Score Card</h2>
            <div className="flex items-center justify-center mb-4 space-x-4">
              <div
                className={`flex flex-col items-center cursor-pointer p-3 ${selectedTeam === 'home' ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleSelectTeam('home')}
              >
                <img src={dummyMatchDetails.teams.home.logo} alt="Home Team Logo" className="w-14 h-auto" />
              </div>
              <div
                className={`flex flex-col items-center cursor-pointer p-3 ${selectedTeam === 'away' ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleSelectTeam('away')}
              >
                <img src={dummyMatchDetails.teams.away.logo} alt="Away Team Logo" className="w-16 h-auto" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center mb-4 space-x-4">
              <div
                className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'halftime' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectScore('halftime')}
              >
                <h1>Halftime</h1>
              </div>
              <div
                className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'fulltime' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectScore('fulltime')}
              >
                <h2>Full time</h2>
              </div>
              <div
                className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'extratime' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectScore('extratime')}
              >
                <h2>Extra time</h2>
              </div>
              <div
                className={`cursor-pointer border-b-4 p-3 transition duration-300 ${selectedScore === 'penalty' ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectScore('penalty')}
              >
                <h2>Penalty</h2>
              </div>
            </div>

            <div className="overflow-x-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(${selectedTeam === 'home' ? '0' : '-100%'})` }}>
                {/* Home team details */}
                <div className="min-w-full">
                  <h3 className="text-center text-lg font-bold mb-2 underline">{dummyMatchDetails.teams.home.name} Details</h3>
                  {selectedScore === 'halftime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Halftime Score: {dummyMatchDetails.score.halftime.home}</p>
                    </>
                  )}
                  {selectedScore === 'fulltime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Fulltime Score: {dummyMatchDetails.score.fulltime.home}</p>
                    </>
                  )}
                  {selectedScore === 'extratime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Extra Time Score: {dummyMatchDetails.score.extratime.home !== null ? dummyMatchDetails.score.extratime.home : '0'}</p>
                    </>
                  )}
                  {selectedScore === 'penalty' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Penalty Score: {dummyMatchDetails.score.penalty.home !== null ? dummyMatchDetails.score.penalty.home : '0'}</p>
                    </>
                  )}
                </div>
                {/* Away team details */}
                <div className="min-w-full">
                  <h3 className="text-center text-lg font-bold mb-2 underline">{dummyMatchDetails.teams.away.name} Details</h3>
                  {selectedScore === 'halftime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Halftime Score: {dummyMatchDetails.score.halftime.away}</p>
                    </>
                  )}
                  {selectedScore === 'fulltime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Fulltime Score: {dummyMatchDetails.score.fulltime.away}</p>
                    </>
                  )}
                  {selectedScore === 'extratime' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Extra Time Score: {dummyMatchDetails.score.extratime.away !== null ? dummyMatchDetails.score.extratime.away : '0'}</p>
                    </>
                  )}
                  {selectedScore === 'penalty' && (
                    <>
                      <p className='mt-3 lg:mt-0'>Penalty Score: {dummyMatchDetails.score.penalty.away !== null ? dummyMatchDetails.score.penalty.away : '0'}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                className="text-white mt-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleOpenScoreModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
