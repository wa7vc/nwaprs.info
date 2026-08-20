import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    host: "127.0.0.1",
    showAllHosts: true, // Displays network IP addresses in the terminal
    port: 8044
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/inter/files": "assets/fonts/inter/files",
    "node_modules/@fontsource/vt323/files": "assets/fonts/vt323/files",
    "node_modules/@fontsource/press-start-2p/files":
      "assets/fonts/press-start-2p/files",
  });

  // Tailwind CLI writes CSS straight into _site; Eleventy doesn't produce
  // this file itself, so it needs to be told to watch it for live-reload.
  eleventyConfig.addWatchTarget("./_site/assets/css/style.css");

  // True if a nav item (or one of its dropdown children) is the current page.
  eleventyConfig.addFilter("navItemActive", (item, currentUrl) => {
    if (item.url === currentUrl) return true;
    return (item.children || []).some((child) => child.url === currentUrl);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
