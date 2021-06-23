module.exports = {
  purge: {
    content: ["./public/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1DB954",
        "spotify-black": "#191414",
        "spotify-white": "#FFFFFF",
        "sat-blue": "hsl(203,39%,44%,0.5)",
        "dark-blue": "#1D3557",
        "light-blue": "#457B9D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}