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
    function ({ addUtilities, addComponents }) {
      // Adding the no-scrollbar utility
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',  /* Chrome, Safari, and Opera */
        },
      }, ['responsive']);

      // Adding the container-none utility
      addComponents({
        '.container-none': {
          width: '100%',
          maxWidth: 'none',
          marginLeft: '0',
          marginRight: '0',
          paddingLeft: '0',
          paddingRight: '0',
        },
      });
    },
  ],
  darkMode: 'media',
}
