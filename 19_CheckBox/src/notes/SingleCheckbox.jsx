import { useState } from "react";
import "./App.css";

function App() {
  const [isCheck, setIsCheck] = useState(false);

  function handleCheck(e) {
    console.log(e.target.checked); // it means toggle the current status
    setIsCheck(e.target.checked);
  }

  return (
    <div className="select-none">
      <label htmlFor="cd">
        <input
          type="checkbox"
          id="cd"
          checked={isCheck}
          onChange={handleCheck}
        />
        This is only for single checkbox
      </label>
    </div>
  );
}

export default App;
