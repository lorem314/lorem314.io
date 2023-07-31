import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import { H2, H3, H4, H5, H6 } from "../../html/headings"
import P from "../../html/P"
import Pre from "../../html/Pre"
// import "prismjs/themes/prism-solarizedlight.css"

const Wrapper = styled.div`
  padding: 10px 2rem;
  border: 1px solid transparent;
  background-color: var(--page-content-bg);

  h2:first-child {
    margin-top: 1rem;
  }

  code {
    color: red;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 0.9em;
    padding: 0.05em 0.1em;
    margin: 0 0.1em;
    border-radius: 0.1em;
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
}

const Body = ({ body = null }) => {
  return (
    <Wrapper>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Wrapper>
  )
}

export default Body
