import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {


  return (
    <div className='flex justify-center items-center flex-col gap-12'>
      {/* jab dikhega jab about/a1 ya about/a2 karenge to ye outlet dikhega */}
      <div className=' bg-amber-500'><Outlet /></div>
      {"Wrte /a1 or /a2 for redirect other section in url params"}
      <div >About</div>
    </div>
  )
}

export default About