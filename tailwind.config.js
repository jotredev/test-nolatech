/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to bottom, #000 2%, transparent)",
      },
      colors: {
        primary: "#06B044",
        primaryLight: "#0A913A",
        primaryDark: "#025922",
      },
    },
  },
  important: true,
  plugins: [],
};
