import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = (a) =>
    a.isActive
      ? "text-white underline underline-offset-8"
      : "text-[#1b323b] hover:text-white";

  return (
    <header className="sticky top-0 z-50 bg-[#3d84a0]">
      <div
        className="
          max-w-[1400px] mx-auto
          h-14 sm:h-16
          px-4 sm:px-6
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.Xtym3XiNcZ_36TfLlC1oqgHaFj?pid=Api&P=0&h=180"
          alt="logo"
          className="
            h-8 sm:h-10
            w-auto
            object-contain
          "
        />

        {/* Nav Links */}
        <nav
          className="
            flex items-center
            gap-4 sm:gap-8
            text-base sm:text-lg md:text-xl
            font-semibold
          "
        >
          <NavLink className={navClass} to="/">
            Home
          </NavLink>

          <NavLink className={navClass} to="/product">
            Product
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
