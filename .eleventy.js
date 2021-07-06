module.exports = function (eleventyConfig) {

  return {
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],

    dir: {
      input: "src",
      output: "www",
    }
  };
};
