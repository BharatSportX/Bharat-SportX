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
  const [pinnedMatches, setPinnedMatches] = useState([]);
  const LiveApi = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { live: "all" },
      headers: {
        "x-rapidapi-key": "96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  
  // Load pinned matches from localStorage on initial render
  useEffect(() => {
    const savedPinnedMatches = JSON.parse(localStorage.getItem("recentPinnedMatches")) || [];
    setPinnedMatches(savedPinnedMatches);
    LiveApi();
    const interval = setInterval(() => {
      LiveApi();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update localStorage when pinnedMatches state changes
  useEffect(() => {
    localStorage.setItem("recentPinnedMatches", JSON.stringify(pinnedMatches));
  }, [pinnedMatches]);

  // Toggle pinning of a match
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

  // Check if a match is pinned
  const isPinned = (matchId) => {
    return pinnedMatches.includes(matchId);
  };

  // Sort matches to prioritize pinned ones
  const sortedMatches = [...data].sort((a, b) => {
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
    return <div>Error loading data: {error.message}</div>;
  }

  if (data.length === 0) {
    return (
      <NoLive
        onUpcomingClick={() => handleExternalLinkClick("UpcomingMatch")}
      />
    );
  }

  return (
    <>
      {sortedMatches.map((item, index) => (
        <div
          key={index}
          className="flex-none relative    w-full  md:w-[30rem] my-4 md:my-6 "
        >
          <section className="md:mx-5 ">
            {/* <div className=" bg-[#1e2026]   md:h-[25.3rem] p-4 md:p-0    text-white  rounded-lg  mx-auto "> */}
            <div
              className=" bg-custom-radial-gradient dark:match h-auto p-0    text-white  rounded-lg  mx-auto "
              style={
                {
                  // background:'black'
                }
              }
            >
              <div className="flex pb-3 p-4 md:pb-5 bg-orange-800 text-orange-300 shadow-orange-950  dark:bg-orange-500 dark:text-orange-950  rounded-t-lg justify-between items-center text-xs md:mb-0 mb-2  shadow-sm  dark:shadow-orange-700">
                <div className=" flex justify-center items-center space-x-2">
                  {/* <span className=" hover:border-2 hover:border-white p-[0.8px] rounded-full"> */}
                  <img
                   loading="lazy"
                    className="size-7  rounded-full float-left bg-white  cursor-pointer"
                    src={item.league.logo}
                    alt="logo"
                  />
                  {/* </span> */}
                  <span
                    className=" text-sm  font-semibold"
                    style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                  >
                    
                    {item.league.name.length > 16
                          ? item.league.name.substring(0, 16)+ " ."
                          : item.league.name.substring(0, 16) + " ."}
                  </span>
                </div>
                <div className="float-end flex space-x-2 relative">
                  <label className="container_box">
                  <input type="checkbox" checked={isPinned(item.fixture.id)} onChange={(e) => togglePinMatch(e, item.fixture.id)} />
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

                 <Details/>
                </div>
              </div>
              {/* <div className=" md:absolute md:bottom-0 md:left-0 md:right-0 md:rounded-b-lg hidden md:flex md:mx-5 md:flex-col md:text-[#220000] font-medium md:bg-orange-700 "> */}

              <div className=" border-x dark:border-slate-700 border-slate-500  mx-[0.5px] md:ml-0 md:mr-[0.45px]">
                <section className="md:pt-10 pb-4 md:px-14 px-4 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <img
                     loading="lazy"
                      src={item.teams.home.logo}
                      alt="team logo"
                      className="w-12 h-12"
                    />
                    <div className="text-center">
                      <div className="text-2xl  font-bold dark:text-red-500 text-red-700">
                        {item.goals.home} - {item.goals.away}
                      </div>

                      <div className="text-sm  dark:md:text-zinc-400 dark:text-red-500  text-blue-800 font-medium dark:font-medium">
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
                  <div className=" ">
                    <span className="text-base flex justify-center dark:text-green-400  text-green-800 font-medium">
                      <span className=" btn-shine dark:live-dark-shine  live-light-shine ">
                        Live
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="">
                      <div
                        className="dark:text-white font-semibold text-sm md:font-medium text-black"
                        style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                      >
                        {item.teams.home.name.length >= 11
                          ? item.teams.home.name.substring(0, 10)+ " ."
                          : item.teams.home.name.substring(0, 10) + " ."}
                      </div>

                      {/* {item.events
                        .filter(
                          (event) =>
                            event.team.id === item.teams.home.id &&
                            event.type === "Goal"
                        )
                        .map((goal, goalIndex) => (
                          <div
                            key={goalIndex}
                            className= "mt-1 text-zinc-800 dark:text-zinc-400"
                            style={{ fontFamily: '"Andika", sans-serif' }}
                          >
                            <span>
                              {goal.player.name} {goal.time.elapsed}'
                            </span>
                          </div>
                        ))} */}
                      <div
                        className="text-zinc-800 dark:text-zinc-400"
                        style={{ fontFamily: '"Andika", sans-serif' }}
                      >
                        B sow 36'{" "}
                      </div>
                      <span className="text-zinc-800 dark:text-zinc-400 hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                        . . .
                      </span>
                    </div>
                    <div className="text-end   ">
                      <div
                        className="dark:text-white font-semibold md:font-medium text-black"
                        style={{ fontFamily: '"Playwrite NG Modern", cursive' }}
                      >
                        {item.teams.away.name.length >= 11
                          ? item.teams.away.name.substring(0, 10) +' .'
                          : item.teams.away.name.substring(0, 10) + " ."}
                      </div>
                      <div className="text-zinc-800   dark:text-zinc-400">
                        <div
                          className=""
                          style={{ fontFamily: '"Andika", sans-serif' }}
                        >
                          {/* {item.events
                            .filter(
                              (event) =>
                                event.team.id === item.teams.away.id &&
                                event.type === "Goal"
                            )
                            .map((goal, goalIndex) => (
                              <div
                                key={goalIndex}
                                className= "mt-1 text-zinc-800 dark:text-zinc-400"
                                style={{ fontFamily: '"Andika", sans-serif' }}
                              >
                                <span>
                                  {goal.player.name} {goal.time.elapsed}'
                                </span>
                              </div>
                            ))} */}
                          <div>Goal 96'</div>
                          <div>Pablo García 48'</div>
                        </div>
                        <span className="  hover:underline hover:text-blue-800 dark:hover:text-sky-400 cursor-pointer mx-1">
                          . . .
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <div className=" ">
                  <hr className="  dark:border-slate-600 border-slate-500  mx-2 w-auto md:hidden mb-4" />
                  <ProgressStep />
                </div>
                <div className="hidden mt-6 md:flex md:flex-col  md:justify-center md:items-center text-center text-wrap ">
                  <hr className="  dark:border-slate-600  w-[26rem] " />
                  <div className="py-2 pt-3">
                    {/* here just only few words are taken otherwise responsive ness break so use lenghth property else ('...') which leads to seemore */}
                    <span
                      className="text-black text-sm px-2  dark:text-gray-300"
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
              <div className=" rounded-b-lg  flex  flex-col bg-orange-800 text-orange-300 shadow-orange-950  dark:bg-orange-500 dark:text-orange-950 font-medium   shadow-sm  dark:shadow-orange-500">
                <NavLink to="/" className="  text-center py-2">
                  <span className="hover:underline font-medium  text-base">
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

export default LiveMatch;


