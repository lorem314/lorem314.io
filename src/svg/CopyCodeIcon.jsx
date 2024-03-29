import React from "react"
import Svg from "./Svg"

const CopyCodeIcon = ({ ...props }) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        className="icon"
        d="M9 2h7v4h4v10h-3v1h4V4.6L17.4 1H8v5h1zm8 0h.31L20 4.69V5h-3zM5 19h7v1H5zm-2 4h13V10.6L12.4 7H3zm9-15h.31L15 10.69V11h-3zM4 8h7v4h4v10H4zm1 5h9v1H5zm4 3h5v1H5v-1z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  )
}

export default CopyCodeIcon
