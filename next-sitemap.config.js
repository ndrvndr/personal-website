module.exports = {
  siteUrl: "https://andreavindra.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/studio/" }],
  },
};
