import React, { forwardRef, useImperativeHandle, useState } from "react"
import styled from "styled-components"

import useToggle from "../hooks/useToggle"
import ChevronIcon from "../svg/ChevronIcon"

const DetailsWrapper = styled.details`
  > summary {
    display: flex;
    align-items: center;
    gap: 0.25em;

    cursor: pointer;
    list-style: none;

    > .details-toggler {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
  }
`

const Details = forwardRef(({ open, children }, ref) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleExpand = (event) => {
    event?.preventDefault()
    setIsOpen(true)
  }
  const handleCollapse = (event) => {
    event?.preventDefault()
    setIsOpen(false)
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        expand() {
          handleExpand()
        },
        collapse() {
          handleCollapse()
        },
      }
    },
    []
  )

  return (
    <DetailsWrapper open={isOpen}>
      <summary onClick={isOpen ? handleCollapse : handleExpand}>
        <button className="details-toggler goast">
          <ChevronIcon variant={isOpen ? "down" : "right"} />
        </button>
        {children[0]}
      </summary>
      {children[1]}
    </DetailsWrapper>
  )
})

export default Details
