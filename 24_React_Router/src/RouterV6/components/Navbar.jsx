import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {

  const arr = ['Dynamic Route First', 'Dynamic Route Second', 'Dynamic Route Third'];
  const location = useLocation();
  const showContact = location.pathname.startsWith('/contact');
  console.log(window.history);
  return (
    <>
    <div className='flex items-center justify-center gap-5 bg-gray-500 h-16 text-2xl'>
        {/* In react we don't use anchor tag */}
        {/* <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/help">Help</a> */}

        {/* Link tag bhi use kar sakte */}
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link> */}

        {/* NavLink are very useful because they have extra feature */}
        <NavLink to="/" className={(a) => a.isActive ? 'text-white' : 'text-gray-700'}>Home</NavLink>
        <NavLink to="/contact" className={(a) => a.isActive ? 'text-white' : 'text-gray-700'}>Contact</NavLink>
        <NavLink to="/about" className={(a) => a.isActive ? 'text-white' : 'text-gray-700'}>About</NavLink>
        <NavLink to="/help" className={(a) => a.isActive ? 'text-white' : 'text-gray-700'}>Help</NavLink>

        
    </div>
    {showContact && (
      <div className='flex items-center justify-center gap-8 h-12 m-3 text-2xl'>
        {arr.map((item, index) => {
            return (
              <NavLink key={index} to={`/contact/${item}`} className={(a) => a.isActive ? 'text-white' : 'text-pink-400'}>{item}</NavLink>
            )
          })}
      </div>
    )}
    </>
  )
}

export default Navbar



