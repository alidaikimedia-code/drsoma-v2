module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://drsomaplasticsurgery.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    "/server-sitemap.xml",
    "/announcement-demo",
    "/aboutus",
    "/blog/test",
    "/blog/video-list",
    "/blog/contact-us",
    "/404",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/announcement-demo/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Home page - highest priority
    if (path === "/" || path === "") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Main category pages - high priority (check both with and without trailing slash)
    const mainPages = [
      "/body", "/body/",
      "/face", "/face/",
      "/breast", "/breast/",
      "/male", "/male/",
      "/aesthetic-treatments", "/aesthetic-treatments/",
      "/about-dr-soma", "/about-dr-soma/",
      "/contact", "/contact/",
      "/blog", "/blog/",
      "/success-stories", "/success-stories/",
      "/treatments", "/treatments/",
    ];
    if (mainPages.includes(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Treatment/service pages - medium-high priority
    const servicePrefixes = [
      "/body/", "/face/", "/breast/", "/male/",
      "/aesthetic-treatments/", "/treatments/", "/regenerative-treatments/"
    ];
    const isServicePage = servicePrefixes.some(prefix =>
      path.startsWith(prefix) && path !== prefix
    );
    if (isServicePage) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Blog posts - medium priority (excluding /blog/ itself)
    if (path.startsWith("/blog/") && path !== "/blog/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // Default for other pages
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
