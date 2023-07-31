import React from "react"
import styled from "styled-components"

import { clsx, transition } from "../../utils/css"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 6px;

  > button {
    background: none;
    padding: 0;
    border: 1px solid var(--ui-default-border-color);
    border-radius: 0.25rem;
    font-size: 92.5%;
    color: var(--page-content-text-color-0);
    ${transition("color", "bdc", "bg")}

    &:hover {
      background-color: var(--content-bg-0);
    }
    &.selected {
      color: whitesmoke;
      background-color: var(--ui-tag-btn-bg-selected);
    }
    > .tag-name {
      padding: 0.25rem 0.35rem 0.25rem 0.5rem;
    }
    > .divider {
      align-self: stretch;
      width: 1px;
      background-color: var(--ui-default-border-color);
      height: 100%;
    }
    > .tag-count {
      padding: 0.25rem 0.5rem 0.25rem 0.35rem;
    }
  }
`

const AllTag = ({ tags = [], selectedTags = [], onSelectTag = () => {} }) => {
  return (
    <Wrapper>
      {tags.map((tag) => {
        const selected = selectedTags.includes(tag)
        return (
          <button
            key={tag.name}
            className={clsx({ selected })}
            onClick={onSelectTag(tag)}
          >
            <span className="tag-name">{tag.name}</span>
            <span className="divider" />
            <span className="tag-count">{tag.count}</span>
          </button>
        )
      })}
    </Wrapper>
  )
}

export default AllTag
