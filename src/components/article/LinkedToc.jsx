import React, { useRef, useState } from "react"
import styled from "styled-components"

import useToggle from "../../hooks/useToggle"
import ChevronIcon from "../../svg/ChevronIcon"
import DoubleArrowIcon from "../../svg/DoubleArrowIcon"

import Details from "../../html/Details"

const Wrapper = styled.aside.attrs({
  id: "linked-toc",
  className: "linked-toc",
})`
  --border-style: dashed;
  --svg-icon-size: 1.125em;

  user-select: none;
  overflow: auto;
  padding: 10px;
  background-color: var(--page-content-bg);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    > li {
      line-height: 1.5;
      position: relative;
      margin-left: 0.5em;
      padding-left: 0.75em;
      border-left: 0.0625em var(--border-style) var(--ui-default-border-color);
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 0.0625em var(--border-style)
          var(--ui-default-border-color);
      }
    }
    > li:last-child {
      border-left: 1px var(--border-style) transparent;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 0.0625em var(--border-style)
          var(--ui-default-border-color);
      }
      &::after {
        position: absolute;
        top: 0;
        left: -1px;
        content: " ";
        /* width: 0.5em; */
        height: 0.75em;
        border-left: 0.0625em var(--border-style) var(--ui-default-border-color);
      }
    }
  }
`

const LinkedToc = ({ tableOfContents }) => {
  const refDetails = useRef(null)
  const refItems = useRef(null)

  return (
    <Wrapper>
      <Details open>
        <div style={{ flexGrow: "1", display: "flex", alignItems: "center" }}>
          <strong style={{ flexGrow: "1" }}>目录</strong>
          <button className="goast">
            <DoubleArrowIcon variant="up" />
          </button>
          <button className="goast">
            <DoubleArrowIcon variant="down" />
          </button>
        </div>
        <Items ref={ref} items={tableOfContents.items} />
      </Details>
    </Wrapper>
  )
}

export default React.memo(LinkedToc)

const Items = ({ items = [], level = 0 }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item item={item} level={level} />
          </li>
        )
      })}
    </ul>
  )
}

const Item = ({ item, level = 0 }) => {
  if (!item.items) {
    return <a href="">{item.title}</a>
  } else {
    return (
      <Details open>
        <li style={{ flexGrow: "1", display: "flex", alignItems: "center" }}>
          <div style={{ flexGrow: "1" }}>
            <a href="">{item.title}</a>
          </div>
          <button className="goast">
            <DoubleArrowIcon variant="up" />
          </button>
          <button className="goast">
            <DoubleArrowIcon variant="down" />
          </button>
        </li>
        <Items items={item.items} level={level + 1} />
      </Details>
    )
  }
}
