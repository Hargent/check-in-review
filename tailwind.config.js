/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "425px"
      },
      colors: {
        auxiliary: {
          DEFAULT: "#3c1642",
          100: "#0c040d",
          200: "#18091a",
          300: "#240d27",
          400: "#2f1134",
          500: "#3c1642",
          600: "#752b81",
          700: "#af41c0",
          800: "#c980d5",
          900: "#e4c0ea"
        },
        primary: {
          DEFAULT: "#008dd5",
          100: "#001d2b",
          200: "#003956",
          300: "#005681",
          400: "#0072ab",
          500: "#008dd5",
          600: "#12b0ff",
          700: "#4ec4ff",
          800: "#89d8ff",
          900: "#c4ebff"
        },
        secondary: {
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
        },
        "secondary-dark": {
          DEFAULT: "#395b50",
          100: "#0b1210",
          200: "#172420",
          300: "#223730",
          400: "#2e4940",
          500: "#395b50",
          600: "#558777",
          700: "#79ab9c",
          800: "#a6c7bd",
          900: "#d2e3de"
        },
        tertiary: {
          DEFAULT: "#ca2e55",
          100: "#290911",
          200: "#511222",
          300: "#7a1c33",
          400: "#a32544",
          500: "#ca2e55",
          600: "#d95576",
          700: "#e28098",
          800: "#ecaabb",
          900: "#f5d5dd"
        }
      }
    }
  },
  plugins: []
};
