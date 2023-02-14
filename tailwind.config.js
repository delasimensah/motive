/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A162F7",
        orange: "#FF764C",
        green: "#70CF97",
        red: "#FF6370",
        yellow: "#F6CC0D",
        blue: "#2884FF",
        dark: "#1F2128",
        dark1: "#242731",
        dark2: "#5F6165",
        dark3: "#72767C",
        dark4: "#7C7C8D",
        dark5: "#808191",
        dark6: "#A4A5A6",
        white1: "#E0E4E7",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
