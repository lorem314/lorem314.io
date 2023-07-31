import React from "react"
import styled from "styled-components"

import PageContent from "../styled/PageContent"
import BookCoverList from "./book/BookCoverList"

const Wrapper = styled(PageContent)`
  max-width: 72rem;
  margin: 2rem auto;
`

const PageBook = ({ allBookCover = [] }) => {
  return (
    <Wrapper className="page-content">
      <h2 className="page-content-title">书籍 (99)</h2>
      <BookCoverList bookCovers={allBookCover} />
    </Wrapper>
  )
}

export default PageBook
