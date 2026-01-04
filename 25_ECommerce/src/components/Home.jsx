import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/product');
    }

    return (
        <div className="relative h-screen w-full">
        {/* Image */}
        <img
            className="h-full w-full object-cover"
            src="https://tse2.mm.bing.net/th/id/OIP.rH8zUatoe6KWqRmGJ2_wbwHaE7?pid=Api&P=0&h=180"
            alt="shopping"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-start items-start p-10 bg-black/30 text-white">
            <h1 className="text-4xl font-bold mb-4">Best For Shopping</h1>

            <p className="max-w-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque
            veniam ratione reiciendis.
            </p>

            <button onClick={handleClick}>
            View More
            </button>
        </div>
        </div>
    );
}

export default Home;
