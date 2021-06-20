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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}