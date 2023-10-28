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
  collapseTemplateBookChapterRightDraer: 1024,

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
    --ui-default-line-height: 1.25;

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
    overflow-x: hidden;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    // Prevent both vertical and horizontal from overflow caused by the
    // transform attribute of any descendant elements in the body.
    overflow: hidden;

    &.light {
      --header-bg: #2c5c97;
      --link-color: #d23669;

      --content-text-color-0: #344f71; // heading
      --content-text-color-1: #4b5563; // normal text, p
      --content-text-color-2: ; // blockquote
      --page-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      --page-content-bg: #fdfdfd;
      --content-bg-0: #e5e5e5;
      --content-bg-1: #f7f7f7;

      --inline-code-color: #c03e41;
      --inline-code-bg: #e9eae5;

      --ui-default-bg-hover: rgba(0, 0, 0, 0.05);
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

      --ui-oreilly-table-thead-color: #fff;
      --ui-oreilly-table-thead-bg: #000;

      --ui-godot-tip-title-color: #fff;
      --ui-godot-tip-title-bg: #1abc9c;
      --ui-godot-tip-content-color: #404040;
      --ui-godot-tip-content-bg: #dbfaf4;

      --ui-godot-note-title-color: #fff;
      --ui-godot-note-title-bg: #6ab0de;
      --ui-godot-note-content-color: #404040;
      --ui-godot-note-content-bg: #e7f2fa;

      --ui-godot-warning-title-color: #fff;
      --ui-godot-warning-title-bg: #f0b37e;
      --ui-godot-warning-content-color: #404040;
      --ui-godot-warning-content-bg: #ffedcc;
    }
    &.dark {
      --header-bg: #1a2c42;
      --link-color: #ffa7c4;

      --content-text-color-0: #fff;
      --content-text-color-1: #cbcbcb;
      --content-text-color-2: ;
      --page-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      --page-content-bg: #232323;
      --content-bg-0: #191919;
      --content-bg-1: #1e1e1e;

      --inline-code-color: #d68f8f;
      --inline-code-bg: #22252d;

      // godot-ish color style
      /* --content-text-color-1: rgba(255, 255, 255, 0.85); */
      /* --page-content-bg: #2e3236; */
      /* --content-bg-0: #202326; */
      /* --content-bg-1: #25282b; */
      // godot-ish

      --ui-default-bg-hover: rgba(255, 255, 255, 0.1);
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

      --ui-oreilly-table-thead-color: #000;
      --ui-oreilly-table-thead-bg: #fff;

      --ui-godot-tip-title-color: #dfd;
      --ui-godot-tip-title-bg: #336648;
      --ui-godot-tip-content-color: #dfd;
      --ui-godot-tip-content-bg: #28382d;

      --ui-godot-note-title-color: #bfeeff;
      --ui-godot-note-title-bg: #305070;
      --ui-godot-note-content-color: #bfeeff;
      --ui-godot-note-content-bg: #303d4f;

      --ui-godot-warning-title-color: #ffeeaf;
      --ui-godot-warning-title-bg: #665022;
      --ui-godot-warning-content-color: #ffeeaf;
      --ui-godot-warning-content-bg: #444033;
    }
  }

  /* reset */
  a {
    text-decoration: none;
    text-underline-offset: 0.25rem;
    /* outline-offset: -1px; */
    color: var(--link-color);
    transition: color var(--theme-transition-props);
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
    line-height: var(--ui-default-line-height);
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
  details {
    > summary {
      cursor: pointer;
      padding: 0.125em 0;

      display: flex;
      align-items: center;

      user-select: none;
    }
  }
  input {
    line-height: var(--ui-default-line-height);
    font-size: 1em;
    padding: 0.35rem;
    margin: 0;

    &[type="text"],
    &[type="search"] {
      width: 100%;
      border-radius: 0.25em;
      outline-offset: -2px;

      color: var(--content-text-color-1);
      border: 2px solid var(--ui-default-border-color);
      background-color: var(--ui-input-bg);
      ${transition("color", "bg", "bdc")}

      &:focus {
        outline: 2px solid var(--ui-default-outline-color-focus);
      }
    }
    &[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      margin: 0.25rem;
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
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  textarea {
    margin: 0.5rem 0;
    padding: 0.35rem;
    width: 100%;
    font-size: 1em;
    border-radius: 0.25em;
    color: var(--ui-input-color);
    border: 2px solid var(--ui-default-border-color);
    background-color: var(--ui-input-bg);
    ${transition("color", "bg", "bdc")}
  }

  /* custom className */
  .block {
    display: block;
  }
  .flex-center {
    display: flex;
    align-items: center;
  }
  .page-content {
    border: 1px solid transparent;
    padding: 0.5rem 1rem;

    box-shadow: var(--page-shadow);
    color: var(--content-text-color-1);
    background-color: var(--page-content-bg);
    ${transition("color", "bg")}
  }
  .page-content-title {
    margin: 0 0 0.5rem;
    border-bottom: 1px solid var(--ui-default-border-color);
    padding: 0 0 0.25rem;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    font-weight: bolder;
    font-size: 0.925rem;
    color: var(--content-text-color-0);
    ${transition("color")}
  }
`

export default GlobalStyle
