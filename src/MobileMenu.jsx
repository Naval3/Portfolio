import React from "react";
import { Link } from "react-router-dom";

// for Hamburger icon
function MobileMenu({ menuClose }) {
  return (
    <div onClick={menuClose}>
      <div className="flex flex-col mb-1 md:hidden translate-y-0 ">
        <Link
          className="px-4 text-center bg-blue-300 border-t hover:text-green-700 border-y-gray-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-4 text-center bg-blue-300 border-t hover:text-green-700 border-y-gray-500"
          to="/about"
        >
          About
        </Link>
        <Link
          className="px-4 text-center bg-blue-300 border-t hover:text-green-700 border-y-gray-500"
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className="px-4 text-center bg-blue-300 border-t hover:text-green-700 border-y-gray-500"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className="px-4 text-center bg-blue-300 border-t border-b hover:text-green-700 border-y-gray-500"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
