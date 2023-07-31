const debounce = (fn = () => {}, delay = 500) => {
  let tid = null

  return (...args) => {
    clearTimeout(tid)

    tid = setTimeout(() => fn(...args), delay)
  }
}

export default debounce
