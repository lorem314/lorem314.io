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
  background-color: #f5f5f5;
  max-width: 32rem;

  flex: 1 0 auto;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
  &:focus-visible {
    outline-width: 2px;
    outline-style: solid;
    outline-color: var(--link-color);
  }
  &:active {
    background-color: #e8e8e8;
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
    --svg-icon-color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.25);
    > .btn-label {
      display: none;
    }
    :hover {
      --svg-icon-color: white;
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
`

const SearchModalButton = (props) => {
  return (
    <Wrapper {...props}>
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
