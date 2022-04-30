module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: { DEFAULT: "1280px" },
        padding: { DEFAULT: "1rem" },
        center: true,
      },
      colors: {
        brand: {
          100: "#ef4444",
          200: "#dc2626",
          300: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
