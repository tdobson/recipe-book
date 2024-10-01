module.exports = function(eleventyConfig) {
  // Copy the recipes folder to the output
  eleventyConfig.addPassthroughCopy("recipes");
  
  // Copy image files
  eleventyConfig.addPassthroughCopy("images");
  
  // Ignore the transcripts folder
  eleventyConfig.ignores.add("transcripts/**");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
