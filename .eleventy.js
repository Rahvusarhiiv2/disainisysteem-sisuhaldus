const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const codeClipboard = require("eleventy-plugin-code-clipboard");
const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(codeClipboard);
  eleventyConfig.addPlugin(codeClipboard, {
    successMessage: 'Kopeeritud',
    failureMessage: 'Kopeerimine ebaõnnestus'
  });

  // Copy static assets to the `dist` dir
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // https://www.npmjs.com/package/eleventy-plugin-code-clipboard
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true
  }).use(codeClipboard.markdownItCopyButton, {
    iconStyle: 'font-size: 18px; opacity: 0.5;',
    iconClass: 'mdi mdi-content-copy',
    buttonStyle: 'position: absolute; top: 5px; right: 10px; cursor: pointer; outline: none; opacity: 0.5',
    title: 'Kopeeri',
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // NOTE: Changing shortcodes needs restarting for the dev server
  eleventyConfig.addPairedShortcode("icon", function(content, description) {
    return `<div>
      <div class="relative group h-[8.5rem]">
        <button type="button" onclick="copy(this)" class="absolute z-10 cursor-pointer inset-0 flex h-full w-full items-center justify-center rounded border border-gray-100">${content}</button>
        <div class="absolute z-0 hidden pt-4 w-full text-center text-[0.8125rem] text-gray-200 group-hover:block">
          Kopeeri
        </div>
      </div>
      <div class="mt-3 truncate text-center text-[0.8125rem] leading-6 text-gray-500">${description}</div>
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
