/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./",
    "**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#2F0F4E",
        marketing: {
          fundo: "#2C0F39",
          fonte: "#E48E16",
          fundoBotao: "#340C43",
        },
        sobre: {
          fundo: "#F6F9F5",
        },
        ceo: {
          fonte: "#E48E16",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sriracha: ["Sriracha", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
