import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  createRef,
} from "react"
import styled, { css } from "styled-components"

import useToggle from "../../hooks/useToggle"
import ChevronIcon from "../../svg/ChevronIcon"
import DoubleArrowIcon from "../../svg/DoubleArrowIcon"

import Details from "../../html/Details"
import { justStopPropagation } from "../../utils/event"
import { transition } from "../../utils/css"

const Wrapper = styled.aside.attrs({
  id: "linked-toc",
  className: "linked-toc",
})`
  --border-style: dashed;
  --svg-icon-size: 1.125em;

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
      margin-left: 0.5em;
      padding-left: 0.75em;
      border-left: 0.0625em var(--border-style) var(--ui-default-border-color);
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 0.0625em var(--border-style)
          var(--ui-default-border-color);
      }
    }
    > li:last-child {
      border-left: 1px var(--border-style) transparent;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 0.0625em var(--border-style)
          var(--ui-default-border-color);
      }
      &::after {
        position: absolute;
        top: 0;
        left: -1px;
        content: " ";
        /* width: 0.5em; */
        height: 0.75em;
        border-left: 0.0625em var(--border-style) var(--ui-default-border-color);
      }
    }
  }
  a {
    opacity: 0.9;
  }
  a.is-active {
    font-weight: bolder;
    opacity: 1;
  }
`

const cssDetailsHeader = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  --svg-icon-size: 22px;

  > .details-title {
    flex-grow: 1;
  }

  > button {
    opacity: 0;
  }

  &:hover {
    > button {
      opacity: 0.5;
      color: var(--content-text-color-1);

      &:hover {
        opacity: 1;
      }
    }
  }
`

const DetailsHeaderInLinkedToc = styled.div`
  ${cssDetailsHeader}
`

const LinkedToc = ({ tableOfContents }) => {
  const refDetails = useRef(null)
  const refItems = useRef(null)

  useEffect(tocHighlightEffect, [tableOfContents])

  const handleExpandAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.expand()
    refItems.current?.expandAll()
  }
  const handleCollapseAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.collapse()
    refItems.current?.collapseAll()
  }

  return (
    <Wrapper>
      <Details open ref={refDetails}>
        <DetailsHeaderInLinkedToc>
          <strong className="details-title">目录</strong>
          <button className="goast" onClick={handleCollapseAll}>
            <DoubleArrowIcon variant="up" />
          </button>
          <button className="goast" onClick={handleExpandAll}>
            <DoubleArrowIcon variant="down" />
          </button>
        </DetailsHeaderInLinkedToc>
        <Items ref={refItems} items={tableOfContents.items} />
      </Details>
    </Wrapper>
  )
}

export default React.memo(LinkedToc)

const Items = forwardRef(({ items = [], level = 0 }, ref) => {
  const refs = useRef(items.map(() => createRef()))

  useImperativeHandle(
    ref,
    () => {
      return {
        expandAll() {
          refs.current.forEach((ref) => {
            ref.current.expandAll()
          })
        },
        collapseAll() {
          refs.current.forEach((ref) => {
            ref.current.collapseAll()
          })
        },
      }
    },
    []
  )

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item ref={refs.current[index]} item={item} level={level} />
          </li>
        )
      })}
    </ul>
  )
})

const DetailsHeaderInList = styled.li`
  ${cssDetailsHeader}
`

const Item = forwardRef(({ item, level = 0 }, ref) => {
  const href = `#${convertTitleToHeadingId(item.title)}`

  const refDetails = useRef(null)
  const refItems = useRef(null)

  const handleExpandAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.expand()
    refItems.current?.expandAll()
  }
  const handleCollapseAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.collapse()
    refItems.current?.collapseAll()
  }
  useImperativeHandle(
    ref,
    () => {
      return {
        collapseAll() {
          handleCollapseAll()
        },
        expandAll() {
          handleExpandAll()
        },
      }
    },
    []
  )

  if (!item.items) {
    return (
      <a data-id={convertTitleToDataId(item.title)} href={href}>
        {item.title}
      </a>
    )
  } else {
    return (
      <Details open ref={refDetails}>
        <DetailsHeaderInList>
          <div className="details-title">
            <a
              data-id={convertTitleToDataId(item.title)}
              href={href}
              onClick={justStopPropagation}
            >
              {item.title}
            </a>
          </div>
          <button className="goast" onClick={handleCollapseAll}>
            <DoubleArrowIcon variant="up" />
          </button>
          <button className="goast" onClick={handleExpandAll}>
            <DoubleArrowIcon variant="down" />
          </button>
        </DetailsHeaderInList>
        <Items ref={refItems} items={item.items} level={level + 1} />
      </Details>
    )
  }
})

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
