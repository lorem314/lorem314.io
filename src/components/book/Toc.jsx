import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  ul {
    /* list-style-type: none; */
    margin: 0;
    padding: 0;
    margin-left: 26px;
  }
  > ul {
    margin: 0.25em 1.65rem;
  }
`

const Toc = ({ tableOfContents }) => {
  return (
    <Wrapper>
      <Items items={tableOfContents.items} />
    </Wrapper>
  )
}

export default Toc

const Items = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <Item key={index} item={item} />
      })}
    </ul>
  )
}
const Item = ({ item }) => {
  if (!item.items) {
    return <li>{item.title}</li>
  } else {
    return (
      <>
        <li>{item.title}</li>
        <Items items={item.items} />
      </>
    )
  }
}
