import React, { useEffect, useState } from 'react'
import './App.css'

function GetFetchAsync() {

  const [users, setUser] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      console.log(data)
      setUser(data);
    } catch (error) {
      console.log('Error in fetching data', error);
    }
  }

  // useEffect(() => { // when we want on first render
  //   fetchData();
  // }, [])

  return (
    <div>
      <h1 className='bg-red-400'>User Details {users.map((users, index) => {
        return <div key={index}>{users.id} {users.name}</div>
      })}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default GetFetchAsync