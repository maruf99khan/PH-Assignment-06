/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          600: '#9333ea',
          700: '#7e22ce',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}