import React from "react"
import Svg from "./Svg"

const CloseIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        className="icon"
        d="M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z"
      />
    </Svg>
  )
}

export default CloseIcon
