import React from 'react'
import Navbar from './Navbar/Navbar'
import LiveUpdateNav from './LiveUpdatesPages/LiveUpdateNav'
import LiveUpdatesContent from './LiveUpdatesPages/LiveUpdatesContent'
import Footer from '../FrontPage/Footer'


export default function Home() {
  return (
    <div>
      <React.Fragment>
    
      
      <Navbar/>
      <LiveUpdateNav/>
      <LiveUpdatesContent/>
     <Footer/>
      </React.Fragment>
    </div>
    
  )
}
