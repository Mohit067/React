import React from 'react'
import Question from './question'
import Timer from './Timer'

const Result = ({ score, onReset }) => {

  return (
    <div>
      <div className='p-1 m-1 text-5xl'>Result</div>
      <div className='p-1 m-1 text-5xl'>Your Score is : {score}</div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Result