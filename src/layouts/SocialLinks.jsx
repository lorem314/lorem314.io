import React from "react"
import styled from "styled-components"

import BilibiliIcon from "../svg/BilibiliIcon"
import CodepenIcon from "../svg/CodepenIcon"
import CodeSandboxIcon from "../svg/CodeSandboxIcon"
import GithubIcon from "../svg/GithubIcon"

import { bpHideSocialLinksText } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > a {
    color: whitesmoke;
    text-decoration: none;
    outline-offset: 3px;

    display: inline-flex;
    align-items: center;
    gap: 2px;
    --svg-icon-size: 24px;
    --svg-icon-color: whitesmoke;

    &:hover {
      color: white;
      text-decoration: underline;
      --svg-icon-color: white;
    }
    &:focus-visible {
      outline-width: 2px;
      outline-style: solid;
      outline-color: var(--link-color);
    }
  }

  @media screen and (max-width: ${bpHideSocialLinksText}px) {
    > a {
      background-color: rgba(0, 0, 0, 0.25);
      padding: 4px;
      border-radius: 25%;
      > .link-text {
        display: none;
      }
    }
  }
`

const SocialLinks = () => {
  return (
    <Wrapper>
      {socialLinks.map(({ title, href, Icon, ...props }, index) => {
        return (
          <a
            key={index}
            title={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
            <span className="link-text">{title}</span>
          </a>
        )
      })}
    </Wrapper>
  )
}

export default SocialLinks

export const socialLinks = [
  {
    title: "Bilibili",
    href: "/",
    Icon: (props) => <BilibiliIcon {...props} />,
  },
  {
    title: "CodeSandbox",
    href: "/",
    Icon: (props) => <CodeSandboxIcon {...props} />,
  },
  {
    title: "Codepen",
    href: "/",
    Icon: (props) => <CodepenIcon {...props} />,
  },
  {
    title: "Github",
    href: "/",
    Icon: (props) => <GithubIcon {...props} />,
  },
]
