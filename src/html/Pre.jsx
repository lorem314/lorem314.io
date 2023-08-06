import React, { useState } from "react"
import styled from "styled-components"
import { Highlight, defaultProps, themes } from "prism-react-renderer"
import rangeParser from "parse-numeric-range"

import CopyCodeIcon from "../svg/CopyCodeIcon"
import { showNotification } from "../ui/Notification"
import { clsx } from "../utils/css"

const Wrapper = styled.div`
  background-color: #011627;
  border-radius: 0.5rem;
  margin: 1rem 0;

  > .header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
    font-family: "FiraCode-Regular", monospace;
    padding-top: 0.5rem;

    > .language-type {
      /* background-color: rgba(0, 0, 0, 0.1); */
      font-weight: bolder;
      padding: 0.25rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      font-size: 1em;
    }
    > .code-title {
      color: #9d9d9d;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > .copy-code-button {
      /* background: none; */
      font-size: smaller;
      padding: 0.5em;
      border-radius: 0.25rem;
      border: none;
      --svg-icon-size: 1.5em;

      position: absolute;
      top: 0.5rem;
      right: 0.5rem;

      color: whitesmoke;
      background-color: rgba(255, 255, 255, 0.1);
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  > .body {
    overflow: auto;
    background-color: #011627;
    border-radius: 0.5rem;

    > pre {
      font-family: "FiraCode-Regular", monospace;
      width: 100%;
      color: #d6deeb;

      > .token-line {
        padding-left: 1rem;
        color: #d6deeb;
        display: block;
        width: 100%;

        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        > .line-number {
          display: inline-block;
          text-align: right;
          margin-right: 1rem;
        }
      }

      > .token-line.highlighted {
        background-color: #00f5c426;
      }
    }
  }
`

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw)
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const copyToClipboard = (str) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!")
      },
      function (err) {
        console.error("Could not copy text: ", err)
      }
    )
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str)
  }
}

const hasHighlightComment = (line) => {
  const idx = line.findIndex((token) => token.content === "// highlight-line")
  console.log("idx ", idx)
  if (idx !== -1) {
    line.splice(idx, 1)
    return true
  } else {
    return false
  }
}

const Pre = (props) => {
  console.log("Pre props : ", props)

  const [isCopied, setIsCopied] = useState(false)
  const className = props.children.props.className || ""
  const code = props.children.props.children.trim()
  const language = className.replace(/language-/, "")
  const title = props.children.props.title || ""
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  )

  return (
    <Wrapper>
      <div className="header">
        {language ? <div className="language-type">{language}</div> : null}
        {title ? <div className="code-title">{title}</div> : null}
        <button
          className="copy-code-button goast"
          title="复制代码"
          onClick={() => {
            copyToClipboard(code)
            showNotification({ body: "代码已复制" })
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 1500)
          }}
        >
          {isCopied ? "已复制" : <CopyCodeIcon />}
        </button>
      </div>
      <div className="body">
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={themes.nightOwl}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            const totalLine = tokens.length.toString().split("").length || 0
            // console.log("tokens :", tokens)
            return (
              <pre className={className}>
                {tokens.map((line, i) => {
                  const highlighted = hasHighlightComment(line)
                  console.log(`line ${i + 1} (${highlighted}):`, line)
                  return (
                    <div
                      key={i}
                      className={clsx({
                        "token-line": true,
                        highlighted: highlighted || highlights(i),
                      })}
                    >
                      <span
                        className="line-number"
                        style={{ width: `${10 * totalLine}px` }}
                      >
                        {i + 1}
                      </span>
                      {line.map((token, key) => {
                        return (
                          <span key={key} {...getTokenProps({ token, key })} />
                        )
                      })}
                    </div>
                  )
                })}
              </pre>
            )
          }}
        </Highlight>
      </div>
    </Wrapper>
  )
}

export default Pre
