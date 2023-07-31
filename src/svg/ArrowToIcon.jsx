import React from "react"
import Svg from "./Svg"

const ArrowToIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path className="icon" d={getValue(props.variant)} />
    </Svg>
  )
}

export default ArrowToIcon

const getValue = (variant = "up") => {
  switch (variant) {
    case "top":
      return "M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"
    case "right":
      return "M18 6h2v12h-2zM4 13h8.586l-4.293 4.293 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707 12.586 11H4z"
    case "bottom":
      return "M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z"
    case "left":
      return "M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707 1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"
    default:
      return "M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"
  }
}
