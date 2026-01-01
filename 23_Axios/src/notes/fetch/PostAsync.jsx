import React from 'react'
import './App.css'

function PostFetchAsync() {

  const postData = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        headers: {
          'content-Type': 'PostFetchAsynclication/json'
        },
        body: JSON.stringify({
          name: "mohit",
          age: 23,
        })
      })
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
        <button onClick={postData}>Post Data</button>
    </div>
  )
}

export default PostFetchAsync