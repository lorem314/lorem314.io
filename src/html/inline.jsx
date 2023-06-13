import React from "react"
import styled from "styled-components"

const StyledU = styled.u`
  font-family: "FiraCode Regular";
  text-underline-offset: 0.25em;
  text-decoration-style: dotted;
  text-decoration-color: var(--ui-default-border-color-hover);
  /* color: var(--page-strong-text-color); */
  /* transition: color 250ms ease-in-out; */
`
export const U = (props) => <StyledU {...props}>{props.children}</StyledU>

const StyledEn = styled.span``
export const En = (props) => <StyledEn {...props}>{props.children}</StyledEn>

const StyledStrong = styled.strong`
  padding: 0 0.125em;
  color: var(--page-strong-text-color);
  transition: color var(--theme-transition-props);
`
export const Strong = (props) => (
  <StyledStrong {...props}>{props.children}</StyledStrong>
)
