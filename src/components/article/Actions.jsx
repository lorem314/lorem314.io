import React, { useState, useEffect, useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import ToTopIcon from "../../svg/ToTopIcon"
import FullscreenIcon from "../../svg/FullscreenIcon"
import ExitFullscreenIcon from "../../svg/ExitFullscreenIcon"
import ArrowLeftIcon from "../../svg/ArrowLeftIcon"
import { transition } from "../../utils/css"

const Wrapper = styled.div`
  > .action-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    position: sticky;
    top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    > li {
      background-color: var(--page-content-bg);
      ${transition("bg")}
    }
  }

  button {
    background: none;
    margin: 0;
    border: none;
    padding: 0;
    --svg-icon-size: 32px;
    padding: 4px;
  }
`

const Actions = ({ location }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // listen to fullscreen change on document
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) setIsFullscreen(true)
      else setIsFullscreen(false)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const openFullscreen = useCallback(() => {
    const nodeMainContent = document.getElementById("main-content")
    if (nodeMainContent.requestFullscreen) {
      nodeMainContent.requestFullscreen()
    } else {
      alert("浏览器不支持全屏")
    }
  }, [])

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  const handleToTop = useCallback(() => {
    document.getElementById("main-content")?.scrollTo(0, 0)
  }, [])

  const handleGoBack = useCallback(() => {
    const to = location.pathname.split("/").slice(0, -1).join("/")
    navigate(to)
  }, [location.pathname])

  return (
    <Wrapper>
      <ul className="action-list">
        <li>
          <button title="返回" onClick={handleGoBack}>
            <ArrowLeftIcon />
          </button>
        </li>
        <li>
          <button title="回到顶部" onClick={handleToTop}>
            <ToTopIcon />
          </button>
        </li>
        <li>
          {isFullscreen ? (
            <button title="退出全屏" onClick={exitFullscreen}>
              <ExitFullscreenIcon />
            </button>
          ) : (
            <button title="进入全屏" onClick={openFullscreen}>
              <FullscreenIcon />
            </button>
          )}
        </li>
      </ul>
    </Wrapper>
  )
}

export default React.memo(Actions)
