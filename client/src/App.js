import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

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
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
