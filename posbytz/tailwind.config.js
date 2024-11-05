/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(10px) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0) rotate(20deg)' },
        },
        diagonalMove: {
          '0%': { transform: 'translate(-40px, 40px) rotate(-7deg)' },
          '50%': { transform: 'translate(40px, -40px) rotate(5deg)' },
          '100%': { transform: 'translate(-30px, 30px) rotate(-7deg)' },
        },
        logoAnimation: {
          '0%': {
            transform: 'translateY(30px) rotate(-10deg)', // Start below
            opacity: '0', // Start transparent
          },
          '100%': {
            transform: 'translateY(0) rotate(20deg)', // End at the final position
            opacity: '1', // Fully visible
          },
        },
      },
      animation: {
        diagonlMove: 'diagonalMove 4s ease-in-out infinite alternate',
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out forwards',
        // Animation settings
      },
    },
  },
  plugins: [],
}