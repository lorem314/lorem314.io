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
      font-size: smaller;
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
  } else if (window?.clipboardData) {
    // Internet Explorer
    window?.clipboardData.setData("Text", str)
  }
}

const getTypeName = (type) => {
  switch (type) {
    case "table":
      return "表格"
    default:
      return "代码"
  }
}

const Pre = (props) => {
  const childProps = props.children.props
  const className = childProps.className || ""
  const code = childProps.children.trim()
  const language = className.replace(/language-/, "")
  const title = childProps.title || ""
  const id = childProps.id || ""
  const type = childProps.type || "code"
  const highlights = calculateLinesToHighlight(childProps.highlights || "")

  const typeName = getTypeName(type)
  // console.log("Pre props : ", props)

  return (
    <Wrapper id={`${type}_${id}`}>
      <div className="header">
        {language ? <div className="language-type">{language}</div> : null}
        {title ? (
          <div className="code-title">
            {typeName} {id} {title}
          </div>
        ) : null}
        <CopyButton code={code} />
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
            return (
              <Tokens
                className={className}
                totalLine={totalLine}
                tokens={tokens}
                highlights={highlights}
                getTokenProps={getTokenProps}
              />
            )
          }}
        </Highlight>
      </div>
    </Wrapper>
  )
}

export default Pre

const Tokens = ({
  className,
  totalLine,
  tokens,
  highlights,
  getTokenProps,
}) => {
  const { highlightLineIndexes } = tokens.reduce(
    (config, line, index) => {
      const commentIndex = line.findIndex(({ types }) =>
        types.includes("comment")
      )
      // console.log(`line ${index + 1} has comment :`, commentIndex)
      if (commentIndex !== -1) {
        const commentToken = line[commentIndex]
        // console.log("commentToken", commentToken)
        switch (commentToken.content) {
          case "// highlight-line":
            // console.log("[CASE] highlight-line")
            return {
              ...config,
              highlightLineIndexes: [...config.highlightLineIndexes, index],
            }
          case "// highlight-next-line":
            // console.log("[CASE] highlight-next-line")
            return { ...config, isHighlightNextLine: true }
          case "// highlight-start":
            // console.log("[CASE] highlight-start")
            return { ...config, isHighlightStarted: true }
          case "// highlight-end":
            // console.log("[CASE] highlight-end")
            return { ...config, isHighlightStarted: false }
          default:
            break
        }
      }
      if (config.isHighlightStarted) {
        return {
          ...config,
          highlightLineIndexes: [...config.highlightLineIndexes, index],
        }
      } else if (config.isHighlightNextLine) {
        return {
          ...config,
          highlightLineIndexes: [...config.highlightLineIndexes, index],
          isHighlightNextLine: false,
        }
      } else {
        return config
      }
    },
    {
      highlightLineIndexes: [],
      isHighlightStarted: false,
      isHighlightLine: false,
      isHighlightNextLine: false,
    }
  )

  // console.log("tokens :", tokens)
  // console.log("highlightLineIndexes :", highlightLineIndexes)

  const metaTokens = tokens
    .map((line, index) => {
      if (
        line.length === 3 &&
        (line[1].content === "// highlight-next-line" ||
          line[1].content === "// highlight-start" ||
          line[1].content === "// highlight-end")
      ) {
        return {
          line: null,
          shouldHighlightLine: highlightLineIndexes.includes(index),
        }
      }

      const commentIndex = line.findIndex(({ types }) =>
        types.includes("comment")
      )
      if (
        commentIndex !== -1 &&
        line[commentIndex].content === "// highlight-line"
      ) {
        return {
          line: line.filter((token) => token.content !== "// highlight-line"),
          shouldHighlightLine: highlightLineIndexes.includes(index),
        }
      }

      return {
        line,
        shouldHighlightLine: highlightLineIndexes.includes(index),
      }
    })
    .filter(({ line }) => line !== null)

  // console.log("metaTokens :", metaTokens)

  return (
    <pre className={className}>
      {metaTokens.map(({ line, shouldHighlightLine }, i) => {
        return (
          <Line
            key={i}
            line={line}
            lineNumber={i}
            totalLine={totalLine}
            shouldHighlightLine={shouldHighlightLine}
            highlights={highlights}
            getTokenProps={getTokenProps}
          />
        )
      })}
    </pre>
  )
}
const Line = ({
  totalLine,
  highlights,
  line,
  lineNumber,
  getTokenProps,
  shouldHighlightLine,
}) => {
  const highlightLine = shouldHighlightLine || highlights(lineNumber)
  const className = clsx({ "token-line": true, highlighted: highlightLine })
  const lineNumberStyle = { width: `${10 * totalLine}px` }

  return (
    <div className={className}>
      <span className="line-number" style={lineNumberStyle}>
        {lineNumber + 1}
      </span>
      {line.map((token, key) => {
        return <span key={key} {...getTokenProps({ token, key })} />
      })}
    </div>
  )
}

const CopyButtonWrapper = styled.button`
  background: none;

  font-size: smaller;
  padding: 0.5rem;
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
`
const CopyButton = ({ code = "" }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <CopyButtonWrapper
      title="复制代码"
      onClick={() => {
        copyToClipboard(code)
        showNotification({ body: "代码已复制" })
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
      }}
    >
      {isCopied ? "已复制" : <CopyCodeIcon />}
    </CopyButtonWrapper>
  )
}
