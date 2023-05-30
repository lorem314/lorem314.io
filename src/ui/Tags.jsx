import React from "react"
import styled from "styled-components"
import { transition } from "../utils/css"

const Wrapper = styled.ul.attrs({
  className: "tags",
})`
  list-style-type: none;
  margin: 0.5em 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  > li {
    line-height: 1.2;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    border: 1px solid var(--ui-default-border-color);
    ${transition("bdc")}
  }
`

const Tags = ({ tags = [] }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </Wrapper>
  )
}

export default React.memo(Tags)
