/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        bluebg: "url('/src/bluebg.jpg')",
        // bgimg: "url('/src/jst.jpg')",
      },
    },
  },
  plugins: [],
};
