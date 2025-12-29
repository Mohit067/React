import React, { useState } from "react";

function Multiple() {
  const [gender, setGender] = useState("other");

  return (
    <div className="select-none">
      <label htmlFor="male">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        male
      </label>{" "}
      <br />
      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        female
      </label>{" "}
      <br />
      <label htmlFor="other">
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === 'other'}
        />{" "}
        other
      </label>
    </div>
  );
}

export default Multiple;
