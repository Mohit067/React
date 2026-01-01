import axios from 'axios'
import './App.css'
import { useState } from 'react'

function Post() {

  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  const config = {
    method: 'post',
    url: 'https://695510441cd5294d2c7e4d10.mockapi.io/api/v1/users',
    data:{
      name: user.name,
      age: user.age
    }
  }

  const postData = async () => {
    let response = await axios(config);
    console.log(response.data);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }


  return (
    <div>
      <div>
        <input type="text" placeholder='Enter Your Name' value={user.name} name='name' onChange={handleChange} />
        <input type="number" placeholder='Enter Your Age' value={user.age} name='age' onChange={handleChange} />
      </div>
      <button onClick={postData}>Fetch Data</button>
    </div>
  )
}

export default Post