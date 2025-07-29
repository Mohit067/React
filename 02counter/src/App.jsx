import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 1;
  let [counter, setCounter] = useState(0);

  function addValue () {
    console.log("Clicke", Math.random(), counter);
    counter++;
    if(counter > 20){
      counter = 20;
      return;
    }
    setCounter(counter);
  }

  function removeValue () {
    console.log("Clicke", Math.random(), counter);
    counter--;
    if(counter<0){
      counter = 0;
      return;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Hello Mohit</h1>
      <h2>coutner value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
