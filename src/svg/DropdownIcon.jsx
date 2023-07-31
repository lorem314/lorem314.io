import React from "react"
import Svg from "./Svg"

const DropdownIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path className="icon" d="M7 10l5 5 5-5" />
    </Svg>
  )
}

export default DropdownIcon
