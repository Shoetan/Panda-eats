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
        'poppins' : ['poppins', 'sans-serif'],
        'montserrat' : ['montserrat', 'sans-serif'] 
      },
      colors : {
        primary: '#79A95B',
        secondary: '#333333',
        accent: '#FFA500',
        background: '#F8F8F8',
        text_dark: '#000000',
        text_white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
