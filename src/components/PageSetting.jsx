import React from "react"
import styled from "styled-components"

import Timer from "../ui/Timer"
import useToggle from "../hooks/useToggle"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"

const Wrapper = styled.div.attrs({
  className: "page-content",
})`
  max-width: 32rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1.5rem;
`

const PageSetting = () => {
  const { toggleIsAlwaysCollapseLeftDrawer, isAlwaysCollapseLeftDrawer } =
    useGlobalConfig()

  const [isTiming, toggleTiming] = useToggle(true)
  return (
    <Wrapper>
      <h2>设置</h2>
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
      <label htmlFor="">
        博客页面每页显示{" "}
        <select
          name=""
          id=""
          onChange={(event) => {
            console.log(event.target.value)
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>{" "}
        篇文章链接
      </label>
      <p>
        还有
        <Timer
          duration={2000}
          isTiming={isTiming}
          onTimeup={() => {
            console.log("time up")
          }}
        >
          {(time) => time}
        </Timer>
        秒
      </p>
      <button
        onClick={() => {
          toggleTiming()
        }}
      >
        {isTiming ? "暂停" : "开启"}
      </button>
    </Wrapper>
  )
}

export default PageSetting
