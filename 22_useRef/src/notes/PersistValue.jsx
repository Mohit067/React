import React, { useEffect, useRef, useState } from 'react'

function PersistValue() {

  const [count, setCount] = useState(0);

  let countRef = useRef(0);

  function handleClick(){
    setCount(count+1);
    countRef.current += 1;
    console.log(countRef.current)
    
  }
  useEffect(() => {
    console.log("re-remde hua hai");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p  className="text-2xl font-bold">{countRef.current}</p>

      <button
        onClick={handleClick}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Increment
      </button>
  </div>

  )
}

export default PersistValue