import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

// import Fixed from "../styled/Fixed"
import CloseIcon from "../svg/CloseIcon"

const Drawer = ({ position = "left", width, children = null, title = "" }) => {
  if (!width) throw Error("[Drawer] 'width' should be provided as a prop.")
  if (
    !Object.prototype.toString.call(children).includes("Array") &&
    children?.length !== 2
  ) {
    throw Error("[Drawer] Children length should be exactly 2.")
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <Portal
          position={position}
          setIsOpen={setIsOpen}
          width={width}
          title={title}
        >
          {children[1]}
        </Portal>
      )}
      {React.cloneElement(children[0], { onClick: () => setIsOpen(true) })}
    </>
  )
}

export default Drawer

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  transition: opacity 0.25s ease-in-out;
  overflow: hidden;
  backdrop-filter: blur(2px);
  /* z-index: 200; */

  > .drawer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: var(--page-content-bg);
    transition: transform 0.25s ease-in-out;
    box-shadow: 6px 4px 24px 4px rgba(0, 0, 0, 0.25);

    > .drawer-header {
      background-color: var(--header-bg);
      height: 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      > .drawer-title {
        font-weight: bolder;
        color: whitesmoke;
        margin: 0 10px;
      }

      > .close-drawer-btn {
        --svg-icon-size: 24px;
        --svg-icon-color: whitesmoke;
        padding: 4px;
        margin: 10px;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 25%;
      }
    }

    > .drawer-body {
      margin: 10px;
    }
  }
`

const Portal = ({ position, setIsOpen, width, children, title }) => {
  const [styles, setStyles] = useState({
    opacity: 0,
    offsetX: initialOffsetX(position),
  })
  // const refCloseButton = useRef(null)

  useEffect(() => {
    Promise.resolve()
      .then(() => {
        setTimeout(() => {
          setStyles({ offsetX: 0, opacity: 1 })
        }, 0)
      })
      .then(() => {
        // const nodeCloseButton = refCloseButton.current
        // setTimeout(() => {
        //   nodeCloseButton.focus()
        // }, 250)
      })
  }, [])

  const closeDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setStyles({ offsetX: initialOffsetX(position), opacity: 0 })
          setTimeout(() => resolve(), 250)
        })
      })
      .then(() => {
        setIsOpen(false)
      })
  }

  const stopPropagation = (event) => event.stopPropagation()
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeDrawer()
    }
  }

  return ReactDOM.createPortal(
    <Wrapper
      position={position}
      role="button"
      tabIndex={-1}
      style={{
        opacity: `${styles.opacity}`,
      }}
      onClick={closeDrawer}
      onKeyDown={handleKeyDown}
    >
      <div
        className="drawer-container"
        role="toolbar"
        style={{
          [position]: 0,
          width: `${width}px`,
          transform: `translateX(${styles.offsetX}%)`,
        }}
        onClick={stopPropagation}
        onKeyDown={handleKeyDown}
      >
        <header className="drawer-header">
          <div className="drawer-title">{title}</div>
          <button className="close-drawer-btn goast" onClick={closeDrawer}>
            <CloseIcon />
          </button>
        </header>
        <div className="drawer-body">{children}</div>
      </div>
    </Wrapper>,
    document.body
  )
}

function initialOffsetX(position) {
  switch (position) {
    case "left":
      return -100
    case "right":
      // the right drawer animation will not work properly when this value
      // equals 100, delete autofocus implementation in useEffect will fix this
      // bug
      return 100
    default:
      return 0
  }
}
