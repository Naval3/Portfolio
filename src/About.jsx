import React from "react";
import Img from "./Img.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <div className="bg-[#242B2E] flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I love to build amazing Web apps.
          </h1>
          <p className="mb-8 text-white leading-relaxed">
            I am a Web Developer, I worked in many projects with React.js and
            Tailwind css. I also made few projects from scratch.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </Link>
            <Link
              to="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Naval's pic"
            src={Img}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
