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
      lbFirstpurple: "#47178F",
      lbSecondpurple: "#9F85FB",
      fadepurple: "#BFB3D7",
      mhoored: "#D3437B",
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
      stars: ["Ab"],
    },
    extend: {
      backgroundImage: {
        bglogin: "url('./assets/images/Login.svg')",
      },
      zIndex: {
        auto: "auto",
        negative: -1,
        0: 0,
      },
      screens: {
        '3xl': {'min': '1800px'},
      },
  
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
