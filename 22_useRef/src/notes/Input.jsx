import { useRef } from 'react'
import './App.css'

const Input = () => {

  const inputRef = useRef();

  const handleInput = () => {
    inputRef.current.focus()
  }

  return (
    <div className='flex h-screen justify-center items-center '>
      <input className='p-5 border rounded-2xl text-3xl' ref={inputRef}  type="text" placeholder='write your name here' />
      <button className='p-6 px-10 bg-gray-700 border-2 rounded-2xl cursor-pointer text-white text-3xl' onClick={handleInput}>Click Me</button>
    </div>
  )
}

export default Input