import React, { useState } from "react"
import styled from "styled-components"

import Form from "./Form"
import Inventory from "./Inventory"
import Preview from "./Preview"

const Wrapper = styled.div`
  // shared css style
  .flex {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .emoji-container {
    background-color: rgba(0, 0, 0, 0.1);
    width: 54px;
    height: 54px;

    img {
      cursor: pointer;
    }
  }

  strong {
    font-family: "Segoe-Regular";
  }
`

const App = () => {
  const [icons, setIcons] = useState([])
  const [arr2d, setArr2d] = useState(
    Array(5)
      .fill()
      .map(() => Array(7).fill({ url: "", name: "" }))
  )

  // handle change icons
  const handleAddIcon = (icon) => {
    setIcons((prevIcons) => {
      if (prevIcons.some((i) => i.name === icon.name)) {
        // same name not allowed
        return prevIcons
      } else {
        return [...prevIcons, icon]
      }
    })
  }
  const handleRemoveIcon = (icon) => () => {
    setIcons((prevIcons) => prevIcons.filter((i) => i !== icon))
  }

  // drag n drop
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

  // handle change arr2d
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

  const generateCode = () => {}

  return (
    <Wrapper>
      <Form onAddIcon={handleAddIcon} />
      <Inventory
        icons={icons}
        setIcons={setIcons}
        onRemoveIcon={handleRemoveIcon}
        handleDragStart={handleDragStart}
        circle={circle}
        floor={floor}
      />
      <Preview
        arr2d={arr2d}
        setArr2d={setArr2d}
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
