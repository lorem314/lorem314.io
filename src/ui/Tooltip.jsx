import React, { useEffect, useRef, useState, useCallback } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import useDebounce from "../hooks/useDebounce"

//  <Tooltip>
//    <button>BUTTON</button>
//    <div>tooltip text</div>
//  </Tooltip>
const Tooltip = ({ children, position }) => {
  const ref = useRef(null)
  const [values, setValues] = useState({ isShow: false, x: 0, y: 0 })
  const debouncedIsShow = useDebounce(values.isShow, 250)

  const handleMouseEnter = useCallback(() => {
    if (ref.current === null) return
    const rect = ref.current.getBoundingClientRect()
    const { x, y } = getCoordinate(position, rect)
    setValues((prevValues) => ({ ...prevValues, isShow: true, x, y }))
  }, [position])

  const handleMouseLeave = () => {
    setValues({ ...values, isShow: false })
  }

  return (
    <>
      {React.cloneElement(children[0], {
        ref: ref,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}

      {debouncedIsShow ? (
        <Portal x={values.x} y={values.y} position={position}>
          {children[1]}
        </Portal>
      ) : null}
    </>
  )
}

export default Tooltip

const PortalWrapper = styled.div`
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0.25em 0.5em;
  font-size: 0.875rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: var(--ui-tooltip-color);
  background-color: var(--ui-tooltip-bg);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;

  transition: opacity 0.25s ease-in-out;

  &:after {
    content: " ";
    width: 0;
    height: 0;
    position: absolute;
  }
  &.tooltip-triangle-top:after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--ui-tooltip-bg);
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &.tooltip-triangle-bottom:after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--ui-tooltip-bg);
    top: -9px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &.tooltip-triangle-left:after {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid var(--ui-tooltip-bg);
    top: 50%;
    left: 100%;
    transform: translate(0, -50%);
  }
  &.tooltip-triangle-right:after {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid var(--ui-tooltip-bg);
    top: 50%;
    left: -9px;
    transform: translate(0, -50%);
  }
`

const Portal = ({ children, x, y, position }) => {
  const ref = useRef(null)
  const [styles, setStyles] = useState({ opacity: 0 })
  const transform = getTransform(position)
  const gap = getGap(position)

  useEffect(() => {
    setStyles({ opacity: 1 })
  }, [])

  return ReactDOM.createPortal(
    <PortalWrapper
      className={`tooltip-triangle-${position}`}
      x={x + gap.x}
      y={y + gap.y}
      ref={ref}
      style={{ opacity: styles.opacity, transform }}
    >
      {children}
    </PortalWrapper>,
    document.body
  )
}

function getCoordinate(position = "bottom", rect) {
  switch (position) {
    case "top":
      return { x: rect.left + rect.width / 2, y: rect.top }
    case "bottom":
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height }
    case "left":
      return { x: rect.left, y: rect.top + rect.height / 2 }
    case "right":
      return { x: rect.left + rect.width, y: rect.top + rect.height / 2 }
    default:
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height }
  }
}
function getTransform(position) {
  switch (position) {
    case "top":
      return "translate(-50%, -100%)"
    case "bottom":
      return "translate(-50%, 0)"
    case "left":
      return "translate(-100%, -50%)"
    case "right":
      return "translate(0, -50%)"
    default:
      return "translate(-50%, 0)"
  }
}
function getGap(position) {
  const gap = 10
  switch (position) {
    case "top":
      return { x: 0, y: gap * -1 }
    case "bottom":
      return { x: 0, y: gap * 1 }
    case "left":
      return { x: gap * -1, y: 0 }
    case "right":
      return { x: gap * 1, y: 0 }
    default:
      return { x: 0, y: gap * 1 }
  }
}
