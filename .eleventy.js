module.exports = function(eleventyConfig) {
  // Copy image files
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy styles.css to the output
  eleventyConfig.addPassthroughCopy("styles.css");
  
  // Ignore the transcripts folder and README.md
  eleventyConfig.ignores.add("transcripts/**");
  eleventyConfig.ignores.add("README.md");

  // Add a custom date filter
  eleventyConfig.addFilter("date", function(date, format) {
    return new Date(date).getFullYear();
  });

  return {
    dir: {
      input: "recipes",
      output: "_site",
      includes: "../_includes"
    }
  };
};
