/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'black': '#0D0D0D',
        'white': '#F0F0F0'
      }
    }
  },
  plugins: [],
}

