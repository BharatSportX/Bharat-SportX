import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';

import Home from './components/Home/Home';
import LeaguesHome from './components/ALLSports/Football/Competitions/Leagues/LeaguesHome';
import Leagues from "./components/ALLSports/Football/Competitions/Leagues/Leagues"
import Cups from './components/ALLSports/Football/Competitions/Cups/Cup';
import CupPageDetails from './components/ALLSports/Football/Competitions/Cups/CupPageDetails';
import LeaguesDetails from './components/ALLSports/Football/Competitions/Leagues/LeaguesDetails';
import  Statistics from "./components/ALLSports/Football/Statistics/Statistics"

import TeamStatistics from './components/ALLSports/Football/Team Statistics/TeamStatistics';
import Standings from './components/ALLSports/Football/Standings/Standings';
import Prediction from './components/ALLSports/Football/Predictions/Prediction';
import Players from './components/ALLSports/Football/Players/Players';
import LineUps from './components/ALLSports/Football/LineUps/LineUps';
import H2H from './components/ALLSports/Football/HaedToHead/H2H';
import Events from './components/ALLSports/Football/Events/Events';
import Error from './components/DeafultErrorPage/Error';
import LaunchingSoon from './components/LaunchingSoonPage/LaunchingSoon';
import Navbar from './components/Home/Navbar/Navbar';
import TableFormat from './components/ALLSports/Football/Statistics/TableFormat';
function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><FrontPage/></>
    },
    {
      path:'/footballhome',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/FootballLeagues',
      element:<><Navbar/><Leagues/></>
    },
    {
      path:'/FootballWorldCup',
      element:<><Navbar/><Cups/></>
    },
    {
      path:'/LeagueHome',
      element:<><Navbar/><LeaguesHome/></>
    },
    {
      path:'/cup/:id',
      element:<><Navbar/><CupPageDetails/></>
    },
    {
      path:'/league/:id',
      element:<><Navbar/><LeaguesDetails/></>
    },
    {
      path: "/statistics/:id",
      element: <><Navbar/><Statistics/></>
    },
    
    {
      path:'/team-stat',
      element:<><Navbar/><TeamStatistics/></>
    },
    {
      path:'/standings/:id',
      element:<><Navbar/><Standings/></>
    },
    {
      path:'/prediction/:id',
      element:<><Navbar/><Prediction/></>
    },
    
    {
      path:'/players',
      element:<><Navbar/><Players/></>
    },
    
    {
      path:'/lineups',
      element:<><Navbar/><LineUps/></>
    },
    {
      path:'/h2h',
      element:<><Navbar/><H2H/></>
    },
    {
      path:'/events',
      element:<><Navbar/><Events/></>
    },
    
    {
      path:'/launching-soon',
      element:<><LaunchingSoon/></>
    },
    {
      path:'/table-format/:id',
      element:<> <Navbar/> <TableFormat/></>
    },
    {
      path: '*',
      element:<><Navbar/> <Error /></>
    }

    
    
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
