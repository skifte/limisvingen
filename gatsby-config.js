module.exports = {
  siteMetadata: {
    // edit below
    title: `Limisvingen realsameie`,
    author: `Anders Skifte`,
    description: `Hjemmeside for Limisvingen realsameie.`,
    siteUrl: `https://limisvingen.no/`,
    social: {
      twitter: `skifte`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`, 
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/artikler`,
        name: `artikler`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/gfx`,
        name: 'gfx',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-167634816-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Limisvingen sameie`,
        short_name: `Limi sameie`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#343a40`,
        display: `browser`,
        // https://developers.google.com/web/fundamentals/web-app-manifest/#display
        icon: `src/gfx/favicon.png`,
      },
    },
  ],
}
