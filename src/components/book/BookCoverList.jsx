import React from "react"
import styled from "styled-components"

import BookCoverItem from "./BookCoverItem"
import { bp } from "../../styled/GlobalStyle"

const Wrapper = styled.div`
  padding-top: 10px;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${bp.laptop}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${bp.tablet}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BookCoverList = ({ bookCovers = [] }) => {
  return (
    <Wrapper>
      {bookCovers.map((bookCover) => {
        return (
          <BookCoverItem
            key={bookCover.frontmatter.isbn}
            bookCover={bookCover}
          />
        )
      })}
    </Wrapper>
  )
}

export default BookCoverList
