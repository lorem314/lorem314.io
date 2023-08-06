import React from "react"
import styled from "styled-components"

import { H1 } from "../../html/headings"
import { transition } from "../../utils/css"

const Wrapper = styled.header`
  padding: 0 1rem 1rem;
  border: 1px solid transparent;
  margin-bottom: 10px;
  background-color: var(--page-content-bg);
  ${transition("bg")}

  > .post-frontmatter {
    text-align: right;
    margin: 1rem 0;
    color: var(--page-content-text-color-0);
    ${transition("color")}

    > .chapter {
      padding-bottom: 6px;
      border-bottom: 2px solid currentColor;
      margin-bottom: 6px;
      font-size: smaller;
    }
  }

  > .tags-container {
    font-size: smaller;
  }
`

const Head = ({ frontmatter }) => {
  const { chapter, title } = frontmatter
  return (
    <Wrapper>
      <h1 className="post-frontmatter">
        <div className="chapter">第 {chapter} 章</div>
        <div className="title">{title}</div>
        {/* {`第 ${frontmatter.chapter} 章 - ${frontmatter.title}`} */}
      </h1>
    </Wrapper>
  )
}

export default Head
