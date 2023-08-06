import styled, { css } from "styled-components"

export const Blockquote = styled.blockquote`
  margin: 1rem 0;
  border-left: 0.25rem solid currentColor;
  padding: 0.25rem 0;
  padding-left: 0.75rem;
`

const cssList = css`
  padding-left: 1.5rem;

  > li {
    line-height: 1.75;
  }
`

export const Ul = styled.ul`
  ${cssList}
`
export const Ol = styled.ol`
  ${cssList}
`
