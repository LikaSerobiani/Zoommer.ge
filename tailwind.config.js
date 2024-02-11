/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ec5e2a",
        secondary: "#f79007",
        black: "#000000",
        "light-grey": "#eae9e9",
        "dark-grey": "#a7a7a7",
        orange: "#f18f69",
      },
    },
  },
  plugins: [],
};
