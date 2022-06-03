module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: '5fr minmax(100px, 9fr) 3fr',
      },
      gridTemplateRows: {
        main: '8fr 1fr 1fr',
      },
      gridRow: {
        web: 'span 2 / span 2',
      }
    },
  },
  plugins: [],
};
