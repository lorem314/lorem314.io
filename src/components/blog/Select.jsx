import React, { useCallback, useEffect, useId, useRef, useState } from "react"
import styled from "styled-components"

import Label from "../../ui/Label"
import Modal from "../../ui/Modal"
import HowToUseSelect from "./HowToUseSelect"

import CloseIcon from "../../svg/CloseIcon"
import DropdownMenuIcon from "../../svg/DropdownMenuIcon"
import InfoIcon from "../../svg/InfoIcon"

import useDebounce from "../../hooks/useDebounce"
import { transition, clsx } from "../../utils/css"

const Wrapper = styled.div.attrs({
  className: "select-input",
})`
  position: relative;

  > .selected-tags-input-group {
    line-height: 1.2;
    border-radius: 0.25em;
    border: 1px solid var(--ui-default-border-color);
    ${transition("bdc", "olc")}

    &:hover,
    &.hover {
      border: 1px solid var(--ui-default-border-color-hover);
    }
    &:focus-within {
      border: 1px solid var(--ui-input-text-border-color-focus);
      outline: 1px solid var(--ui-input-text-border-color-focus);
    }

    display: flex;

    > .selected-tags {
      ${({ hasSelectedTag }) => (hasSelectedTag ? "padding: 0 4px;" : "")}

      flex: 0 0 auto;
      max-width: 240px;
      overflow-x: hidden;

      display: flex;
      align-items: center;
      gap: 4px;

      > button {
        word-break: keep-all;
        font-size: 0.75em;
        padding: 0.25em 0.25em;
      }
    }

    > .tag-input {
      padding: 6px;
      min-width: 120px;
      border: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 1px solid var(--ui-default-border-color);
      ${({ hasSelectedTag }) =>
        hasSelectedTag
          ? `
              border-left: 1px solid var(--ui-default-border-color);
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            `
          : ""}
      &:hover {
        border: none;
        border-right: 1px solid var(--ui-default-border-color-hover);
        ${({ hasSelectedTag }) =>
          hasSelectedTag
            ? "border-left: 1px solid var(--ui-default-border-color-hover);"
            : ""}
      }
      &:focus {
        border: none;
        border-right: 1px solid var(--ui-default-border-color-hover);
        outline: none;
        ${({ hasSelectedTag }) =>
          hasSelectedTag
            ? "border-left: 1px solid var(--ui-default-border-color-hover);"
            : ""}
      }
    }

    > .actions {
      margin: 0 4px;
      --svg-icon-size: 24px;
      align-self: center;
      display: flex;
      align-items: center;
      > button {
        min-width: 16px;
        font-family: monospace;
        --svg-icon-color: var(--page-secondary-text-color);
        color: var(--page-secondary-text-color);
      }
      > button.icon {
        padding-bottom: 2px;
        width: var(--svg-icon-size);
        height: var(--svg-icon-size);
        font-weight: bolder;
        ${transition("color")}
      }
      > button:hover {
        --svg-icon-color: var(--page-strong-text-color);
        color: var(--page-strong-text-color);
      }
    }
  }

  > ul.options {
    box-sizing: content-box;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: calc(100% + 0.5em);
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    border-radius: 0.25em;
    max-height: calc(4 * 2em);
    overflow-y: auto;
    /* background-color: white; */
    /* color: inherit; */
    background-color: var(--page-content-bg);
    border: 1px solid var(--ui-default-border-color);
    ${transition("bg", "bdc")}

    > li {
      user-select: none;
      cursor: pointer;
      padding: 0 10px;
      height: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--ui-default-color);
      background-color: var(--ui-default-bg);
    }
    > li.hovered {
      color: var(--ui-default-color-hover);
      background-color: var(--ui-default-bg-hover);
    }
    > li.selected {
      color: white;
      background-color: #485fc7;
    }
  }
`

