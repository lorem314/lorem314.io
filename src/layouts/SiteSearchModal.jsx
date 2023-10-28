import React from "react"
import styled from "styled-components"

import { justStopPropagation } from "../utils/event"
import { bp } from "../styled/GlobalStyle"
import CloseIcon from "../svg/CloseIcon"

const Wrapper = styled.div`
  align-self: stretch;

  border-radius: 0.5rem;
  max-width: 48rem;
  width: 100%;
  margin: 1rem 0;

  color: var(--content-text-color-1);
  background-color: var(--page-content-bg);

  display: flex;
  flex-direction: column;
  gap: 10px;

  > header:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  > footer:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  > header {
    padding: 10px 1rem;
    background-color: var(--content-bg-0);

    display: flex;
    gap: 10px;
    > .modal-closer {
      opacity: 0.5;
      --svg-icon-size: 24px;
      &:hover {
        opacity: 1;
      }
    }
  }

  > .result {
    flex-grow: 1;
    > p {
      padding: 10px 1rem;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  > footer {
    background-color: var(--content-bg-0);
    padding: 10px;

    display: flex;
    justify-content: space-between;
    font-size: 87.5%;
  }

  @media (max-width: ${bp.laptop}px) {
    max-width: 100%;
    margin: 0;

    > header:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    > footer:last-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`

const SiteSearchModal = ({ onCloseModal = () => {} }) => {
  return (
    <Wrapper onClick={justStopPropagation}>
      <header>
        <input type="search" />
        <button className="goast modal-closer" onClick={onCloseModal}>
          <CloseIcon />
        </button>
      </header>
      <div className="result">
        <p>目前还在开发中...</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod
          vitae exercitationem architecto ducimus culpa blanditiis dolorem
          ratione praesentium est, odio sit cupiditate magnam aliquid eius amet.
          Eius, voluptate natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod
          vitae exercitationem architecto ducimus culpa blanditiis dolorem
          ratione praesentium est, odio sit cupiditate magnam aliquid eius amet.
          Eius, voluptate natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod
          vitae exercitationem architecto ducimus culpa blanditiis dolorem
          ratione praesentium est, odio sit cupiditate magnam aliquid eius amet.
          Eius, voluptate natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod
          vitae exercitationem architecto ducimus culpa blanditiis dolorem
          ratione praesentium est, odio sit cupiditate magnam aliquid eius amet.
          Eius, voluptate natus?
        </p>
      </div>
      <footer>
        <div>上下键选择</div>
        <div>回车键确定</div>
        <div>ESC键退出</div>
      </footer>
    </Wrapper>
  )
}

export default SiteSearchModal
