import React from "react"
import styled from "styled-components"

import SearchIcon from "../svg/SearchIcon"
import { transition } from "../utils/css"

const Wrapper = styled.button`
  background: none;
  border: none;
  padding: 0.35em 0.75em;
  border-radius: 2em;
  background-color: rgba(0, 0, 0, 0.1);
  color: whitesmoke;

  max-width: 32rem;
  flex-grow: 1;

  display: flex;
  align-items: center;
  ${transition("bg")}

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  > .site-search-modal-button-label {
    flex-grow: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > .label-text {
      font-size: smaller;
    }
    > .kbds {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 640px) {
    --svg-icon-size: 24px;
    border-radius: 0.25em;
    justify-content: flex-end;
    max-width: 32px;
    padding: 0.25em;
    /* background-color: transparent; */
    &:hover {
      /* background-color: transparent; */
    }
    > .site-search-modal-button-label {
      display: none;
    }
  }
`

const SiteSearchModalButton = (props) => {
  return (
    <Wrapper {...props}>
      <SearchIcon />
      <div className="site-search-modal-button-label">
        <span className="label-text">搜索</span>
        <span className="kbds">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </span>
      </div>
    </Wrapper>
  )
}

export default SiteSearchModalButton
