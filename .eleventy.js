module.exports = function(eleventyConfig) {
  // Copy the recipes folder to the output
  eleventyConfig.addPassthroughCopy("recipes");
  
  // Copy image files
  eleventyConfig.addPassthroughCopy("images");
  
  // Copy styles.css to the output
  eleventyConfig.addPassthroughCopy("styles.css");
  
  // Ignore the transcripts folder
  eleventyConfig.ignores.add("transcripts/**");

  // Add a custom date filter
  eleventyConfig.addFilter("date", function(date, format) {
    return new Date(date).getFullYear();
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
