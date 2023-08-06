const cssPropMapper = {
  color: "color",
  opacity: "opacity",
  fill: "fill",

  bg: "background-color",
  bdc: "border-color",
  olc: "outline-color",
  fs: "font-size",
  mg: "margin",
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
