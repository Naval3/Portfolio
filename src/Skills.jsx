import React from "react";
import Html from "/src/Html.png";
import JS from "/src/JavaScript.png";
import Css from "/src/Css.png";
import Tailwind from "/src/Tailwind.png";
import Reacticon from "/src/Reacticon.png";
import Typescript from "/src/Typescript.png";

function Skills() {
  return (
    <div className="bg-blue-300 ">
      <h2 className="text-5xl text-black pt-5 font-bold text-center">
        My Skills
      </h2>

      <div className="flex justify-center mt-3 items-center">
        <div className="flex lg:grid grid-cols-3 gap-3 items-center flex-wrap justify-center">
          {/*Html  Card*/}
          <div className="bg-white w-72 border border-md rounded-md flex flex-col">
            <img src={Html} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">HTML</h2>
              <p className="">
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
          {/*JavaScript  Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={JS} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">JavaScript</h2>
              <p>
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
          {/* CSS Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Css} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">CSS</h2>
              <p>
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
          {/* Tailwind Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Tailwind} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">Tailwind</h2>
              <p>
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
          {/* React Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Reacticon} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">React</h2>
              <p>
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
          {/* TS Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Typescript} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-[#0AD6A0]">TypeScript</h2>
              <p>
                I have worked on a wide range of industry level projects using
                JavaScript.
              </p>
              <p>
                <span className="text-[#0AD6A0] text-xl">Experience - </span>I
                have an experience of 1 year with MongoDB and I am able to
                create projects like ecommerce platform using React in MERN
                Stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
