/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500":"#3B82F6",
        "blue-300":"#3B82E0",
        "black-500":"#3F3F46",
        "grey-500":"#A1A1AA",
        "white":"#FFFFFF",
        "paperWhite":"#FFFFF0",
        "black":"#000",
      },
      flexBasis: {// no use
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md:"1060px"
    }
  },
  plugins: [],
}