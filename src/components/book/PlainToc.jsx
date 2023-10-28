import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0.5rem 0;
  ul {
    padding-left: 26px;
    margin: 0;
  }
`

const PlainToc = ({ tableOfContents }) => {
  return (
    <Wrapper>
      <Items items={tableOfContents.items} />
    </Wrapper>
  )
}

export default PlainToc

const Items = ({ items = [] }) => {
  return (
    <ul className="">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item item={item} />
          </li>
        )
      })}
    </ul>
  )
}

const Item = ({ item }) => {
  if (!item.items) {
    return item.title
  } else {
    return (
      <>
        <li>{item.title}</li>
        <Items items={item.items} />
      </>
    )
  }
}
