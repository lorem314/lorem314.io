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

  const [perPageOnBlogPage, setPerPageOnBlogPage] = useLocalStorage(
    "global-config_per-page-on-blog-page",
    5
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
  }, [setPrefersColorScheme])

  const toggleIsAlwaysCollapseLeftDrawer = () => {
    setIsAlwaysCollapseLeftDrawer(
      (prevIsAlwaysCollapseLeftDrawer) => !prevIsAlwaysCollapseLeftDrawer
    )
  }
  const togglePrefersColorScheme = () => {
    setPrefersColorScheme((prevPrefersColorScheme) => !prevPrefersColorScheme)
  }
  const changePrefersColorScheme = (colorSchema) => {
    switch (colorSchema) {
      case "light":
        setPrefersColorScheme("light")
        break
      case "dark":
        setPrefersColorScheme("dark")
        break
      default:
        break
    }
  }

  const changePerPageOnBlogPage = (number) => {
    setPerPageOnBlogPage(number)
  }

  return (
    <GlobalConfigContext.Provider
      value={{
        isAlwaysCollapseLeftDrawer,
        toggleIsAlwaysCollapseLeftDrawer,

        prefersColorScheme,
        togglePrefersColorScheme,
        changePrefersColorScheme,

        perPageOnBlogPage,
        changePerPageOnBlogPage,
      }}
    >
      {children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalConfig = () => {
  return useContext(GlobalConfigContext)
}
