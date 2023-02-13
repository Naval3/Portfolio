import React from "react";
import { GoThreeBars } from "react-icons/go";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <div className="bg-[#242B2E] w-full h-20">
      <nav className="flex flex-row justify-end h-full mr-5 items-center px-5 mx-auto">
        <div className="flex gap-4 md:gap-8">
          <div className="hidden gap-5 text-xl justify-end md:flex">
            <Link
              to="/"
              className="text-white cursor-pointer hover:text-green-700"
            >
              <h2>HOME</h2>
            </Link>

            <Link
              to="/about"
              className="text-white cursor-pointer hover:text-green-700"
            >
              <h2>ABOUT</h2>
            </Link>

            <Link
              to="/skills"
              className="text-white cursor-pointer hover:text-green-700"
            >
              <h2>SKILLS</h2>
            </Link>

            <Link
              to="/projects"
              className="text-white cursor-pointer hover:text-green-700"
            >
              <h2>PROJECTS</h2>
            </Link>

            <Link
              to="/contact"
              className="text-white cursor-pointer hover:text-green-700"
            >
              <h2>CONTACT</h2>
            </Link>
          </div>

          {menuOpen == false && (
            <GoThreeBars
              onClick={handleMenuOpen}
              className="block text-3xl text-blue-300 md:hidden hover:cursor-pointer hover:text-primary-dark"
            />
          )}

          {menuOpen == true && (
            <HiX
              onClick={handleMenuClose}
              className="text-3xl md:hidden text-blue-300 hover:cursor-pointer hover:text-primary-dark"
            />
          )}
        </div>
      </nav>
      {menuOpen == true && (
        <MobileMenu menuClose={handleMenuClose} className="mb-1" />
      )}
    </div>
  );
}

export default NavBar;
