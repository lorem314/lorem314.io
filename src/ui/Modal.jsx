import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { transition } from "../utils/css"

const Modal = ({
  isControlled = true,
  isOpen,
  onClose = () => {},
  children,
}) => {
  return isControlled ? (
    <ControlleredModal children={children} isOpen={isOpen} onClose={onClose} />
  ) : (
    <UncontrolleredModal children={children} />
  )
}

export default Modal

const ControlleredModal = ({ children, isOpen, onClose }) => {
  return isOpen ? <Portal onClose={onClose}>{children}</Portal> : null
}
const UncontrolleredModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <>
      {React.cloneElement(children[0], { onClick: handleOpenModal })}
      {isOpen ? (
        <Portal onClose={handleCloseModal}>{children[1]}</Portal>
      ) : null}
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;

  > .modal-container {
    display: flex;
    justify-content: center;

    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }
`

const Portal = ({ onClose, children }) => {
  const [styles, setStyles] = useState({
    opacity: 0,
    transform: "scale(0)",
  })

  useEffect(() => {
    setStyles({ opacity: 1, transform: "scale(1)" })
  }, [])

  const handleCloseModal = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setStyles({ opacity: 0, transform: "scale(0)" })
          setTimeout(() => resolve(), 150)
        })
      })
      .then(() => {
        onClose && onClose()
      })
  }

  return ReactDOM.createPortal(
    <Backdrop onClick={handleCloseModal}>
      <div className="modal-container" style={styles}>
        {React.cloneElement(children, {
          onCloseModal: handleCloseModal,
        })}
      </div>
    </Backdrop>,
    document.body
  )
}
