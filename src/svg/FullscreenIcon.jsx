import React from "react"
import Svg from "./Svg"

const FullscreenIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="0" fill="none" width="24" height="24" />
      <g>
        <path
          className="icon"
          d="M21 3v6h-2V6.41l-3.29 3.3-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3 1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29-1.41-1.42L5 17.59V15H3v6z"
        />
      </g>
    </Svg>
  )
}

export default FullscreenIcon
