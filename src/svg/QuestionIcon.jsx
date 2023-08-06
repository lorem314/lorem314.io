import React from "react"
import Svg from "./Svg"

const QuestionIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        className="icon"
        d="M256,512C114.625,512,0,397.391,0,256,0,114.625,114.625,0,256,0S512,114.625,512,256C512,397.391,397.375,512,256,512Zm0-448C149.969,64,64,149.969,64,256s85.969,192,192,192,192-85.969,192-192S362.031,64,256,64Z"
      />
      <path
        className="icon"
        d="M256,128a96,96,0,0,0-96,96h64a32,32,0,1,1,32,32H240a16,16,0,0,0-16,16v48h64v-5.875c37.188-13.219,64-48.391,64-90.125A96,96,0,0,0,256,128Z"
      />
      <path className="icon" d="M256,352H224v32h64V352Z" />
    </Svg>
  )
}

export default QuestionIcon
