/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ["Overpass", "sans-serif"]
      },
      colors: {
        "orange": "hsl(25, 97%, 53%)",
        "white": "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "blue": "hsl(213, 19%, 18%)",
        "dark-blue": "hsl(216, 12%, 8%)",
      }
    },
  },
  plugins: [],
}

