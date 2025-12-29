import React, { useState } from "react";

function Group() {
  const [gender, setGender] = useState("other");

  let genders = ["male", "female", "other"];
  console.log(gender);
  return (
    <div className="select-none flex flex-col gap-5">
      {genders.map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              type="radio"
              name="gender"
              id={item}
              value={item}
              checked={gender === item}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            {item}
          </label>
        );
      })}
    </div>
  );
}

export default Group;
