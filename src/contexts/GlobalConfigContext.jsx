import React, { createContext, useContext, useEffect } from "react"

import useLocalStorage from "../hooks/useLocalStorage"

const GlobalConfigContext = createContext(null)

export default function GlobalConfigProvider({ children }) {
  const [isLeftDrawerAlwaysCollapsed, setIsLeftDrawerAlwaysCollapsed] =
    useLocalStorage("global-config_left-drawer-always-collapsed", false)

  const toggleIsLeftDrawerAlwaysCollapsed = () => {
    setIsLeftDrawerAlwaysCollapsed(
      (prevIsLeftDrawerAlwaysCollapsed) => !prevIsLeftDrawerAlwaysCollapsed
    )
  }

  return (
    <GlobalConfigContext.Provider
      value={{ isLeftDrawerAlwaysCollapsed, toggleIsLeftDrawerAlwaysCollapsed }}
    >
      {children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalConfig = () => {
  return useContext(GlobalConfigContext)
}
