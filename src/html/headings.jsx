import React from "react"
import styled from "styled-components"

const sharedStyles = `
  color: var(--page-strong-text-color);
  transition: color var(--theme-transition-props), border-color var(--theme-transition-props);
  > a.autolink-anchor {
    opacity: 0;
  }

  :hover{
    > a.autolink-anchor {
      opacity: 1;
    }
  }
`

const StyledH1 = styled.h1``
export const H1 = (props) => <StyledH1 {...props}>{props.children}</StyledH1>

const StyledH2 = styled.h2`
  ${sharedStyles}
  font-size: 2rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--ui-default-border-color);
  margin: 2rem 0 1rem;
`
export const H2 = (props) => <StyledH2 {...props}>{props.children}</StyledH2>

const StyledH3 = styled.h3`
  ${sharedStyles}
  font-size: 1.75rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--ui-default-border-color);
  margin: 2rem 0 1rem;
`
export const H3 = (props) => <StyledH3 {...props}>{props.children}</StyledH3>

const StyledH4 = styled.h4`
  ${sharedStyles}
`
export const H4 = (props) => <StyledH4 {...props}>{props.children}</StyledH4>

const StyledH5 = styled.h5``
export const H5 = (props) => <StyledH5 {...props}>{props.children}</StyledH5>

const StyledH6 = styled.h6``
export const H6 = (props) => <StyledH6 {...props}>{props.children}</StyledH6>
