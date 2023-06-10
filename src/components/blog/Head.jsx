import React from "react"
import styled from "styled-components"

import Tags from "../../ui/Tags"
import { transition } from "../../utils/css"

const Wrapper = styled.div`
  padding: 0 10px;
  border: 1px solid transparent;
  margin-bottom: 10px;
  background-color: var(--page-content-bg);
  ${transition("bg")}
`

const Head = ({ blogPost }) => {
  return (
    <Wrapper>
      <h1>{blogPost.frontmatter.title}</h1>
      <Tags tags={blogPost.frontmatter.tags} />
    </Wrapper>
  )
}

export default Head
