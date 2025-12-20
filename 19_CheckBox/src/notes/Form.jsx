import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    termCond: false,
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e){
    const {name, value, checked, type} = e.target;
    setFormData({
      ...formData,
      [name] : type === 'checkbox' ? checked : value
    })
  }


  return (
    <form onSubmit={handleSubmit} className="select-none">
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name={"email"}
            id="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your email ...."
          />{" "}
          Email
        </label>

        <br />
        <br />

        <label className="select-none" htmlFor="tc">
          <input
            type="checkbox"
            name={"termCond"}
            id="tc"
            checked={formData.termCond}
            onChange={handleChange}
          />{" "}
          Term & conditions
        </label>
      </div>
      <button type="submit">submit</button>
    </form>

  );
}

export default App;
