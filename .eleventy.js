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
  eleventyConfig.addPairedShortcode("ex", function(content) {
    return `<div class="leading-snug bg-gray-50 rounded px-10 pt-6 pb-4 mb-10">${content}</div>`;
  });
  eleventyConfig.addPairedShortcode("good", function(content) {
    return `<span class="font-bold italic text-green-500">${content}</span>`;
  });
  eleventyConfig.addPairedShortcode("bad", function(content) {
    return `<span class="italic text-gray-500">${content}</span>`;
  });
  eleventyConfig.addPairedShortcode("todo", function(content) {
    return `<div class="flex items-center p-4 mb-6 border-l-2 border-green-400">
      <div class="shrik-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">${content}</div>
    </div>`;
  });
  eleventyConfig.addPairedShortcode("avoid", function(content) {
    return `<div class="flex items-center p-4 mb-6 border-l-2 border-red-400">
      <div class="shrik-0">
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">${content}</div>
    </div>`;
  });
  eleventyConfig.addShortcode("live", function(dark) {
    return `<div class="not-prose font-body rounded border-2 border-gray-50 p-10 ${dark ? 'bg-gray-200' : ''}">`;
  });
  eleventyConfig.addShortcode("endlive", function() {
    return `</div>`;
  });
  eleventyConfig.addShortcode("code", function(title) {
    return `<details>
      <summary class="cursor-pointer px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50 rounded-sm -mb-1.5">${title}</summary>

      `;
  });
  eleventyConfig.addShortcode("endcode", function() {
    return `</details>`;
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
