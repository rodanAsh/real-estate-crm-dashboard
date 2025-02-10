/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            // Light mode color palette
            lightPrimaryFill: "#0077B6",
            lightSecondaryFill: "#48CAE4",
            bgPrimaryLight: "#F8FAFC",
            bgSecondaryLight: "#E8F0F8",
            textPrimaryLight: "#212529",
            textSecondaryLight: "#6C757D",
            cardLight: "#FFFFFF",
            successLight: "#28A745",
            warningLight: "#FFC107",
            dangerLight: "#DC3545",
            // dark mode color palette
            darkPrimaryFill: "#00A9E0",
            darkSecondaryFill: "#90E0EF",
            bgPrimaryDark: "#121212",
            bgSecondaryDark: "#1A1D23",
            textPrimaryDark: "#EAEAEA",
            textSecondaryDark: "#B0B3B8",
            cardDark: "#1E252D",
            successDark: "#37D67A",
            warningDark: "#F4A261",
            dangerDark: "#E63946 "
        }
      },
    },
    plugins: [],
  }