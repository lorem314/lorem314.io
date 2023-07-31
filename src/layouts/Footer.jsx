import React from "react"
import styled from "styled-components"

import { transition } from "../utils/css"

const Wrapper = styled.footer`
  text-align: center;
  padding: 1.5rem 0;
  margin: 2rem -10px 0;

  background-color: var(--content-bg-1);
  ${transition("bg")}

  > p {
    margin: 0.25em 0;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <p>Lorem314's Blog Version 8.0.0</p>
      <p>
        该网站使用 &copy;{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>{" "}
        创建
      </p>
      <p>
        如发现错误或有改进建议 欢迎{" "}
        <a href="https://github.com/lorem314" target="_blank" rel="noreferrer">
          提出
        </a>{" "}
        或{" "}
        <a href="https://github.com/lorem314" target="_blank" rel="noreferrer">
          私信
        </a>
      </p>
    </Wrapper>
  )
}

export default Footer
