import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex justify-center bg-orange-600 gap-8 text-2xl items-center h-16'>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to={'/help'}>Help</NavLink>
      </div>
      {/* outlet matlab jis jo url hoga usi element ko dikhana isme sare element hote h jo bhi route children mai pass krte h */}
      <Outlet />
    </>
  )
}

export default Navbar