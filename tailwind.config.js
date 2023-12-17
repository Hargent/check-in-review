/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "425px"
      },
      colors: {
        primary: {
          DEFAULT: "#ddfff7",
          100: "#005f49",
          200: "#00be91",
          300: "#1effca",
          400: "#7cffe1",
          500: "#ddfff7",
          600: "#e2fff8",
          700: "#eafffa",
          800: "#f1fffc",
          900: "#f8fffd"
        }
      }
    }
  },
  plugins: []
};
