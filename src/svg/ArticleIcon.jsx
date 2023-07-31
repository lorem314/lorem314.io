import React from "react"
import Svg from "./Svg"

const ArticleIcon = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <g className="icon">
        <rect x="29.6" y="25.8" width="28.8" height="34.6" />
        <rect x="69.9" y="25.8" width="23" height="5.8" />
        <rect x="69.9" y="54.6" width="23" height="5.8" />
        <rect x="69.9" y="40.2" width="23" height="5.8" />
        <rect x="29.6" y="69.2" width="63.4" height="5.8" />
        <rect x="29.6" y="97.3" width="63.4" height="5.8" />
        <rect x="29.6" y="82.9" width="63.4" height="5.8" />
        <path d="M15.2,7.3V123H109V7.3H15.2z M103.2,117.2H20.9V13.1h82.3V117.2z" />
      </g>
    </Svg>
  )
}

export default ArticleIcon
