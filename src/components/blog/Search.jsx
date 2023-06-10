import React, { useId } from "react"
import styled from "styled-components"

import Modal from "../../ui/Modal"
import HowToUseSearch from "./HowToUseSearch"
import InfoIcon from "../../svg/InfoIcon"

const Wrapper = styled.div.attrs({
  className: "search-input",
})`
  > label {
    display: flex;
  }
  > .search-input {
    padding: 6px;
  }
`

const Search = ({ value = "", onChange = () => {} }) => {
  const id = useId()

  return (
    <Wrapper>
      <label className="page-label flex" htmlFor={id}>
        <span>搜索</span>
        <Modal>
          <button className="goast" title="如何使用">
            <InfoIcon />
          </button>
          <HowToUseSearch />
        </Modal>
      </label>
      <input
        className="search-input"
        type="search"
        id={id}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default Search
