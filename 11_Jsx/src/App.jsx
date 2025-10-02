import React from "react";
import "./App.css";
import Cdd from "./Cdd";

function App() {
  let name = "Mohit";

  function greet() {
    return "Good evening";
  }

  let age = 19;

  let arr = ["Iron man", "spider man", "wanda", "thor", "dr. strange"];

  return (
    <>
      {/*  styling in jsx like js object key: "value" */}
      <h1
        style={{
          maxHeight: "400px",
          maxWidth: "600px",
          backgroundColor: "#313131",
          color: "#cfc3c7ff",
        }}
      >
        {/* we can pass variable, funtion call, ternary operator in jsx inside html */}
        Hellow
        {name}
        {greet()}
        {age > 18 ? "you are valid for vote" : "you not valid"}
      </h1>

      {/* sort curcuiting */}
      {true && <h2>This is sort curcuiting</h2>}

      {/* we can use map inside html in jsx not for or other loop */}
      {arr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}

      {/* Behind the scene */}

      <h1 className="heading" style={{ backgroundColor: "dimgray" }}>
        Hellow, Muskan
      </h1>
      {React.createElement(
        "h1",
        { className: "heading", style: { backgroundColor: "dimgray" } },
        "Hellow, Muskan"
      )}
      <a href="www.google.com" className="link">
        google
      </a>{" "}
      {React.createElement(
        "a",
        { href: "www.google.com", className: "link" },
        "google"
      )}

      <h1 className="heading">hello, {name}</h1>
      {React.createElement("h1", { className: "heading" }, `hello, ${name}`)}
      <Cdd />
    </>
  );
}

export default App;
