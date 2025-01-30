export default {
  theme: {
    colors: {
      primary: {
        bg: "var(--background)",
        600: "var(--primary-600)",
      },
      secondary: {
        500: "var(--secondary-500)",
      },
    },
    fontFamily: {
      mada: ["Mada", "sans-serif"],
    },
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-150px * 4 - 2rem * 4))' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  darkMode: "class",
};
