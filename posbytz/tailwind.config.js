/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        diagonalMove: {
          '0%': { transform: 'translate(-40px, 40px) rotate(-7deg)' },
          '50%': { transform: 'translate(40px, -40px) rotate(5deg)' },
          '100%': { transform: 'translate(-30px, 30px) rotate(-7deg)' },
        },
      },
      animation: {
        diagonalMove: 'diagonalMove 4s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}