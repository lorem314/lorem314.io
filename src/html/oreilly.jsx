import React from "react"
import styled, { css } from "styled-components"

import tipImg from "../images/oreilly/tip.png"
import noteImg from "../images/oreilly/note.png"
import warningImg from "../images/oreilly/warning.png"

const styles = css`
  margin: 1rem 0;
  display: flex;

  > .img-container {
    flex: 0 0 120px;

    display: flex;
    justify-content: center;

    > img {
    }
  }

  > .content {
    > p {
      margin: 0;
    }
  }
`
const scale = 0.2

const StyledTip = styled.div`
  ${styles}
`
export const Tip = ({ children = null }) => {
  return (
    <StyledTip>
      <div className="img-container">
        <img
          width={`${Math.floor(394 * scale)}px`}
          height={`${Math.floor(514 * scale)}px`}
          className="img"
          src={tipImg}
          alt="提示"
        />
      </div>
      <div className="content">{children}</div>
    </StyledTip>
  )
}

const StyledNote = styled.div`
  ${styles}
`
export const Note = ({ children = null }) => {
  return (
    <StyledNote>
      <div className="img-container">
        <img
          width={`${Math.floor(429 * scale)}px`}
          height={`${Math.floor(573 * scale)}px`}
          className="img"
          src={noteImg}
          alt="笔记"
        />
      </div>
      <div className="content">{children}</div>
    </StyledNote>
  )
}

const StyledWarning = styled.div`
  ${styles}
`
export const Warning = ({ children = null }) => {
  return (
    <StyledWarning>
      <div className="img-container">
        <img
          width={`${Math.floor(503 * scale)}px`}
          height={`${Math.floor(479 * scale)}px`}
          className="img"
          src={warningImg}
          alt="注意"
        />
      </div>
      <div className="content">{children}</div>
    </StyledWarning>
  )
}

const FigureWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;

  > .image-container {
    border: 1px solid currentColor;
    padding: 1rem 1rem;
    > p {
      margin: 0;
    }
  }

  > .title {
    margin-top: 0.25rem;
  }
`
export const Figure = ({ id, title, children }) => {
  return (
    <FigureWrapper id={id}>
      <div className="image-container">{children}</div>
      <div className="title">{title}</div>
    </FigureWrapper>
  )
}

const BorderBoxWrapper = styled.div`
  margin: 1rem 0;
  border: 1px solid currentColor;
  padding: 1rem 1rem;

  > .title {
    font-size: 1.125em;
    text-align: center;
    font-weight: bolder;
  }
`
export const BorderBox = ({ title = "", children }) => {
  return (
    <BorderBoxWrapper>
      {title ? <div className="title">{title}</div> : null}
      {children}
    </BorderBoxWrapper>
  )
}
