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
      <h1 className="text-3xl text-black pt-5 font-bold text-center">
        My Skills
      </h1>

      <div className="flex justify-center mt-3 items-center">
        <div className="flex lg:grid grid-cols-3 gap-3 items-center flex-wrap justify-center">
          {/*Html  Card*/}
          <div className="bg-white w-72 border border-md rounded-md flex flex-col">
            <img src={Html} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">HTML</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                HTML.
              </p>
            </div>
          </div>
          {/*JavaScript  Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={JS} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">JavaScript</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                JS.
              </p>
            </div>
          </div>
          {/* CSS Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Css} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">CSS</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                CSS.
              </p>
            </div>
          </div>
          {/* Tailwind Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Tailwind} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">Tailwind</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                Taildind.
              </p>
            </div>
          </div>
          {/* TS Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Typescript} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">TypeScript</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                TS.
              </p>
            </div>
          </div>
          {/* React Card*/}
          <div className="bg-white w-72 border border-md rounded-md m-3">
            <img src={Reacticon} className="w-full border-md" />

            <div className="font-xl p-3">
              <h2 className="text-center text-xl text-green-500">React</h2>
              <p className="text-center">
                I have worked on a wide range of industry level projects using
                React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
