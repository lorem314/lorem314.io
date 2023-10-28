import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .search-input {
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
`

const Search = ({ value = "", onChange = () => {} }) => {
  return (
    <Wrapper>
      <label className="page-content-title block" htmlFor="blog-search-input">
        <span>搜索</span>
      </label>
      <input
        id="blog-search-input"
        className="search-input"
        type="search"
        placeholder="搜索标题名..."
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default Search
