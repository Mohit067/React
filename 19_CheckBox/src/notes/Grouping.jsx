import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  // one method to handle languages true or false
  function handleSelect(e) {
    const { name } = e.target;
    setLanguages((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
    // console.log(e.target.name);
  }

  // create a values array
  const isSelectAll = Object.values(languages).every(Boolean);
  // console.log(isSelectAll);

  //for selecting all checkbox
  function handleSelectAll(e) {
    setLanguages({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked,
    });
  }

  return (
    <>
      <div>
        <input
          name="selectAll"
          type="checkbox"
          checked={isSelectAll}
          onChange={handleSelectAll}
        />

        {/* here we use mapping for iterate all key in language object */}
        {Object.keys(languages).map((item, index) => {
          return (
            <label className="select-none" key={index} htmlFor={item}>
              <input
                id={item}
                name={item}
                type="checkbox"
                checked={languages[item]}
                onChange={handleSelect}
              />
              {item.toUpperCase()}
            </label>
          );
        })}
      </div>
      
      {languages.html && "Html Select"} <br />
      {languages.css && "Css Select"} <br />
      {languages.js && "Js Select"} <br />
    </>
  );
}

export default App;
