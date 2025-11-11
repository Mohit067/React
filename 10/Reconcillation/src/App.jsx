import { useState } from 'react'
import './App.css'
import Input from './Component/Input';

function App() {
  
  const [isStudent, setIsStudent] = useState(false);

  return (
    <>
      <form>
        <Input type="text" placeholder='Enter your name' />
        <br />
        <input 
          type="checkbox"
          id='student'
          name='student'
          value={isStudent}
          onChange={() => {setIsStudent(!isStudent)}}
        />
        <label htmlFor="student">Are you a student</label>
        
        {/* { isStudent ? <Input type="text" placeholder="Enter your school name"/> : null }   // spent extra space for this process
        { !isStudent ? <Input type="text" placeholder="Enter your school name"/> : null } */}

        { isStudent ? <Input type="text" placeholder="Enter your school name" key="school"/> : <Input type="text" placeholder="Enter your company name" key="company"/> }
      </form>
    </>
  )
}

export default App
