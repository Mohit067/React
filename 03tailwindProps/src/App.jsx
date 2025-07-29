import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-700 text-black p-4 m-4 rounded-md'>Hello Mohit</h1>
      <div className='flex justify-between'>
        <Card username={"Mohit"} />
        <Card username={"Rohit"}/>
        <Card username={"Sohit"}/>
        <Card/>
        
      </div>
    </>
  )
}

export default App
