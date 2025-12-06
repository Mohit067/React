import React, { useState } from "react";

const conditional = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div>
      <button onClick={handleToggle}>Click Me</button>

      {toggle ? (
        <h1>Toggle true ho chuka hai</h1>
      ) : (
        <h1>Toggle false ho chuka hai</h1>
      )}
    </div>
  );
};

export default conditional;
