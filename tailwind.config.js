/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': '425px',
        
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
