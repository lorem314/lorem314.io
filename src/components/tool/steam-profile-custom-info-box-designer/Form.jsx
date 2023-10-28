import React, { useState } from "react"
import styled from "styled-components"

import Details from "../../../html/Details"

const Wrapper = styled.div`
  .details-content {
    padding: 10px;
  }
`

const Form = ({ onAddIcon = () => {} }) => {
  const [icon, setIcon] = useState({ url: "", name: "" })
  const [error, setError] = useState(false)

  const handleChange = (key) => (event) => {
    const value = event.target.value
    if (key === "url") setError(false)
    setIcon((prevIcon) => {
      return { ...prevIcon, [key]: value }
    })
  }
  const handleClear = (key) => () => {
    if (key === "url") setError(false)
    setIcon((prevIcon) => {
      return { ...prevIcon, [key]: "" }
    })
  }
  const handleImageError = () => setError(true)
  const handleAddIcon = () => {
    if (error) return
    else {
      onAddIcon(icon)
      setIcon({ url: "", name: "" })
    }
  }

  return (
    <Wrapper>
      <Details open>
        <strong>添加表情</strong>
        <div className="details-content">
          <div className="flex">
            <input
              type="text"
              placeholder="https://..."
              value={icon ? icon.url : ""}
              onChange={handleChange("url")}
            />
            <button onClick={handleClear("url")}>清除表情 URL</button>
          </div>
          <div className="flex">
            <div className="emoji-container" style={{ flex: "0 0 auto" }}>
              {error ? (
                <strong style={{ fontSize: "smaller", color: "red" }}>
                  表情 URL 不正确
                </strong>
              ) : icon.url ? (
                <img
                  src={icon.url}
                  alt="Steam表情"
                  draggable="false"
                  onError={handleImageError}
                />
              ) : null}
            </div>
            <input
              type="text"
              placeholder=":emoji:"
              value={icon ? icon.name : ""}
              onChange={handleChange("name")}
            />
            <button onClick={handleAddIcon}>添加</button>
            <button onClick={handleClear("name")}>清除表情代码</button>
          </div>
        </div>
      </Details>
    </Wrapper>
  )
}

export default Form