const Select = ({
  selectedTags = [],
  options = [],
  onSelectTag = () => () => {},
  clearSelectedTags = () => {},
  isOrLogic = true,
  toggleFilterLogic = () => {},
}) => {
  const id = useId()
  const refSelectedTags = useRef(null)
  const refTagInput = useRef(null)
  const refOptions = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [term, setTerm] = useState("")
  const debouncedTerm = useDebounce(term)

  useEffect(() => {
    const handleClick = () => setIsOpen(false)
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    const nodeSelectedTags = refSelectedTags.current
    const handleWheel = (event) => {
      event.preventDefault()
      nodeSelectedTags.scrollBy({ left: event.deltaY < 0 ? -30 : 30 })
    }
    nodeSelectedTags?.addEventListener("wheel", handleWheel)
    return () => {
      nodeSelectedTags?.removeEventListener("wheel", handleWheel)
    }
  }, [])

  useEffect(() => {
    const nodeTagInput = refTagInput.current
    const handleKeyDown = (event) => {
      if (event.target !== nodeTagInput) return
      console.log("code :", event.code)
      switch (event.code) {
        case "Escape":
          console.log("clear selected tags")
          clearSelectedTags()
          break
        case "Enter":
        case "NumpadEnter":
        case "Space":
          event.preventDefault()
          if (isOpen && hoveredIndex !== -1) {
            onSelectTag(filteredTags[hoveredIndex])(event)
          }
          if (!event.shiftKey) setIsOpen(false)
          break
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          if (hoveredIndex === -1) {
            setHoveredIndex(() => 0)
          }
          const indexOffset = event.code === "ArrowDown" ? 1 : -1
          const newHoveredIndex = hoveredIndex + indexOffset
          if (newHoveredIndex >= 0 && newHoveredIndex < options.length) {
            setHoveredIndex(newHoveredIndex)
            const nodeOptions = refOptions.current
            // event.target.parentNode.parentNode.querySelector("ul.options")
            const nodeNextHoveredLi = nodeOptions.querySelector(
              `li:nth-of-type(${newHoveredIndex + 1})`
            )
            switch (event.code) {
              case "ArrowUp":
                if (nodeNextHoveredLi.offsetTop < nodeOptions.scrollTop) {
                  nodeOptions.scrollTop = nodeNextHoveredLi.offsetTop
                }
                break
              case "ArrowDown":
                if (
                  nodeNextHoveredLi.offsetTop + nodeNextHoveredLi.offsetHeight >
                  nodeOptions.scrollTop + nodeOptions.clientHeight
                ) {
                  nodeOptions.scrollTop =
                    (newHoveredIndex - 3) * nodeNextHoveredLi.offsetHeight
                }
                break
              default:
                return
            }
          }
          return
        default:
          return
      }
    }
    nodeTagInput?.addEventListener("keydown", handleKeyDown)
    return () => {
      nodeTagInput?.removeEventListener("keydown", handleKeyDown)
    }
  }, [
    isOpen,
    hoveredIndex,
    options,
    selectedTags,
    onSelectTag,
    clearSelectedTags,
  ])

  const handleSelectTag = useCallback(
    (tag) => (event) => {
      event.stopPropagation()
      if (!event.shiftKey) {
        setIsOpen(false)
      }
      onSelectTag(tag)(event)
    },
    [onSelectTag]
  )

  const handleMouseEnterOption = useCallback(
    (index) => () => setHoveredIndex(index),
    []
  )
  const handleMouseLeaveOptions = useCallback(() => setHoveredIndex(-1), [])

  const handleChangeTerm = (event) => {
    setHoveredIndex(-1)
    setTerm(event.target.value)
  }

  const toggleIsOpen = (event) => {
    event.stopPropagation()
    setIsOpen((_) => !_)
  }

  const filteredTags = options.filter((option) => {
    if (debouncedTerm === "") return true
    return option.name.includes(debouncedTerm)
  })

  return (
    <Wrapper isOpen={isOpen} hasSelectedTag={selectedTags.length !== 0}>
      <Label htmlFor={id} className="page-label flex">
        <span>标签({options.length})</span>
        <Modal>
          <button className="goast">
            <InfoIcon />
          </button>
          <HowToUseSelect />
        </Modal>
      </Label>

      <div className="selected-tags-input-group">
        <div className="selected-tags" ref={refSelectedTags}>
          {selectedTags.map((selectedTag) => (
            <button
              key={selectedTag.name}
              onClick={handleSelectTag(selectedTag)}
            >
              {selectedTag.name}
            </button>
          ))}
        </div>
        <input
          id={id}
          ref={refTagInput}
          className="tag-input"
          type="text"
          autoComplete="off"
          value={term}
          onChange={handleChangeTerm}
          onFocus={() => setIsOpen(true)}
          onClick={(event) => event.stopPropagation()}
        />
        <div className="actions">
          <button
            className="goast"
            title="清除所有已选标签"
            onClick={clearSelectedTags}
          >
            <CloseIcon />
          </button>

          <button
            className="icon goast"
            onClick={toggleFilterLogic}
            title={isOrLogic ? "或筛选" : "与筛选"}
          >
            {isOrLogic ? "||" : "&&"}
          </button>
          <button
            className="goast"
            title={isOpen ? "关闭菜单" : "打开菜单"}
            onClick={toggleIsOpen}
          >
            <DropdownMenuIcon />
          </button>
        </div>
      </div>

      <ul
        ref={refOptions}
        className="options styleless"
        onMouseLeave={handleMouseLeaveOptions}
      >
        {filteredTags.length === 0 ? (
          <p className="no-result">没有符合结果的标签...</p>
        ) : (
          filteredTags.map((option, index) => {
            const hovered = index === hoveredIndex
            const selected = selectedTags.includes(option)
            return (
              <li
                className={clsx({ hovered, selected })}
                key={option.name}
                onMouseEnter={handleMouseEnterOption(index)}
                // onClick={onSelectTag(option)}
                onClick={handleSelectTag(option)}
              >
                <span>{option.name}</span>
                <span>{option.count}</span>
              </li>
            )
          })
        )}
      </ul>
    </Wrapper>
  )
}

export default Select
