import React, { useState } from "react";

const Button = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
        {
            isOpen && (
                <div className="h-screen w-screen bg-gray-500/50 top-0 left-0 absolute flex">
                    <button onClick={handleModal} className="absolute top-10 right-10">X</button>
                    <div className="flex flex-col items-center justify-center m-auto gap-4  w-96 h-48 bg-amber-600 border-2 rounded-4xl">
                        <p className="text-2xl">Are you sure you want {text}</p>
                        <div className="flex items-center gap-24 justify-center">
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                    </div>
                </div>
            )
        }

        <button onClick={handleModal}>{text}</button>
    </div>
  );
};

export default Button;
