const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })

    const splitedSlug = slug.split("/")
    console.log("[>>] splitted slug :", splitedSlug)

    if (splitedSlug.length === 4 && splitedSlug.includes("blog")) {
      createNodeField({ node, name: "type", value: "TYPE_BLOG_POST" })
    } else if (splitedSlug.length === 4 && splitedSlug.includes("book")) {
      createNodeField({ node, name: "type", value: "TYPE_BOOK_COVER" })
    } else if (splitedSlug.length === 5 && splitedSlug.includes("book")) {
      createNodeField({ node, name: "type", value: "TYPE_BOOK_CHAPTER" })
    } else {
      // createNodeField({ node, name: "type", value: "NaT" })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // ******************** //
  // blog post template
  // ******************** //
  const allBlogPost = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BLOG_POST" } } }) {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  allBlogPost.data?.allMdx.nodes.forEach((blogPost) => {
    createPage({
      path: blogPost.fields.slug,
      component: path.resolve(`./src/templates/blog-post.jsx`),
      context: {
        id: blogPost.id,
      },
    })
  })

  // ******************** //
  // book cover template
  // ******************** //
  const allBookCover = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BOOK_COVER" } } }) {
        nodes {
          id
          frontmatter {
            isbn
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  allBookCover.data?.allMdx.nodes.forEach((bookCover) => {
    createPage({
      path: bookCover.fields.slug,
      component: path.resolve(`./src/templates/book-cover.jsx`),
      context: {
        id: bookCover.id,
        isbn: bookCover.frontmatter.isbn,
      },
    })
  })

  // ******************** //
  // book chapter tempalte
  // ******************** //
  const allBookChapter = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BOOK_CHAPTER" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            isbn
          }
        }
      }
    }
  `)
  allBookChapter.data?.allMdx.nodes.forEach((bookChapter) => {
    createPage({
      path: bookChapter.fields.slug,
      component: path.resolve(`./src/templates/book-chapter.jsx`),
      context: {
        id: bookChapter.id,
        isbn: bookChapter.frontmatter.isbn,
      },
    })
  })

  // to be continued ...
}
