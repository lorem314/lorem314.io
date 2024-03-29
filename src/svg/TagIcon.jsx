import React from "react"
import Svg from "./Svg"

const TagIcon = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        className="icon"
        d="M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"
      />
    </Svg>
  )
}

export default TagIcon
