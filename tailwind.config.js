/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F6F5F8',
      stone: '#0B2435',
      gray: '#708090',
      tuna: {
        50: '#f6f7f9',
        100: '#ecedf2',
        200: '#d6d8e1',
        300: '#b1b5c8',
        400: '#878da9',
        500: '#68708f',
        600: '#535976',
        700: '#444860',
        800: '#3b3e51',
        900: '#2e303d',
        950: '#23252e',
      },
      breaker: {
        50: '#f1faf9',
        100: '#dbf2f2',
        200: '#bbe4e6',
        300: '#8cd0d4',
        400: '#56b4ba',
        500: '#3fa4ac',
        600: '#337d87',
        700: '#2f666f',
        800: '#2d545d',
        900: '#2a484f',
        950: '#172e35',
      },
      orange: {
        50: '#fff6ec',
        100: '#ffecd3',
        200: '#ffd4a5',
        300: '#ffb56d',
        400: '#ff8a32',
        500: '#ff690a',
        600: '#ff4f00',
        700: '#cc3602',
        800: '#a12b0b',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
