import React from "react";

function Projects() {
  return (
    <div className="flex flex-grow bg-blue-300">
      <div className="m-2 space-y-2 grow md:px-20">
        <p className="py-3 mt-2 text-3xl font-bold text-center">
          Featured works
        </p>

        <div className="space-y-3">
          <div className="grid-cols-2 md:grid">
            <div>
              <a href="https://meta-mall.netlify.app/" target="_blank">
                <img
                  className="transition duration-300 ease-in-out delay-150 border rounded border-cyan-300 hover:-translate-y-1 hover:scale-110"
                  src="https://media.discordapp.net/attachments/1019293202521538642/1024530732690985042/meta_img.PNG?width=1002&height=473"
                />
              </a>
            </div>
            <div className="md:ml-4">
              <h1 className="text-xl font-bold">e-commerce</h1>

              <div className="flex gap-2">
                <p className="px-2 font-bold text-white bg-blue-900 rounded-md">
                  2022
                </p>
                <p className="text-gray-400">Dashboard</p>
              </div>

              <p>
                A simple Ecommerce website built with react and tailwind CSS.
                JSON server used for the backend to store user data for
                authentication, orders.Context API used for state management,
                React Router used for navigation.
              </p>
            </div>
          </div>
          <hr />

          <div className="grid-cols-2 md:grid">
            <div>
              <a href="https://navaltodo.netlify.app/" target="_blank">
                <img
                  className="transition duration-300 ease-in-out delay-150 border rounded border-cyan-300 hover:-translate-y-1 hover:scale-110"
                  src="https://media.discordapp.net/attachments/1019293202521538642/1032918721360035840/todo.PNG?width=1002&height=473"
                />
              </a>
            </div>
            <div className="md:ml-4">
              <h1 className="text-xl font-bold">Todo</h1>

              <div className="flex gap-2">
                <p className="px-2 font-bold text-white bg-blue-900 rounded-md">
                  2022
                </p>
                <p className="text-gray-400">Dashboard</p>
              </div>

              <p>
                An interactive Todo project which stores two different arrays
                for storing todo list and done list seperately. It takes value
                in its input and push it into todo array with map to attact a
                checklist and a delete button.
              </p>
            </div>
          </div>
          <hr />

          <div className="grid-cols-2 md:grid">
            <div>
              <a
                href="https://assignment-5-navalkoranga.codeyogi-batch-2.repl.co/"
                target="_blank"
              >
                <img
                  className="transition duration-300 ease-in-out delay-150 border rounded border-cyan-300 hover:-translate-y-1 hover:scale-110"
                  src="https://media.discordapp.net/attachments/1019293202521538642/1024536668100894830/flex.jpg?width=1001&height=473"
                />
              </a>
            </div>
            <div className="md:ml-4">
              <h1 className="text-xl font-bold">Flex cards</h1>

              <div className="flex gap-2">
                <p className="px-2 font-bold text-white bg-blue-900 rounded-md">
                  2022
                </p>
                <p className="text-gray-400">Dashboard</p>
              </div>

              <p>
                It's just a flex cards project which uses flex and flex wrap
                property to make a design responsive.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Projects;