import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import PageBook from "../components/PageBook"

const Book = ({ data, location }) => {
  const allBookCover = data.allBookCover.nodes

  return (
    <Layout>
      <Helmet title="书籍 | Lorem314's Blog" />
      <PageBook allBookCover={allBookCover} />
    </Layout>
  )
}

export default Book

export const query = graphql`
  query {
    allBookCover: allMdx(
      filter: { fields: { type: { eq: "TYPE_BOOK_COVER" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          tags
          isbn
          cover {
            childImageSharp {
              gatsbyImageData(width: 240)
            }
          }
        }
        body
        fields {
          type
          slug
        }
      }
    }
  }
`
