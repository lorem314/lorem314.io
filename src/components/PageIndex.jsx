import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 42rem;
  margin: 2rem auto;

  border: 1px solid transparent;
  padding: 0 1rem;

  .page-content-title {
    text-align: center;
  }
`

const PageIndex = () => {
  return (
    <Wrapper>
      <h2 className="page-content-title">🎉 欢迎来到我的博客 🎉</h2>
    </Wrapper>
  )
}

export default PageIndex
