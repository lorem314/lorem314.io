import React from "react"
import styled from "styled-components"

import PageContent from "../styled/PageContent"

import Details from "../html/Details"
// import { Tip, Note, Warning } from "../html/godot"
import { Tip, Note, Warning } from "../html/oreilly"

const Wrapper = styled(PageContent)`
  margin: 2rem auto;
  max-width: 48rem;

  .test-area {
    margin: 0 2rem;
  }
`

const PageIndex = () => {
  return (
    <Wrapper>
      <h2 className="page-content-title">主页</h2>

      <div className="test-area">
        <Tip>
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
          楼上的金佛安，慰剂佛i啊机构i啊感，觉哦啊安慰简欧风格i，骄傲如果，i骄傲俄日感觉，傲然平均分高，IP文件给，排热机关，炮。
        </Tip>
        <Note>这里的内容需要熟记于心。</Note>
        <Warning>值得注意的点。</Warning>
        <Tip>这是一个提示，用于提示。</Tip>
        <Note>这里的内容需要熟记于心。</Note>
        <Warning>值得注意的点。</Warning>

        <Details>
          <strong>标题</strong>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </Details>
      </div>
    </Wrapper>
  )
}

export default PageIndex
