/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://viertatelier.com/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"],
}
