import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 32rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;
`

const Page404 = () => {
  return (
    <Wrapper>
      <h2>Page404</h2>
    </Wrapper>
  )
}

export default Page404
