import React, { useRef } from 'react'
import './App.css'
function App() {

  const inputRef = useRef(null);

  function submit(){
    console.log(inputRef.current.value);
    console.log("ho gya");
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder='Write here ... ' />
      <br /><br />
      <button onClick={submit}>Submit</button>
      {/* <h1>{inputRef.current.value}</h1> we cann't access here */}
    </>
  )
}

export default App