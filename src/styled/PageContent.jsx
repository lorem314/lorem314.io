import styled from "styled-components"
import { transition } from "../utils/css"

const PageContent = styled.div`
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  color: var(--page-content-text-color-1);
  background-color: var(--page-content-bg);
  ${transition("color", "bg")}
`

export default PageContent
