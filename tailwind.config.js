/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000066',
        secondary: '#FF6600',
        graySulamerica: '#939598'
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}