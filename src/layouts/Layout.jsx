import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Header from "./Header"
import LeftSidebar from "./LeftSidebar"
import HorizontalDrawer from "../ui/HorizontalDrawer"

import GlobalStyle, {
  bpCollapseLeftDrawer,
  leftDrawerWidth,
} from "../styled/GlobalStyle"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"

const Wrapper = styled.div`
  > main {
    position: absolute;
    top: 50px;
    left: ${({ isCollapseLeftDrawer, isAlwaysCollapseLeftDrawer }) =>
      isAlwaysCollapseLeftDrawer || isCollapseLeftDrawer
        ? "0"
        : `${leftDrawerWidth}px`};
    bottom: 0;
    right: 0;

    > .main-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      overflow-y: auto;
      scroll-behavior: smooth;
      padding: 0 10px;

      /* background-color: #e5e5e5; */
    }
  }
`

const Layout = ({ children }) => {
  const { isAlwaysCollapseLeftDrawer } = useGlobalConfig()
  const [isCollapseLeftDrawer, setIsCollapseLeftDrawer] = useState(() => {
    return (
      isAlwaysCollapseLeftDrawer || window.innerWidth <= bpCollapseLeftDrawer
    )
  })
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false)

  useEffect(() => {
    setIsCollapseLeftDrawer(
      isAlwaysCollapseLeftDrawer || window.innerWidth <= bpCollapseLeftDrawer
    )
  }, [isAlwaysCollapseLeftDrawer])

  useEffect(() => {
    const handleWindowResize = () => {
      setIsCollapseLeftDrawer((prevIsCollapseLeftDrawer) => {
        const nextIsCollapseLeftDrawer =
          isAlwaysCollapseLeftDrawer ||
          window.innerWidth <= bpCollapseLeftDrawer
        if (
          prevIsCollapseLeftDrawer === true &&
          nextIsCollapseLeftDrawer === false
        ) {
          setIsLeftDrawerOpen(false)
        }
        return nextIsCollapseLeftDrawer
      })
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [isAlwaysCollapseLeftDrawer])

  const handleOpenLeftDrawer = () => setIsLeftDrawerOpen(true)
  const handleCloseLeftDrawer = () => setIsLeftDrawerOpen(false)

  return (
    <>
      <GlobalStyle />
      <Wrapper
        isCollapseLeftDrawer={isCollapseLeftDrawer}
        isAlwaysCollapseLeftDrawer={isAlwaysCollapseLeftDrawer}
      >
        {/*  */}

        <Header
          isCollapseLeftDrawer={isCollapseLeftDrawer}
          isAlwaysCollapseLeftDrawer={isAlwaysCollapseLeftDrawer}
          handleOpenLeftDrawer={handleOpenLeftDrawer}
        />

        {isAlwaysCollapseLeftDrawer || isCollapseLeftDrawer ? (
          <HorizontalDrawer
            width={leftDrawerWidth}
            isOpen={isLeftDrawerOpen}
            onClose={handleCloseLeftDrawer}
          >
            <LeftSidebar />
          </HorizontalDrawer>
        ) : (
          <LeftSidebar />
        )}

        <main>
          <div className="main-content">{children}</div>
          {/* <div>isCollapseLeftDrawer - {isCollapseLeftDrawer.toString()}</div>
          <div>isLeftDrawerOpen - {isLeftDrawerOpen.toString()}</div>
          <div>
            isAlwaysCollapseLeftDrawer - {isAlwaysCollapseLeftDrawer.toString()}
          </div> */}
        </main>

        {/*  */}
      </Wrapper>
    </>
  )
}

export default Layout
