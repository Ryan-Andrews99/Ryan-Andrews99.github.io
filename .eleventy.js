const { EleventyRenderPlugin } = require('@11ty/eleventy')
const syntaxHighlight  = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addPassthroughCopy("src/assets/style.css")
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}
