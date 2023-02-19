/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: 'black',
        light: 'white',
        medium: 'blue',
        primary: '#7643E5',
      }
    },
  },
  plugins: [],
}

