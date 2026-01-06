/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--color-bg)",
        "text-primary": "var(--color-text)",

        neon: "var(--accent)",
        "neon-light": "var(--accent-light)",
      },

      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
