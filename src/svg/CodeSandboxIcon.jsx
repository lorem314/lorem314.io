import React from "react"
import Svg from "./Svg"

const CodeSandboxIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        className="icon"
        d="M6.795 9.253l9.126 5.179 9.147-5.223-4.837-2.745-4.261 2.431-4.286-2.459-4.89 2.818zM26.406 11.603l-9.144 5.195v10.337l4.964-2.869v-4.391l4.18-2.326v-5.946zM5.488 11.603v5.945l4.18 2.324v4.394l4.964 2.869v-10.337zM2.879 8.502l13.065-7.498 13.065 7.498 0.112 14.933-13.177 7.56-13.065-7.498z"
      ></path>
    </Svg>
  )
}

export default CodeSandboxIcon
