module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'max-370': { 'max': '370px' },
      },
      columns: {
        '4xs': '14rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities }) {
      addUtilities({
          '.no-scrollbar': {
              '-ms-overflow-style': 'none',  /* IE and Edge */
              'scrollbar-width': 'none',  /* Firefox */
          },
          '.no-scrollbar::-webkit-scrollbar': {
              'display': 'none',  /* Chrome, Safari and Opera */
          },
      }, ['responsive']);
  },
],
darkMode: 'media',
}