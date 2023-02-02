/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ['poppins', 'sans-serif']
      },
      colors : {
        primary: '#335145',
        secondary: '#638275',
        accent: '#3AACFF',
        background: '#FBFCF8',
        dark: '#050301',
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
