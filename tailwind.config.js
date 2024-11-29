/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wordle-correct': '#6aaa64',      // Green for correct letter and position
        'wordle-present': '#c9b458',      // Yellow for correct letter, wrong position
        'wordle-absent': '#787c7e',       // Gray for incorrect letter
        'wordle-tile-border': '#d3d6da',  // Light gray for tile border
        'wordle-key-bg': '#d3d6da',       // Light gray for keyboard background
      },
    },
  },
  plugins: [],
};
