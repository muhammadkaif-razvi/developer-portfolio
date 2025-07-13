/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.muhammadkaifrazvi.xyz",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sourceDir: "app", // tell it to scan app directory
  outDir: "./public", // this is required for App Router builds
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
