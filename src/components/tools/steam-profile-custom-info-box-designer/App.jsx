import React, { useState } from "react"
import styled from "styled-components"

import HowToUse from "./HowToUse"
import Form from "./Form"
import Inventory from "./Inventory"
import Preview from "./Preview"
import { fromLocalByKey, keyPrefix } from "./helper"

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  * {
    box-sizing: border-box;
  }
  > fieldset {
    > legend {
      user-select: none;
    }
  }
  input[type="text"] {
    font-size: 1.125rem;
    padding: 0.25rem 0.25rem;
    margin: 0.5rem 0;
  }
  button {
    padding: 0.25rem;
    cursor: pointer;
  }
  img {
    display: block;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
`

const App = () => {
  const [icons, setIcons] = useState(() => {
    try {
      const local = JSON.parse(
        localStorage.getItem(`${keyPrefix}_inventory`) || "[]"
      )
      return local
    } catch (error) {
      console.error(`[ERROR] 已添加表情 读取失败`)
      return []
    }
  })
  const [arr2d, setArr2d] = useState(fromLocalByKey(`${keyPrefix}_preview`))

  const addIcon = (targetIcon) => {
    setIcons((prevIcons) => {
      return prevIcons.some((icon) => icon.name === targetIcon.name)
        ? prevIcons
        : [...icons, targetIcon]
    })
  }
  const removeIcon = (targetIcon) => {
    setIcons((prevIcons) => prevIcons.filter((icon) => icon !== targetIcon))
  }

  const handleDragStart = (x, y, icon) => (event) => {
    event.dataTransfer.setData("application/json", JSON.stringify(icon))
    if (event.shiftKey) event.dataTransfer.effectAllowed = "copy"
    else event.dataTransfer.effectAllowed = "move"
  }
  const handleDrop = (x, y) => (event) => {
    event.preventDefault()
    const icon = JSON.parse(event.dataTransfer.getData("application/json"))
    arr2d[x].splice(y, 1, icon)
    setArr2d([...arr2d])
  }
  const handleDragOver = (x, y) => (event) => {
    event.preventDefault()
    if (event.shiftKey) event.dataTransfer.effectAllowed = "copy"
    else event.dataTransfer.effectAllowed = "move"
  }
  const handleDragEnd = (x, y) => (event) => {
    const effectAllowed = event.dataTransfer.effectAllowed
    if (effectAllowed === "move") {
      arr2d[x].splice(y, 1, { url: "", name: "" })
      setArr2d([...arr2d])
    }
  }
  const clearOneIcon =
    ({ x, y }) =>
    (event) => {
      arr2d[x].splice(y, 1, { url: "", name: "" })
      setArr2d([...arr2d])
    }
  const clearRow = (idx) => () => {
    const newRow = Array(arr2d[0].length)
      .fill()
      .map(() => ({ url: "", name: "" }))
    arr2d.splice(idx, 1, newRow)
    setArr2d([...arr2d])
  }
  const clearCol = (idx) => () => {
    arr2d.forEach((row) => row.splice(idx, 1, { url: "", name: "" }))
    setArr2d([...arr2d])
  }
  const removeRow = (idx) => () => {
    if (arr2d.length === 1) return
    arr2d.splice(idx, 1)
    setArr2d([...arr2d])
  }
  const removeCol = (idx) => () => {
    if (arr2d[0].length === 1) return
    arr2d.forEach((row) => row.splice(idx, 1))
    setArr2d([...arr2d])
  }
  const insert =
    (pos, isRow = true, isAfter = true) =>
    (event) => {
      if (isRow) {
        const newRow = Array(arr2d[0].length)
          .fill()
          .map(() => ({ url: "", name: "" }))
        arr2d.splice(isAfter ? pos.x + 1 : pos.x, 0, newRow)
        setArr2d([...arr2d])
      } else {
        const idx = isAfter ? pos.y + 1 : pos.y
        arr2d.forEach((row) => row.splice(idx, 0, { url: "", name: "" }))
        setArr2d([...arr2d])
      }
    }
  const circle = (icon) => () => {
    const rowEdgeIndex = arr2d.length - 1
    setArr2d(
      arr2d.map((row, rowIndex) => {
        const colEdgeIndex = row.length - 1
        return row.map((col, colIndex) => {
          if (
            rowIndex === 0 ||
            colIndex === 0 ||
            rowIndex === rowEdgeIndex ||
            colIndex === colEdgeIndex
          ) {
            return icon
          }
          return col
        })
      })
    )
  }
  const floor = (icon) => () => {
    setArr2d(arr2d.map((row) => row.map(() => icon)))
  }

  return (
    <Wrapper>
      <h2>用表情设计 Steam 个人自定义信息框</h2>
      <HowToUse />
      <Form addIcon={addIcon} />
      <Inventory
        icons={icons}
        removeIcon={removeIcon}
        handleDragStart={handleDragStart}
        circle={circle}
        floor={floor}
      />
      <Preview
        arr2d={arr2d}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        clearOneIcon={clearOneIcon}
        insert={insert}
        clearRow={clearRow}
        clearCol={clearCol}
        removeRow={removeRow}
        removeCol={removeCol}
      />
    </Wrapper>
  )
}

export default App
