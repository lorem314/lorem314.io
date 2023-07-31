import { useState, useCallback } from "react"

const useToggle = (status) => {
  const [currentStatus, setCurrentStatus] = useState(!!status)

  const toggle = useCallback((event) => {
    event.preventDefault()
    setCurrentStatus((prevStatus) => !prevStatus)
  }, [])

  return [currentStatus, toggle]
}

export default useToggle
