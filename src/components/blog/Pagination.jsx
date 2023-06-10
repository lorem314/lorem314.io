import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 1.5rem 0 0.5rem;

  display: flex;
`

const Pagination = ({ length, currentPage, onClickPage }) => {
  return (
    <Wrapper>
      <button onClick={onClickPage(1)}>&#xab;</button>
      <button
        disabled={currentPage <= 1}
        onClick={onClickPage(currentPage - 1)}
      >
        &#x2039;
      </button>

      {Array.from({ length }).map((_, index) => {
        const pageNum = index + 1
        return <button onClick={onClickPage(pageNum)}>{pageNum}</button>
      })}

      <button
        disabled={currentPage >= length}
        onClick={onClickPage(currentPage + 1)}
      >
        &#x203A;
      </button>
      <button onClick={onClickPage(length)}>&#xbb;</button>
    </Wrapper>
  )
}

export default Pagination
