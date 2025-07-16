module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure all relevant file types are included
  ],
 theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
