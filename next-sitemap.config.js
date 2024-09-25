/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEV_URL || "https://viertatelier.com/",
  generateRobotsTxt: true,
}
