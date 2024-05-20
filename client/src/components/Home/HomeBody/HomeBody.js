import React, { useContext } from 'react'
import NavContext from '../Navbar/NavContext/NavContext'
const HomeBody = () => {
  const {state}=useContext(NavContext)
  return (
    <div className=' overflow-x-hidden relative z-[-10] top-40'>
    {/*  for z index button may not be work think any oter way to access this search bar */}
      {state}
    </div>
  )
}

export default HomeBody
