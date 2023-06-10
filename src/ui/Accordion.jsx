import React, { useRef } from "react"
import styled from "styled-components"

import DropdownMenuIcon from "../svg/DropdownMenuIcon"

const Wrapper = styled.details.attrs({
  className: "Accordion",
})`
  width: 100%;
  > summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button {
    --svg-icon-size: 24px;
    background: none;
    border: none;
    padding: 0;
    transform: rotate(0deg);
  }
`

const Accordion = ({ open = true, jsxTitle = null, children = null }) => {
  // elements ref
  const refAccordion = useRef(null)
  const refTitle = useRef(null)
  const refContent = useRef(null)
  const refIcon = useRef(null)
  // animations ref
  const refIconAnimation = useRef(null)
  const refContentAnimation = useRef(null)
  // status ref
  const refIsOpening = useRef(false)
  const refIsClosing = useRef(false)
  //

  const handleClick = (event) => {
    event.preventDefault()
    refAccordion.current.style.overflow = "hidden"

    if (refIsClosing.current || !refAccordion.current.open) {
      refIsOpening.current = true

      // close icon animation
      if (refIconAnimation.current) refIconAnimation.current.cancel()
      refIconAnimation.current = refIcon.current.animate(
        { transform: ["rotate(-90deg)", "rotate(0)"] },
        { duration: 250 }
      )
      refIconAnimation.current.onfinish = () => {
        refIcon.current.style.transform = "rotate(0)"
      }

      // close content animation
      refAccordion.current.style.height =
        refAccordion.current.offsetHeight + "px"
      refAccordion.current.open = true
      const start = refAccordion.current.offsetHeight + "px"
      const end =
        refTitle.current.offsetHeight + refContent.current.offsetHeight + "px"
      if (refContentAnimation.current) refContentAnimation.current.cancel()
      refContentAnimation.current = refAccordion.current.animate(
        { height: [start, end] },
        { duration: 250, easing: "ease-in-out" }
      )
      refContentAnimation.current.onfinish = () => {
        refAccordion.current.open = true
        refIsOpening.current = false
        refContentAnimation.current = null
        refAccordion.current.style.height = ""
        refAccordion.current.style.overflow = ""
      }
      refContentAnimation.current.oncancel = () => {
        refIsOpening.current = false
      }
    } else if (refIsOpening.current || refAccordion.current.open) {
      refIsClosing.current = true
      if (refIconAnimation.current) refIconAnimation.current.cancel()
      refIconAnimation.current = refIcon.current.animate(
        { transform: ["rotate(0)", "rotate(-90deg)"] },
        { duration: 250 }
      )
      refIconAnimation.current.onfinish = () => {
        refIcon.current.style.transform = "rotate(-90deg)"
      }

      // open content animation
      const start = refAccordion.current.offsetHeight + "px"
      const end = refTitle.current.offsetHeight + "px"
      if (refContentAnimation.current) refContentAnimation.current.cancel()
      refContentAnimation.current = refAccordion.current.animate(
        { height: [start, end] },
        { duration: 250, easing: "ease-in-out" }
      )
      refContentAnimation.current.onfinish = () => {
        refAccordion.current.open = false
        refIsClosing.current = false
        refContentAnimation.current = null
        refContent.current.style.height = ""
        refAccordion.current.style.overflow = ""
      }
      refContentAnimation.current.oncancel = () => {
        refIsClosing.current = false
      }
    }
  }

  return (
    <Wrapper open={open} ref={refAccordion}>
      <summary className="accordion-title" ref={refTitle} onClick={handleClick}>
        <button ref={refIcon}>
          <DropdownMenuIcon />
        </button>
        {jsxTitle}
      </summary>
      <div className="accordion-content" ref={refContent}>
        {children}
      </div>
    </Wrapper>
  )
}

export default Accordion
