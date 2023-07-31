import React from "react"
import Svg from "./Svg"

const FullscreenExitIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        className="icon"
        d="M14 10V4h2v2.59l3.29-3.29 1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29 1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3-1.42-1.42L6.59 16H4v-2z"
      />
    </Svg>
  )
}

export default FullscreenExitIcon
