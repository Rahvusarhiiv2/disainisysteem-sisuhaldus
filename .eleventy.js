const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy static assets to the `dist` dir
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // NOTE: Changing shortcodes needs restarting for the dev server
  eleventyConfig.addShortcode("betaTag", function (classes) {
    return `<span class="bg-gray-200 bg-opacity-50 rounded px-2 py-1 leading-none ${classes} ">BETA</span>`;
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
