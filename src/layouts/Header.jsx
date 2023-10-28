import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import SiteSearchModalButton from "./SiteSearchModalButton"
import SocialLinks from "./SocialLinks"
import Theme from "./Theme"
import Modal from "../ui/Modal"
import SiteSearchModal from "./SiteSearchModal"

import MenuIcon from "../svg/MenuIcon"
import { transition } from "../utils/css"
import { bp } from "../styled/GlobalStyle"

const Wrapper = styled.header`
  height: var(--header-height);
  background-color: var(--header-bg);
  ${transition("bg")}

  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ bpRightDrawer }) => bpRightDrawer}px) {
    padding-right: ${({ hasRightDrawer }) => (hasRightDrawer ? 40 : 10)}px;
  }

  > .left-drawer-opener {
    --svg-icon-size: 24px;
    background-color: rgba(0, 0, 0, 0.15);
    margin-left: 10px;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem;
    color: whitesmoke;
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  > .logo-and-site-search {
    margin-right: 10px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > .social-links-and-theme {
    margin-right: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Header = ({
  isLeftDrawerAlwaysCollapsed = false,
  isLeftDrawerCollapsed = false,
  handleOpenLeftDrawer = () => {},
  hasRightDrawer = false,
  location,
}) => {
  const bpRightDrawer = getRightDrawerBreakPoint(location)

  return (
    <Wrapper hasRightDrawer={hasRightDrawer} bpRightDrawer={bpRightDrawer}>
      {isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed ? (
        <button className="left-drawer-opener" onClick={handleOpenLeftDrawer}>
          <MenuIcon />
        </button>
      ) : null}

      <div className="logo-and-site-search">
        <Logo />
        <Modal isControlled={false}>
          <SiteSearchModalButton />
          <SiteSearchModal />
        </Modal>
      </div>

      <div className="social-links-and-theme">
        <SocialLinks />
        <Theme />
      </div>
    </Wrapper>
  )
}

export default React.memo(Header)

const getRightDrawerBreakPoint = (location) => {
  if (!location) return 0

  // splitted pathname
  const sp = location?.pathname?.split("/") || []

  if (sp.length === 3 && sp.includes("blog")) {
    // template blog post
    return bp.collapseTemplateBlogPostRightDrawer
  } else if (sp.length === 2 && sp.includes("blog")) {
    // page blog
    return bp.collapsePageBlogRightDrawer
  } else if (sp.length === 4 && sp.includes("book")) {
    // template book chapter
    return bp.collapseTemplateBookChapterRightDraer
  } else {
    return 0
  }
}
