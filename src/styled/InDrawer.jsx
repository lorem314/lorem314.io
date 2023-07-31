import React from "react"
import styled from "styled-components"

import CloseIcon from "../svg/CloseIcon"

const Wrapper = styled.aside`
  > header {
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
    margin: 1rem 0.5rem;
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
      <section className="children">{children}</section>
    </Wrapper>
  )
}

export default InDrawer
