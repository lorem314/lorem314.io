import styled from "styled-components"

import { transition } from "../utils/css"

export const U = styled.u`
  text-underline-offset: 4px;
`
export const Strong = styled.strong`
  /* font-size: 0.975em; */
`

export const Code = styled.code`
  font-size: 0.875em;
  padding: 3px 5px;
  border-radius: 0.125em;

  color: var(--inline-code-color);
  background-color: var(--inline-code-bg);
  ${transition("color", "bg")}
`
