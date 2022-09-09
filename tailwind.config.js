/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend:{
      colors:{
      brightRed: 'hsl(12, 88%, 59%)',
      brightRedLight: 'hsl(12, 88%, 69%)',
      darkBlue: 'hsl(228, 39%, 23%)',
      veryLightGrey: 'hsl(0, 0%, 98%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      pink: 'hsl(356, 69%, 54%, 0.15)',
      darkWhite: 'hsl(0, 0%, 98%, 1)',
    }
  },
  },
  plugins: [],
}
