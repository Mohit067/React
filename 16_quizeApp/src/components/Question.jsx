import React, { useState } from "react";
import data from "./question.json";
const Question = ({setIsOver, setScore, setLeftTime}) => {
  let random = Math.floor(Math.random()*99);
  const [currIdx, setCurrIdx] = useState(random);

  // console.log(score);
  function handleOptions(selectOption) {
    if(selectOption === data[currIdx].answer){
      setScore(prev => prev + 1);
    }
    if(currIdx < data.length - 1){
      setCurrIdx(prev => prev + 1);
    } else {
      setLeftTime(0);
      setIsOver(true);
    }
  }

  // console.log(data[currIdx]);

  return (
    <div className="p-4 m-5">
      <h2 className="pb-2 mb-4">{data[currIdx].question}</h2>
      <div className="flex flex-col gap-1.5">
        {data[currIdx].options.map((option, index) => {
          return (
            <button key={index} onClick={() => handleOptions(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Question;
