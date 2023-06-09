/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Kanit']
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")
  ],
}

