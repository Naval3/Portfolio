import React from "react";
import Img from "./Img.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <div className="bg-blue-300 bg-fixed h-screen flex flex-wrap justify-center items-center ">
        <img src={Img} alt="Naval's img" className="w-44 md:w-auto" />
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl ">
            Hi,I'm
            <span className="text-[#178a20] font-medium">Naval,</span>
            <br></br>Web Developer
          </h1>

          <a
            href="https://drive.google.com/file/d/1vuR2Mx6AvNp9gYBcRDZOEsB22eOMipGN/view?usp=sharing"
            target="_blank"
            className="px-4 py-3 text-center font-semibold hover:text-white bg-red-500 rounded-md hover:bg-red-700"
          >
            Download Resume
          </a>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/naval-koranga-8561341a9"
              target="_blank"
            >
              <AiFillLinkedin className="text-4xl animate-bounce cursor-pointer" />
            </a>

            <a href="https://github.com/Naval3" target="_blank">
              <AiFillGithub className="text-4xl animate-bounce cursor-pointer" />
            </a>
            <a href="https://codinghustle.online/" target="_blank">
              <FaBlogger className="text-4xl animate-bounce cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
