import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div
          className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-3xl bg-white'
        >
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}
          >red</button>
          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}
          >green</button>
          <button 
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "yellow"}}
          >yellow</button>
          <button 
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "pink"}}
          >pink</button>
          <button 
          onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "gray"}}
          >gray</button>
          <button 
          onClick={() => setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "orange"}}
          >orange</button>
          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button 
          onClick={() => setColor("skyblue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "skyblue"}}
          >skyblue</button>
          <button 
          onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "purple"}}
          >purple</button>
          <button 
          onClick={() => setColor("Crimson")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "Crimson"}}
          >Crimson</button>
          <button 
          onClick={() => setColor("Turquoise")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "Turquoise"}}
          >Turquoise</button>
          <button 
          onClick={() => setColor("MidnightBlue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "MidnightBlue"}}
          >Midnight Blue</button>
          <button 
          onClick={() => setColor("Coral")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "Coral"}}
          >Coral</button>
        </div>
      </div>
    </div>
  )
}

export default App
