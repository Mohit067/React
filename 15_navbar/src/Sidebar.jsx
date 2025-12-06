import React, { useState } from 'react'

function Sidebar() {

    const [toggle, setToggle] = useState(false)
    function handleClick() {
        setToggle(!toggle);
    }

    return (
        <div>
            {/* Sidebar */}
            <div className={`
                        fixed top-0 left-0
                        h-screen w-96 bg-black/90 text-white
                        border rounded
                        flex justify-center flex-col gap-20
                        transform transition-transform duration-300 ease-in-out
                        ${toggle ? "-translate-x-95" : "translate-x-0"}
                    `}
            >

                <div className="flex flex-col gap-10 absolute left-14 text-3xl">
                    <h1 className="text-5xl">Home</h1>
                    <ul>Page</ul>
                    <ul>Portfolio</ul>
                    <ul>New</ul>
                    <ul>Phone</ul>
                </div>
                <button onClick={handleClick} className="
                text-white fixed top-5 left-60 
                bg-blue-400 border rounded h-12 w-24 p-4 m-4 
                flex justify-center items-center
                ">close</button>
            </div>

            {/* Toggle Button */}
            <button
                onClick={handleClick}
                className="
                min-[700px]:hidden 
                text-white fixed top-5 right-5 
                bg-blue-400 border rounded 
                h-12 w-24 p-4 m-4 
                flex justify-center items-center
                "
            >
                {toggle ? "Close" : "Open"}
            </button>
        </div>
    )
}

export default Sidebar;
