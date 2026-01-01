import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function Get() {

  const [user, setUser] = useState([]);

  const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/photos',
  }

  const fetchData = async () => {
    let response = await axios(config);
    setUser(response.data);
    console.log(response.data);
  }

//   useEffect(() => {
//     fetchData();
//   }, [])


  return (
    <div>
      {user.slice(0,10).map((user, index) => {
        return <h1 className='flex' key={index}>{user.id} : {user.url}</h1>
      })}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Get