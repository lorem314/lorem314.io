import React, { useId } from "react"
import styled from "styled-components"

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
      <label className="page-label" htmlFor={id}>
        搜索
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
