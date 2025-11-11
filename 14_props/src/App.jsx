import "./App.css";
import Array from "./components/Array";
import Distructure from "./components/Distructure";
import Function from "./components/Function";
import Object from "./components/Object";
import Simple from "./components/simple";
import Spread from "./components/Spread";

function App() {

  let obj = {
    name: "Mohit",
    age: 20,
  }

  function handleClick(){
    console.log("button Click")
  }

  let obj1 = {
    name: "Mohit",
    age: 20,
  }

  let arr = [1,2,3,4,5];

  return (
    <div style={{display: "flex", flexDirection:"column", gap:"1rem"}}>
      <Simple name="Mohit" age={20}/>

      <Distructure name="Roht" age={25}/>

      <Object obj={obj}/>

      <Function fun={handleClick} />
      
      <Array arr={arr}/>

      <Spread {...obj1} />

    </div>
  )
}

export default App;
