import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to='/'><li>FrontPage</li></NavLink>
      <NavLink to='/home'><li>Home</li></NavLink>
      
    </div>
  )
}

export default Navbar
