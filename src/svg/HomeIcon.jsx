import React from "react"
import Svg from "./Svg"

const HomeIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        className="icon"
        d="M22 9L12 1 2 9v2h2v10h5v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4h5V11h2V9z"
      />
    </Svg>
  )
}

export default HomeIcon
