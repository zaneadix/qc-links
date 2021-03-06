module.exports = {
  siteMetadata: {
    title: `Quarter Castle`,
    description: `The official website of Quarter Castle. Plant-forward eating. Eat-forward traveling.`,
    author: `Kiera Rooker & Zane Adickes`,
  },
  plugins: [
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography-config.js`,
      },
    },

    // IMAGES
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: "image-uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cms/`,
        name: `collections`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142776093-2",
        head: false,
        anonymize: true,
        respectDNT: true,
        siteSpeedSampleRate: 10,
        cookieName: "qcDeets",
      },
    },
  ],
}
