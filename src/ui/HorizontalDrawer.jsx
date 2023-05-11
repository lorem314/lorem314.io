import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const HorizontalDrawer = ({
  isOpen = false,
  position = "left",
  width = "320",
  onClose = () => {},
  children,
}) => {
  return (
    isOpen && (
      <Portal position={position} onClose={onClose} width={width}>
        {children}
      </Portal>
    )
  )
}

export default HorizontalDrawer

const PortalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity 0.25s ease-in-out;
  overflow: hidden;
  backdrop-filter: blur(2px);

  > .drawer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: white;
    transition: transform 0.25s ease-in-out;
    box-shadow: 6px 4px 24px 4px rgba(0, 0, 0, 0.25);
  }
`

const Portal = ({ position, onClose, width, children }) => {
  const [styles, setStyles] = useState({
    offsetX: calcOffsetX(position),
    opacity: 0,
  })

  useEffect(() => {
    setStyles({ offsetX: 0, opacity: 1 })
  }, [])

  const closeDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setStyles({ offsetX: calcOffsetX(position), opacity: 0 })
          setTimeout(() => resolve(), 250)
        })
      })
      .then(() => {
        onClose()
      })
  }

  const stopPropagation = (event) => event.stopPropagation()

  return ReactDOM.createPortal(
    <PortalWrapper style={{ opacity: styles.opacity }} onClick={closeDrawer}>
      <div
        className="drawer-container"
        style={{
          [position]: 0,
          width: `${width}px`,
          transform: `translateX(${styles.offsetX}%)`,
        }}
        onClick={stopPropagation}
      >
        {React.cloneElement(children, {})}
      </div>
    </PortalWrapper>,
    document.body
  )
}

function calcOffsetX(position) {
  switch (position) {
    case "left":
      return -100
    case "right":
      return 100
    default:
      return -100
  }
}
