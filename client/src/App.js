import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';

import Home from './components/Home/Home';
import LeaguesHome from './components/ALLSports/Football/Competitions/Leagues/LeaguesHome';
import Leagues from './components/ALLSports/Football/Competitions/Leagues/Leagues';
import Cups from './components/ALLSports/Football/Competitions/Leagues/Cup';
import CupPageDetails from './components/ALLSports/Football/Competitions/Leagues/CupPageDetails';
import LeaguesDetails from './components/ALLSports/Football/Competitions/Leagues/LeaguesDetails';
import Navbar from './components/Home/Navbar/Navbar';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><FrontPage/></>
    },
    {
      path:'/home',
      element:<><Home/></>
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
    
    
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
