import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 1.5rem 0 0.5rem;

  display: flex;

  .entity-icon {
    /* font-size: 1.25rem; */
  }
`

const Pagination = ({ length, currentPage, onClickPage }) => {
  return (
    <Wrapper>
      <button className="entity-icon" onClick={onClickPage(1)}>
        &#xab;
      </button>
      <button
        className="entity-icon"
        disabled={currentPage <= 1}
        onClick={onClickPage(currentPage - 1)}
      >
        &#x2039;
      </button>

      {Array.from({ length }).map((_, index) => {
        const pageNum = index + 1
        return (
          <button key={pageNum} onClick={onClickPage(pageNum)}>
            {pageNum}
          </button>
        )
      })}

      <button
        className="entity-icon"
        disabled={currentPage >= length}
        onClick={onClickPage(currentPage + 1)}
      >
        &#x203A;
      </button>
      <button className="entity-icon" onClick={onClickPage(length)}>
        &#xbb;
      </button>
    </Wrapper>
  )
}

export default Pagination
