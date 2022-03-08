const defaultTheme = require('tailwindcss/defaultTheme')

const screens = {
  tablet: '768px',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens,
    fontFamily: {
      barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
      'barlow-condensed': ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      bellefair: ['Bellefair', ...defaultTheme.fontFamily.serif],
    },
    colors: {
      transparent: 'rgba(0,0,0,0)',
      white: '#fff',
      'light-gray': '#979797',
      gray: '#383B4B',
      blue: {
        100: '#D0D6F9',
        800: '#0B0D17',
      },
    },
    extends: {},
  },
  plugins: [],
}
