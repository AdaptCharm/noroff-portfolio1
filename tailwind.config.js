module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}