import React from 'react'
import C from './C'
import D from './D'
import { useMyContext } from '../context/MyContext'
const A = () => {
  const { count, setCount } = useMyContext(); 
  const handleClick = () => {
    setCount(count+1)
  }
  console.log(count);
  return (
    <div className='bg-amber-500 p-10'>
      A <button className='bg-gray-800 rounded p-2 cursor-pointer hover:scale-95' onClick={handleClick}>Click me</button>
      <C />
      <D />
    </div>
  )
}

export default A