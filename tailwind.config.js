/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin';


export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],

  theme: {

    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },

    colors: {
      'blue-vlg': {
        500: '#096BD9',
        600: '#095FC0',
        900: '#313181'
      },
      'gray-vlg': {
        100: '#F4F7FA',
        200: '#E5EBF2',
        300: '#C5CFDB',
        400: '#707280'
      }
    },

    extend: {},
  },

  plugins: [
    flowbite
  ],
};
