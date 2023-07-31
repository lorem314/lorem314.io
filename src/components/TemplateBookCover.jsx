import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import PageContent from "../styled/PageContent"
import Details from "../html/Details"

const Wrapper = styled(PageContent)`
  margin: 2rem auto;
  max-width: 36rem;

  /* > .page-content-title {
    margin-bottom: 1rem;
  } */

  > .book-cover-info {
    display: flex;
    gap: 1rem;
  }

  > .book-chapter-list {
    margin-top: 1rem;
    > .book-chapter-item {
      padding: 0 12.5%;
      margin: 1rem 0;
    }
  }
`

const TemplateBookCover = ({ bookCover, bookChapters = [] }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  return (
    <Wrapper className="page-content">
      {/* <h2 className="page-content-title">
        <span>{bookCover.frontmatter.title}</span>
        <span>{bookCover.frontmatter.subtitle}</span>
      </h2> */}

      <div className="book-cover-info">
        <GatsbyImage image={coverImage} alt="书籍封面" />
        <div style={{ flex: "1 0 auto" }}>
          <h3>{bookCover.frontmatter.title}</h3>
          <h4>{bookCover.frontmatter.subtitle}</h4>
          <p>ISBN:{bookCover.frontmatter.isbn}</p>
        </div>
      </div>

      <div className="book-chapter-list">
        {bookChapters.map((bookChapter) => {
          const { title, chapter } = bookChapter.frontmatter
          return (
            <div className="book-chapter-item" key={chapter}>
              <Details open>
                <div style={{ fontWeight: "bolder" }}>
                  第 {chapter} 章 {title}
                </div>
                <div>tree</div>
              </Details>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default TemplateBookCover
