const del = require("del").sync;
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  del("./www");

  const markdownLib = markdownIt({
    html: true,
    break: false,
    linkify: true,
  }).disable("code");
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],

    dir: {
      input: "src",
      output: "www",
    },
  };
};
