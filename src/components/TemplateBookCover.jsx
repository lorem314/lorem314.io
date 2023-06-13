import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Tags from "../ui/Tags"
import Accordion from "../ui/Accordion"
import BookChapterList from "./book/BookChapterList"

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 32rem;

  border: 1px solid transparent;

  .book-cover-info {
    display: flex;
    gap: 1rem;

    > .book-cover-container {
      width: 220px;
    }
  }

  > .page-content {
    padding: 10px 1rem 10px;
  }
  h3 {
    margin: 0;
  }
`

const TemplateBookCover = ({ bookCover, bookChapters }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  return (
    <Wrapper>
      <div className="page-content">
        <div className="page-label">{bookCover.frontmatter.title}</div>
        <div className="book-cover-info">
          <div className="book-cover-container">
            <GatsbyImage image={coverImage} alt="书籍封面" />
          </div>
          <div className="info">
            <div>
              <strong>ISBN：{bookCover.frontmatter.isbn}</strong>
            </div>
            <Tags tags={bookCover.frontmatter.tags} />
          </div>
        </div>
      </div>

      <BookChapterList bookChapters={bookChapters} />
    </Wrapper>
  )
}

export default TemplateBookCover
