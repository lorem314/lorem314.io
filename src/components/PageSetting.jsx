import React from "react"
import styled from "styled-components"

import { useGlobalConfig } from "../contexts/GlobalConfigContext"
import { showNotification } from "../ui/Notification"

const Wrapper = styled.section`
  max-width: 48rem;
  margin: 2rem auto;
`

const PageSetting = () => {
  const { isLeftDrawerAlwaysCollapsed, toggleIsLeftDrawerAlwaysCollapsed } =
    useGlobalConfig()

  return (
    <Wrapper className="page-content">
      <h2 className="page-content-title">设置</h2>
      <label className="flex-center" htmlFor="is-left-drawer-always-collapsed">
        <input
          type="checkbox"
          id="is-left-drawer-always-collapsed"
          checked={isLeftDrawerAlwaysCollapsed}
          onChange={toggleIsLeftDrawerAlwaysCollapsed}
        />
        总是折叠左侧抽屉
      </label>
      <br />
      <button onClick={() => showNotification({ body: "Hello World!" })}>
        发送测试通知
      </button>
    </Wrapper>
  )
}

export default PageSetting
