module.exports = {
  pathPrefix: '/',
  siteMetadata: require('./site-metadata.json'),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`]
      }
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Classic Software Mistakes Quiz`,
        short_name: `Software Mistakes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#7c43a8`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-150137493-1'
      }
    }
  ]
}
