/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      black: "#0C0A05",
      white: "#FFFFFF",
      primary: "#E4C360",
      grey: "#494844"
    },
    extend: {
      backgroundImage: {
        hero: "url(./assets/gin.jpg)",
      },
    },
  },
  plugins: [],
};
