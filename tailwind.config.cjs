/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#273742',
          'light': '#67737b',
          'dark': '#1b272e',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        grey: {
          DEFAULT: '#f1f7f9',
        },
        red: {
          DEFAULT: '#ff5d5d',
          'dark': '#ad3f3e',
        },
        blue: {
          DEFAULT: '#5d9aff',
          'dark': '#3f6db4',
        },
        orange: {
          DEFAULT: '#FF7615',
        },
        blue: {
          DEFAULT: '#02FFFF',
        },
      },
      // dropShadow: {
      //   'blue-sm': '0px 0px 5px #02FFFF',
      //   blue: '0px 0px 11px #02FFFF',
      // },
    },
  },
  plugins: [],
};
