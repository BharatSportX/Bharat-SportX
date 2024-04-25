import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Leagues from './components/ALLSports/Football/Competitions/Leagues/Leagues';
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
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
