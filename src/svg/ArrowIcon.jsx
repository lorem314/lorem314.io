import React from "react"
import Svg from "./Svg"

const ArrowIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path className="icon" d={getValue(props.variant)} />
    </Svg>
  )
}

export default ArrowIcon

const getValue = (variant = "up") => {
  switch (variant) {
    case "up":
      return "M13 20V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V20h2z"
    case "right":
      return "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
    case "down":
      return "M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"
    case "left":
      return "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
    default:
      return "M13 20V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V20h2z"
  }
}
