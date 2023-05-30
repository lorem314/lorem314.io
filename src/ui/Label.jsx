import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const StyledLabel = styled.label``

const Label = (props) => {
  const ref = useRef(null)

  useEffect(() => {
    const target = document.getElementById(props.htmlFor)
    const label = ref.current

    const handleMouseEnter = () => target?.classList.add("hover")
    const handleMouseLeave = () => target?.classList.remove("hover")

    label.addEventListener("mouseenter", handleMouseEnter)
    label.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      label.removeEventListener("mouseenter", handleMouseEnter)
      label.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [props.htmlFor])

  return <StyledLabel ref={ref} {...props} />
}

export default React.memo(Label)
