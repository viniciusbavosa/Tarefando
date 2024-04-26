/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'black': '#121212',
        'white': '#FFFFFF',
        'light': 'rgb(var(--light-background) / <alpha-value>)',
        'green': 'rgb(var(--green-background) / <alpha-value>)',
        'dark-green': 'rgb(var(--dark-green) / <alpha-value>)',
        'text-green': 'rgb(var(--text-color) / <alpha-value>)',
        'dark-grey': 'rgb(var(--deep-grey) / <alpha-value>)',
        'light-grey': 'rgb(var(--light-grey) / <alpha-value>)'
      },
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
  darkMode: 'selector',
}

