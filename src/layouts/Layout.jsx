import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

import Header from "./Header"
import LeftSidebar from "./LeftSidebar"
import Footer from "./Footer"
import Drawer from "../ui/Drawer"

import { useGlobalConfig } from "../contexts/GlobalConfigContext"
import GlobalStyle, { bp, size } from "../styled/GlobalStyle"
import { transition } from "../utils/css"
import "../fonts/typography.css"

const Wrapper = styled.div`
  > main {
    position: absolute;
    top: var(--header-height);
    left: ${({ isLeftDrawerAlwaysCollapsed, isLeftDrawerCollapsed }) =>
      isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed
        ? "0"
        : `${size.layoutLeftDrawerWidth}px`};
    bottom: 0;
    right: 0;

    > #main-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0 10px;
      overflow: auto;
      scroll-behavior: smooth;

      color: var(--content-text-color-1);
      background-color: var(--content-bg-0);
      ${transition("color", "bg")}

      &:fullscreen {
        > * {
          max-width: 100%;
        }
      }
    }
  }
`

const Layout = ({ children = null, hasRightDrawer = false, location }) => {
  const { isLeftDrawerAlwaysCollapsed } = useGlobalConfig()
  const [isLeftDrawerCollapsed, setIsLeftDrawerCollapsed] = useState(
    () =>
      typeof window !== "undefined" &&
      window.innerWidth <= bp.collapseLayoutLeftDrawer
  )
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false)

  useEffect(() => {
    setIsLeftDrawerCollapsed(
      isLeftDrawerAlwaysCollapsed ||
        window.innerWidth <= bp.collapseLayoutLeftDrawer
    )
  }, [isLeftDrawerAlwaysCollapsed])

  // change isLeftDrawerCollapsed when resize window
  useEffect(() => {
    const handleWindowResize = () => {
      setIsLeftDrawerCollapsed((prevIsLeftDrawerCollapsed) => {
        const nextIsLeftDrawerCollapsed =
          isLeftDrawerAlwaysCollapsed ||
          window.innerWidth <= bp.collapseLayoutLeftDrawer
        if (
          prevIsLeftDrawerCollapsed === true &&
          nextIsLeftDrawerCollapsed === false &&
          !isLeftDrawerAlwaysCollapsed
        ) {
          // when window.innerWidth >= bp.collapseLayoutLeftDrawer while left
          // drawer is collapsed, then close the drawer
          // if only isLeftDrawerAlwaysCollapsed === true, then ignore it
          setIsLeftDrawerOpen(false)
        }
        return nextIsLeftDrawerCollapsed
      })
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [isLeftDrawerAlwaysCollapsed])

  const handleOpenLeftDrawer = useCallback(() => setIsLeftDrawerOpen(true), [])
  const handleCloseLeftDrawer = useCallback(
    () => setIsLeftDrawerOpen(false),
    []
  )

  return (
    <Wrapper
      isLeftDrawerAlwaysCollapsed={isLeftDrawerAlwaysCollapsed}
      isLeftDrawerCollapsed={isLeftDrawerCollapsed}
    >
      <GlobalStyle />

      <Header
        isLeftDrawerAlwaysCollapsed={isLeftDrawerAlwaysCollapsed}
        isLeftDrawerCollapsed={isLeftDrawerCollapsed}
        handleOpenLeftDrawer={handleOpenLeftDrawer}
        hasRightDrawer={hasRightDrawer}
        location={location}
      />

      {isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed ? (
        <Drawer
          isOpen={isLeftDrawerOpen}
          size={size.layoutLeftDrawerWidth}
          onClose={handleCloseLeftDrawer}
        >
          <LeftSidebar isInDrawer={true} />
        </Drawer>
      ) : (
        <LeftSidebar />
      )}

      <main>
        <div id="main-content">
          {children}
          <Footer />
        </div>
      </main>
    </Wrapper>
  )
}

export default Layout
