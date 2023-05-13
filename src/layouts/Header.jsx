import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import SocialLinks from "./SocialLinks"
import Theme from "./Theme"
import SearchModalButton from "./SearchModalButton"
import MenuIcon from "../svg/MenuIcon"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"
import { transition } from "../utils/css"

const Wrapper = styled.header`
  height: 50px;
  padding: 0 10px;
  background-color: var(--header-bg);
  ${transition("bg")}

  display: flex;
  align-items: center;
  gap: 10px;

  .left-drawer-btn {
    display: ${({ isCollapseLeftDrawer, isAlwaysCollapseLeftDrawer }) =>
      isAlwaysCollapseLeftDrawer || isCollapseLeftDrawer ? "initial" : "none"};
    background: none;
    margin: 0;
    border: none;
    border-radius: 25%;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  > div:nth-child(2) {
    flex: 1 0 auto;
    gap: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div:nth-child(3) {
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    gap: 10px;
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

      <div>
        <Logo />
        <SearchModalButton />
      </div>

      <div>
        <SocialLinks />
        <Theme />
      </div>

      {/* <button onClick={toggleIsAlwaysCollapseLeftDrawer}>
        toggleIsAlwaysCollapseLeftDrawer
      </button> */}
    </Wrapper>
  )
}

export default Header
