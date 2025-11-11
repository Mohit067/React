import React from 'react'
import './First.css'
export default function First({title}) {
  return (
    <div className='first'>
        <h1>{title}</h1>
        <button className='btn'>Click Me</button>
    </div>
  )
}
