import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { stopPropagation } from "../utils/event"
import { getFocusableElementsOf } from "../utils/dom"

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? <Portal setIsOpen={setIsOpen}>{children[1]}</Portal> : null}
      {React.cloneElement(children[0], { onClick: () => setIsOpen(true) })}
    </>
  )
}

export default Modal

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

  display: flex;
  justify-content: center;

  /* > .modal-container {
    display: flex;
    justify-content: center;

    max-width: 48rem;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    > .modal-container {
      max-width: 100%;
    }
  } */
`

const Portal = ({ children, setIsOpen }) => {
  const ref = useRef(null)
  const onCloseModal = () => setIsOpen(false)

  useEffect(() => {
    const handlePressEsc = (event) => {
      if (event.code === "Escape") onCloseModal()
    }
    window.addEventListener("keydown", handlePressEsc)
    return () => {
      window.removeEventListener("keydown", handlePressEsc)
    }
  }, [])

  useEffect(() => {
    const focusables = getFocusableElementsOf(ref.current)
    if (focusables && focusables.length !== 0) focusables[0].focus()
  }, [])

  return ReactDOM.createPortal(
    <PortalWrapper ref={ref} onClick={onCloseModal} tabIndex={0}>
      {React.cloneElement(children, {
        onCloseModal,
        onClick: stopPropagation,
      })}
    </PortalWrapper>,
    document.body
  )
}
