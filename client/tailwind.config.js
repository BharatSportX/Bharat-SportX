module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        "max-370": { max: "370px" },
      },
      columns: {
        "4xs": "14rem",
      },
      backgroundImage: {
        'custom-radial-gradient': "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, rgb(178,176,176),rgb(178,176,176))",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities, addComponents }) {
      // Adding the no-scrollbar utility
      addUtilities(
        {
          ".no-scrollbar": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        },
        ["responsive"]
      );

      // Adding the container-none utility
      addComponents({
        ".container-none": {
          width: "100%",
          maxWidth: "none",
          marginLeft: "0",
          marginRight: "0",
          paddingLeft: "0",
          paddingRight: "0",
        },
      });

      // Adding the match utility
      addUtilities({
        ".match": {
          backgroundImage:
            "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, rgb(24,24,24),rgb(24,24,24))",
        },
      });
    },
  ],
  darkMode: "media",
};
