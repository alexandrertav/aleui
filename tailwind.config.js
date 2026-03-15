/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aero: {
          sky: '#87CEEB',
          aqua: '#00CED1',
          cyan: '#00E5FF',
          mint: '#98FF98',
          lime: '#BFFF00',
          white: '#F0F8FF',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(0, 0, 0, 0.1)',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'aero': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'aero-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
      }
    },
  },
  plugins: [],
}
