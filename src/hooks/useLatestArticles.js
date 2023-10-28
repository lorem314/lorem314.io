import { useStaticQuery, graphql } from "gatsby"

const useLatestArticle = () => {
  const result = useStaticQuery(
    graphql`
      query {
        latestBlogPost: allMdx(
          filter: { fields: { type: { eq: "TYPE_BLOG_POST" } } }
          sort: { fields: frontmatter___createdAt, order: DESC }
          limit: 4
        ) {
          nodes {
            id
            frontmatter {
              title
              tags
              createdAt
            }
            fields {
              slug
            }
          }
        }

        latestBookChapter: allMdx(
          filter: { fields: { type: { eq: "TYPE_BOOK_CHAPTER" } } }
          sort: { fields: frontmatter___createdAt, order: DESC }
          limit: 4
        ) {
          nodes {
            id
            frontmatter {
              title
              chapter
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )
  return result
}

export default useLatestArticle
