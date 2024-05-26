import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./components/FrontPage/FrontPage";

import Home from "./components/Home/Home";
import LeaguesHome from "./components/ALLSports/Football/Competitions/Leagues/LeaguesHome";
import Leagues from "./components/ALLSports/Football/Competitions/Leagues/Leagues";
import Cups from "./components/ALLSports/Football/Competitions/Cups/Cup";
import CupPageDetails from "./components/ALLSports/Football/Competitions/Cups/CupPageDetails";
import LeaguesDetails from "./components/ALLSports/Football/Competitions/Leagues/LeaguesDetails";
import Statistics from "./components/ALLSports/Football/Statistics/MatchStatistics";
import NavState from "./components/Home/Navbar/NavContext/NavState";
import TeamStatistics from "./components/ALLSports/Football/Team Statistics/TeamStatistics";
import Standings from "./components/ALLSports/Football/Standings/Standings";
import Prediction from "./components/ALLSports/Football/Predictions/Prediction";
import Players from "./components/ALLSports/Football/Players/Players";
import LineUps from "./components/ALLSports/Football/LineUps/LineUps";
import H2H from "./components/ALLSports/Football/HaedToHead/H2H";
import Events from "./components/ALLSports/Football/Events/Events";
import Error from "./components/DeafultErrorPage/Error";
import LaunchingSoon from "./components/LaunchingSoonPage/LaunchingSoon";
import Navbar from "./components/Home/Navbar/Navbar";
import TableFormat from "./components/ALLSports/Football/Statistics/TableFormat";
import FootballSubscription from "./components/ALLSports/Football/FootballSubscription/FootballSubscription";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <FrontPage />
        </>
      ),
    },
    {
      path: "/football/home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/football/leagues",
      element: (
        <>
          <Navbar />
          <Leagues />
        </>
      ),
    },
    {
      path: "/football/league/world-cup",
      element: (
        <>
          <Navbar />
          <Cups />
        </>
      ),
    },
    {
      path: "/football/LeagueHome",
      element: (
        <>
          <Navbar />
          <LeaguesHome />
        </>
      ),
    },
    {
      path: "/football/league/world-cup/cup/:id",
      element: (
        <>
          <Navbar />
        <CupPageDetails/>
        </>
      ),
    },
    {
      path: "/football/league/:id",
      element: (
        <>
          <Navbar />
          <LeaguesDetails />
        </>
      ),
    },
    {
      path: "/football/league/world-cup/match-statistics/:id",
      element: (
        <>
          <Navbar />
          <Statistics />
        </>
      ),
    },

    {
      path: "/football/league/world-cup/team-statistics/:id",
      element: (
        <>
          <Navbar />
          <TeamStatistics />
        </>
      ),
    },
    {
      path: "/football/standings/:id",
      element: (
        <>
          <Navbar />
          <Standings />
        </>
      ),
    },
    {
      path: "/football/prediction/:id",
      element: (
        <>
          <Navbar />
          <Prediction />
        </>
      ),
    },

    {
      path: "/football/players",
      element: (
        <>
          <Navbar />
          <Players />
        </>
      ),
    },

    {
      path: "/football/lineups",
      element: (
        <>
          <Navbar />
          <LineUps />
        </>
      ),
    },
    {
      path: "/football/h2h",
      element: (
        <>
          <Navbar />
          <H2H />
        </>
      ),
    },
    {
      path: "/football/events",
      element: (
        <>
          <Navbar />
          <Events />
        </>
      ),
    },

    {
      path: "/football/launching-soon",
      element: (
        <>
          <LaunchingSoon />
        </>
      ),
    },

    {
      path: "/football/league/world-cup/match-statistics/table-format/:id",
      element: (
        <>
          <Navbar/><TableFormat/>
        </>
      ),
    },

    {
      path: "/football/subscription/IN",
      element: (
        <>
          <Navbar/><FootballSubscription/>
        </>
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div>
      <NavState>
        <RouterProvider router={router} />
      </NavState>
    </div>
  );
}

export default App;
