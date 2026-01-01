import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Delete, Pencil, RefreshCcw, Save, Send } from "lucide-react";


function Full() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  // fetch the data
  const fetchData = async () => {
    let response = await axios({
      url: "https://695510441cd5294d2c7e4d10.mockapi.io/api/v1/users",
    });
    // console.log(response.data);
    setUsers(response.data);
  };

  // post the data
  const postData = async () => {
    if(formData.name === "" || formData.age === ""){
      alert("fill all details");
      return;
    }
    let response = await axios({
      method: "post",
      url: "https://695510441cd5294d2c7e4d10.mockapi.io/api/v1/users",
      data: formData,
    });

    setFormData({
      name: "",
      age: "",
    });

    fetchData();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // delete the data
  const deleteData = async (id) => {
    try {
      let response = await axios({
        method: "delete",
        url: `https://695510441cd5294d2c7e4d10.mockapi.io/api/v1/users/${id}`,
      });
      console.log(response.data);
      if (response.status === 200 || response.status === 204) {
        console.log("Data deleted successfully");

        // UI update
        setUsers((prev) => prev.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.log("Error in deleting", error.response?.data || error.message);
    }
  };

  // update the data
  const updateData = async () => {
    try {
      let response = await axios({
        method: "put",
        url: `https://695510441cd5294d2c7e4d10.mockapi.io/api/v1/users/${formData.id}`,
        data: formData,
      });
      
      // reset
      setFormData({ name: "", age: "" });
      fetchData();
    } catch (error) {
      console.log("Error in updating", error);
    }
  };


  // for first render fethc all users
  useEffect(() => {
    fetchData();
  },[])

  console.log(users);

  return (
    <div className="flex flex-col">
      {/* listing users */}
      <div>
        {users.map((user) => {
          return (
            <div
              className="border p-4 m-4 flex gap-8 justify-between items-start rounded"
              key={user.id}
            >
              <div className="flex flex-col items-start gap-2">
                <p className="text-2xl">Name : {user.name}</p>
                <p className="text-2xl">Age : {user.age}</p>
              </div>
              <div className="flex gap-3 flex-col">
                <button
                  className="flex justify-center gap-4 items-center"
                  onClick={() =>
                    setFormData({
                      ...user,
                      editMode: true,
                    })
                  }
                >
                  <Pencil size={18} />
                  Edit Data
                </button>
                <button className="flex justify-center gap-4 items-center" onClick={() => deleteData(user.id)}> <Delete size={24}/> Delete Data</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* form handling */}
      <div className="flex flex-col m-4">
        <input
          className="p-4 border rounded mb-2"
          type="text"
          value={formData.name}
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          className="p-4 border rounded mb-2"
          type="number"
          value={formData.age}
          name="age"
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>

      {/* button for fetch post */}
      <div className="flex flex-col gap-4">
        {formData.editMode ? (
          <button className="flex justify-center gap-4 items-center" onClick={updateData}> <Save size={24}/> Save Data</button>
        ) : (
          <button className="flex justify-center gap-4 items-center" onClick={postData}><Send size={18} /> Post Data</button>
        )}
        <button className="flex justify-center gap-4 items-center"  onClick={fetchData}><RefreshCcw size={18} /> Fetch Data</button>
      </div>
    </div>
  );
}

export default Full;
