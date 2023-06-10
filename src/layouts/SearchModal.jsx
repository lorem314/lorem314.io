import React from "react"
import styled from "styled-components"

import CloseIcon from "../svg/CloseIcon"
import MagnifyingGlass from "../svg/MagnifyingGlassIcon"

const Wrapper = styled.div`
  margin: 1rem auto;
  background-color: var(--page-content-bg);

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 0.5rem;

  > header {
    --svg-icon-size: 24px;
    padding: 10px 12px;
    font-size: 1.25rem;

    display: flex;
    gap: 0.5rem;

    > .search-bar-container {
      flex: 1 0 auto;
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--ui-default-border-color);
      border-radius: 1em;

      display: flex;
      align-items: center;
      gap: 0.25rem;

      > input {
        background-color: transparent;
        border: none;
        &:focus {
          border: none;
          outline: none;
        }
      }

      &:hover {
        border: 1px solid var(--ui-default-border-color-hover);
      }

      &:focus-within {
        border: 1px solid var(--link-color);
        outline: 1px solid var(--link-color);
      }
    }
  }

  > .search-modal-body {
    height: 100%;
    overflow: auto;
  }

  > footer {
    font-size: smaller;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const SearchModal = ({ onCloseModal }) => {
  return (
    <Wrapper>
      <header>
        <div className="search-bar-container">
          <MagnifyingGlass />
          <input type="text" placeholder="搜索..." />
        </div>
        <button className="goast" onClick={onCloseModal}>
          <CloseIcon />
        </button>
      </header>

      <div className="search-modal-body">
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
        <p style={{ textAlign: "center" }}>该功能还在开发中...</p>
      </div>

      <footer>
        <div>上下方向键:选择</div>
        <div>回车键:前往页面</div>
        <div>ESC键:关闭</div>
      </footer>
    </Wrapper>
  )
}

export default SearchModal
