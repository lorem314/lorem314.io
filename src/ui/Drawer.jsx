import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Drawer = ({
  isControlled = true,
  position = "left", // left, right, top or bottom
  size = 320, // left or right -> width, top or bottom -> height
  isOpen, // only for <ControlleredDrawer />
  onClose,
  children,
}) => {
  if (!isControlled && typeof isOpen !== "undefined") {
    throw Error("Uncontrolled Drawer can not have isOpen prop.")
  }
  return isControlled ? (
    <ControlleredDrawer
      position={position}
      size={size}
      children={children}
      //
      isOpen={isOpen}
      onClose={onClose}
    />
  ) : (
    <UncontrolleredDrawer
      position={position}
      size={size}
      children={children}
      //
    />
  )
}

export default Drawer

// The [isOpen] state of this Drawer is controllered by its <Parent />.
// children should be the drawer content component.
const ControlleredDrawer = ({ position, size, children, isOpen, onClose }) => {
  return (
    isOpen && (
      <Portal position={position} size={size} onClose={onClose}>
        {children}
      </Portal>
    )
  )
}

// The [isOpen] state of this Drawer is controllered by itself.
// children[0] should be a <button />
// children[1] should be the drawer content component.
const UncontrolleredDrawer = ({ position, size, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenDrawer = () => {
    setIsOpen(true)
  }
  const handleCloseDrawer = () => {
    setIsOpen(false)
  }
  return (
    <>
      {React.cloneElement(children[0], { onClick: handleOpenDrawer })}
      {isOpen ? (
        <Portal position={position} size={size} onClose={handleCloseDrawer}>
          {children[1]}
        </Portal>
      ) : null}
    </>
  )
}

// This wrapper is for Portal
const Backdrop = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  transition: opacity 0.25s ease-in-out;

  > .drawer-container {
    position: absolute;
    background-color: white;
    transition: transform 0.25s ease-in-out;
  }
`
const Portal = ({ position, size, onClose, children }) => {
  const [styles, setStyles] = useState({
    opacity: 0,
    transform: getTransformStartProp(position),
  })

  useEffect(() => {
    setStyles({ ...styles, opacity: 1, transform: "translate(0,0)" })
  }, [])

  const handleCloseDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setStyles({ opacity: 0, transform: getTransformStartProp(position) })
          setTimeout(() => resolve(), 250)
        })
      })
      .then(() => {
        onClose && onClose()
      })
  }

  return ReactDOM.createPortal(
    <Backdrop style={{ opacity: styles.opacity }} onClick={handleCloseDrawer}>
      <div
        className="drawer-container"
        style={{
          ...getPositionProps(position, size),
          transform: styles.transform,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {React.cloneElement(children, { onCloseDrawer: handleCloseDrawer })}
      </div>
    </Backdrop>,
    document.body
  )
}

function getPositionProps(position, size) {
  switch (position) {
    case "left":
    case "right":
      return {
        top: 0,
        bottom: 0,
        [position]: 0,
        width: size,
      }
    case "top":
    case "bottom":
      return {
        left: 0,
        right: 0,
        [position]: 0,
        height: size,
      }
    default:
      return {
        top: 0,
        bottom: 0,
        [position]: 0,
        width: size,
      }
  }
}
function getTransformStartProp(position) {
  switch (position) {
    case "left":
      return "translate(-100%, 0)"
    case "right":
      return "translate(100%, 0)"
    case "top":
      return "translate(0, -100%)"
    case "bottom":
      return "translate(0, 100%)"
    default:
      return "translate(-100%, 0)"
  }
}
