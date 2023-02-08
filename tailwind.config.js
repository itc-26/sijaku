/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'blue': '#312E81',
      'darkBlue': '#1D1C4D',
      'orange': '#F97316',
      'grey': '#768293',
      'lightGrey': '#F9FAFB'
    },
    extend: {},
    screens: {
      'sm': { 'max': '768px' },
      'xl': { 'max': '1280px' },
    },
  },
  plugins: [],
}
