const settings = {
  name: "chakra-react",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "JDC",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/home"],
            ["Our Work", "/our-work/"],
            ["News", "/news/"],
            ["Get Involved", "/get-involved/"],
            ["About Us", "/about/"]
          ],
          socialLinks: [
            ["facebook", "https://www.facebook.com/thejdc"],
            ["twitter", "https://twitter.com/TheJDC"],
            ["instagram", "https://www.instagram.com/jdcjoint/"],
            ["linkedin", "https://www.linkedin.com/company/jdc"]
          ],
          featured: {
            showOnArchive: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://localhost/wp-frontity/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
