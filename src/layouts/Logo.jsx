import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  height: var(--header-height);
  margin: 0 10px;

  display: flex;
  align-items: center;

  > .site-title {
    margin: 0;
    font-size: 1.125rem;

    > .home-link {
      color: white;
      text-decoration: none;
      opacity: 0.875;

      &:hover {
        opacity: 1;
      }
    }
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <h1 className="site-title">
        <Link className="home-link" to="/">
          lorem314.io
        </Link>
      </h1>
    </Wrapper>
  )
}

export default Logo
