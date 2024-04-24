/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'black': '#121212',
        'white': '#FFFFFF'
      },
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
}

