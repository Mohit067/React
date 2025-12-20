import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function handleChange(e) {
    setData((prevData) => {
      return data.includes(e.target.value)
        ? prevData.filter((item) => {
            return item !== e.target.value;
          })
        : [...prevData, e.target.value];
    });
  }

  console.log(data);
  return (
    <div>
      <label className="select-none" htmlFor="html">
        <input
          type="checkbox"
          name="html"
          value={'html'}
          checked={data.includes('html')}
          onChange={handleChange}
        />{" "}
        HTML
      </label>
      <label className="select-none" htmlFor="css">
        <input
          type="checkbox"
          name="css"
          value={'css'}
          checked={data.includes('css')}
          onChange={handleChange}
        />{" "}
        CSS
      </label>
      <label className="select-none" htmlFor="js">
        <input
          type="checkbox"
          name="js"
          value={'js'}
          checked={data.includes('js')}
          onChange={handleChange}
        />{" "}
        JS
      </label>
    </div>
  );
}

export default App;
