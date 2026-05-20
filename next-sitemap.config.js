/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://purwoeats.my.id",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ["/icon.png", "/risolboom-purworejo/icon.png", "/risolboom-purworejo/icon.svg"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
