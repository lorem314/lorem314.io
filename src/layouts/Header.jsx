import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import SocialLinks from "./SocialLinks"
import Theme from "./Theme"
import Modal from "../ui/Modal"
import SearchModalButton from "./SearchModalButton"
import SearchModal from "./SearchModal"
import MenuIcon from "../svg/MenuIcon"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"
import { transition } from "../utils/css"
import { bpCollapseRightDrawer } from "../styled/GlobalStyle"

const Wrapper = styled.header`
  height: 50px;
  padding: 0 10px;
  background-color: var(--header-bg);
  ${transition("bg")}

  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: ${bpCollapseRightDrawer}px) {
    padding-right: ${({ hasRightDrawer }) => (hasRightDrawer ? 50 : 10)}px;
  }

  .left-drawer-btn {
    display: ${({ isCollapseLeftDrawer, isAlwaysCollapseLeftDrawer }) =>
      isAlwaysCollapseLeftDrawer || isCollapseLeftDrawer ? "initial" : "none"};
    background: none;
    margin: 0;
    border: none;
    border-radius: 25%;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.25);

    &:focus-visible {
      outline-width: 2px;
      outline-style: solid;
      outline-color: var(--link-color);
    }
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
  hasRightDrawer,
}) => {
  const { toggleIsAlwaysCollapseLeftDrawer, prefersColorScheme } =
    useGlobalConfig()

  return (
    <Wrapper
      isCollapseLeftDrawer={isCollapseLeftDrawer}
      isAlwaysCollapseLeftDrawer={isAlwaysCollapseLeftDrawer}
      hasRightDrawer={hasRightDrawer}
    >
      <button className="left-drawer-btn" onClick={handleOpenLeftDrawer}>
        <MenuIcon size={24} color="white" />
      </button>

      <div>
        <Logo />
        <Modal>
          <SearchModalButton />
          <SearchModal />
        </Modal>
      </div>

      <div style={{}}>
        <SocialLinks />
        <Theme />
      </div>
    </Wrapper>
  )
}

export default Header
