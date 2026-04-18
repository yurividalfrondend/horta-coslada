export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#C8102E',
          dark: '#0A0A0A',
          gray: '#1A1A1A',
          mid: '#2D2D2D',
          light: '#F5F5F0',
          muted: '#888888',
          border: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
}
