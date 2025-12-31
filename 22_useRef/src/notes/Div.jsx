import React, { useRef } from 'react'
import './App.css'

const Div = () => {

  const divRef = useRef()
  const handleClick = () => {
    divRef.current.style.borderRadius = '50%';
    divRef.current.style.backgroundColor = 'green';
    divRef.current.style.transition = 'ease-in 1s';
  }

  return (
    <div className='flex h-screen justify-center items-center flex-col '>
      <div ref={divRef} className='bg-amber-500 mb-10 p-96'></div>
      <button className='p-6 px-10 bg-gray-700 border-2 rounded-2xl cursor-pointer  text-white text-3xl' onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Div