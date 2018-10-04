module.exports = {
  siteTitle: "DougRomanoIO", // Site title.
  siteTitleShort: "RomanoIO", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Doug Romano blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://romano.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Place to put technical thoughts and ideas", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-romano-io.disqus.com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Doug Romano", // Username to display in the author segment.
  userTwitter: "https://twitter.com/romano_io", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Missouri, USA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Software developer based in St. Louis MO.   Mostly full stack.  These days React/Scala/WebAPI/AWS", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dougromano",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/romano_io",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:doug@romano.io",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Doug Romano" // Copyright string for the footer of the website and RSS feed.
};
