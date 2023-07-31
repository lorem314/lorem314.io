import { useState, useEffect, useLayoutEffect, useCallback } from "react"

/**
 * children length should be exactly 2.
 * children[0] : when mediaQuery matches, render the first child
 * children[1] : when not matches, render the second child
 */

const MediaQuery = ({ children = null, query = "(max-width: 1080px)" }) => {
  if (
    !Object.prototype.toString.call(children).includes("Array") &&
    children.length !== 2
  ) {
    throw Error("[MediaRenderer] Children length should be exactly 2.")
  }

  const [isMatch, setIsMathch] = useState(true)

  useLayoutEffect(() => {
    if (window.matchMedia(query).matches) setIsMathch(true)
    else setIsMathch(false)
  }, [query])

  useEffect(() => {
    const handleResizeWindow = () => {
      if (window.matchMedia(query).matches) setIsMathch(true)
      else setIsMathch(false)
    }
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [query])

  return isMatch ? children[0] : children[1]
}

export default MediaQuery
