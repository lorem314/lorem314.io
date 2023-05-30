import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 32rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;
`

const PageBook = () => {
  return (
    <Wrapper>
      <h2>PageBook</h2>
    </Wrapper>
  )
}

export default PageBook
