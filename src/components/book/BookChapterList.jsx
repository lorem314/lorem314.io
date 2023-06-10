import React from "react"
import styled from "styled-components"

import BookChapterItem from "./BookChapterItem"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 10px 0 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const BookChapterList = ({ bookChapters = [] }) => {
  return (
    <Wrapper>
      {bookChapters.map((bookChapter) => {
        return (
          <BookChapterItem key={bookChapter.id} bookChapter={bookChapter} />
        )
      })}
    </Wrapper>
  )
}

export default BookChapterList
