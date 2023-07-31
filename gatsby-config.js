/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `lorem314.io`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `published`,
        path: `${__dirname}/published/`,
      },
      __key: "published",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg className="svg-icon link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="24" height="24" /><g className="icon"><path d="M17 13H7v-2h10v2zm1-6h-1c-1.63 0-3.065.792-3.977 2H18c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4zM2 11v2c0 2.21 1.79 4 4 4h1c1.63 0 3.065-.792 3.977-2H6c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.63 7 7 7H6c-2.21 0-4 1.79-4 4z" /></g></svg>`,
              className: `autolink-anchor`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: ["h2", "h3", "h4", "h5", "h6"],
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //   },
          // },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
        ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
