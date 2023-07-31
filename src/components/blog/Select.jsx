import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"

import CloseIcon from "../../svg/CloseIcon"
import DropdownIcon from "../../svg/DropdownIcon"

import { clsx, transition } from "../../utils/css"
import useDebounce from "../../hooks/useDebounce"

const Wrapper = styled.div`
  position: relative;

  > .select-input-group {
    outline-offset: -2px;
    border-radius: 0.25em;
    border: 2px solid var(--ui-default-border-color);
    ${transition("bdc")}

    display: flex;
    align-items: center;

    &:focus-within {
      outline: 2px solid var(--ui-default-outline-color-focus);
      .divider {
        background-color: var(--ui-default-outline-color-focus);
      }
    }

    .selected-tags {
      flex: 0 0 auto;
      max-width: 180px;
      overflow-x: hidden;
      padding: 0 2px;

      display: flex;
      align-items: center;
      gap: 4px;
      > button {
        font-size: smaller;
      }
    }

    .tag-input {
      flex-shrink: 1;
      border: none;
      &:focus {
        outline: none;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      padding: 0 0.25rem;
      gap: 0.25rem;
      > button {
        --svg-icon-size: 18px;
        opacity: 0.5;
        color: var(--page-content-text-color-1);
        ${transition("color")}
        font-family: monospace;
        &:hover {
          opacity: 1;
        }
      }
    }

    .divider {
      align-self: stretch;
      flex-basis: 2px;
      flex-shrink: 0;
      background-color: var(--ui-default-border-color);
    }
  }

  > .options {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    border-radius: 0.25em;
    border: 2px solid var(--ui-default-border-color);
    width: 100%;
    position: absolute;
    top: calc(100% + 0.5em);
    left: 50%;
    transform: translateX(-50%);
    max-height: calc(4 * 2em);
    overflow-y: auto;
    background-color: var(--page-content-bg);
    ${transition("bg", "bdc")}

    li {
      cursor: pointer;
      padding: 0 10px;
      height: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li.hovered {
      background-color: var(--content-bg-0);
    }
    li.selected {
      color: var(--ui-option-color-selected);
      background-color: var(--ui-option-bg-selected);
      font-weight: bolder;
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
  const refSelectedTags = useRef(null)
  const refTagInput = useRef(null)
  const refOptions = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [term, setTerm] = useState("")
  const debouncedTerm = useDebounce(term)

  // click outside to close .options
  useEffect(() => {
    const handleClick = () => setIsOpen(false)
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])
  // horizontally scroll for .selected-tags
  useEffect(() => {
    const nodeSelectedTags = refSelectedTags.current
    const handleWheel = (event) => {
      nodeSelectedTags.scrollBy({ left: event.deltaY < 0 ? -30 : 30 })
    }
    nodeSelectedTags?.addEventListener("wheel", handleWheel, { passive: true })
    return () => {
      nodeSelectedTags?.removeEventListener("wheel", handleWheel)
    }
  }, [])
  // tag input listenes for key press
  useEffect(() => {
    const nodeTagInput = refTagInput.current
    const handleKeyDown = (event) => {
      if (event.target !== nodeTagInput) return
      switch (event.code) {
        case "Escape":
          clearSelectedTags()
          break
        case "Enter":
        case "NumpadEnter":
        case "Space":
          event.preventDefault()
          if (isOpen && hoveredIndex !== -1) {
            onSelectTag(filteredOptions[hoveredIndex])(event)
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
  // click tag
  const handleSelectTag = useCallback(
    (tag) => (event) => {
      event.stopPropagation()
      if (!event.shiftKey) {
        setIsOpen(false)
      }
      onSelectTag(tag)(event)
      setTerm("")
    },
    [onSelectTag]
  )

  // option, options event
  const handleMouseEnterOption = useCallback(
    (index) => () => {
      setHoveredIndex(index)
    },
    []
  )
  const handleMouseLeaveOptions = useCallback(() => setHoveredIndex(-1), [])

  const handleChangeTerm = useCallback((event) => {
    setHoveredIndex(-1)
    setTerm(event.target.value)
  }, [])

  const toggleIsOpen = useCallback((event) => {
    event.stopPropagation()
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  const filteredOptions = options.filter((option) => {
    if (debouncedTerm === "") return true
    return option.name.includes(debouncedTerm)
  })

  return (
    <Wrapper $isOpen={isOpen}>
      <label className="page-content-title" htmlFor="blog-select-input">
        筛选标签
      </label>

      <div className="select-input-group">
        {selectedTags.length === 0 ? null : (
          <div className="selected-tags" ref={refSelectedTags}>
            {selectedTags.map((selectedTag) => {
              return (
                <button
                  key={selectedTag.name}
                  onClick={handleSelectTag(selectedTag)}
                >
                  {selectedTag.name}
                </button>
              )
            })}
          </div>
        )}

        {selectedTags.length === 0 ? null : <div className="divider" />}
        <input
          id="blog-select-input"
          className="tag-input"
          ref={refTagInput}
          type="text"
          placeholder="输入标签名..."
          autoComplete="off"
          value={term}
          onChange={handleChangeTerm}
          onFocus={() => setIsOpen(true)}
          onClick={(event) => event.stopPropagation()}
        />
        <div className="divider" />
        <div className="actions">
          <button className="goast" onClick={clearSelectedTags}>
            <CloseIcon />
          </button>
          <button className="goast" onClick={toggleFilterLogic}>
            {isOrLogic ? "||" : "&&"}
          </button>
          <button className="goast" onClick={toggleIsOpen}>
            <DropdownIcon />
          </button>
        </div>
      </div>

      <ul
        className="options"
        ref={refOptions}
        onMouseLeave={handleMouseLeaveOptions}
      >
        {filteredOptions.length === 0 ? (
          <li>no result</li>
        ) : (
          filteredOptions.map((option, index) => {
            const hovered = index === hoveredIndex
            const selected = selectedTags.includes(option)
            return (
              <li
                className={clsx({ hovered, selected })}
                key={option.name}
                onMouseEnter={handleMouseEnterOption(index)}
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
