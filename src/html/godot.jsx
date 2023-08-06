import React from "react"
import styled, { css } from "styled-components"

import ExclamationIcon from "../svg/ExclamationIcon"
import { transition } from "../utils/css"

const style = css`
  margin: 1.5rem 0;
  box-shadow: 0px 3px 9px 0px rgb(0 0 0 /29%);
  border-radius: 0.25rem;

  > header {
    padding: 0.5rem 1rem;
    font-weight: bolder;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    ${transition("color", "bg")}
  }

  > .content {
    font-size: 1em;
    padding: 0.5rem 1rem 0.75rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    ${transition("color", "bg")}
  }
`

const StyledTip = styled.div`
  ${style}
  > header {
    color: var(--ui-godot-tip-title-color);
    background-color: var(--ui-godot-tip-title-bg);
  }
  > .content {
    color: var(--ui-godot-tip-content-color);
    background-color: var(--ui-godot-tip-content-bg);
  }
`
export const Tip = ({ title = "提示", children = null }) => {
  return (
    <StyledTip>
      <header>
        <ExclamationIcon />
        {title}
      </header>
      <div className="content">{children}</div>
    </StyledTip>
  )
}

const StyledNote = styled.div`
  ${style}
  > header {
    color: var(--ui-godot-note-title-color);
    background-color: var(--ui-godot-note-title-bg);
  }
  > .content {
    color: var(--ui-godot-note-content-color);
    background-color: var(--ui-godot-note-content-bg);
  }
`
export const Note = ({ title = "笔记", children = null }) => {
  return (
    <StyledNote>
      <header>
        <ExclamationIcon />
        {title}
      </header>
      <div className="content">{children}</div>
    </StyledNote>
  )
}

const StyledWarning = styled.div`
  ${style}
  > header {
    color: var(--ui-godot-warning-title-color);
    background-color: var(--ui-godot-warning-title-bg);
  }
  > .content {
    color: var(--ui-godot-warning-content-color);
    background-color: var(--ui-godot-warning-content-bg);
  }
`
export const Warning = ({ title = "注意", children = null }) => {
  return (
    <StyledWarning>
      <header>
        <ExclamationIcon />
        {title}
      </header>
      <div className="content">{children}</div>
    </StyledWarning>
  )
}
