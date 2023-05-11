import React, { createContext, useContext, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const GlobalConfigContext = createContext(null)

export default function GlobalConfigProvider({ children }) {
  const [isAlwaysCollapseLeftDrawer, setIsAlwaysCollapseLeftDrawer] =
    useLocalStorage("global-config_always-collapse-left-drawer", false)

  const [prefersColorScheme, setPrefersColorScheme] = useLocalStorage(
    "global-config_prefers-color-scheme",
    () => {
      if (typeof window === "undefined") return "light"
      else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      }
    }
  )

  useEffect(() => {
    const handlePrefersColorSchemeChange = (event) => {
      setPrefersColorScheme(event.matches ? "dark" : "light")
    }
    const prefersColorSchemeMediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )
    prefersColorSchemeMediaQueryList.addEventListener(
      "change",
      handlePrefersColorSchemeChange
    )
    return () => {
      prefersColorSchemeMediaQueryList.removeEventListener(
        "change",
        handlePrefersColorSchemeChange
      )
    }
  }, [])

  const toggleIsAlwaysCollapseLeftDrawer = () => {
    setIsAlwaysCollapseLeftDrawer(
      (prevIsAlwaysCollapseLeftDrawer) => !prevIsAlwaysCollapseLeftDrawer
    )
  }
  const togglePrefersColorScheme = () => {
    setPrefersColorScheme((prevPrefersColorScheme) => !prevPrefersColorScheme)
  }

  return (
    <GlobalConfigContext.Provider
      value={{
        isAlwaysCollapseLeftDrawer,
        toggleIsAlwaysCollapseLeftDrawer,
        prefersColorScheme,
        togglePrefersColorScheme,
      }}
    >
      {children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalConfig = () => {
  return useContext(GlobalConfigContext)
}
