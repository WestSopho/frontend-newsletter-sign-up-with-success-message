/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
            "roboto": ["Roboto", "sans-serif"],
        },
        colors:{
          "pale-navy": "#36384D",
          "dark-navy": "#242742"
        },
      },
    },
    plugins: [],
  }