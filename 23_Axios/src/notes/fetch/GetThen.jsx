import React, { useEffect, useState } from "react";
import "./App.css";

function GetFetchThen() {

  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json()).then((data) => setUser(data));
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    fetchData();
  },[])

  console.log(user)

  return (
    <div>
      <h1 className="bg-red-400">Users :- {user.map((user,index) => {
        return (
            <div className="flex" key={index}>{user.id} : {user.name}</div>
        )
      })}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default GetFetchThen;
