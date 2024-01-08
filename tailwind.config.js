/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        col_primary:"rgb(50, 241, 241)",
      }
    },
  },
  plugins: [],
}

