import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LeaguesHome from './components/ALLSports/Football/Competitions/Leagues/LeaguesHome';
import Leagues from './components/ALLSports/Football/Competitions/Leagues/Leagues';
import Cups from './components/ALLSports/Football/Competitions/Leagues/Cup';
import CupPageDetails from './components/ALLSports/Football/Competitions/Leagues/CupPageDetails';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><FrontPage/></>
    },
    {
      path:'/home',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/FootballLeagues',
      element:<><Leagues/></>
    },
    {
      path:'/FootballWorldCup',
      element:<><Cups/></>
    },
    {
      path:'/LeagueHome',
      element:<><LeaguesHome/></>
    },
    {
      path:'/cup/:id',
      element:<><CupPageDetails/></>
    },
    
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
