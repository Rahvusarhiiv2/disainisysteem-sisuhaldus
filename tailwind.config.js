const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./src/**/*.svg", "./.eleventy.js"],
  presets: [require("./rahvusarhiiv.preset.js")],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(function ({addVariant}) {
      addVariant('factive', ['&:focus', '&:active']) // if states-styles apply together
      addVariant('hocus', ['&:hover', '&:focus']) // if states-styles apply together
    }),
  ],
};
