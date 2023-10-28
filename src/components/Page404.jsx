import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  margin: 2rem auto;
  max-width: 32rem;
`

const Page404 = () => {
  return (
    <Wrapper className="page-content">
      <h2 className="page-content-title">
        <code>404</code>
      </h2>
      <p>😔 抱歉，没有找到这个页面...</p>
    </Wrapper>
  )
}

export default Page404
