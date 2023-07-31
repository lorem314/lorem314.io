import React from "react"
import Svg from "./Svg"

const CodeIcon = ({ ...props }) => {
  return (
    <Svg viewBox="2 2 20 20" {...props}>
      <g className="icon">
        <path d="M9.67917 17.5911L12.785 6L14.2339 6.38823L11.1281 18L9.67917 17.5911Z" />
        <path d="M8.03033 7.96965L9.09099 9.03031L6.12132 12L9.09099 14.9696L8.03033 16.0303L4 12L8.03033 7.96965Z" />
        <path d="M15.9697 7.96965L14.909 9.03031L17.8787 12L14.909 14.9696L15.9697 16.0303L20 12L15.9697 7.96965Z" />
      </g>
    </Svg>
  )
}

export default CodeIcon
