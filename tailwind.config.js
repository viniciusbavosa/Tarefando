/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      backgroundImage: {
        'random-image': "url('assets/img/nightsky.webp')"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      translate: {
        '64': '17rem',
        '60': '235px'
      }
    }
  },
  plugins: [],
}

