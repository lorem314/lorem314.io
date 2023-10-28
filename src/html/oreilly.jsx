import React, { cloneElement, Children } from "react"
import styled, { css } from "styled-components"

import tipImg from "../images/oreilly/tip.png"
import noteImg from "../images/oreilly/note.png"
import warningImg from "../images/oreilly/warning.png"
import { transition } from "../utils/css"

const calloutStyles = css`
  margin: 1.5rem 0;
  display: flex;

  > .img-container {
    flex: 0 0 120px;

    display: flex;
    justify-content: center;

    > img {
    }
  }

  > .content {
    > * {
      margin: 0.5rem 0;
    }
  }
`
// scale for callout image
const scale = 0.2

const StyledTip = styled.div`
  ${calloutStyles}
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
  ${calloutStyles}
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
  ${calloutStyles}
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

// <Table />
const TableWrapper = styled.table`
  margin: 1.25rem 0;
  border-collapse: collapse;

  > caption {
    caption-side: top;
    text-align: left;
    margin: 0.25rem 0;
    font-weight: bolder;
    letter-spacing: 1px;
    color: var(--content-text-color-0);
    ${transition("color")}
  }

  > thead {
    color: var(--ui-oreilly-table-thead-color);
    background-color: var(--ui-oreilly-table-thead-bg);
    ${transition("color", "bg")}
  }

  th,
  td {
    padding: 0.4rem 0.6rem;
  }
`
export const Table = ({ id, title, children }) => {
  return (
    <TableWrapper id={`table_${id}`}>
      {title ? (
        <caption>
          表格 {id} {title}
        </caption>
      ) : null}
      {children}
    </TableWrapper>
  )
}
export const Thead = ({ ths = [], children }) => {
  return ths.length === 0 ? (
    children
  ) : (
    <thead>
      <tr>
        {ths.map((th, index) => {
          return th.$$typeof === Symbol.for("react.element") ? (
            React.cloneElement(th, { key: index })
          ) : (
            <th key={index}>{th}</th>
          )
        })}
      </tr>
    </thead>
  )
}
export const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>
}
export const Tr = ({ tds = [], children }) => {
  return tds.length === 0 ? (
    children
  ) : (
    <tr>
      {tds.map((td, index) => {
        return td.$$typeof === Symbol.for("react.element") ? (
          React.cloneElement(td, { key: index })
        ) : (
          <td key={index}>{td}</td>
        )
      })}
    </tr>
  )
}

const CodeBlockWrapper = styled.div``
export const CodeBlock = ({ id, title, children }) => {
  const arrayChildren = Children.toArray(children)
  const hasPrettierIgnore =
    arrayChildren.length === 3 &&
    arrayChildren[0].props.children[0] === "{/" &&
    arrayChildren[0].props.children[2] === "/}" &&
    arrayChildren[2].props.children[0] === "{/" &&
    arrayChildren[2].props.children[2] === "/}"

  return (
    <CodeBlockWrapper>
      <header>code block title</header>
      <div>
        {hasPrettierIgnore
          ? Children.map(arrayChildren, (child, index) => {
              if (index === 0 || index === 2) return null
              else return child
            })
          : children}
      </div>
    </CodeBlockWrapper>
  )
}
