import React, { useState, useEffect } from "react";
import "../LiveMatch/LiveMatch.css";
import { NavLink } from "react-router-dom";
import ProgressStep from "../LiveMatch/ProgressStep";
import axios from "axios";
import MatchLoading from "../MatchLoading";
import Details from "../Details";

const UpcomingMatch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedMatches, setPinnedMatches] = useState([]);

  const UpcomingApi = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { next: "50" },
      headers: {
        "x-rapidapi-key": "96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const fetchedData = response.data.response;

      setData(fetchedData);

      // Update pinned matches to remove any invalid matches that no longer exist in the fetched data
      setPinnedMatches((prevPinnedMatches) => {
        const validPinnedMatches = prevPinnedMatches.filter((pinnedMatchId) =>
          fetchedData.some((match) => match.fixture.id === pinnedMatchId)
        );
        localStorage.setItem("pinnedMatches", JSON.stringify(validPinnedMatches));
        return validPinnedMatches;
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    const savedPinnedMatches = JSON.parse(localStorage.getItem("pinnedMatches")) || [];
    setPinnedMatches(savedPinnedMatches);
    UpcomingApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("pinnedMatches", JSON.stringify(pinnedMatches));
  }, [pinnedMatches]);

  const togglePinMatch = (e, matchId) => {
    e.preventDefault();
    setPinnedMatches((prevPinnedMatches) => {
      if (prevPinnedMatches.includes(matchId)) {
        return prevPinnedMatches.filter((id) => id !== matchId);
      } else {
        return [...prevPinnedMatches, matchId];
      }
    });
  };

  const isPinned = (matchId) => {
    return pinnedMatches.includes(matchId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata", // Change this to the timezone you want (e.g., "Asia/Kolkata" for India)
    };
    return date.toLocaleString("en-US", options);
  };

  if (loading) {
    return <MatchLoading />;
  }

  if (error) {
    return <div>Internal Server Problem Sorry for Disappointed..</div>;
  }

  const sortedMatches = [...data]
    .filter((item) => item.fixture.status.long === "Not Started")
    .sort((a, b) => {
      const aPinned = isPinned(a.fixture.id);
      const bPinned = isPinned(b.fixture.id);
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
      return 0;
    });

  return (
    <>
      {sortedMatches.map((item, index) => (
        <div key={index} className="flex-none relative w-full md:w-[30rem] my-4 md:my-6">
          <section className="md:mx-5">
            <div className="bg-custom-radial-gradient dark:match h-[21.22rem] md:h-[26.47rem] p-0 text-white rounded-lg mx-auto">
              <div className="flex pb-3 p-4 md:pb-5 bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2 shadow-sm dark:shadow-orange-700">
                <div className="flex justify-center items-center space-x-2">
                  <img className="size-7 bg-white rounded-full float-left cursor-pointer" src={item.league.logo} alt="logo" />
                  <span className="text-sm font-semibold" style={{ fontFamily: '"Playwrite NG Modern", cursive' }}>
                    {item.league.name}
                  </span>
                </div>
                <div className="float-end flex space-x-2 relative">
                  <label className="container_box">
                    <input type="checkbox" checked={isPinned(item.fixture.id)} onChange={(e) => togglePinMatch(e, item.fixture.id)} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 100" className="pin dark:text-[#333] size-4">
                      <line strokeWidth="12" stroke="currentColor" y2="100" x2="37" y1="64" x1="37"></line>
                      <path strokeWidth="10" stroke="currentColor" d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"></path>
                    </svg>
                  </label>
                  <Details />
                </div>
              </div>

              <div className="border-x dark:border-slate-700 border-slate-500 h-56 md:h-80 mx-[0.5px] md:ml-0 md:mr-[0.45px]">
                <section className="md:pt-10 pb-4 md:px-14 px-4 pt-6">
                  <div className="flex justify-between items-center mb-4 mt-4">
                    <img src={item.teams.home.logo} alt="home logo" className="w-12 h-12" />
                    <div className="text-center space-y-2">
                      <div className="text-xl font-medium dark:text-indigo-400 text-indigo-900">
                        {formatDate(item.fixture.date)}
                      </div>
                      <div className="text-base dark:text-stone-400 text-stone-700 font-medium dark:font-medium">
                        {formatTime(item.fixture.date)}
                      </div>
                    </div>
                    <img src={item.teams.away.logo} alt="away logo" className="w-12 h-12" />
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="dark:text-white font-semibold md:font-medium text-black" style={{ fontFamily: '"Playwrite NG Modern", cursive' }}>
                        {item.teams.home.name}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="dark:text-white font-semibold md:font-medium text-black" style={{ fontFamily: '"Playwrite NG Modern", cursive' }}>
                        {item.teams.away.name}
                      </div>
                    </div>
                  </div>
                </section>
                <div className="absolute bottom-10 left-0 right-0 mx-auto md:mx-5">
                  <hr className="dark:border-slate-600 border-slate-500 mx-2 w-auto md:hidden mb-4" />
                  <ProgressStep />
                </div>
                <div className="hidden mt-6 md:flex md:flex-col md:justify-center md:items-center text-center text-wrap">
                  <hr className="dark:border-slate-600 w-[26rem]" />
                  <div className="py-2 pt-3">
                    <span className="text-black text-sm px-2 dark:text-gray-300" style={{ fontFamily: '"Andika", sans-serif' }}>
                      Ready to {formatTime(item.fixture.date)} to Watch The Live..!
                    </span>
                    <p className="text-black text-xs dark:text-gray-400 py-1.5" style={{ fontFamily: '"Andika", sans-serif' }}>
                      Who Will Win?---→ Vote{" "}
                      <span className="hover:text-blue-800 hover:underline dark:hover:text-sky-400 cursor-pointer mx-1">here</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-b-lg flex flex-col bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 font-medium absolute bottom-0 left-0 right-0 md:mx-5 mx-auto shadow-sm dark:shadow-orange-500">
                <NavLink to="/" className="text-center py-2">
                  <span className="hover:underline">See More Details</span>
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default UpcomingMatch;
