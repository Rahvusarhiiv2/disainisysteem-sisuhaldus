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
    return `<div class="flex items-center p-4 mb-6 mx-2 border-l-2 border-green-400 bg-green-50/50">
      <div class="shrik-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">${content}</div>
    </div>`;
  });
  eleventyConfig.addPairedShortcode("warning", function(content) {
    return `<div class="flex items-center p-4 mb-6 mx-2 border-l-2 border-yellow-400 bg-yellow-50/50">
      <div class="shrik-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">${content}</div>
    </div>`;
  });
  eleventyConfig.addPairedShortcode("avoid", function(content) {
    return `<div class="flex items-center p-4 mb-6 mx-2 border-l-2 border-red-400 bg-red-50/50">
      <div class="shrik-0">
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">${content}</div>
    </div>`;
  });
  eleventyConfig.addPairedShortcode("wip", function(content) { // Work in Progress indicator
    return `<div class="flex items-center rounded p-2 mb-3 bg-gray-100/50 text-gray-900/50 text-sm">
      <div class="shrik-0">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <g><g><rect height="8.48" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)" width="3" x="16.34" y="12.87"/><path d="M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z"/></g></g>
        </svg>
      </div>
      <div class="px-2"><em>TODO</em></div>
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
      <summary class="cursor-pointer px-2 py-1.5 my-2 text-base text-gray-600 bg-gray-50 rounded-sm">${title}</summary>
      `;
  });
  eleventyConfig.addShortcode("endcode", function() {
    return `</details>`;
  });
  eleventyConfig.addPairedShortcode("badge", function(content) {
    return `<span class="inline-flex items-center rounded bg-blue-50 p-2 text-sm font-medium text-blue-700">${content}</span>`;
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
