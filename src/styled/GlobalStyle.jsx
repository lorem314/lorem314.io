import { createGlobalStyle } from "styled-components"
import { transition } from "../utils/css"

const styled = { createGlobalStyle }

export const bp = {
  mobile: 480,

  tablet: 768,
  collapsePageBlogRightDrawer: 768,

  hideSocialLinksTitle: 824,

  laptop: 1024,
  collapseTemplateBlogPostRightDrawer: 1024,

  desktop: 1366,
  collapseLayoutLeftDrawer: 1366,
}

export const size = {
  headerHeight: 50,
  layoutLeftDrawerWidth: 360,
}

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --header-height: ${size.headerHeight}px;
    --svg-icon-size: 16px;

    --layout-left-drawer-width: ${size.layoutLeftDrawerWidth}px;
    --theme-transition-props: 0.25s ease-in-out;
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
    // Prevent both vertical and horizontal from overflow caused by the
    // transform attribute of any descendant elements in the body.
    overflow: hidden;

    &.light {
      --header-bg: #2c5c97;
      --link-color: #d23669;

      --page-content-text-color-0: #242424; // heading
      --page-content-text-color-1: #4b5563; // normal text, p
      --page-content-text-color-2: ; // blockquote
      --page-content-bg: #fdfdfd;
      --content-bg-0: #e5e5e5;
      --content-bg-1: #f7f7f7;

      --ui-default-border-color: rgba(58, 58, 58, 0.2);
      --ui-default-outline-color-focus: rgb(33, 112, 255);

      --ui-input-color: #333;
      --ui-input-bg: #fff;

      --ui-option-color-selected: #f7f7f7;
      --ui-option-bg-selected: #585858;

      --ui-svg-icon-color: #505050;
      --ui-svg-icon-bg: rgba(0, 0, 0, 0.1);
      --ui-svg-icon-bg-hover: rgba(0, 0, 0, 0.2);
      --ui-svg-icon-color-active: #f7f7f7;
      --ui-svg-icon-bg-active: #585858;

      --ui-tag-btn-bg-selected: rgb(33, 112, 255);

      --ui-tooltip-color: #f7f7f7;
      --ui-tooltip-bg: rgba(0, 0, 0, 0.8);
    }
    &.dark {
      --header-bg: #1a2c42;
      --link-color: #ffa7c4;

      --page-content-text-color-0: white;
      --page-content-text-color-1: #e5e7eb;
      --page-content-text-color-2: ;
      --page-content-bg: #232323;
      --content-bg-0: #191919;
      --content-bg-1: #1e1e1e;

      --ui-default-border-color: hsla(0, 0%, 61%, 0.2);
      --ui-default-outline-color-focus: rgb(132, 168, 201);

      --ui-input-color: #c6c6c6;
      --ui-input-bg: #272727;

      --ui-option-color-selected: #0e0e0e;
      --ui-option-bg-selected: #7d7d7d;

      --ui-svg-icon-color: #a7a7a7;
      --ui-svg-icon-bg: hsla(0, 0%, 78%, 0.05);
      --ui-svg-icon-bg-hover: hsla(0, 0%, 78%, 0.15);
      --ui-svg-icon-color-active: #0e0e0e;
      --ui-svg-icon-bg-active: #7d7d7d;

      --ui-tag-btn-bg-selected: rgb(132, 168, 201);
      --ui-tag-btn-bg-selected: rgb(33, 112, 255);

      --ui-tooltip-color: #181818;
      --ui-tooltip-bg: hsla(0, 0%, 78%, 0.9);
    }
  }

  /* reset */
  a {
    text-decoration: none;
    text-underline-offset: 4px;
    /* outline-offset: -1px; */
    color: var(--link-color);
    transition: color var(--theme-transition-props);
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
    line-height: 1.2;
    font-size: 1em;
    padding: 0.25em 0.5em;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    word-break: keep-all;
    white-space: nowrap;

    &.goast {
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
  }
  /* details {
    > summary {
      display: flex;
      align-items: center;

      padding: 0.125rem;
      cursor: pointer;
      list-style: none;

      &::marker,
      &::-webkit-details-marker {
        display: none;
      }
    }
  } */
  input {
    line-height: 1.2;
    font-size: 1em;
    padding: 0.35rem;

    &[type="text"],
    &[type="search"] {
      outline-offset: -2px;
      width: 100%;
      border-radius: 0.25em;
      color: var(--ui-input-color);
      border: 2px solid var(--ui-default-border-color);
      background-color: var(--ui-input-bg);
      ${transition("color", "bg", "bdc")}

      &:focus {
        outline: 2px solid var(--ui-default-outline-color-focus);
      }
    }
  }
  kbd {
    /* cursor: pointer; */
    user-select: none;
    display: inline-block;
    text-align: center;
    font-size: 1em;
    min-width: 1.5em;
    margin-right: 0.125em;
    margin: 0 clamp(4px, 0.15em, 8px);
    border: 2px solid #ccc;
    border-radius: 0.25em;
    padding: 0 4px;
    box-shadow: 2px 2px #999;
    color: black;
    background-color: white;
    &:hover {
      position: relative;
      top: 1px;
      left: 1px;
      box-shadow: 1px 1px #999;
    }
  }
  label {
    cursor: pointer;
    user-select: none;
  }

  /* custom className */
  .page-content {
    /* margin: 2rem auto; */
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    color: var(--page-content-text-color-1);
    background-color: var(--page-content-bg);
    ${transition("color", "bg")}
  }
  .page-content-title {
    user-select: none;
    margin: 0 0 0.5em;
    padding-bottom: 0.25em;
    border-bottom: 1px solid var(--ui-default-border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    font-weight: bolder;
    color: var(--page-content-text-color-0);
    ${transition("color")}
  }
`

export default GlobalStyle
