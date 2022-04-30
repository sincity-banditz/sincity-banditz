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
        neutral: {
          100: "#d0d0d0",
          200: "#b9b8b8",
          300: "#a1a0a0",
          400: "#737171",
          500: "#5b5959",
          600: "#444141",
          700: "#333131",
          800: "#242020",
          900: "#1a1616",
        },
      },
    },
  },
  plugins: [],
};
