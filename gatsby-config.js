module.exports = {
    siteMetadata: {
      title: `liedtke-cozby-2022`,
        siteUrl: `https://liedtkecozby2022main.gatsbyjs.io`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            '@src': 'src',
            '@components': 'src/components',
            '@images': 'src/images',
            '@pages': 'src/pages',
            '@styles': 'src/styles',
            '@utils': 'src/utils',
          },
          extensions: ['js', 'jsx', 'scss'],
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Liedtke Cozby 2022",
          short_name: "L-C-2022",
          start_url: "/",
          background_color: "#f9f8f6",
          theme_color: "#f9f8f6",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/ring.png", // This path is relative to the root of the site.
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
        },
      },
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          postCssPlugins: [
            require("tailwindcss"),
          ],
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
    ]
}
