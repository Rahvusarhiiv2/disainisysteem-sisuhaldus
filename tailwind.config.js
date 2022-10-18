/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./src/**/*.svg", "./.eleventy.js"],
  presets: [require("./rahvusarhiiv.preset.js")],
  plugins: [require("@tailwindcss/typography")],
};
