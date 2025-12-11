import { useState } from "react";
import "./App.css";
function App() {

    //using single useState or single inputHandler function

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    });



    function inputHandler(e) {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        // setData({
        //     ...data,
        //     [name]: value
        // })

        // use callback in setData for best practice
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(data);

    function handleClear() {
        setData({
            name: "",
            email: "",
            phone: ""
        });
    }

    return (
        <>
            <input
                name="name"
                onChange={inputHandler}
                value={data.name}
                type="text"
                placeholder="Write your name ..."
            />
            <br />
            <br />
            <input
                name="email"
                onChange={inputHandler}
                value={data.email}
                type="email"
                placeholder="Write your Email ..."
            />
            <br />
            <br />
            <input
                name="phone"
                onChange={inputHandler}
                value={data.phone}
                type="number"
                placeholder="Write your Phone Number ..."
            />
            <br />
            <br />

            <button onClick={handleClear}>Clear</button>

            <br />

            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </>
    );
}

export default App;
