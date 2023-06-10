import React, { useEffect } from "react"
import styled from "styled-components"

import Accordion from "../../ui/Accordion"
import { stopPropagation } from "../../utils/event"
import { transition } from "../../utils/css"

const Wrapper = styled.div.attrs({
  id: "linked-toc",
  className: "linked-toc",
})`
  user-select: none;
  overflow: auto;
  padding: 10px;
  background-color: var(--page-content-bg);
  ${transition("bg")}

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    > li {
      line-height: 1.5;
      position: relative;
      margin-left: 12px;
      padding-left: 12px;
      border-left: 1px solid var(--ui-default-border-color);
      ${transition("bdc")}
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.75em;
        height: 0.75em;
        border-bottom: 1px solid var(--ui-default-border-color);
        ${transition("bdc")}
      }
    }
    > li:last-child {
      border-left: 1px solid transparent;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.75em;
        height: 0.75em;
        border-bottom: 1px solid var(--ui-default-border-color);
        ${transition("bdc")}
      }
      &::after {
        position: absolute;
        top: 0;
        left: -1px;
        content: " ";
        width: 0.75em;
        height: 0.75em;
        border-left: 1px solid var(--ui-default-border-color);
        ${transition("bdc")}
      }
    }
  }

  a {
    font-family: Arial, Helvetica, sans-serif;
  }
  a.is-active {
    font-weight: bolder;
    text-decoration: underline dotted;
    &:hover {
      text-decoration: underline solid;
    }
  }
  a.orphan-link {
    margin-left: 6px;
  }
`

const LinkedToc = ({ tableOfContents }) => {
  const jsxTitle = <span>目录</span>
  useEffect(tocHighlightEffect, [tableOfContents])
  return (
    <Wrapper>
      <Accordion jsxTitle={jsxTitle}>
        <Items items={tableOfContents.items} level={0} />
      </Accordion>
    </Wrapper>
  )
}

export default LinkedToc

const Items = ({ items = [], level = 0 }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Item item={item} level={level} />
        </li>
      ))}
    </ul>
  )
}

const Item = ({ item, level = 0 }) => {
  const href = `#${convertTitleToHeadingId(item.title)}`
  if (!item.items) {
    return (
      <a
        className="orphan-link"
        data-id={convertTitleToDataId(item.title)}
        href={href}
        onClick={stopPropagation}
      >
        {item.title}
      </a>
    )
  } else {
    return (
      <Accordion
        open={true}
        jsxTitle={
          <a
            data-id={convertTitleToDataId(item.title)}
            href={href}
            onClick={stopPropagation}
          >
            {item.title}
          </a>
        }
      >
        <Items items={item.items} level={level + 1} />
      </Accordion>
    )
  }
}

function tocHighlightEffect() {
  const Toc = {
    container: document.getElementById("linked-toc"),
    links: null,
    headings: null,
    intersectionOptions: {
      rootMargin: "0px",
      threshold: 1,
    },
    previousSection: null,
    observer: null,

    init() {
      this.handleObserver = this.handleObserver.bind(this)
      this.setUpObserver()
      this.findLinksAndHeadings()
      this.observeSections()
    },
    handleObserver(entries, observer) {
      entries.forEach((entry) => {
        const href = `#${entry.target.getAttribute("id")}`
        const targetLink = this.links.find((link) => {
          return link.getAttribute("href") === href
        })
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          targetLink.classList.add("is-visible")
          this.previousSection = entry.target.getAttribute("id")
        } else {
          targetLink.classList.remove("is-visible")
        }
        this.highlightFirstActive()
      })
    },
    highlightFirstActive() {
      const firstVisibleLink = this.container.querySelector(".is-visible")
      this.links.forEach((link) => {
        link.classList.remove("is-active")
      })
      if (firstVisibleLink) {
        firstVisibleLink.classList.add("is-active")
      }
      if (!firstVisibleLink && this.previousSection) {
        this.container
          .querySelector(`a[href="#${this.previousSection}"]`)
          .classList.add("is-active")
      }
    },

    setUpObserver() {
      this.observer = new IntersectionObserver(
        this.handleObserver,
        this.intersectionOptions
      )
    },
    findLinksAndHeadings() {
      this.links = [...this.container.querySelectorAll("a")]
      this.headings = this.links.map((link) => {
        const id = link.getAttribute("href").replaceAll("#", "")
        return document.getElementById(id)
      })
    },
    observeSections() {
      this.headings.forEach((heading) => {
        heading && this.observer.observe(heading)
      })
    },
  }

  Toc.init()
}

// 在此列出的符号都可以使用在 mdx 文件的标题中
// 注意 < > 组成标签时需要escape 如 \<tag\>
// `也需要 escape
// 不需要对 - 符号进行替换 href允许出现
const convertTitleToDataId = (title) =>
  title
    .replaceAll(".", "")
    .replaceAll("`", "")
    .replaceAll("!", "")
    .replaceAll("@", "")
    .replaceAll("#", "")
    .replaceAll("$", "")
    .replaceAll("%", "")
    .replaceAll("^", "")
    .replaceAll("&", "")
    .replaceAll("*", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("+", "")
    .replaceAll("=", "")
    .replaceAll(",", "")
    .replaceAll("?", "")
    .replaceAll("/", "")
    .replaceAll("<", "")
    .replaceAll(">", "")
    .replaceAll("|", "")
    .replaceAll("\\", "")

const convertTitleToHeadingId = (title) =>
  title
    .replaceAll("\\", "")
    .replaceAll("/", "")
    .replaceAll(".", "")
    .replaceAll("`", "")
    .replaceAll("~", "")
    .replaceAll("!", "")
    .replaceAll("@", "")
    .replaceAll("#", "")
    .replaceAll("$", "")
    .replaceAll("%", "")
    .replaceAll("^", "")
    .replaceAll("&", "")
    .replaceAll("*", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    // .replaceAll('_', '') 允许出现 下划线
    // .replaceAll('-', '') 允许出现 中线
    .replaceAll("+", "")
    .replaceAll("=", "")
    .replaceAll("·", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll("'", "")
    .replaceAll('"', "")
    .replaceAll("<", "")
    .replaceAll(">", "")
    .replaceAll("|", "")
    .replaceAll(" ", "-")
