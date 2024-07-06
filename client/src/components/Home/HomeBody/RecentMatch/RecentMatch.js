import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import MatchLoading from "../MatchLoading";
import Details from "../Details";
import ProgressStep from "../LiveMatch/ProgressStep";
import NoLive from "../LiveMatch/NoLive";
import NavContext from "../../Navbar/NavContext/NavContext";

// Utility function to format timestamp to AM/PM
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const RecentMatch = () => {
  const { handleExternalLinkClick } = useContext(NavContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedMatches, setPinnedMatches] = useState([]);

  // Function to fetch recent matches from API
  const fetchRecentMatches = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { last: "50" },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_APIKEY,
        "x-rapidapi-host": process.env.REACT_APP_APIHOST,
      },
    };

    try {
      const response = await axios.request(options);
      const fetchedData = response.data.response;

      // Filter matches to be pinned by default
      const defaultPinnedMatches = fetchedData
        .filter(
          (match) =>
            match.league.name === "Copa America" ||
            match.league.name === "Euro Championship"
        )
        .map((match) => match.fixture.id);

      const savedPinnedMatches =
        JSON.parse(localStorage.getItem("recentPinnedMatches")) || [];

      // Combine saved pinned matches with default pinned matches, ensuring no duplicates
      const combinedPinnedMatches = Array.from(
        new Set([...savedPinnedMatches, ...defaultPinnedMatches])
      );

      setData(fetchedData);
      setPinnedMatches(combinedPinnedMatches);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recent matches:", error);
      setError(error);
      setLoading(false);
    }
  };

  // Load pinned matches from localStorage and fetch recent matches on initial render
  useEffect(() => {
    fetchRecentMatches();
  }, []);

  // Update localStorage when pinnedMatches state changes
  useEffect(() => {
    localStorage.setItem("recentPinnedMatches", JSON.stringify(pinnedMatches));
  }, [pinnedMatches]);

  // Toggle pinning of a match
  const togglePinMatch = (e, matchId) => {
    setPinnedMatches((prevPinnedMatches) => {
      if (prevPinnedMatches.includes(matchId)) {
        return prevPinnedMatches.filter((id) => id !== matchId);
      } else {
        return [...prevPinnedMatches, matchId];
      }
    });
  };

  // Check if a match is pinned
  const isPinned = (matchId) => {
    return pinnedMatches.includes(matchId);
  };

  // Filter and sort matches to prioritize pinned ones and finished matches
  const filteredAndSortedMatches = [...data]
    .filter((match) => match.fixture.status.long === "Match Finished")
    .sort((a, b) => {
      const isAPinned = isPinned(a.fixture.id);
      const isBPinned = isPinned(b.fixture.id);

      if (isAPinned && !isBPinned) return -1; // A is pinned, B is not, A comes first
      if (!isAPinned && isBPinned) return 1; // B is pinned, A is not, B comes first

      return 0; // Both are pinned or both are not pinned, maintain current order
    });

  if (loading) {
    return <MatchLoading />;
  }

  if (error) {
    return (
      <div className="h-[24.62rem] md:h-[30.47rem] flex justify-center items-center w-full text-center">
        Error loading data: {error.message || "There is an issue with the server."}
      </div>
    );
  }

  if (filteredAndSortedMatches.length === 0) {
    return (
      <NoLive
        text="No Recent Matches"
        onUpcomingClick={() => handleExternalLinkClick("UpcomingMatch")}
      />
    );
  }

  return (
    <>
      {filteredAndSortedMatches.map((item, index) => (
        <div
          key={index}
          className="flex-none relative w-full md:w-[30rem] my-4 md:my-6"
        >
          <section className="md:mx-5">
            <div className="bg-custom-radial-gradient dark:match h-auto p-0 text-white rounded-lg mx-auto">
              <div className="flex pb-3 p-4 md:pb-5 bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2 shadow-sm dark:shadow-orange-700">
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="size-7 bg-white rounded-full float-left cursor-pointer"
                    loading="lazy"
                    src={item.league.logo}
                    alt="logo"
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                  >
                    {item.league.name.length > 16
                      ? item.league.name.substring(0, 16) + " ."
                      : item.league.name.substring(0, 16) + " ."}
                  </span>
                </div>
                <div className="float-end flex space-x-2 relative">
                  <label className="container_box">
                    <input
                      type="checkbox"
                      checked={isPinned(item.fixture.id)}
                      onChange={(e) => togglePinMatch(e, item.fixture.id)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 75 100"
                      className="pin dark:text-[#333] size-4"
                    >
                      <line
                        strokeWidth="12"
                        stroke="currentColor"
                        y2="100"
                        x2="37"
                        y1="64"
                        x1="37"
                      ></line>
                      <path
                        strokeWidth="10"
                        stroke="currentColor"
                        d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
                      ></path>
                    </svg>
                  </label>
                  <Details />
                </div>
              </div>
              <div className="border-x dark:border-slate-700 border-slate-500 mx-[0.5px] md:ml-0 md:mr-[0.45px]">
                <section className="md:pt-10 pb-4 md:px-14 px-4 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <img
                      loading="lazy"
                      src={item.teams.home.logo}
                      alt="team logo"
                      className="w-12 h-12"
                    />
                    <div className="text-center">
                      <div className="text-2xl font-bold dark:text-red-500 text-red-700">
                        {item.goals.home} - {item.goals.away}
                      </div>
                      <div className="text-xs dark:md:text-zinc-400 dark:text-red-500 text-blue-800 font-medium dark:font-medium">
                        {item.fixture.status.short} :{" "}
                        {item.fixture.status.elapsed}'
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src={item.teams.away.logo}
                      alt="team logo2"
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <span className="text-base text-center flex justify-center dark:text-stone-400 text-stone-700 font-medium">
                      Finished ({formatTime(item.fixture.periods.second)})
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-3 mb-2">
                    <div>
                      <div
                        className="mt-1 dark:text-white font-semibold md:font-medium text-black"
                        style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                      >
                        {item.teams.home.name.length >= 11
                          ? item.teams.home.name.substring(0, 10) + " ."
                          : item.teams.home.name}
                      </div>
                      <div
                        className="text-zinc-800 dark:text-zinc-400"
                        style={{ fontFamily: '"Andika", sans-serif' }}
                      >
                        {/* {item.goals.home === 0 ? (
                          <div className="mt-1">No Goal</div>
                        ) : (
                          <div className="mt-1">
                            {item.goals.home} Goal
                            {item.goals.home > 1 ? "s" : ""}
                          </div>
                        )} */}
                        
                      </div>
                    </div>
                    
                    <div className="text-end">
                      <div
                        className="mt-1 dark:text-white font-semibold md:font-medium text-black"
                        style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                      >
                        {item.teams.away.name.length >= 11
                          ? item.teams.away.name.substring(0, 10) + " ."
                          : item.teams.away.name}
                      </div>
                     
                    </div>
                  </div>
                </section>
                <div
                        className="text-zinc-800 text-center dark:text-zinc-400 mb-3 md:mb-4"
                        style={{ fontFamily: '"Andika", sans-serif' }}
                      >
                      {item.league.round}
                        
                        
                      </div>
                <div className=" ">
                  <hr className="  dark:border-slate-600 border-slate-500  mx-2 w-auto md:hidden mb-4" />
                  <ProgressStep />
                </div>
              
              <div className="hidden mt-6 md:flex md:flex-col md:justify-center md:items-center text-center text-wrap">
                <hr className="dark:border-slate-600 w-[26rem]" />
                <div className="py-2 pt-3">
                  {item.goals.away > item.goals.home ? (
                    <span
                      className="text-black text-sm px-2 dark:text-gray-300"
                      style={{ fontFamily: '"Andika", sans-serif' }}
                    >
                      {`${
                        item.teams.away.name.length >= 11
                          ? item.teams.away.name.substring(0, 10) 
                          : item.teams.away.name
                      } won with ${item.goals.away} goals against ${
                        item.teams.home.name.length >= 11
                          ? item.teams.home.name.substring(0, 10) 
                          : item.teams.home.name
                      }.`}
                      <span className="hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                        . . .
                      </span>
                    </span>
                  ) : (
                    <span
                      className="text-black text-sm px-2 dark:text-gray-300"
                      style={{ fontFamily: '"Andika", sans-serif' }}
                    >
                      {`${
                        item.teams.home.name.length >= 11
                          ? item.teams.home.name.substring(0, 10) 
                          : item.teams.home.name
                      } won with ${item.goals.home} goals against ${
                        item.teams.away.name.length >= 11
                          ? item.teams.away.name.substring(0, 10) 
                          : item.teams.away.name
                      }.`}
                      <span className="hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                        . . .
                      </span>
                    </span>
                  )}
                  <p
                    className="text-black text-xs dark:text-gray-400 py-1.5"
                    style={{ fontFamily: '"Andika", sans-serif' }}
                  >
                    {`${item.fixture.venue.name}, ${item.fixture.venue.city}.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-b-lg flex flex-col bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 font-medium shadow-sm dark:shadow-orange-500">
              <NavLink to="/" className="text-center py-2">
                <span className="hover:underline font-medium text-base">
                  See More Details
                </span>
              </NavLink>
            </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default RecentMatch;
