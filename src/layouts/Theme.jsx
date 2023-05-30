import React from "react"
import styled from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Wrapper = styled.div`
  border-radius: ${({ size }) => size}px;

  :focus-within {
    /* outline-offset: 1px; */
    outline: 2px solid var(--link-color);
  }

  > label {
    position: relative;
    display: inline-block;
    width: ${({ size }) => size * 2}px;
    height: ${({ size }) => size}px;

    > input[type="checkbox"].theme-checkbox {
      width: 0;
      height: 0;
      opacity: 0;
    }
    > .track {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: ${({ size }) => size}px;
      background-color: black;
      display: flex;
      > svg {
        width: 32px;
        height: 32px;
        padding: 6px;
      }
    }
    > .thumb {
      cursor: pointer;
      position: absolute;
      top: ${({ pad }) => pad}px;
      left: ${({ pad }) => pad}px;
      width: ${({ size, pad }) => size - pad * 2}px;
      height: ${({ size, pad }) => size - pad * 2}px;
      border-radius: ${({ size }) => size}px;
      background-color: rgba(255, 255, 255, 0.99);
      transform: translateX(${({ isDark, size }) => (isDark ? size : 0)}px);
      transition: transform 0.25s ease-in-out;
      :hover {
        background-color: white;
      }
    }
  }
`

const Theme = ({ size = 32, pad = 4 }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme === null) return null
        return (
          <Wrapper isDark={theme === "dark"} size={size} pad={pad}>
            <label htmlFor="theme-toggler">
              <input
                id="theme-toggler"
                className="theme-checkbox"
                type="checkbox"
                checked={theme === "dark"}
                onChange={(event) => {
                  toggleTheme(event.target.checked ? "dark" : "light")
                }}
              />
              <div className="track">
                <MoonIcon />
                <SunIcon />
              </div>
              <div className="thumb"></div>
            </label>
          </Wrapper>
        )
      }}
    </ThemeToggler>
  )
}

export default Theme

const MoonIcon = () => {
  return (
    <svg
      className="svg-icon moon-icon"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M99.32 28.84L93.51 9.5l-1.98-2.66s-.15-.18-.17-.24c-.06-.25-.13-.66.11-.97c.18-.23.49-.29.85-.26c.14.01.48.14 1.02.44c5.31 3 28.21 21.75 30.14 52.02c1.09 17.1-5.15 35.4-18.27 48.16c-12.46 12.11-31.28 19.65-51.98 16.7c-30.94-4.41-44.22-23.21-47.69-29.42c-.61-1.1-.91-1.8-.97-1.97c-.82-2.15-.6-3.24.17-3.49c.2-.06.65.02.9.3c1 1.12 2.82 1.85 2.82 1.85l12.88 10.43l63.89 4.84l22.65-49.38l-8.56-27.01z"
        fill="#ffb803"
      ></path>
      <path
        d="M73.65 87.67c15.97-9.9 23.77-26.72 24.39-42.28c.9-22.79-6.68-38.8-6.68-38.8s14.01 11.5 21.68 28.08s9 43.87-7.78 63.4c-18.45 21.45-43.18 22.72-58.73 18.7c-32.27-8.35-41.09-28.83-41.09-28.83s17.78 9.95 37.77 8.9c14.88-.78 22.54-4.27 30.44-9.17z"
        fill="#ffca29"
      ></path>
    </svg>
  )
}

const SunIcon = () => {
  const color_ffc114 = { fill: "#FFC114" }
  const color_fca12a = { fill: "#FCA12A" }
  return (
    <svg
      className="svg-icon sun-icon"
      viewBox="0 0 488 488"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle style={color_ffc114} cx="244" cy="244" r="158.4" />
      <path
        style={color_fca12a}
        d="M356,132c61.6,61.6,61.6,161.6,0,224c-61.6,61.6-161.6,61.6-224,0"
      />
      <polygon style={color_ffc114} points="205.6,68 244,0 282.4,68 " />
      <polygon style={color_fca12a} points="247.2,68 244,0 282.4,68 " />
      <polygon style={color_ffc114} points="282.4,420 244,488 205.6,420 " />
      <polygon style={color_fca12a} points="240.8,420 244,488 205.6,420 " />
      <polygon style={color_ffc114} points="420,205.6 488,244 420,282.4 " />
      <polygon style={color_fca12a} points="420,247.2 488,244 420,282.4 " />
      <polygon style={color_ffc114} points="68,282.4 0,244 68,205.6 " />
      <polygon style={color_fca12a} points="68,240.8 0,244 68,205.6 " />
      <polygon style={color_ffc114} points="344,89.6 419.2,68.8 398.4,144 " />
      <polygon
        style={color_fca12a}
        points="373.6,119.2 419.2,68.8 398.4,144 "
      />
      <polygon style={color_ffc114} points="144,398.4 68.8,419.2 89.6,344 " />
      <polygon style={color_fca12a} points="114.4,368.8 68.8,419.2 89.6,344 " />
      <polygon style={color_ffc114} points="398.4,344 419.2,419.2 344,398.4 " />
      <polygon
        style={color_fca12a}
        points="368.8,373.6 419.2,419.2 344,398.4 "
      />
      <polygon style={color_ffc114} points="89.6,144 68.8,68.8 144,89.6 " />
      <polygon style={color_fca12a} points="119.2,114.4 68.8,68.8 144,89.6 " />
    </svg>
  )
}
