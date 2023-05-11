import React, { useState, createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const GlobalConfigContext = createContext(null)

export default function GlobalConfigProvider({ children }) {
  const [isAlwaysCollapseLeftDrawer, setIsAlwaysCollapseLeftDrawer] =
    useLocalStorage("global-config_always-collapse-left-drawer", false)
  // const [preferredTheme, setPreferredTheme] = useLocalStorage(
  //   "global-config_always-collapse-left-drawer",
  //   "system"
  // )

  const toggleIsAlwaysCollapseLeftDrawer = () => {
    setIsAlwaysCollapseLeftDrawer(
      (prevIsAlwaysCollapseLeftDrawer) => !prevIsAlwaysCollapseLeftDrawer
    )
  }

  return (
    <GlobalConfigContext.Provider
      value={{ isAlwaysCollapseLeftDrawer, toggleIsAlwaysCollapseLeftDrawer }}
    >
      {children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalConfig = () => {
  return useContext(GlobalConfigContext)
}
