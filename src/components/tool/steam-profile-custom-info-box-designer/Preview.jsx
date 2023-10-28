import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import Details from "../../../html/Details"
import useContextMenu from "../../../hooks/useContextMenu"
import ContextMenu from "../../../ui/ContextMenu"
import { withLocalStorage } from "./helper"

const Wrapper = styled.div`
  .details-content {
    padding: 10px;

    .preview {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 2px;

      .row {
        display: flex;
        gap: 2px;
      }
    }
  }

  textarea {
    width: 100%;
    resize: vertical;
  }
`

const previewLocal = withLocalStorage(
  "lorem314.io/tool/steam-profile-custom-info-box-designer/preview",
  {
    mapper: {},
    mappedArr2d: [[""]],
  }
)

const Preview = ({
  arr2d = [[]],
  setArr2d = () => {},
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
  const [contextMenuProps, openContextMenu] = useContextMenu()
  const [selectedIconCoordinate, setSelectedIconCoordinate] = useState({
    x: -1,
    y: -1,
  })
  const [feedback, setFeedback] = useState({
    isShow: false,
    success: "",
    error: "",
  })
  const ref = useRef()

  useEffect(() => {
    try {
      const { mapper, mappedArr2d } = previewLocal.read()
      const arr2d = mappedArr2d.map((row) =>
        row.map((name) => ({ name, url: mapper[name] }))
      )
      setArr2d(arr2d)
    } catch (error) {
      setFeedback({ isShow: true, success: "", error: "读取失败" })
    } finally {
      setTimeout(() => {
        setFeedback({ isShow: false, success: "", error: "" })
      }, 2000)
    }
  }, [])

  const handleClickSave = () => {
    const mapper = {}
    const mappedArr2d = arr2d.map((row) =>
      row.map((icon) => {
        if (icon.name !== "" && !mapper[icon.name]) mapper[icon.name] = icon.url
        return icon.name
      })
    )
    try {
      previewLocal.save({ mapper, mappedArr2d })
      setFeedback({ isShow: true, success: "保存成功", error: "" })
    } catch (error) {
      setFeedback({ isShow: true, success: "", error: "保存失败" })
    } finally {
      setTimeout(() => {
        setFeedback({ isShow: false, success: "", error: "" })
      }, 2000)
    }
  }

  const handleOpenContextMenu = (x, y) => (event) => {
    event.preventDefault()
    setSelectedIconCoordinate({ x, y })
    openContextMenu(event)
  }

  const handleGenerateCode = () => {
    const code = arr2d
      .map((row) => {
        return row
          .map((icon) => {
            return icon.name
          })
          .join("")
      })
      .join("\n")
    ref.current.value = code
  }

  return (
    <Wrapper>
      <Details open>
        <strong>
          预览 ({arr2d.length} &times; {arr2d[0].length})
        </strong>
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

          <div className="preview">
            {arr2d.map((row, rowIdx) => {
              return (
                <div key={rowIdx} className="row">
                  {row.map((icon, colIdx) => {
                    return (
                      <div
                        key={`${rowIdx}-${colIdx}`}
                        className="emoji-container"
                        onDrop={handleDrop(rowIdx, colIdx)}
                        onDragOver={handleDragOver(rowIdx, colIdx)}
                        onContextMenu={handleOpenContextMenu(rowIdx, colIdx)}
                      >
                        {icon.url ? (
                          <img
                            src={icon.url}
                            alt="emoji-img"
                            onDragStart={handleDragStart(rowIdx, colIdx, icon)}
                            onDragEnd={handleDragEnd(rowIdx, colIdx, icon)}
                          />
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>

          <div>
            <button onClick={handleGenerateCode}>生成代码</button>
            <textarea ref={ref} rows="8"></textarea>
          </div>
        </div>
      </Details>
      <ContextMenu {...contextMenuProps}>
        <li>
          <button onClick={clearOneIcon(selectedIconCoordinate)}>
            清空该单元格
          </button>
        </li>
        <li>
          <button onClick={clearRow(selectedIconCoordinate.x)}>清空该行</button>
        </li>
        <li>
          <button onClick={clearCol(selectedIconCoordinate.y)}>清空该列</button>
        </li>
        <li>
          <button onClick={insert(selectedIconCoordinate, true, false)}>
            在上方增加一行
          </button>
        </li>
        <li>
          <button onClick={insert(selectedIconCoordinate, true, true)}>
            在下方增加一行
          </button>
        </li>
        <li>
          <button onClick={insert(selectedIconCoordinate, false, false)}>
            在左侧增加一列
          </button>
        </li>
        <li>
          <button onClick={insert(selectedIconCoordinate, false, true)}>
            在右侧增加一列
          </button>
        </li>
        <li>
          <button onClick={removeRow(selectedIconCoordinate.x)}>
            删除该行
          </button>
        </li>
        <li>
          <button onClick={removeCol(selectedIconCoordinate.y)}>
            删除该列
          </button>
        </li>
      </ContextMenu>
    </Wrapper>
  )
}

export default Preview
