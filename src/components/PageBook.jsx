import React from "react"
import styled from "styled-components"

import BookCoverList from "./book/BookCoverList"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 36rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 10px 1rem 1rem;
`

const PageBook = ({ allBookCover }) => {
  return (
    <Wrapper>
      <div className="page-label">书籍({allBookCover.length})</div>
      <BookCoverList bookCovers={allBookCover} />
    </Wrapper>
  )
}

export default PageBook
