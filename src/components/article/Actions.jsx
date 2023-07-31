import React, { useEffect, useState, useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import FullscreenIcon from "../../svg/FullscreenIcon"
import FullscreenExitIcon from "../../svg/FullscreenExitIcon"
import ArrowIcon from "../../svg/ArrowIcon"
import ArrowToIcon from "../../svg/ArrowToIcon"

import { transition } from "../../utils/css"
import { bp } from "../../styled/GlobalStyle"

const Wrapper = styled.aside`
  .action-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    position: sticky;
    top: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    > li {
      --svg-icon-size: 1.5rem;

      > button {
        padding: 0.25rem;
        color: var(--ui-svg-icon-color);
        background-color: var(--page-content-bg);
        border-radius: 0.25rem;
        ${transition("color", "bg")}
      }
    }
  }

  @media screen and (max-width: ${bp.tablet}px) {
    position: fixed;
    right: 2rem;
    bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`

const Actions = ({ location }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

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
          <button className="goast" onClick={handleGoBack}>
            <ArrowIcon variant="left" />
          </button>
        </li>
        <li>
          <button className="goast" onClick={handleToTop}>
            <ArrowToIcon variant="top" />
          </button>
        </li>
        <li>
          {isFullscreen ? (
            <button className="goast" onClick={exitFullscreen}>
              <FullscreenExitIcon />
            </button>
          ) : (
            <button className="goast" onClick={openFullscreen}>
              <FullscreenIcon />
            </button>
          )}
        </li>
      </ul>
    </Wrapper>
  )
}

export default Actions
