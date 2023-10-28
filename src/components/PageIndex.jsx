import React from "react"
import styled from "styled-components"

import SteamPowerIcon from "../svg/SteamPowerIcon"
import LatestArticles from "./index/LatestArticles"

const Wrapper = styled.section`
  margin: 2rem auto;
  max-width: 48rem;
`

const PageIndex = () => {
  return (
    <Wrapper className="page-content">
      <h2 className="page-content-title">主页</h2>
      <p>欢迎来到我的博客</p>
      <p>有些地方仍处于开发状态，你可以从左侧的导航栏找想去的地方...</p>
      <LatestArticles />
      <section>
        <h3 className="page-content-title">足迹（你也可以在以下地方找到我）</h3>
        <div className="flex-center" style={{ gap: "10px" }}>
          <SteamPowerIcon size="2rem" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamcommunity.com/profiles/76561198174551770/"
          >
            Number_DDD
          </a>
        </div>
      </section>
    </Wrapper>
  )
}

export default PageIndex
