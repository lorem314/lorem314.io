import React from "react"

import Svg from "./Svg"

const ToTopIcon = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        className="icon"
        d="M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"
      />
    </Svg>
  )
}

export default ToTopIcon
