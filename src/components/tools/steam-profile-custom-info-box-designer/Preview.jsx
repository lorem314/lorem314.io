import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import { keyPrefix } from "./helper"

const Wrapper = styled.fieldset`
  .actions {
    margin-bottom: 0.5rem;
  }
  .result {
    display: flex;
    flex-direction: column;
    gap: 2px;
    .row {
      display: flex;
      gap: 2px;
      .emoji-container {
        background-color: rgba(0, 0, 0, 0.1);
        user-select: none;
        width: 54px;
        height: 54px;
        img {
          cursor: pointer;
        }
      }
    }
  }
  .context-menu {
    /* font-size: smaller; */
    display: ${(props) => (props.contextMenu.isShow ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    border: 1px solid lightgrey;
    border-radius: 2px;
    top: ${(props) => props.contextMenu.isShow && props.contextMenu.y + 1}px;
    left: ${(props) => props.contextMenu.isShow && props.contextMenu.x + 1}px;
    background-color: whitesmoke;
    user-select: none;
    .option {
      padding: 0.5rem;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`
const Preview = ({
  arr2d = [[]],
  handleDragStart = () => () => {},
  handleDragEnd = () => () => {},
  handleDrop = () => () => {},
  handleDragOver = () => () => {},
  clearOneIcon = () => () => {},
  insert = () => () => {},
  clearRow = () => () => {},
  clearCol = () => () => {},
  removeRow = () => () => {},
  removeCol = () => () => {},
}) => {
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, isShow: false })
  const [selectedIconPos, setSelectedIconPos] = useState({ x: null, y: null })
  const [feedback, setFeedback] = useState({})
  const refContextMenu = useRef()

  const handleContextMenu = (x, y, icon) => (event) => {
    event.preventDefault()
    setSelectedIconPos({ x, y })
    const { pageX, pageY } = event
    setContextMenu({ ...contextMenu, isShow: true, x: pageX, y: pageY })
  }
  useEffect(() => {
    const fn = () => setContextMenu({ ...contextMenu, isShow: false })
    document.addEventListener("click", fn)
    return () => {
      document.removeEventListener("click", fn)
    }
  }, [])

  const clickSave = () => {
    const mapper = {}
    const data = arr2d.map((row) => {
      return row.map((icon) => {
        if (!mapper[icon.name]) mapper[icon.name] = icon.url
        return icon.name
      })
    })
    try {
      const value = JSON.stringify({ mapper, data })
      localStorage.setItem(`${keyPrefix}_preview`, value)
    } catch (error) {
      console.error(`[ERROR] 预览 保存失败`)
      setFeedback({ error: "保存失败" })
      return
    }
    setFeedback({ success: "保存成功" })
  }

  return (
    <Wrapper contextMenu={contextMenu}>
      <legend>
        预览 ({arr2d.length}&times;{arr2d[0].length})
      </legend>
      <div className="actions">
        <button onClick={clickSave}>保存</button>
        {feedback.error && <span className="error">{feedback.error}</span>}
        {feedback.success && (
          <span className="success">{feedback.success}</span>
        )}
      </div>
      <div className="result">
        {arr2d.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((icon, colIndex) => {
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="emoji-container"
                    onClick={() => {
                      console.log(`[ ${rowIndex} , ${colIndex} ]`)
                    }}
                    onDrop={handleDrop(rowIndex, colIndex)}
                    onDragOver={handleDragOver(rowIndex, colIndex)}
                    onContextMenu={handleContextMenu(rowIndex, colIndex, icon)}
                  >
                    {icon.url ? (
                      <img
                        src={icon.url}
                        alt="emoji-img"
                        onDragStart={handleDragStart(rowIndex, colIndex, icon)}
                        onDragEnd={handleDragEnd(rowIndex, colIndex, icon)}
                      />
                    ) : null}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="context-menu" ref={refContextMenu}>
        <div className="option" onClick={clearOneIcon(selectedIconPos)}>
          清空单元格
        </div>
        <div className="option" onClick={clearRow(selectedIconPos.x)}>
          清空该行
        </div>
        <div className="option" onClick={clearCol(selectedIconPos.y)}>
          清空该列
        </div>
        <div className="option" onClick={insert(selectedIconPos, true, false)}>
          在上方增加一行
        </div>
        <div className="option" onClick={insert(selectedIconPos, true, true)}>
          在下方增加一行
        </div>
        <div className="option" onClick={insert(selectedIconPos, false, false)}>
          在左侧增加一列
        </div>
        <div className="option" onClick={insert(selectedIconPos, false, true)}>
          在右侧增加一列
        </div>
        <div className="option" onClick={removeRow(selectedIconPos.x)}>
          删除该行
        </div>
        <div className="option" onClick={removeCol(selectedIconPos.y)}>
          删除该列
        </div>
      </div>
    </Wrapper>
  )
}

export default Preview
