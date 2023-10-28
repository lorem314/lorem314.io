import React, { useEffect, useState } from "react"

const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, isOpen: false })

  useEffect(() => {
    const close = () =>
      setContextMenu((prevState) => ({
        ...prevState,
        x: 0,
        y: 0,
        isOpen: false,
      }))
    document.addEventListener("click", close)
    return () => {
      document.removeEventListener("click", close)
    }
  }, [])

  const open = (event) => {
    setContextMenu((prevState) => ({
      ...prevState,
      x: event?.pageX || 0,
      y: event?.pageY || 0,
      isOpen: true,
    }))
  }

  return [contextMenu, open]
}

export default useContextMenu
