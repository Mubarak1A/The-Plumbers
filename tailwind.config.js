/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'blue': '#5958cf',
          'secoundary': '#555',
          'primary': '#FCFCFC'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}