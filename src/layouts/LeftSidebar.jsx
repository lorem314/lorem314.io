import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./Logo"

import CloseIcon from "../svg/CloseIcon"
import CodeIcon from "../svg/CodeIcon"
import ArticleIcon from "../svg/ArticleIcon"
import BookIcon from "../svg/BookIcon"
import GamePadIcon from "../svg/GamePadIcon"
import SettingIcon from "../svg/SettingIcon"

import { leftDrawerWidth } from "../styled/GlobalStyle"
import { transition } from "../utils/css"

const Wrapper = styled.div`
  position: absolute;
  top: ${({ isInDrawer }) => (isInDrawer ? 0 : 50)}px;
  left: 0;
  bottom: 0;
  width: ${leftDrawerWidth}px;
  color: var(--page-content-normal-text);
  background-color: var(--left-sidebar-bg);
  ${transition("color", "bg")}

  display: flex;
  flex-direction: column;

  > .sidebar-header {
    height: 50px;
    background-color: var(--header-bg);
    ${transition("bg")}

    display: flex;
    align-items: center;

    > .close-drawer-btn {
      background: none;
      margin: 10px;
      border: none;
      padding: 4px;
      --svg-icon-color: whitesmoke;
      --svg-icon-size: 24px;
      border-radius: 25%;
      background-color: rgba(0, 0, 0, 0.25);
      ${transition("bg")}
    }
  }

  > .sidebar-body {
    flex: 1 1 auto;
    display: flex;
    overflow: auto;
    > nav {
      flex: 0 0 50px;
      padding-top: 10px;
      background-color: var(--left-sidebar-nav-bg);
      ${transition("bg")}

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      > a {
        --svg-icon-size: 24px;
        padding: 4px;
        border-radius: 25%;
        background-color: var(--svg-icon-bg);
        ${transition("bg")}
      }
      > a:hover {
        --svg-icon-color: var(--svg-icon-color-hover);
        background-color: var(--svg-icon-bg-hover);
      }
      > a.actived {
        --svg-icon-color: var(--svg-icon-color-actived);
        background-color: var(--svg-icon-bg-actived);
      }
    }
    > section {
      flex: 1 1 auto;
      margin: 10px 10px 0;
      padding: 0 10px;
      overflow: auto;
      box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.1);
      background-color: var(--left-sidebar-section-bg);
      ${transition("bg")}
    }
  }

  > .sidebar-footer {
    background-color: var(--page-content-bg);
  }
`

const LeftSidebar = ({ isInDrawer, onCloseDrawer }) => {
  return (
    <Wrapper isInDrawer={isInDrawer}>
      {isInDrawer && (
        <header className="sidebar-header">
          <button className="close-drawer-btn" onClick={onCloseDrawer}>
            <CloseIcon />
          </button>
          <Logo />
        </header>
      )}
      <div className="sidebar-body">
        <nav>
          {routes.map(({ Icon, title, src, partiallyActive }, index) => {
            return (
              <Link
                key={index}
                to={src}
                activeClassName={"actived"}
                partiallyActive={partiallyActive}
                title={title}
              >
                <Icon />
              </Link>
            )
          })}
        </nav>

        <section>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
          <h1>recent</h1>
        </section>
      </div>
      {/* <footer className="sidebar-footer">
        <p>drawer-footer</p>
      </footer> */}
    </Wrapper>
  )
}

export default LeftSidebar

const routes = [
  {
    Icon: (props) => <CodeIcon {...props} />,
    title: "主页",
    src: "/",
    partiallyActive: false,
  },
  {
    Icon: (props) => <ArticleIcon {...props} />,
    title: "博客",
    src: "/blog",
    partiallyActive: true,
  },
  {
    Icon: (props) => <BookIcon {...props} />,
    title: "书籍",
    src: "/book",
    partiallyActive: true,
  },
  {
    Icon: (props) => <GamePadIcon {...props} />,
    title: "工具",
    src: "/tool",
    partiallyActive: true,
  },
  {
    Icon: (props) => <SettingIcon {...props} />,
    title: "设置",
    src: "/setting",
    partiallyActive: true,
  },
]
