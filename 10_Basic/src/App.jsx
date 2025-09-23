import { useState } from "react";
import "./App.css";
import Component from "./components/Component";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  function handleSubmit() {
    setCount(count + 1);
  }

  return (
    <div>
      {/** one way to use useState*/}
      <h3>
        <button onClick={handleSubmit}>Increment</button>
      </h3>
      <h1>{count}</h1>

      {/** second way to use useState */}
      <h3>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </h3>
      <Component />
      <div className="navbar">
        <Navbar name="Mohit" city="Khargapur" num={67} />
        <Navbar name="Rohit" city="Khargapur" num={68} />
        <Navbar name="Sohit" city="Khargapur" num={69} />
        <Navbar name="Kohit" city="Khargapur" num={70} />
      </div>
      hellow
    </div>
  );
}

export default App;
