module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        others: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1e293b",
      },
    },
  },
  plugins: [],
};
