import React, { useRef, useState } from "react";
import "./App.css";
function App() {
    // normal approach just use many stats and many handler functions
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleClear() {
        setName("");
        setEmail("");
    }

    function nameHandler(e) {
        setName(e.target.value);
    }
    function emailHandler(e) {
        setEmail(e.target.value);
    }

    return (
        <>
            <input
                onChange={nameHandler}
                value={name}
                type="text"
                placeholder="Write your name ..."
            />
            <br />
            <br />
            <input
                onChange={emailHandler}
                value={email}
                type="email"
                placeholder="Write your Email ..."
            />
            <br />
            <br />

            <button onClick={handleClear}>Clear</button>

            <br />

            <p>{name}</p>
            <p>{email}</p>
        </>
    );
}

export default App;
