module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // Add these options.
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BullPub`,
        short_name: `Bull Pub`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#467b81`,
        display: `standalone`,
        icon: `src/images/bullpub-mini-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `d9d20709cfc8fd9832f1624ccaacec`,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
      linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
  ],
}
