import { useState } from "react";

export default function Card({title, discription}){

    const [count, setCount] = useState(0);
    return(
        <div className="card">
            <h2>{count}</h2>
            <button onClick={() => {setCount(count+1)}}>Increment</button>
            <h2>{title}</h2>
            <p>{discription}</p>
        </div>
    );
}