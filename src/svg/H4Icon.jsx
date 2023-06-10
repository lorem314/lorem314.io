import React from "react"
import Svg from "./Svg"

const H4Icon = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="0" fill="none" width="24" height="24" />
      <path
        className="icon"
        d="M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z"
      />
    </Svg>
  )
}

export default H4Icon
