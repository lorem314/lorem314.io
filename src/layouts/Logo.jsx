import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > .site-title {
    margin: 0;
    font-size: 1.125rem;

    > a {
      color: whitesmoke;
      text-decoration: none;
      font-family: Times, serif; //

      &:hover {
        color: white;
      }
    }
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <h1 className="site-title">
        <Link to="/">lorem314.io</Link>
      </h1>
    </Wrapper>
  )
}

export default Logo
