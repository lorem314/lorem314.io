import React from "react"
import Svg from "./Svg"

const MenuIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path className="icon" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
    </Svg>
  )
}

export default MenuIcon
