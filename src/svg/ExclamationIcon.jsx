import React from "react"
import Svg from "./Svg"

const ExclamationIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        className="icon"
        d="M256,512C114.625,512,0,397.391,0,256,0,114.625,114.625,0,256,0S512,114.625,512,256C512,397.391,397.375,512,256,512Zm0-448C149.969,64,64,149.969,64,256s85.969,192,192,192,192-85.969,192-192S362.031,64,256,64ZM224,320h64v64H224Zm0-192h64V288H224Z"
      />
    </Svg>
  )
}

export default ExclamationIcon
