import React from "react"
import styled, { css } from "styled-components"
import HeadingIcon from "../svg/HeadingIcon"
import { bp } from "../styled/GlobalStyle"

const sharedStyles = css`
  --svg-icon-size: 1.25rem;
  color: var(--page-content-text-color-0);
  margin-top: 2em;
  transition: font-size 0.25s ease-in-out, margin 0.25s ease-in-out;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > .autolink-anchor {
    > .link-icon {
      width: 1.25em;
      height: 1.25em;
      transform: translateY(0.25rem);
      .icon {
        fill: var(--link-color);
      }
    }
  }

  @media screen and (max-width: ${bp.tablet}px) {
    margin-top: 1.75em;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    margin-top: 1.5em;
  }
`

const StyledH1 = styled.h1`
  ${sharedStyles}
  font-size: 2.125rem;
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.5rem;
  }
`
export const H1 = (props) => {
  return (
    <StyledH1 {...props}>
      {/* <HeadingIcon level="1" /> */}
      {props.children}
    </StyledH1>
  )
}

const StyledH2 = styled.h2`
  ${sharedStyles}
  font-size: 1.875rem;
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.25rem;
  }
`
export const H2 = (props) => {
  return (
    <StyledH2 {...props}>
      {/* <HeadingIcon level="2" /> */}
      {props.children}
    </StyledH2>
  )
}

const StyledH3 = styled.h3`
  ${sharedStyles}
  font-size: 1.5rem;
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.125rem;
  }
`
export const H3 = (props) => {
  return (
    <StyledH3 {...props}>
      {/* <HeadingIcon level="3" /> */}
      {props.children}
    </StyledH3>
  )
}

const StyledH4 = styled.h4`
  ${sharedStyles}
  font-size: 1.25rem;
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.125rem;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.125rem;
  }
`
export const H4 = (props) => {
  return (
    <StyledH4 {...props}>
      {/* <HeadingIcon level="4" /> */}
      {props.children}
    </StyledH4>
  )
}

const StyledH5 = styled.h5`
  ${sharedStyles}
  font-size: 1.125rem;
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1rem;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.125rem;
  }
`
export const H5 = (props) => {
  return (
    <StyledH5 {...props}>
      {/* <HeadingIcon level="5" /> */}
      {props.children}
    </StyledH5>
  )
}

const StyledH6 = styled.h6`
  ${sharedStyles}
  font-size: 1rem;
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1rem;
  }
  @media screen and (max-width: ${bp.mobile}px) {
    font-size: 1.125rem;
  }
`
export const H6 = (props) => {
  return (
    <StyledH6 {...props}>
      {/* <HeadingIcon level="6" /> */}
      {props.children}
    </StyledH6>
  )
}
