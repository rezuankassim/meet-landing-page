module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        theme: "Red Hat Display",
      },
      fontSize: {
        h1: ["64px", "64px"],
        h2: ["40px", "44px"],
        h3: ["32px", "36px"],
        overline: [
          "16px",
          {
            letterSpacing: "4px",
            lineHeight: "26px",
          },
        ],
        body: ["18px", "26px"],
      },
      colors: {
        theme: {
          primary: "#4D96A9",
          secondary: "#855FB1",
          header: "#28283D",
          body: "#87879D",
          "primary-label": "#8FE3F9",
          "secondary-label": "#D9B8FF",
          "primary-hover": "#71C0D4",
          "secondary-hover": "#B18BDD",
          white: "#FAFAFA",
        },
      },
      margin: {
        "-6.5": "-26px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
