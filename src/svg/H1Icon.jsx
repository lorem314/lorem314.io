import React from "react"
import Svg from "./Svg"

const H1Icon = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="0" fill="none" width="24" height="24" />
      <path
        className="icon"
        d="M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0c-.594.95-1.504 1.658-2.57 2v1h2v7h2V7h-1.43z"
      />
    </Svg>
  )
}

export default H1Icon
