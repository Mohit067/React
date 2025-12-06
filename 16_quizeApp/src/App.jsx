import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Question from "./components/question";
import Result from "./components/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  const [leftTime, setLeftTime] = useState(60);
  const [resetKey, setResetKey] = useState(0);
  function handleReset() {
      setIsOver(false);
      setScore(0);
      setLeftTime(60);   // reset timer
      setResetKey(prev => prev + 1); 
  }
  return (
    <>
      <Timer setIsOver={setIsOver}  leftTime={leftTime} setLeftTime={setLeftTime}  />
      {!isOver ? <Question setIsOver={setIsOver} setScore={setScore} setLeftTime={setLeftTime} key={resetKey}/> : <Result score={score}  onReset={handleReset}/>}
    </>
  );
}

export default App;
