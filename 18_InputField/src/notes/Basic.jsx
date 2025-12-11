import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  console.log(state);
  return (
    <>
      <input
        value={state}
        type="text"
        placeholder="Write here"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <br />
      <br />

      <button onClick={() => {setState('')}}>Clear</button>
      <h1>{state}</h1>
    </>
  );
}

export default App;
