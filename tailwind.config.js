/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-green' : "#318616" ,
        'custom-gray' : '#000000b3'
      }
 
    }
  },
  plugins: [],
}

