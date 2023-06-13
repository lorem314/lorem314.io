import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import { H2, H3, H4, H5 } from "../../html/headings"
import { P, Blockquote, Ul, Ol, Table } from "../../html/block"
import { U, Strong } from "../../html/inline"

import "prismjs/themes/prism-solarizedlight.css"
import "../../css/custom-prismjs-theme.css"
import { transition } from "../../utils/css"

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 0 1rem 1rem;
  border: 1px solid transparent;
  background-color: var(--page-content-bg);
  ${transition("bg")}
`

const components = {
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  p: (props) => <P {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  ul: (props) => <Ul {...props} />,
  ol: (props) => <Ol {...props} />,
  u: (props) => <U {...props} />,
  table: (props) => <Table {...props} />,
  strong: (props) => <Strong {...props} />,
}

const Body = ({ body }) => {
  return (
    <Wrapper>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Wrapper>
  )
}

export default Body
