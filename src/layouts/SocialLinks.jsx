import React from "react"
import styled from "styled-components"

import Tooltip from "../ui/Tooltip"

import BilibiliIcon from "../svg/BilibiliIcon"
import CodepenIcon from "../svg/CodepenIcon"
import CodeSandboxIcon from "../svg/CodeSandboxIcon"
import GithubIcon from "../svg/GithubIcon"

import { bp } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > .social-link {
    display: flex;
    align-items: center;
    gap: 0.125rem;

    --svg-icon-size: 18px;
    text-decoration: none;
    color: white;
    opacity: 0.875;

    &:hover {
      text-decoration: underline;
      opacity: 1;
    }
  }

  @media screen and (max-width: ${bp.hideSocialLinksTitle}px) {
    > .social-link {
      --svg-icon-size: 24px;
      padding: 0.25em;
      border-radius: 0.25em;
      background-color: rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      > .link-title {
        display: none;
      }
    }
  }
`

const SocialLinks = () => {
  return (
    <Wrapper>
      {socialLinks.map(({ title, path, Icon }, index) => {
        return (
          <Tooltip key={index} position="bottom">
            <a
              className="social-link"
              href={path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <span className="link-title">{title}</span>
            </a>
            <span className="tooltip-title">{title}</span>
          </Tooltip>
        )
      })}
    </Wrapper>
  )
}

export default SocialLinks

export const socialLinks = [
  {
    title: "Bilibili",
    path: "/",
    Icon: (props) => <BilibiliIcon {...props} />,
  },
  {
    title: "CodeSandbox",
    path: "/",
    Icon: (props) => <CodeSandboxIcon {...props} />,
  },
  {
    title: "Codepen",
    path: "/",
    Icon: (props) => <CodepenIcon {...props} />,
  },
  {
    title: "Github",
    path: "/",
    Icon: (props) => <GithubIcon {...props} />,
  },
]
