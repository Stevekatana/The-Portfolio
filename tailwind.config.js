/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'whoop': '72px'
      },
      width:{
        'sp':'450px'
      },
      height:{
        'sp':'450px'
      }
    },
  },
  plugins: [],
}