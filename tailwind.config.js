/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2980B9",
        secondary: "#22C7B0",
        error: "#C0392B",
      },
    },
  },
  plugins: [],
};
