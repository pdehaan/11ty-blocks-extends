const del = require("del").sync;
const dedent = require("dedent");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Purge the `output` directory.
  del("./www");

  const markdownLib = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).disable("code");
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addFilter("md", (text) => markdownLib.render(dedent(text)));
  eleventyConfig.addPairedShortcode("md", eleventyConfig.getFilter("md"));

  return {
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "html"],

    dir: {
      input: "src",
      output: "www",
    },
  };
};
