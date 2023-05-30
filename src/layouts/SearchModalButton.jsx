import React from "react"
import styled from "styled-components"

import MagnifyingGlass from "../svg/MagnifyingGlassIcon"
import { bpHideSearchModalButtonLabel } from "../styled/GlobalStyle"

const Wrapper = styled.button`
  background: none;
  margin: 0;
  border: none;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  background-color: whitesmoke;
  max-width: 32rem;

  flex: 1 0 auto;
  display: flex;
  align-items: center;

  &:hover {
    background-color: white;
  }
  &:focus-visible {
    outline-width: 2px;
    outline-style: solid;
    outline-color: var(--link-color);
  }

  .btn-label {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-text {
      font-size: smaller;
    }
    .kbds {
      font-size: smaller;
    }
  }

  @media screen and (max-width: ${bpHideSearchModalButtonLabel}px) {
    flex: 0 0 auto;
    padding: 4px;
    border-radius: 25%;
    --svg-icon-size: 24px;
    --svg-icon-color: white;
    background-color: rgba(0, 0, 0, 0.25);
    > .btn-label {
      display: none;
    }
    :hover {
      background-color: transparent;
    }
  }
`

const SearchModalButton = () => {
  return (
    <Wrapper>
      <MagnifyingGlass />
      <div className="btn-label">
        <span className="btn-text">搜索</span>
        <div className="kbds">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </div>
      </div>
    </Wrapper>
  )
}

export default SearchModalButton
