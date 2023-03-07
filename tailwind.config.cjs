/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        basement: "BasementGrotesque-Black, sans-serif",
        display: "BasementGrotesque-Display, sans-serif",
        space: "SpaceMono-Regular, sans-serif",
        inter: "Inter-Regular, sans-serif",
        montreal: "Neue-Montreal-Medium, sans-serif",
        delight: "Neue-Montreal-Regular-400, sans-serif",
        grotesk: "SpaceGrotesk-Medium, sans-serif",
      },
    },
  },
  plugins: [],
};
