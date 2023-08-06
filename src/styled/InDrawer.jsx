import React from "react"
import styled from "styled-components"

import CloseIcon from "../svg/CloseIcon"

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;

  > header {
    flex: 0 0 var(--header-height);
    height: var(--header-height);
    color: whitesmoke;
    background-color: var(--header-bg);
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > .drawer-title {
      font-size: 1rem;
      margin: 0;
    }

    > .close-drawer-button {
      background: none;
      border: none;
      padding: 0.25rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.1);
      --svg-icon-size: 24px;
      border-radius: 0.25rem;
    }
  }

  > .children {
    flex: 1 1 auto;
    background-color: var(--page-content-bg);
  }
`

const InDrawer = ({
  title = "标题",
  children = null,
  onCloseDrawer = () => {},
}) => {
  return (
    <Wrapper>
      <header>
        <h1 className="drawer-title">{title}</h1>
        <button className="close-drawer-button" onClick={onCloseDrawer}>
          <CloseIcon />
        </button>
      </header>
      <div className="children">{children}</div>
    </Wrapper>
  )
}

export default InDrawer
