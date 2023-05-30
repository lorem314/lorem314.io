import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  > .site-title {
    margin: 0;
    font-size: 1.25rem;

    > a {
      color: whitesmoke;
      text-decoration: none;
      font-family: Times, serif; //
      outline-offset: 4px;

      &:hover {
        color: white;
      }
      &:focus-visible {
        outline-width: 2px;
        outline-style: solid;
        outline-color: var(--link-color);
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
