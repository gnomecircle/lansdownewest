module.exports = {
  siteMetadata: {
    title: 'Lansdowne West Tutoring Centre',
  },
  plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/blog`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
    ],
};
