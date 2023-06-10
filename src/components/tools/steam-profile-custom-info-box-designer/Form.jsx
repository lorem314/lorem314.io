import React, { useState } from "react"
import styled from "styled-components"

const FormWrapper = styled.fieldset`
  /* max-width: 48rem; */
  margin: 0 auto;

  .emoji-container {
    background-color: rgba(0, 0, 0, 0.1);
    width: 54px;
    height: 54px;
    > img {
      /* max-width: 64px; */
      /* max-height: 64px; */
    }
  }
`
// https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/620/b413f47a6cf686ff3b9c70b3dafe405c12535ba9.png

const Form = ({ addIcon }) => {
  const [icon, setIcon] = useState({ url: "", name: "" })
  const [error, setError] = useState(false)

  const handleChange = key => event => {
    const value = event.target.value
    if (key === "url") setError(false)
    setIcon(prevIcon => {
      return { ...prevIcon, [key]: value }
    })
  }
  const handleClear = key => () => {
    if (key === "url") setError(false)
    setIcon(prevIcon => {
      return { ...prevIcon, [key]: "" }
    })
  }
  const handleImageError = () => setError(true)
  const onAddIcon = () => {
    if (error) return
    else {
      addIcon(icon)
      setIcon({ url: "", name: "" })
    }
  }

  return (
    <FormWrapper>
      <legend>添加表情</legend>

      <div className="flex">
        <input
          style={{ flex: "1 0 auto" }}
          type="text"
          placeholder="https://..."
          value={icon ? icon.url : ""}
          onChange={handleChange("url")}
        />
        <button onClick={handleClear("url")}>清除URL</button>
      </div>

      <div className="flex">
        <div className="emoji-container" style={{ flex: "0 0 auto" }}>
          {error ? (
            "URL不正确"
          ) : icon.url ? (
            <img
              src={icon.url}
              alt="emoji-img"
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
        <button onClick={handleClear("name")}>清除</button>
        <button onClick={onAddIcon}>添加</button>
      </div>
    </FormWrapper>
  )
}

export default Form
