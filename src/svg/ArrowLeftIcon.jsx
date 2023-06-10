import React from "react"
import Svg from "./Svg"

const ArrowLeftIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="0" fill="none" width="24" height="24" />
      <g>
        <path
          className="icon"
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </g>
    </Svg>
  )
}

export default ArrowLeftIcon
