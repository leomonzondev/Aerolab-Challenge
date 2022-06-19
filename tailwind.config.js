/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    colors: {
      blue:"#0ad4fa",
      red:"#bd1818",
      background:"#f9f9f9",
      black: {
        100:"#616161",
        200:"#c1c1c1",
        300:"#EDEDED"
      },
      white: "white",
    },
    extend: {},
  },
  plugins: [],
}
