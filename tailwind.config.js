/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'black': '#121212',
        'white': '#F0F0F0',
        'light': 'rgb(var(--light-background) / <alpha-value>)',
        'green': 'rgb(var(--primary-color) / <alpha-value>)',
        'secondary-light-color': 'rgb(var(--secondary-light-color) / <alpha-value>)',
        'dark-green': 'rgb(var(--secondary-dark-color) / <alpha-value>)',
        'text-green': 'rgb(var(--text-color) / <alpha-value>)',
        'dark-grey': 'rgb(var(--deep-grey) / <alpha-value>)',
        'light-grey': 'rgb(var(--light-grey) / <alpha-value>)',
        'on-surface-light-elevation': 'rgb(var(--on-surface-light) / <alpha-value>)'
      },
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: 'selector',
}

