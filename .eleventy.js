const day = require('dayjs')

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass')
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/img' })

  eleventyConfig.addFilter('latestPosts', (arr) => {
    return arr.sort((a, b) => day(b.data.date).diff(a.data.date)).slice(0, 3)
  })

  return {
    dir: {
      input: 'src',
    },
  }
}
