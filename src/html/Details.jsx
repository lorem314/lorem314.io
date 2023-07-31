import React, { useState } from "react"
import styled from "styled-components"

import useToggle from "../hooks/useToggle"
import ChevronIcon from "../svg/ChevronIcon"

const DetailsWrapper = styled.details`
  > summary {
    /* background-color: rgba(0, 0, 0, 0.25); */

    display: flex;
    align-items: center;
    gap: 0.25em;

    /* padding: 0.125rem; */
    cursor: pointer;
    list-style: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
  }
`

const Details = ({ open, children }) => {
  const [isOpen, toggleIsOpen] = useToggle(open)
  return (
    <DetailsWrapper open={isOpen}>
      <summary onClick={toggleIsOpen}>
        <ChevronIcon variant={isOpen ? "down" : "right"} />
        {children[0]}
      </summary>
      {children[1]}
    </DetailsWrapper>
  )
}

export default Details
