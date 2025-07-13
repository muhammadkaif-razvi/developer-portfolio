/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.muhammadkaifrazvi.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  sourceDir: 'app', // 👈 this is required for App Router
};
