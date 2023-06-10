import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Tags from "../../ui/Tags"

const Wrapper = styled.li`
  .book-cover-container {
    margin: 0 auto;
    width: 180px;
  }
`

const BookCoverItem = ({ bookCover }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  return (
    <Wrapper>
      <div className="book-cover-container">
        <GatsbyImage image={coverImage} alt="书籍封面" />
      </div>
      <h3>
        <Link to={bookCover.fields.slug}>{bookCover.frontmatter.title}</Link>
      </h3>
      <MDXRenderer>{bookCover.body}</MDXRenderer>
    </Wrapper>
  )
}

export default React.memo(BookCoverItem)
