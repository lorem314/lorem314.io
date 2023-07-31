import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

const Wrapper = styled.article`
  margin: 0 auto;

  > ul {
    padding-left: 1.25rem;
  }
`

const BookCoverItem = ({ bookCover }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  return (
    <Wrapper>
      <GatsbyImage image={coverImage} alt="书籍封面" />
      <h3>
        <Link to={bookCover.fields.slug}>{bookCover.frontmatter.title}</Link>
      </h3>
      <h4>{bookCover.frontmatter.subtitle}</h4>
      <MDXRenderer>{bookCover.body}</MDXRenderer>
    </Wrapper>
  )
}

export default BookCoverItem
