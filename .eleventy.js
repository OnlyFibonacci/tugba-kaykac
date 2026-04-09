/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Varlıklar temiz URL ile kökte: /logo.png, /images/*
  eleventyConfig.addPassthroughCopy({ "public/logonew.png": "logonew.png" });
  eleventyConfig.addPassthroughCopy({ "public/images": "images" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
