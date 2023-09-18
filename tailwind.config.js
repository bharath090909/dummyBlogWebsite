/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#F0F7F4",
        secondary: "#32292F",
        tertiary: "#32CD32",
      },
      backgroundImage: {
        "login-bg": "url('./src/assets/login.jpeg')",
      },
    },
  },
  plugins: [],
};
