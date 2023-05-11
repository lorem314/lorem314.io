import React from "react"
import styled from "styled-components"

import Logo from "./Logo"

import MenuIcon from "../svg/MenuIcon"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"

const Wrapper = styled.header`
  height: 50px;
  background-color: darkorchid;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  .left-drawer-btn {
    display: ${({ isCollapseLeftDrawer, isAlwaysCollapseLeftDrawer }) =>
      isAlwaysCollapseLeftDrawer || isCollapseLeftDrawer ? "initial" : "none"};
    background: none;
    margin: 0;
    border: none;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .search-modal-btn {
    background: none;
    margin: 0;
    border: none;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    background-color: whitesmoke;
    &:hover {
      background-color: white;
    }
    .btn-text {
      font-size: smaller;
      transform: translateY(1px);
    }
    .kbds {
      /* transform: translateY(-1px); */
      font-size: smaller;
    }
  }
`

const Header = ({
  isCollapseLeftDrawer,
  isAlwaysCollapseLeftDrawer,
  handleOpenLeftDrawer,
}) => {
  const { toggleIsAlwaysCollapseLeftDrawer } = useGlobalConfig()

  return (
    <Wrapper
      isCollapseLeftDrawer={isCollapseLeftDrawer}
      isAlwaysCollapseLeftDrawer={isAlwaysCollapseLeftDrawer}
    >
      <button className="left-drawer-btn" onClick={handleOpenLeftDrawer}>
        <MenuIcon size={24} color="white" />
      </button>

      <Logo />

      <button className="search-modal-btn">
        <span className="btn-text">搜索</span>
        <div className="kbds">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </div>
      </button>

      <button onClick={toggleIsAlwaysCollapseLeftDrawer}>
        toggleIsAlwaysCollapseLeftDrawer
      </button>
    </Wrapper>
  )
}

export default Header
