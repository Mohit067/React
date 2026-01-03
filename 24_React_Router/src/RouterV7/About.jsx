import React from 'react'
import { useLoaderData } from 'react-router-dom'

function About() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className='page'>About</div>
      {data.map((item, index) => {
        return <h1 key={index}>{item.id}</h1>
      })}
    </div>
  )
}

export default About