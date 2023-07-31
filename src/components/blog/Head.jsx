import React from "react"
import styled from "styled-components"

import Tags from "./Tags"

const Wrapper = styled.header`
  padding: 0 1rem 1rem;
  border: 1px solid transparent;
  margin-bottom: 10px;
  background-color: var(--page-content-bg);

  > .post-title {
    color: var(--page-content-text-color-0);
  }

  > .tags-container {
    font-size: smaller;
  }
`

const Head = ({ frontmatter }) => {
  return (
    <Wrapper>
      <h1 className="post-title">{frontmatter.title}</h1>
      <div className="tags-container">
        <Tags tags={frontmatter.tags} />
      </div>
      <div>发布于 {frontmatter.createdAt}</div>
    </Wrapper>
  )
}

export default Head
