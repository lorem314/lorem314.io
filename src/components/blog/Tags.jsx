import React from "react"
import styled from "styled-components"

const Wrapper = styled.ul.attrs({
  className: "tags",
})`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  > li {
    line-height: 1.5;
    border: 1px solid var(--ui-default-border-color);
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
  }
`

const Tags = ({ tags = [] }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => {
        return <li key={index}>{tag}</li>
      })}
    </Wrapper>
  )
}

export default Tags
