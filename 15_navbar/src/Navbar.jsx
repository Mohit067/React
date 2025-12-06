import React, { useState } from "react";

const Navbar = () => {
  return (
    <div>
      <div className="absolute w-screen text-3xl top-0 left-0 flex justify-between bg-amber-500 p-10">
        <p>Logo</p>
        <div className="flex gap-10 items-center justify-center max-[800px]:hidden">
          <a href="#" className="border rounded ">
            Home
          </a>
          <a href="#" className="border rounded ">
            About
          </a>
          <a href="#" className="border rounded ">
            Portfolio
          </a>
          <a href="#" className="border rounded ">
            Phone
          </a>
          <a href="#" className="border rounded ">
            New
          </a>
        </div>
        <span className="bg-cyan-200 m-2 p-3 cursor-pointer max-[700px]:hidden">
          Card
        </span>
      </div>
    </div>
  );
};

export default Navbar;
