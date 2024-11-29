/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'wordle-correct': '#6aaa64',      // Green for correct letter and position
        'wordle-present': '#c9b458',      // Yellow for correct letter, wrong position
        'wordle-absent': '#787c7e',       // Gray for incorrect letter
        'wordle-tile-border': '#d3d6da',  // Light gray for tile border
        'wordle-key-bg': '#d3d6da',       // Light gray for keyboard background
        dark: {
          'bg-primary': '#111317',        // Very dark gray with slight navy tint
          'bg-secondary': '#1a1d24',      // Slightly lighter gray-navy
          'text-primary': '#e2e8f0',      // Light gray with subtle blue tint
          'text-secondary': '#94a3b8',    // Muted gray-blue
          'tile-border': '#282c34',       // Dark gray border with navy undertone
        },
      },
    },
  },
  plugins: [],
};
