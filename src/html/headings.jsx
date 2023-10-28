import React from "react"
import styled, { css } from "styled-components"

import HeadingIcon from "../svg/HeadingIcon"
import { bp } from "../styled/GlobalStyle"
import { transition } from "../utils/css"

const cssHeadings = css`
  --svg-icon-size: 1.25rem;
  margin-top: 2em;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25em;

  color: var(--content-text-color-0);
  ${transition("color", "fs", "mg")}

  > a.autolink-anchor {
    padding-left: 0;

    > svg.link-icon {
      opacity: 0.5;
      width: 1.25em;
      height: 1.25em;
      transform: translateY(0.125em);

      .icon {
        fill: var(--link-color);
      }
    }

    &:hover {
      > svg.link-icon {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: ${bp.laptop}px) {
    margin-top: 1.75em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    margin-top: 1.5em;
  }
`

const StyledH1 = styled.h1`
  ${cssHeadings}
  font-size: 2.125em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1.875em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.725em;
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
  ${cssHeadings}
  font-size: 1.875em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1.625em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.25em;
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
  ${cssHeadings}
  font-size: 1.5em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1.25em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1.125em;
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
  ${cssHeadings}
  font-size: 1.25em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1.125em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1em;
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
  ${cssHeadings}
  font-size: 1.125em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1em;
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
  ${cssHeadings}
  font-size: 1em;
  @media screen and (max-width: ${bp.laptop}px) {
    font-size: 1em;
  }
  @media screen and (max-width: ${bp.tablet}px) {
    font-size: 1em;
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
