module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lc-gold': '#D4B759',
        'lc-pink': '#F8D3C5',
        'lc-sage': '#A3B899',
        'lc-forest': '#345859',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
