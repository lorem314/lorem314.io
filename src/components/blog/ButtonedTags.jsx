import React from "react"
import styled from "styled-components"

import { transition, clsx } from "../../utils/css"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  > button {
    padding: 0;
    border-radius: 0.25em;
    border: none;

    > .tag-name {
      padding: 0.25em 0.5em;
      color: #4a4a4a;
      background-color: #eee;
      border-top-left-radius: 0.25em;
      border-bottom-left-radius: 0.25em;
    }
    > .tag-count {
      padding: 0.25em 0.5em;
      color: #fff;
      background-color: #3e8ed0;
      border-top-right-radius: 0.25em;
      border-bottom-right-radius: 0.25em;
    }

    &:hover {
      > .tag-name {
        color: #296fa8;
      }
    }
  }
  > button.selected {
    > .tag-name {
      color: #fff;
      background-color: #3e8ed0;
    }
    > .tag-count {
      color: #4a4a4a;
      background-color: #eee;
    }
  }
`

const ButtonedTags = ({ tags = [], selectedTags = [], handleSelectTag }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => {
        const selected = selectedTags.includes(tag)
        return (
          <button
            className={clsx({ selected })}
            key={tag.name}
            onClick={handleSelectTag(tag)}
          >
            <span className="tag-name">{tag.name}</span>
            <span className="tag-count">{tag.count}</span>
          </button>
        )
      })}
    </Wrapper>
  )
}

export default ButtonedTags
