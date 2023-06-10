import React from "react"
import styled from "styled-components"

import BookCoverItem from "./BookCoverItem"

const Wrapper = styled.ul.attrs({
  className: "styleless",
})`
  /* columns: 2; */
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 10px;

  > li {
    width: calc(50% - 10px);
    padding: 0 10px;
  }
`

const BookCoverList = ({ bookCovers = [] }) => {
  return (
    <Wrapper>
      {bookCovers.map((bookCover) => {
        return <BookCoverItem key={bookCover.id} bookCover={bookCover} />
      })}
    </Wrapper>
  )
}

export default BookCoverList
