import styled from "styled-components"
import { transition } from "../utils/css"

const PageContent = styled.div`
  padding: 0.5rem 1rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: var(--content-text-color-1);
  background-color: var(--page-content-bg);
  ${transition("color", "bg")}
`

export default PageContent
