import React from "react"
import styled from "styled-components"

import Timer from "../ui/Timer"
import useToggle from "../hooks/useToggle"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"
import { showNotification } from "../ui/NotificationList"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 32rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 10px 1.5rem 1rem;
`

const PageSetting = () => {
  const {
    toggleIsAlwaysCollapseLeftDrawer,
    isAlwaysCollapseLeftDrawer,
    perPageOnBlogPage,
    changePerPageOnBlogPage,
    prefersColorScheme,
    changePrefersColorScheme,
  } = useGlobalConfig()

  return (
    <Wrapper>
      <div className="page-label">设置</div>
      <label htmlFor="is-always-collapse-left-drawer">
        <input
          type="checkbox"
          id="is-always-collapse-left-drawer"
          checked={isAlwaysCollapseLeftDrawer}
          onChange={toggleIsAlwaysCollapseLeftDrawer}
        />
        总是关闭左侧抽屉
      </label>
      <br />
      <br />
      <label htmlFor="per-page">
        博客页面每页显示{" "}
        <select
          id="per-page"
          defaultValue={`${perPageOnBlogPage}`}
          onChange={(event) => {
            changePerPageOnBlogPage(event.target.value)
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>{" "}
        篇文章链接
      </label>
      <br />
      <br />

      <button
        onClick={() => {
          const rdm = Math.floor(Math.random() * 10)
          const lorem11 =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facilis et!"
          showNotification({
            title: rdm,
            body: lorem11.split(" ").slice(rdm).join(" "),
            duration: 5000,
          })
        }}
      >
        显示通知
      </button>
    </Wrapper>
  )
}

export default PageSetting
