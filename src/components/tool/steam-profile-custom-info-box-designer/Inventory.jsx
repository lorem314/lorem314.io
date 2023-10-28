import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Details from "../../../html/Details"
import useContextMenu from "../../../hooks/useContextMenu"
import ContextMenu from "../../../ui/ContextMenu"
import { withLocalStorage } from "./helper"

const Wrapper = styled.div`
  .details-content {
    padding: 10px;

    .added-icons {
      display: flex;
      flex-wrap: wrap;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .emoji-container {
          background-color: rgba(0, 0, 0, 0.1);
          img {
            cursor: pointer;
          }
        }
        .remove-icon-btn {
          align-self: stretch;
          font-size: 1.25rem;
          padding: 0 0.25rem;
        }
      }
    }
  }
`

const inventoryLocal = withLocalStorage(
  "lorem314.io/tool/steam-profile-custom-info-box-designer/inventory",
  []
)

const Inventory = ({
  icons = [],
  setIcons = () => {},
  onRemoveIcon = () => () => {},
  handleDragStart = () => () => {},
  circle = () => {},
  floor = () => {},
}) => {
  const [contextMenuProps, openContextMenu] = useContextMenu()
  const [selectedIcon, setSelectedIcon] = useState()
  const [feedback, setFeedback] = useState({
    isShow: false,
    success: "",
    error: "",
  })

  const handleOpenContextMenu = (icon) => (event) => {
    event.preventDefault()
    setSelectedIcon(icon)
    openContextMenu(event)
  }

  useEffect(() => {
    try {
      const icons = inventoryLocal.read()
      setIcons(icons)
    } catch (error) {
      setFeedback({ isShow: true, success: "", error: "读取失败" })
    } finally {
      setTimeout(() => {
        setFeedback({ isShow: false, success: "", error: "" })
      }, 2000)
    }
  }, [])

  const handleClickSave = () => {
    try {
      inventoryLocal.save(icons)
      setFeedback({ isShow: true, success: "保存成功", error: "" })
    } catch (error) {
      setFeedback({ isShow: true, success: "", error: "保存失败" })
    } finally {
      setTimeout(() => {
        setFeedback({ isShow: false, success: "", error: "" })
      }, 2000)
    }
  }

  return (
    <Wrapper>
      <Details open>
        <strong>已保存表情 ({icons.length})</strong>
        <div className="details-content">
          <div className="action flex">
            {feedback.isShow ? (
              <div>
                {feedback.error ? (
                  <span style={{ color: "red" }}>{feedback.error}</span>
                ) : null}
                {feedback.success ? (
                  <span style={{ color: "green" }}>{feedback.success}</span>
                ) : null}
              </div>
            ) : (
              <button onClick={handleClickSave}>保存</button>
            )}
          </div>
          <div className="added-icons">
            {icons.length === 0 ? (
              <div>还没有添加任何表情</div>
            ) : (
              icons.map((icon) => {
                return (
                  <div className="item">
                    <div
                      className="emoji-container"
                      onContextMenu={handleOpenContextMenu(icon)}
                    >
                      <img
                        src={icon.url}
                        alt="Steam表情"
                        onDragStart={handleDragStart(null, null, icon)}
                      />
                    </div>
                    <div>{icon.name}</div>
                    <button
                      className="remove-icon-btn"
                      onClick={onRemoveIcon(icon)}
                    >
                      &times;
                    </button>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </Details>
      <ContextMenu {...contextMenuProps}>
        <li>
          <button onClick={circle(selectedIcon)}>围一圈</button>
        </li>
        <li>
          <button onClick={floor(selectedIcon)}>平铺</button>
        </li>
      </ContextMenu>
    </Wrapper>
  )
}

export default Inventory
