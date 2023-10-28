export const withLocalStorage = (key, initialValue) => {
  const read = () => {
    try {
      const item = localStorage.getItem(key)
      if (!item) return initialValue
      return JSON.parse(item)
    } catch (error) {
      throw Error("读取失败")
    }
  }

  const save = (data) => {
    try {
      const item = JSON.stringify(data)
      localStorage.setItem(key, item)
    } catch (error) {
      throw Error("保存失败")
    }
  }

  return { read, save }
}
