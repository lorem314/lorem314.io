import React from "react"
import styled from "styled-components"

import GatsbyIcon from "../svg/GatsbyIcon"
import GithubIcon from "../svg/GithubIcon"
import BilibiliIcon from "../svg/BilibiliIcon"
import { transition } from "../utils/css"

const Wrapper = styled.footer`
  text-align: center;
  padding: 1.5rem 0;
  margin: 2rem -10px 0;

  background-color: var(--content-bg-1);
  ${transition("bg")}

  > div {
    margin: 0.25em 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inline-icon-link-group {
    --svg-icon-size: 1.375rem;
    margin: 0 0.125rem;

    display: inline-flex;
    align-items: center;
    gap: 0.125rem;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <div>Lorem314's Blog Version 8.0.0</div>
      <div>
        该网站使用
        <span className="inline-icon-link-group">
          <svg
            style={{ width: "1.25rem", height: "1.25rem" }}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27,16H20v2h4.8A9.066,9.066,0,0,1,19,24.5L7.5,13A9,9,0,0,1,16,7a9.232,9.232,0,0,1,7.4,3.8l1.5-1.3A10.993,10.993,0,0,0,5.3,13.6L18.5,26.8A11.251,11.251,0,0,0,27,16ZM5,16.1a10.682,10.682,0,0,0,3.2,7.6,10.855,10.855,0,0,0,7.6,3.2Z"
              style={{ fill: "#fff" }}
            />
            <path
              d="M16,2A14,14,0,1,0,30,16,14.041,14.041,0,0,0,16,2ZM8.2,23.8A10.855,10.855,0,0,1,5,16.2L15.9,27A11.351,11.351,0,0,1,8.2,23.8Zm10.2,2.9L5.3,13.6A10.993,10.993,0,0,1,24.9,9.5l-1.5,1.3A9.232,9.232,0,0,0,16,7a9.1,9.1,0,0,0-8.5,6L19,24.5A9.066,9.066,0,0,0,24.8,18H20V16h7A11.031,11.031,0,0,1,18.4,26.7Z"
              style={{ fill: "#639" }}
            />
          </svg>
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby
          </a>{" "}
        </span>
        创建
      </div>
      <div>
        如发现错误或有改进建议 欢迎
        <span className="inline-icon-link-group">
          <GithubIcon />
          <a
            href="https://github.com/lorem314"
            target="_blank"
            rel="noreferrer"
          >
            提出
          </a>
        </span>
        或
        <span className="inline-icon-link-group">
          <BilibiliIcon />
          <a
            href="https://space.bilibili.com/7909744"
            target="_blank"
            rel="noreferrer"
          >
            私信
          </a>
        </span>
      </div>
    </Wrapper>
  )
}

export default Footer
