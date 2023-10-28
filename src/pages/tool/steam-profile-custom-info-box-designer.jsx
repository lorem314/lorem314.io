import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../../layouts/Layout"
import App from "../../components/tool/steam-profile-custom-info-box-designer"

const Wrapper = styled.section`
  margin: 2rem auto;
  /* max-width: 90%; */
  padding: 0.5rem 1rem;
`

const SteamProfileCustomInfoBoxDesigner = () => {
  return (
    <Layout>
      <Helmet title="用表情设计 Steam 自定义信息框 | 工具 | Lorem314's Blog" />
      <Wrapper className="page-content">
        <App />
      </Wrapper>
    </Layout>
  )
}

export default SteamProfileCustomInfoBoxDesigner
