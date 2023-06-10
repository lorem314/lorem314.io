import React from "react"
import styled from "styled-components"

import { transition } from "../../utils/css"

const Wrapper = styled.div`
  padding: 0 10px;
  border: 1px solid transparent;
  margin-bottom: 10px;
  background-color: var(--page-content-bg);
  ${transition("bg")}
`

const Head = ({ bookChapter }) => {
  const { chapterNo, title, tags } = bookChapter.frontmatter
  return (
    <Wrapper>
      <h1>
        第{chapterNo}章 {title}
      </h1>
    </Wrapper>
  )
}

export default Head
