const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      firstpurple: "#9F85FB",
      secondpurple: "#BCA4FF",
      thirdpurple: "#C4CAFF",
      forthpurple: "#211342",
      fifthpurple: "#7A65B7",
      transparent: "transparent",

      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      poppins: ["Poppins"],
      thaifonts: ["Anuphan"],
    },
    extend: {
      backgroundImage: {
        bglogin: "url('./assets/images/Login.svg')",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
