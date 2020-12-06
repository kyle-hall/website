module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass')
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/img' })

  return {
    dir: {
      input: 'src',
    },
  }
}
