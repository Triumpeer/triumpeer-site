/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class', // We'll use a class-based approach to toggle manually if needed, or handle with JS for auto-switching
  theme: {
    extend: {
      colors: {
        'triumpeer-blue': '#113FD1',
        'triumpeer-light-blue': '#3DCBFC',
        'triumpeer-dark': '#272E38',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'funnel': ['Funnel Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

