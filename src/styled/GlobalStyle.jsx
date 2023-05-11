import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const breakPoint = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
}
export const bpCollapseLeftDrawer = breakPoint.desktop

export const leftDrawerWidth = 320

const GlobalStyle = styled.createGlobalStyle`
  :root {
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    margin: 0;
  }

  button {
    cursor: pointer;
    line-height: 1.2;
    font-size: 1em;
    padding: 0.25em 0.675em;

    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  kbd {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    text-align: center;
    /* font-family: monospace; */
    font-size: 1em;
    min-width: 1.5em;
    margin-right: 0.15em;
    margin: 0 clamp(4px, 0.15em, 8px);
    border: 2px solid #ccc;
    border-radius: 0.25em;
    padding: 0 5px;
    box-shadow: 2px 2px #999;
    color: black;
    background-color: white;
    /* transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out; */

    &:hover {
      /* transform: translate(1px, 1px); */
      position: relative;
      top: 1px;
      left: 1px;
      box-shadow: 1px 1px #999;
    }
  }
`

export default GlobalStyle
