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
        'wordle-correct': '#78a760',      // Muted green
        'wordle-present': '#d4b256',      // Warm yellow
        'wordle-absent': '#8b7355',       // Medium brown
        'tile-border': '#c4b5a2',         // Light brown border
        'key-bg': '#e6ddd1',              // Light beige
        'key-text': '#2d241c',            // Dark brown
        'modal-bg': '#f2e9de',            // Light warm beige
        'modal-text': '#2d241c',          // Dark brown
        
        // Light theme specific colors (darker brown theme)
        light: {
          'bg-primary': '#e6ddd1',        // Base brown
          'bg-secondary': '#f2e9de',      // Lighter brown
          'text-primary': '#2d241c',      // Dark brown
          'text-secondary': '#6b5d4e',    // Medium brown
          'border': '#c4b5a2',            // Light brown border
          'input-bg': '#f2e9de',          // Light beige input
          'input-border': '#8b7355',      // Medium brown
          'input-focus': '#6b5d4e',       // Darker brown
          'button-primary': '#8b7355',    // Medium brown
          'button-hover': '#6b5d4e',      // Darker brown
          'tile': {
            'bg': '#f2e9de',              // Light beige tile
            'border': '#c4b5a2',          // Light brown border
            'text': '#2d241c',            // Dark brown text
          }
        },
        
        // Dark theme specific colors (unchanged)
        dark: {
          'bg-primary': '#111317',        // Very dark gray with slight navy tint
          'bg-secondary': '#1a1d24',      // Slightly lighter gray-navy
          'text-primary': '#e2e8f0',      // Light gray with subtle blue tint
          'text-secondary': '#94a3b8',    // Muted gray-blue
          'border': '#282c34',            // Dark gray border with navy undertone
          'tile-border': '#282c34',       // Dark gray border with navy undertone
          'input-bg': '#1a1d24',
          'input-border': '#3a4149',
          'input-focus': '#4a7f46',
          'button-primary': '#4a7f46',
          'button-hover': '#3d6a3a',
        }
      },
      animation: {
        'pop': 'pop 0.1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
        'flip': 'flip 0.5s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
      },
    },
  },
  plugins: [],
};
