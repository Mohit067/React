import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatPass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if(isChar) str +="~`!@#$%^&*(){}[]|";
    if(isNumber) str += "0123456789";
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isChar, isNumber, setPassword]);

  const passRef = useRef(null);

  const copyPasswordOnClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    generatPass();
  },[length, isChar, isNumber, generatPass])
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="text-center space-y-6 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white">Password Generator</h1>

        <div className="flex flex-row justify-between gap-2">
          <input
            type="text"
            value={password}
            className="bg-gray-700 text-white px-4 py-2 rounded h-14 outline-none placeholder-gray-400 w-full"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPasswordOnClipBoard}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-20 h-14 shrink-0 outline-none cursor-pointer "
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-white text-left">
          <div className="flex flex-row justify-between ">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-80 accent-blue-600 cursor-pointer"
            />
            <label >Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="number"
              className="accent-blue-600 w-4 h-4 "
              checked={isNumber}
              onChange={(e) => setIsNumber(e.target.checked)}
            />
            <label htmlFor="number" className="text-lg text-orange-600">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="character"
              className="accent-blue-600 w-4 h-4"
              checked={isChar}
              onChange={(e) => setIsChar(e.target.checked)}
            />
            <label htmlFor="character" className="text-lg text-orange-600">Include Characters</label>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App
