/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        galmuri11: ['galmuri11'],
        pyeongchang: ['pyeongchang'],
      },
      colors: {
        background: '#0A0B26',
        point: '#D2FD50',
        primary: '#8589FE'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
