export const keyPrefix =
  "lorem314blog_tools_Steam-Profile-Custom-Info-Box-Designer"

export const fromLocalByKey = (key) => () => {
  try {
    const local = JSON.parse(localStorage.getItem(key))
    if (local) {
      const { mapper, data } = local
      return data.map((row) => {
        return row.map((name) => {
          return { name, url: mapper[name] }
        })
      })
    } else {
      if (key.endsWith("preview")) {
        return Array(3)
          .fill()
          .map(() => Array(3).fill({ url: "", name: "" }))
      } else if (key.endsWith("inventory")) {
        return []
      } else {
        return undefined
      }
    }
  } catch (error) {
    console.error(`[ERROR] parsing ${key}`)
  }
}
