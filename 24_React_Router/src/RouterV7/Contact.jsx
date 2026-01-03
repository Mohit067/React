import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Contact() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact/user')
  }
  return (
    <div className='flex flex-col justify-center items-center mt-12 gap-8'>
      <div>Contact</div>
      <button onClick={handleClick}>User</button>
      <Outlet />
    </div>
  )
}

export default Contact