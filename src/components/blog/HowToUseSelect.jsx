import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  align-self: center;

  padding: 1rem;
  width: 48rem;
  border-radius: 0.25em;
  background-color: var(--page-content-bg);
`

const HowToUseSelect = ({ onClick, onCloseModal }) => {
  return (
    <Wrapper onClick={onClick}>
      <div>how to use select</div>
    </Wrapper>
  )
}

export default HowToUseSelect
