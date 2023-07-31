import React from "react"

import GlobalConfigProvider from "./contexts/GlobalConfigContext"

const RootElementWrapper = ({ element }) => {
  return <GlobalConfigProvider>{element}</GlobalConfigProvider>
}

export default RootElementWrapper
