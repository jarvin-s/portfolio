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
    extend: {
      padding: {
        '500px': '500px',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")
  ],
}

