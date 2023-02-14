import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-blue-300 min-h-screen pt-3">
      <h1 className="text-2xl text-center">About Me</h1>
      <div className="flex px-10 py-20 md:flex-row flex-col">
        <div className="lg:flex-grow  md:w-1/2 md:pr-16 flex flex-col justify-center md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            I love building amazing Web apps.
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            I am a Web Developer, I worked in many projects with React.js and
            Tailwind css. I have also made few projects from scratch.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="text-center inline-flex w-full bg-green-500 border-0 py-2 px-2 focus:outline-none hover:text-white hover:bg-green-600 rounded text-md font-semibold"
            >
              Work With Me
            </Link>
            <Link
              to="/projects"
              className="text-center ml-4 inline-flex w-full bg-gray-500 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md font-semibold"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="container md:w-1/2 bg-gray-500 px-5 py-10 mt-3 rounded-xl">
          <h1 className="text-center text-xl">Blogging</h1>
          <p className="text-xl">
            I just started writing blogs on my domain ie.{" "}
            <a
              href="https://codinghustle.online/"
              className="text-green-500"
              target="_blank"
            >
              codinghustle.online
            </a>{" "}
            through hashnode.dev which is a huge platform for developer
            community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
