import React from "react"
import styled from "styled-components"

import PageContent from "../styled/PageContent"

const Wrapper = styled(PageContent)`
  margin: 2rem auto;
  max-width: 48rem;
`

const PageIndex = () => {
  return (
    <Wrapper>
      <h2 className="page-content-title">主页</h2>
    </Wrapper>
  )
}

export default PageIndex
