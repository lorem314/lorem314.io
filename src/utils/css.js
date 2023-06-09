const cssPropMapper = {
  color: "color",
  bg: "background-color",
  bdc: "border-color",
  olc: "outline-color",
  fill: "fill",
  shadow: "box-shadow",
}

export const transition = (...props) => {
  return `transition: ${props
    .map((prop) => `${cssPropMapper[prop]} var(--theme-transition-props)`)
    .join(", ")
    .trimEnd()};`
}

export const clsx = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => (value ? key : ""))
    .join(" ")
    .trim()
