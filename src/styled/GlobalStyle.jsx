import { createGlobalStyle } from "styled-components"
import { transition } from "../utils/css"

const styled = { createGlobalStyle }

export const breakPoint = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
}

export const bpHideSearchModalButtonLabel = breakPoint.tablet
export const bpHideSocialLinksText = breakPoint.laptop
export const bpCollapseLeftDrawer = breakPoint.desktop

export const leftDrawerWidth = 320

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --theme-transition-props: 0.25s ease-in-out;

    --svg-icon-size: 16px;

    /* --ui-[element name]-[property name]-[] */
    --ui-button-outline-width-focus-visible: 2px;
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

    &.light {
      color: black;
      /* layout: header */
      --header-bg: hsl(210deg, 60%, 40%);
      --link-color: #d23669;

      /* layout: left sidebar */
      --left-sidebar-bg: #f7f7f7;
      --left-sidebar-nav-bg: #e5e5e5;
      --left-sidebar-section-bg: #fdfdfd;

      /* ui */
      --ui-default-color: rgba(10, 10, 10, 0.65);
      --ui-default-color-hover: rgba(10, 10, 10, 0.95);
      --ui-default-color-selected: ;

      --ui-default-bg: #fff;
      --ui-default-bg-hover: rgba(0, 0, 0, 0.1);
      --ui-default-bg-selected: ;

      --ui-default-border-color: #dbdbdb;
      --ui-default-border-color-hover: #b5b5b5;

      --ui-input-text-color: black;

      --ui-input-text-bg: #fff;
      --ui-input-text-border-color: #dbdbdb;
      --ui-input-text-border-color-hover: #b5b5b5;
      --ui-input-text-border-color-focus: var(--link-color);

      /* svg */
      --svg-icon-color: rgb(42, 42, 42);
      --svg-icon-color-hover: rgb(12, 12, 12);
      --svg-icon-color-actived: rgb(233, 233, 233);
      --svg-icon-bg: rgba(0, 0, 0, 0.15);
      --svg-icon-bg-hover: rgba(0, 0, 0, 0.2);
      --svg-icon-bg-actived: rgba(0, 0, 0, 0.85);

      /* page */
      --page-bg: #e5e5e5;
      --page-content-bg: #fdfdfd;
      --page-content-shadow: ;
      --page-strong-text-color: rgb(0, 0, 0);
      --page-primary-text-color: rgb(28, 27, 31);
      --page-secondary-text-color: rgb(108, 104, 119);
    }
    &.dark {
      color: white;
      /* layout: header */
      --header-bg: hsl(210deg, 50%, 25%);
      --link-color: #ffa7c4;

      /* layout: left sidebar */
      --left-sidebar-bg: #1e1e1e;
      --left-sidebar-nav-bg: rgba(34, 34, 34);
      --left-sidebar-section-bg: #191919;

      /* ui */
      --ui-default-color: rgb(167, 167, 167);
      --ui-default-color-hover: rgb(233, 233, 233);
      --ui-default-color-selected: ;

      --ui-default-bg: hsl(0deg, 0%, 18%);
      --ui-default-bg-hover: hsl(0deg, 0%, 28%);
      --ui-default-bg-selected: ;

      --ui-default-border-color: rgba(255, 255, 255, 0.42);
      --ui-default-border-color-hover: #bfbfbf;

      --ui-input-text-color: whitesmoke;

      --ui-input-text-bg: #222;
      --ui-input-text-border-color: #808080;
      --ui-input-text-border-color-hover: #bfbfbf;
      --ui-input-text-border-color-focus: var(--link-color);

      /* svg */
      --svg-icon-color: rgb(167, 167, 167);
      --svg-icon-color-hover: rgb(233, 233, 233);
      --svg-icon-color-actived: rgb(42, 42, 42);
      --svg-icon-bg: rgba(255, 255, 255, 0.1);
      --svg-icon-bg-hover: rgba(255, 255, 255, 0.2);
      --svg-icon-bg-actived: rgba(255, 255, 255, 0.62);

      /* page */
      --page-bg: #191919;
      --page-content-bg: #22242c;
      /* --page-content-shadow: inset 1px 0 rgb(32, 32, 32),
        inset 0 1px rgb(32, 32, 32), inset -1px 0 rgb(32, 32, 32),
        inset 0 -1px rgb(32, 32, 32); */
      --page-strong-text-color: rgba(255, 255, 255, 0.87);
      --page-primary-text-color: rgba(255, 255, 255, 0.6);
      --page-secondary-text-color: rgba(255, 255, 255, 0.42);
    }
  }

  a {
    text-decoration: none;
    text-underline-offset: 4px;
    outline-offset: -1px;
    color: var(--link-color);
    transition: color var(--theme-transition-props);
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: var(--page-strong-text-color);
  }

  label {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    line-height: 1.2;
    font-size: 1em;
    padding: 0.25rem 0.675rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  input {
    line-height: 1.2;
    font-size: 1em;
    padding: 0.25rem;
    ${transition("color", "bg", "bdc")}

    &[type="text"],
    &[type="search"] {
      width: 100%;
      border-radius: 0.25em;
      color: var(--ui-input-text-color);
      background-color: var(--ui-default-bg);
      border: 1px solid var(--ui-input-text-border-color);
      &:hover {
        border: 1px solid var(--ui-input-text-border-color-hover);
      }
      &:focus {
        border: 1px solid var(--ui-input-text-border-color-focus);
        outline: 1px solid var(--ui-input-text-border-color-focus);
      }
    }
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

  /*                  */
  /* custom className */
  /*                  */
  .page-content {
    color: var(--page-primary-text-color);
    background-color: var(--page-content-bg);
    box-shadow: var(--page-content-shadow);
    ${transition("color", "bg", "shadow")}
    & > h2, h3, h4 {
      color: var(--page-strong-text-color);
      ${transition("color")}
    }
  }

  .page-label {
    font-weight: bolder;
    display: flex;
    padding-bottom: 0.25em;
    border-bottom: 1px solid var(--ui-default-border-color);
    margin-bottom: 0.5em;
    ${transition("bdc")}
  }

  ul,
  ol {
    &.styleless {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  p.no-result {
    padding: 0 1rem;
  }

  button.goast {
    background: none;
    margin: 0;
    border: none;
    padding: 0;
  }
`

export default GlobalStyle
