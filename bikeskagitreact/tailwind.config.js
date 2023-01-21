/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Questral', 'sans-serif'],
    },
    transparent: 'transparent',
    current: 'currentColor',
    black: {
      DEFAULT: '#000000',
    },
    blue:{
      DEFAULT: '#14213D',
    },
    yellow:{
      DEFAULT: '#FCA311',
    },
    gray:{
      DEFAULT: '#E5E5E5',
    },
    white:{
      DEFAULT: '#FFFFFF',
    },
  plugins: [],
}
}
