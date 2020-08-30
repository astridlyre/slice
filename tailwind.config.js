module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: "Work Sans",
      display: "Merriweather",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
