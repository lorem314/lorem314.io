import React from "react"
import Svg from "./Svg"

const ChevronIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path className="icon" d={getValue(props.variant)} />
    </Svg>
  )
}

export default ChevronIcon

const getValue = (variant = "up") => {
  switch (variant) {
    case "up":
      return "M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586"
    case "right":
      return "M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586"
    case "down":
      return "M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"
    case "left":
      return "M14 20l-8-8 8-8 1.414 1.414L8.828 12l6.586 6.586"
    default:
      return "M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586"
  }
}
