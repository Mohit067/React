import React, { useState } from 'react'
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {id:1, name: "mohit"},
    {id:2, name: "aditi"}
  ]);

  const deletePost = async (id) => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
      })
      if(response.ok){
        console.log("successfully deleted");
      }
    } catch (error) {
      console.log("error", error);
    }
    setPosts(posts.filter((post) => post.id !== id))
  }


  return (
    <div>
      <div>
        {posts.map((post,index) => {
          return(
            <div key={index}>
              {post.name}
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App