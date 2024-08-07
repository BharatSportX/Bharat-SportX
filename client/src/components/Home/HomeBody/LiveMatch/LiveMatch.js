import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProgressStep from "./ProgressStep";
import "./LiveMatch.css";
import NoLive from "./NoLive";
import axios from "axios";
import NavContext from "../../Navbar/NavContext/NavContext";
import MatchLoading from "../MatchLoading";
import Details from "../Details";

const LiveMatch = () => {
  const { handleExternalLinkClick } = useContext(NavContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedLiveMatch, setPinnedMatches] = useState([]);

  const LiveApi = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { live: "all" },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_APIKEY,
        "x-rapidapi-host": process.env.REACT_APP_APIHOST,
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
        localStorage.setItem("pinnedLiveMatch", JSON.stringify(validPinnedMatches));
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
    const savedPinnedMatches1 = JSON.parse(localStorage.getItem("pinnedLiveMatch")) || [];
    setPinnedMatches(savedPinnedMatches1);
    LiveApi();
  }, []);

  useEffect(() => {
    //pinned matches as default
    if (data.length > 0) {
      const defaultPinnedMatches = data
        .filter(
          (item) =>
            item.league.name === "Copa America" || item.league.name === "Euro Championship"
        )
        .map((item) => item.fixture.id);

      setPinnedMatches((prevPinnedMatches) => {
        const newPinnedMatches = [...new Set([...prevPinnedMatches, ...defaultPinnedMatches])];
        localStorage.setItem("pinnedLiveMatch", JSON.stringify(newPinnedMatches));
        return newPinnedMatches;
      });
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("pinnedLiveMatch", JSON.stringify(pinnedLiveMatch));
  }, [pinnedLiveMatch]);

  const togglePinMatch = (e, matchId) => {
    setPinnedMatches((prevPinnedMatches) => {
      if (prevPinnedMatches.includes(matchId)) {
        return prevPinnedMatches.filter((id) => id !== matchId);
      } else {
        return [...prevPinnedMatches, matchId];
      }
    });
  };

  const isPinned = (matchId) => {
    return pinnedLiveMatch.includes(matchId);
  };

 

  if (loading) {
    return <MatchLoading />;
  }

  if (error) {
    return <div className="h-[24.62rem] md:h-[27.05rem] flex justify-center items-center w-full   text-center">Error loading data: {error.message}</div>;
  }

  const sortedMatches = [...data]
    .sort((a, b) => {
      const aPinned = isPinned(a.fixture.id);
      const bPinned = isPinned(b.fixture.id);
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
      return 0;
    });


  if (data.length === 0) {
    return (
      <NoLive
        onUpcomingClick={() => handleExternalLinkClick("UpcomingMatch")} text="No Live" text2="Live"
      />
    );
  }

  return (
    <>
      {sortedMatches.map((item, index) => {
        const isOneOne = item.goals.home === 1 && item.goals.away === 1;
        const homeGoals = item.events
          .filter(
            (event) =>
              event.team.id === item.teams.home.id && event.type === "Goal"
          )
          .map((goal) => `${goal.player.name || "Goal"} ${goal.time.elapsed}'`);

        const awayGoals = item.events
          .filter(
            (event) =>
              event.team.id === item.teams.away.id && event.type === "Goal"
          )
          .map((goal) => `${goal.player.name || "Goal"} ${goal.time.elapsed}'`);

        const homeGoalsDisplay = homeGoals.length ? (
          homeGoals.slice(-2).map((goal, index) => (
            <div key={index}>
              {`${goal}`}
              <br />
            </div>
          ))
        ) : (
          <div>
            <br />
            <br />
          </div>
        );

        const awayGoalsDisplay = awayGoals.length ? (
          awayGoals.slice(-2).map((goal, index) => (
            <div key={index}>
              {`${goal}`}
              <br />
            </div>
          ))
        ) : (
          <div>
            <br />
            <br />
          </div>
        );

        return (
          <div
            key={index}
            className={`flex-none relative w-full md:w-[30rem]  mt-4 mb-3 md:mt-6 md:mb-5`}
          >
            <section className="md:mx-5">
              <div
                className={`bg-custom-radial-gradient dark:match p-0 ${
                  isOneOne ? "h-[22.8rem] md:h-[27.75rem]" : "h-auto"
                } text-white rounded-lg mx-auto`}
              >
                <div className="flex pb-3 p-4 md:pb-5 bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2 shadow-sm dark:shadow-orange-700">
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      loading="lazy"
                      className="size-7 rounded-full float-left bg-white cursor-pointer"
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
                        <div className="text-sm dark:md:text-zinc-400 dark:text-red-500 text-blue-800 font-medium dark:font-medium">
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
                    <div className="text-center">
                      <span className="text-base flex justify-center dark:text-green-400 text-green-800 font-medium">
                        <span className="btn-shine dark:live-dark-shine live-light-shine">
                          Live
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <div
                          className="dark:text-white font-semibold text-sm md:font-medium text-black"
                          style={{
                            fontFamily: '"Playwrite NG Modern", cursive',
                          }}
                        >
                          {item.teams.home.name.length >= 11
                            ? item.teams.home.name.substring(0, 10) + " ."
                            : item.teams.home.name.substring(0, 10) + " ."}
                        </div>
                        <div
                          className="text-zinc-800 dark:text-zinc-400"
                          style={{ fontFamily: '"Andika", sans-serif' }}
                          loading="lazy"
                        >
                          {homeGoalsDisplay}{" "}
                          <div className="text-zinc-800 dark:text-zinc-400 hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                            . . .
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <div
                          className="dark:text-white font-semibold md:font-medium text-black"
                          style={{
                            fontFamily: '"Playwrite NG Modern", cursive',
                          }}
                        >
                          {item.teams.away.name.length >= 11
                            ? item.teams.away.name.substring(0, 10) + " ."
                            : item.teams.away.name.substring(0, 10) + " ."}
                        </div>
                        <div
                          className="text-zinc-800 dark:text-zinc-400"
                          style={{ fontFamily: '"Andika", sans-serif' }}
                          loading="lazy"
                        >
                          {awayGoalsDisplay}{" "}
                          <div className="hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                            . . .
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="">
                    <hr className="dark:border-slate-600 border-slate-500 mx-2 w-auto md:hidden mb-4" />
                    <ProgressStep />
                  </div>
                  <div className="hidden mt-6 md:flex md:flex-col md:justify-center md:items-center text-center text-wrap">
                    <hr className="dark:border-slate-600 w-[26rem]" />
                    <div className="py-2 pt-3">
                      <span
                        className="text-black text-sm px-2 dark:text-gray-300"
                        style={{ fontFamily: '"Andika", sans-serif' }}
                      >
                        {`${item.teams.away.name.toString()} needs Two more goals to Win`
                          .length >= 20
                          ? `${item.teams.away.name.toString()} needs Two more goals to Win `.substring(
                              0,
                              53
                            )
                          : `${item.teams.away.name.toString()} needs Two more goals to Win`.substring(
                              0,
                              48
                            )}
                        <span className="hover:underline dark:hover:text-sky-400 hover:text-blue-800 cursor-pointer mx-1">
                          . . .
                        </span>
                      </span>
                      <p
                        className="text-black text-xs dark:text-gray-400 py-1.5"
                        style={{ fontFamily: '"Andika", sans-serif' }}
                      >
                        Play-Off . {item.league.name} 78 of 20
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`rounded-b-lg flex flex-col bg-orange-800 text-orange-300 shadow-orange-950 dark:bg-orange-500 dark:text-orange-950 font-medium shadow-sm ${
                    isOneOne
                      ? " absolute bottom-0 left-0 right-0 md:mx-5 mx-auto"
                      : ""
                  } dark:shadow-orange-500`}
                >
                  <NavLink to="/live-match-details"
                 
                  
                  className="text-center py-2">
                    <span className="hover:underline font-medium text-base">
                      See More Details
                    </span>
                  </NavLink>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default LiveMatch;