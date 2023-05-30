import { useState, useEffect, useMemo } from "react"

const Timer = ({
  duration = 1000,
  start = 100,
  end = 0,
  step = 1,
  isTiming = true,
  onTimesup = () => {},
  children = () => {},
}) => {
  const [hasTimedup, setHasTimedup] = useState(false)
  const [count, setCount] = useState(start)
  const delay = useMemo(
    () => (duration * step) / (start - end),
    [duration, step, start, end]
  )

  useEffect(() => {
    let tid
    if (isTiming) {
      tid = setInterval(() => {
        setCount((c) => {
          if (c > 0) return c - step
          if (!hasTimedup) {
            onTimesup()
            setHasTimedup(true)
          }
          clearInterval(tid)
          return c
        })
      }, delay)
    }
    return () => clearInterval(tid)
  }, [delay, isTiming, hasTimedup, step, onTimesup])

  return children(count)
}

export default Timer
