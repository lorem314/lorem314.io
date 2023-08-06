import React from "react"
import styled from "styled-components"

import { bp } from "../styled/GlobalStyle"

const StyledP = styled.p`
  letter-spacing: 0.25px;
  font-size: 1em;
  line-height: 1.5;
  margin: 1.5em 0;

  /* @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1.125em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1em;
  } */
`

const P = (props) => {
  return <StyledP {...props}>{props.children}</StyledP>
}

export default P
