import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { keyPrefix } from "./helper"

const Wrapper = styled.fieldset`
  .actions {
    margin-bottom: 0.5rem;
  }
  .emojis {
    display: flex;
    flex-wrap: wrap;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      .emoji-container {
        background-color: rgba(0, 0, 0, 0.1);
        img {
          cursor: pointer;
        }
      }
      .close-btn {
        font-size: 1.125rem;
        padding: 0 0.5rem;
      }
    }
  }

  .context-menu {
    display: ${(props) => (props.contextMenu.isShow ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    border: 1px solid lightgrey;
    border-radius: 2px;
    top: ${(props) => props.contextMenu.isShow && props.contextMenu.y + 1}px;
    left: ${(props) => props.contextMenu.isShow && props.contextMenu.x + 1}px;
    background-color: whitesmoke;
    .option {
      padding: 0.5rem;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`
const Inventory = ({
  icons = [],
  removeIcon = () => {},
  handleDragStart = () => () => {},
  circle = () => {},
  floor = () => {},
}) => {
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, isShow: false })
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [feedback, setFeedback] = useState({})
  const onRemove = (icon) => () => removeIcon(icon)

  const handleContextMenu = (icon) => (event) => {
    event.preventDefault()
    console.log("set selected icon: ", icon.name)
    setSelectedIcon(icon)
    setContextMenu({
      ...contextMenu,
      isShow: true,
      x: event.pageX,
      y: event.pageY,
    })
  }

  useEffect(() => {
    const fn = () => setContextMenu({ ...contextMenu, isShow: false })
    document.addEventListener("click", fn)
    return () => {
      document.removeEventListener("click", fn)
    }
  }, [])

  const clickSave = () => {
    try {
      const value = JSON.stringify(icons)
      localStorage.setItem(`${keyPrefix}_inventory`, value)
    } catch (error) {
      console.error(`[ERROR] 已添加表情 保存失败`)
      setFeedback({ error: "保存失败" })
      return
    }
    setFeedback({ success: "保存成功" })
  }

  return (
    <Wrapper contextMenu={contextMenu}>
      <legend>已添加表情 ({icons.length})</legend>
      <div className="actions">
        <button onClick={clickSave}>保存</button>
        {feedback.error && <span className="error">{feedback.error}</span>}
        {feedback.success && (
          <span className="success">{feedback.success}</span>
        )}
      </div>
      <div className="emojis">
        {icons.map((icon) => {
          return (
            <div className="list">
              <div
                className="emoji-container"
                onContextMenu={handleContextMenu(icon)}
              >
                <img
                  src={icon.url}
                  alt="emoji-image"
                  onDragStart={handleDragStart(null, null, icon)}
                  onDragEnd={() => {}}
                />
              </div>
              <div>{icon.name}</div>
              <button className="close-btn" onClick={onRemove(icon)}>
                &times;
              </button>
            </div>
          )
        })}
      </div>
      <div className="context-menu">
        <div className="option" onClick={circle(selectedIcon)}>
          围一圈
        </div>
        <div className="option" onClick={floor(selectedIcon)}>
          平铺
        </div>
      </div>
    </Wrapper>
  )
}

export default Inventory
