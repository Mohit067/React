import React from 'react'
import { useMyStore } from './store'
import Navbar from './components/Navbar'

const App = () => {
  // const {setCount, capitalName} = useMyStore();
  const setCount = useMyStore(state => state.setCount);
  const capitalName = useMyStore(state => state.capitalName);

  return (
      <div>
        <Navbar />
        <button onClick={setCount}>Click</button>
        <button onClick={capitalName}>capital</button>
      </div>
  )
}

export default App