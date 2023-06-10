const debounce = (cb = () => {}, delay = 500) => {
  let tid = null

  return (...args) => {
    clearTimeout(tid)

    tid = setTimeout(() => cb(...args), delay)
  }
}

export default debounce
