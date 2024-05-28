

// // {/* 
// // Second Section of the body */}
// //         {/* <div>
// //         Matches clcik on desktp sttsitics,line ups  page open for mobile ststistics option 
// //         by date by group 
// //         by round
// //         </div>

// //         {/* third  Section of the body */}
// //         {/* <div>
// //        events knock out stages

// //         </div>
// //            {/* 4th Section of the body */}
          
   


// // export default CupPageDetails; 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SeasonDropDownlist from './SeasonDropDownlist';

const CupPageDetails = () => {
    const { id } = useParams();
    const [cupData, setCupData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [matchDetails, setMatchDetails] = useState(null);
    const [seasons, setSeasons] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState('home'); // State for selected team
   

const [selectedScore, setSelectedScore] = useState(null); // State for selected score

const handleSelectScore = (score) => {
    setSelectedScore(score);
};


    useEffect(() => {
        const fetchCupDetails = async () => {
            try {
                const res = await axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
                    headers: {
                        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                        'x-rapidapi-key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06'
                    },
                    params: {
                        type: "Cup",
                        id: id
                    }
                });
                const cupData = res.data.response[0];
                setCupData(cupData);
                setSeasons(cupData.seasons);
                const latestSeason = cupData.seasons.sort((a, b) => b.year - a.year)[0];
                setSelectedYear(latestSeason.year);
                fetchMatchDetails(latestSeason.year);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCupDetails();
    }, [id]);

    const fetchMatchDetails = async (season) => {
        try {
            const res = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/fixtures`, {
                headers: {
                    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                    'x-rapidapi-key': '96aaecf1damsh08a26fec449dda1p149914jsn1d8a476e9c06'
                },
                params: {
                    league: id,
                    season: season,
                    round: 'Final'
                }
            });
            setMatchDetails(res.data.response[0]);
        } catch (error) {
            console.error("Error fetching match details: ", error);
        }
    };

    const handleSelectSeason = (year) => {
        setSelectedYear(year);
        fetchMatchDetails(year);
    };

    const handelOpenScoreModal = () => {
        setIsModalOpen(!isModalOpen);
        setSelectedTeam('home'); // Reset to 'home' when the modal is opened
    };

    const handleSelectTeam = (team) => {
        setSelectedTeam(team);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
                <div>
                    <h1 className="text-xl md:text-7xl font-bold flex items-center">
                        L
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
                        </svg>
                        ading 
                    </h1>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cupData) {
        return <div>No data available</div>;
    }

    return (
        <>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-2 relative overflow-x-hidden top-40 p-4">
                {/* CupDetails Card */}
                <div className="col-span-2 sm:col-span-1 sm:mb-4 lg:col-span-2 mr-3 ml-3">
                    <div className="border rounded-lg bg-gradient-to-r from-slate-100 to-slate-300 bg-opacity-75 p-4 flex items-center">
                        <div className="flex-none mr-4 lg:bg-white">
                            <img
                                src={cupData.league.logo}
                                alt="Club"
                                className="w-16 h-16 lg:w-18 lg:w-19 bg-repeat-space"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-slate-900 to-pink-800 bg-clip-text text-transparent">{cupData.league.name}</h2>
                            <p>{cupData.country.name}</p>
                            <div className="inline-flex">
                                <SeasonDropDownlist onSelectSeason={handleSelectSeason} seasons={seasons} selectedYear={selectedYear} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured / Final Score Card */}
                {matchDetails && (
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 mr-3 ml-3 mt-5 md:mt-5 lg:mt-0 bg-gradient-to-r from-rose-100 to-zinc-100 border rounded-lg p-4 shadow-md">
                        <h1 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-blue-700 bg-clip-text text-transparent">Featured Match</h1>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">{cupData.league.name}</p>
                            <p>{cupData.country.name}</p>
                            <p>Final Match</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <img src={matchDetails.teams.home.logo} alt="Home Team Logo" className="w-8 h-8 mr-2" />
                                    <span className="mr-2">{matchDetails.teams.home.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className={`mr-2 ${matchDetails.goals.home > matchDetails.goals.away ? 'font-bold text-lg' : ''}`}>
                                        {matchDetails.goals.home}
                                    </span>
                                    <span className="mr-2 flex justify-center">Vs</span>
                                    <span className={`mr-2 ${matchDetails.goals.away > matchDetails.goals.home ? 'font-bold text-lg' : ''}`}>
                                        {matchDetails.goals.away}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <img src={matchDetails.teams.away.logo} alt="Away Team Logo" className="w-8 h-8 mr-2" />
                                    <span>{matchDetails.teams.away.name}</span>
                                </div>
                            </div>
                            <div className="text-gray-500 font-sans text-xl font-bold">Finished</div>
                        </div>

                        {/* Main div for score */}
                        <button
                            className="relative inline-flex items-center justify-center  mt-5  ml-14 lg:ml-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                            onClick={handelOpenScoreModal}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Score Card
                            </span>
                        </button>
                    </div>
                )}
            </div>

           
           {/* Modal for Score Card */}
{isModalOpen && (
    <div className="fixed inset-0 bg-blue-300 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-center">Score Card</h2>
            <div className="flex items-center justify-center mb-4 space-x-4">
    <div 
        className={`flex flex-col items-center cursor-pointer lg p-3  ${selectedTeam === 'home' ? 'border-b-4 border-blue-500 ' : ''}`} 
        onClick={() => handleSelectTeam('home')}
    >
        <img 
            src={matchDetails.teams.home.logo} 
            alt="Home Team Logo" 
            className="w-14 h-auto"
        />
    </div>
    <div 
        className={`flex flex-col items-center cursor-pointer  lg p-3   ${selectedTeam === 'away' ? 'border-b-4 border-blue-500 ' : ''}`} 
        onClick={() => handleSelectTeam('away')}
    >
        <img 
            src={matchDetails.teams.away.logo} 
            alt="Away Team Logo" 
            className="w-16 h-auto"
        />
    </div>
</div>



            <div className="flex flex-wrap justify-center mb-4 space-x-4">
    <div className={`cursor-pointer border-b-4 lg p-3 transition duration-300 ${selectedScore === 'halftime' ? 'border-blue-500' : ''}`} onClick={() => handleSelectScore('halftime')}>
        <h1>Halftime</h1>
    </div>
    <div className={`cursor-pointer border-b-4  lg p-3 transition duration-300 ${selectedScore === 'fulltime' ? 'border-blue-500' : ''}`} onClick={() => handleSelectScore('fulltime')}>
        <h2>Full time</h2>
    </div>
    <div className={`cursor-pointer  border-b-4    lg p-3 transition duration-300 ${selectedScore === 'extratime' ? 'border-blue-500' : ''}`} onClick={() => handleSelectScore('extratime')}>
        <h2>Extra time</h2>
    </div>
    <div className={`cursor-pointer  border-b-4  lg p-3 transition duration-300 ${selectedScore === 'penalty' ? 'border-blue-500' : ''}`} onClick={() => handleSelectScore('penalty')}>
        <h2>Penalty</h2>
    </div>
</div>




            <div className="overflow-x-hidden">
    <div className="flex transition-transform duration-500" style={{ transform: `translateX(${selectedTeam === 'home' ? '0' : '-100%'})` }}>
        {/* Home team details */}
        <div className="min-w-full">
            <h3 className="text-center text-lg font-bold mb-2 underline">{matchDetails.teams.home.name} Details</h3>
            {selectedScore === 'halftime' && (
                <>
                    <p className=' mt-3 lg:mt-0'>Halftime Score: {matchDetails.score.halftime.home}</p>
                </>
            )}
            {selectedScore === 'fulltime' && (
                <>
                    <p  className=' mt-3 lg:mt-0'>Fulltime Score: {matchDetails.score.fulltime.home}</p>
                </>
            )}
            {selectedScore === 'extratime' && (
                <>
                    <p  className=' mt-3 lg:mt-0'>Extra Time Score: {matchDetails.score.extratime.home !== null ? matchDetails.score.extratime.home : '0'}</p>
                </>
            )}
            {selectedScore === 'penalty' && (
                <>
                    <p className=' mt-3 lg:mt-0'>Penalty Score: {matchDetails.score.penalty.home !== null ? matchDetails.score.penalty.home : '0'}</p>
                </>
            )}
        </div>
        {/* Away team details */}
        <div className="min-w-full">
            <h3 className="text-center text-lg font-bold mb-2 underline">{matchDetails.teams.away.name} Details</h3>
            {selectedScore === 'halftime' && (
                <>
                    <p  className=' mt-3 lg:mt-0' >Halftime Score: {matchDetails.score.halftime.away}</p>
                </>
            )}
            {selectedScore === 'fulltime' && (
                <>
                    <p  className=' mt-3 lg:mt-0'>Fulltime Score: {matchDetails.score.fulltime.away}</p>
                </>
            )}
            {selectedScore === 'extratime' && (
                <>
                    <p   className=' mt-3 lg:mt-0'>Extra Time Score: {matchDetails.score.extratime.away !== null ? matchDetails.score.extratime.away : '0'}</p>
                </>
            )}
            {selectedScore === 'penalty' && (
                <>
                    <p  className=' mt-3 lg:mt-0'>Penalty Score: {matchDetails.score.penalty.away !== null ? matchDetails.score.penalty.away : '0'}</p>
                </>
            )}
        </div>
    </div>
</div>

            {/* <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded mx-auto block" onClick={handelOpenScoreModal}>Close</button> */}
            <div className="flex items-center justify-center">
    <button type="button" className="text-white mt-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    onClick={handelOpenScoreModal}>
        Close
    </button>
</div>

        </div>
    </div>
)}

        </>
    );
};

export default CupPageDetails;


