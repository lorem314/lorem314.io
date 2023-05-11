import React from "react"

import GlobalConfigProvider from "./contexts/GlobalConfigContext"

export default ({ element }) => {
  return <GlobalConfigProvider>{element}</GlobalConfigProvider>
}
