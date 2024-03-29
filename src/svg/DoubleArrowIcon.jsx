import React from "react"
import styled from "styled-components"
import Svg from "./Svg"

const DoubleArrowIcon = ({ ...props }) => {
  const values = getValues(props.variant)
  const style = { strokeWidth: "2px", stroke: "var(--ui-svg-icon-color)" }
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none">
      <path style={style} d={values[0]} />
      <path style={style} d={values[1]} />
    </Svg>
  )
}

export default DoubleArrowIcon

const getValues = (variant = "up") => {
  switch (variant) {
    case "up":
      return ["M18 18L12 12L6 18", "M18 12L12 6L6 12"]
    case "right":
      return ["M12 18L18 12L12 6", "M6 18L12 12L6 6"]
    case "down":
      return ["M18 12L12 18L6 12", "M18 6L12 12L6 6"]
    case "left":
      return ["M12 18L6 12L12 6", "M18 18L12 12L18 6"]
    default:
      return ["M18 18L12 12L6 18", "M18 12L12 6L6 12"]
  }
}
