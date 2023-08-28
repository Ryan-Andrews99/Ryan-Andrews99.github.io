const { EleventyRenderPlugin } = require('@11ty/eleventy')
const syntaxHighlight  = require("@11ty/eleventy-plugin-syntaxhighlight")
const markdownItEmoji = require("markdown-it-emoji")

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addPassthroughCopy("src/assets/style.css")
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItEmoji))
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}
