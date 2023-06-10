import React from "react"
import styled from "styled-components"

import Accordion from "../../../ui/Accordion"

const Wrapper = styled.div`
  > ol {
    margin: 0;
    padding: 0.5rem 1.5rem;
    font-size: 1.125rem;
    > li {
      line-height: 1.5;
    }
  }

  img {
    display: inline;
    vertical-align: middle;
  }
`

const HowToUse = () => {
  return (
    <Accordion open={true} jsxTitle={<span>如何使用</span>}>
      <Wrapper>
        <ol>
          <li>
            添加表情一栏中，需要输入表情的URL地址，如游戏传送门2中的爱心方块
            <img
              src="https://media.st.dl.eccdnx.com/steamcommunity/public/images/items/620/b413f47a6cf686ff3b9c70b3dafe405c12535ba9.png"
              alt="爱心方块"
            />
            表情的地址为
            <a href="https://media.st.dl.eccdnx.com/steamcommunity/public/images/items/620/b413f47a6cf686ff3b9c70b3dafe405c12535ba9.png">
              https://media.st.dl.eccdnx.com/steamcommunity/public/images/items/620/b413f47a6cf686ff3b9c70b3dafe405c12535ba9.png
            </a>
            将该地址复制到URL输入栏中，下方灰色方块会显示对应的表情，表示URL正确。
          </li>
          <li>
            该爱心方块表情的代码为<code>:p2cube:</code>
            ，填写到右侧代码输入栏中，点击添加，可成功添加该表情到已添加表情栏。
          </li>
          <li>
            拖拽已添加表情栏中表情到预览栏中的灰色方格中，会替换方格中的原有表情。右键方格显示更多操作功能。
          </li>
          <li>在将生成的代码复制到您的Steam信息框中前，请确保拥有该表情。</li>
        </ol>
      </Wrapper>
    </Accordion>
  )
}

export default HowToUse
