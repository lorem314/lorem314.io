export const getFocusableElementsOf = (node) =>
  node.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
