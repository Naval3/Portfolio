import React from "react";

function Contact() {
  return (
    <div className="bg-blue-300 min-h-screen">
      <div className=" px-5 py-10 flex justify-center items-center sm:flex-nowrap">
        <div className="bg-gray-900 flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1 text-indigo-400">
              97, Shantipuri No.2 <br />
              Udham Singh Nagar <br /> Uttarakhnad, India 263148
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a
              href="mailto:navalkoranga63@email.com"
              className="text-indigo-400 leading-relaxed"
            >
              navalkoranga63@email.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <a
              href="tel:+918192983193"
              className="leading-relaxed text-indigo-400"
            >
              +918192983193
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div className="md:border border-spacing-1 border-indigo-400 rounded flex justify-center">
          <form
            name="contact"
            className="md:w-1/2 flex flex-col md:py-8 mt-8 md:mt-0"
          >
            <h2 className="sm:text-4xl text-3xl mb-1 text-center font-medium title-font">
              Hire Me
            </h2>
            <p className="leading-relaxed text-lg mb-5">
              I am a Web Developer, I worked in many projects with React.js and
              Tailwind css. If you like my profile please contact.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
