import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import TemplateBookChapter from "../components/TemplateBookChapter"

const BookChapter = ({ data, location }) => {
  const bookChapter = data.bookChapter
  const bookChapters = data.bookChapters.nodes
  const { title, chapter } = bookChapter.frontmatter

  return (
    <Layout hasRightDrawer={true} location={location}>
      <Helmet title={`第 ${chapter} 章 ${title} | 书籍 | Lorem314's Blog`} />
      <TemplateBookChapter
        bookChapter={bookChapter}
        bookChapters={bookChapters}
        location={location}
      />
    </Layout>
  )
}

export default BookChapter

export const query = graphql`
  query ($id: String, $isbn: String) {
    bookChapter: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        isbn
        chapter
        id
      }
      body
      tableOfContents
    }

    bookChapters: allMdx(
      filter: {
        fields: { type: { eq: "TYPE_BOOK_CHAPTER" } }
        frontmatter: { isbn: { eq: $isbn } }
      }
      sort: { fields: frontmatter___chapter, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          chapter
          isbn
        }
        fields {
          slug
        }
      }
    }
  }
`
