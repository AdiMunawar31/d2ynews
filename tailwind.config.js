module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "logo-adi": "url('/assets/a.png')",
      }),
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      lobster: ["Lobster", "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
