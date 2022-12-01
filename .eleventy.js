const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy static assets to the `dist` dir
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // NOTE: Changing shortcodes needs restarting for the dev server
  eleventyConfig.addShortcode("icon", function(name, svgTag) {
    return `<div>
    <div class="relative group h-[8.5rem]">
      <button data-bs-toggle="tooltip" type="button" onclick="copy(this)" class="absolute cursor-pointer inset-0 flex h-full w-full items-center justify-center rounded border border-gray-100 ">
        ${svgTag}
      </button>
      <div class="absolute hidden pt-4 w-full text-center text-[0.8125rem] text-gray-200 group-hover:block">
        Kopeeri
      </div>
    </div>
    <div class="mt-3 truncate text-center text-[0.8125rem] leading-6 text-gray-500">
      ${name}
    </div>
  </div>`;
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
