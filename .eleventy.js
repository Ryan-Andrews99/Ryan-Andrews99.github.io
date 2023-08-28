const { EleventyRenderPlugin } = require('@11ty/eleventy')
const syntaxHighlight  = require("@11ty/eleventy-plugin-syntaxhighlight")
const markdownItEmoji = require("markdown-it-emoji")
const embedSpotify = require("eleventy-plugin-embed-spotify")

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addPassthroughCopy("src/assets/style.css")
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 300)) + "...";
  })
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(embedSpotify)
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
