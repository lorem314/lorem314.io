import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 42rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;

  .page-content-title {
    text-align: center;
  }
`

const PageIndex = () => {
  return (
    <Wrapper>
      <h2 className="page-content-title">🎉 欢迎来到我的博客 🎉</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        explicabo.
      </p>
      <p>yo ucan fin me</p>
    </Wrapper>
  )
}

export default PageIndex
