import React from "react"
import styled from "styled-components"

import BookCoverList from "./book/BookCoverList"

const Wrapper = styled.section`
  max-width: 72rem;
  margin: 2rem auto;
`

const PageBook = ({ allBookCover = [] }) => {
  return (
    <Wrapper className="page-content">
      <h2 className="page-content-title">书籍 ({allBookCover.length})</h2>
      <BookCoverList bookCovers={allBookCover} />
    </Wrapper>
  )
}

export default PageBook
