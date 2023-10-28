import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import { H2, H3, H4, H5, H6 } from "../../html/headings"
import P from "../../html/P"
import Pre from "../../html/Pre"
import { U, Strong } from "../../html/inline-element"
import { Blockquote, Ul, Ol } from "../../html/block-element"

import { transition } from "../../utils/css"

const Wrapper = styled.div`
  padding: 10px 2rem;
  border: 1px solid transparent;
  background-color: var(--page-content-bg);
  ${transition("bg")}

  font-size: 1rem;
  /* font-family: "FiraCode Regular"; */
  font-family: "Segoe-Regular";

  h2:first-child {
    margin-top: 1rem;
  }

  code {
    font-size: 0.875em;
    padding: 3px 5px;
    border-radius: 0.125em;
    font-family: "FiraCode-Regular", monospace;

    color: var(--inline-code-color);
    background-color: var(--inline-code-bg);
    ${transition("color", "bg")}
  }
`

const components = {
  p: (props) => <P {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  pre: (props) => <Pre {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  ul: (props) => <Ul {...props} />,
  ol: (props) => <Ol {...props} />,

  u: (props) => <U {...props} />,
  // strong: (props) => <Strong {...props} />,
}

const Body = ({ body = null, articleKey = "" }) => {
  return (
    <Wrapper>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Wrapper>
  )
}

export default Body
