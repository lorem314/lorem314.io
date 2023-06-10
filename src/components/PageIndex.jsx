import React from "react"
import styled from "styled-components"

import LatestArticles from "./index/LatestArticles"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 42rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;

  > section {
    > *:not(h3) {
      margin-left: 1rem;
    }
  }
`

const PageIndex = () => {
  return (
    <Wrapper>
      <h2 style={{ textAlign: "center" }}>🎉 欢迎来到我的博客 🎉</h2>

      <section>
        <h3>最近发布文章</h3>
        <LatestArticles />
      </section>

      <section>
        <h3>我的足迹</h3>
      </section>
    </Wrapper>
  )
}

export default PageIndex
