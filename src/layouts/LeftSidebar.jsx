import React from "react"
import styled from "styled-components"

import { leftDrawerWidth } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: ${leftDrawerWidth}px;
  background-color: lightcoral;
`

const LeftSidebar = () => {
  return (
    <Wrapper>
      <nav>n</nav>
      <section>s</section>
    </Wrapper>
  )
}

export default LeftSidebar
