import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Details from "../html/Details"
import PlainToc from "./book/PlainToc"

const Wrapper = styled.section`
  margin: 2rem auto;
  max-width: 36rem;
  padding: 1rem 0.75rem;

  > .book-cover-info {
    display: flex;
    gap: 1rem;
  }

  > .book-chapter-list {
    margin-top: 1.5rem;

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
      <h2 className="page-content-title">
        <span>{bookCover.frontmatter.title}</span>{" "}
        <span>{bookCover.frontmatter.subtitle}</span>
      </h2>

      <div className="book-cover-info">
        <div className="book-cover-container" style={{ flex: "0 1 250px" }}>
          <GatsbyImage image={coverImage} alt="书籍封面" />
        </div>
        <div style={{ flex: "1 0 auto" }}>
          <h2>{bookCover.frontmatter.title}</h2>
          <h3>{bookCover.frontmatter.subtitle}</h3>
          <p>ISBN:{bookCover.frontmatter.isbn}</p>
        </div>
      </div>

      <div className="book-chapter-list">
        {bookChapters.map((bookChapter) => {
          const { title, chapter } = bookChapter.frontmatter
          return (
            <div className="book-chapter-item" key={chapter}>
              <Details>
                <div style={{ fontWeight: "bolder" }}>
                  <Link to={bookChapter.fields.slug}>
                    第 {chapter} 章 {title}
                  </Link>
                </div>
                <div>
                  <PlainToc tableOfContents={bookChapter.tableOfContents} />
                </div>
              </Details>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default TemplateBookCover
