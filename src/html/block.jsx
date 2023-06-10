import React from "react"
import styled from "styled-components"

/**
 * element: p
 */
const StyledP = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  letter-spacing: 0.25px;
  font-size: 1.125rem;
`
export const P = (props) => <StyledP {...props}>{props.children}</StyledP>

/**
 * element: blockquote
 */
const StyledBlockquote = styled.blockquote`
  margin-left: 1rem;
  padding-left: 1rem;

  > p {
    margin: 0 0 0.5rem;
  }

  ${(props) => {
    switch (props.variant) {
      case "original-link":
        return `
          border-left: 3px solid var(--link-color);
        `
      default:
        return `
          border-left: 3px solid var(--ui-default-border-color);
        `
    }
  }}
`
export const Blockquote = (props) => (
  <StyledBlockquote {...props}>{props.children}</StyledBlockquote>
)

/**
 * element: ul
 */
export const Ul = styled.ul`
  list-style-type: ${(props) => (props.typeless ? "none" : "initial")};
  padding-left: ${(props) => (props.typeless ? "0.5rem" : "1.5rem")};
  > li {
    font-family: "FiraCode Regular";
  }
  > p {
    margin: 0.25rem 0 0.5rem;
    padding-left: 1.5rem;
  }
`

/**
 * element: table
 */
const StyledTable = styled.table`
  font-size: 1.125rem;
  border-spacing: 8px;
`
export const Table = (props) => (
  <StyledTable {...props}>{props.children}</StyledTable>
)
