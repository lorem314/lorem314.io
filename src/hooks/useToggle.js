import { useState, useCallback } from "react"

const useToggle = (status) => {
  const [currentStatus, setCurrentStatus] = useState(!!status)

  const toggle = useCallback((nextStatus = null) => {
    if (nextStatus === null) setCurrentStatus((prevStatus) => !prevStatus)
    //  Object.prototype.toString.call(nextStatus) === "[object Function]"
    else if (nextStatus instanceof Function) {
      setCurrentStatus((prevStatus) => !!nextStatus(prevStatus))
    } else {
      setCurrentStatus(!!nextStatus)
    }
  }, [])

  return [currentStatus, toggle]
}

export default useToggle
