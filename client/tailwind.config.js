/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#4CAF50',
        secondary: '#81C784',
        accent: '#FFC107',
      },

      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        averia: ['Averia Serif Libre', 'serif'],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
    },
  },
  plugins: [],
}