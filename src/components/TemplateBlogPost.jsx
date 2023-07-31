import React from "react"
import styled from "styled-components"

import Actions from "./article/Actions"
import Head from "./blog/Head"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import MediaQuery from "../ui/MediaQuery"
import Drawer from "../ui/Drawer"
import InDrawer from "../styled/InDrawer"
import FixedButton from "../styled/FixedButton"

import TableOfContentsIcon from "../svg/TableOfContentsIcon"
import { bp } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 72rem;

  display: grid;
  grid-template-columns: 2rem minmax(0, auto) minmax(0, 20rem);
  gap: 10px;

  > .toc-container {
    > .linked-toc {
      position: sticky;
      top: 1rem;
      min-width: 20rem;
      max-height: calc(100vh - var(--header-height) - 2rem);
    }
  }

  @media screen and (max-width: ${bp.collapseTemplateBlogPostRightDrawer}px) {
    max-width: 52rem;
    grid-template-columns: 2rem minmax(0, 7fr);
  }

  @media screen and (max-width: ${bp.tablet}px) {
    grid-template-columns: minmax(0, auto);
  }
`

const TemplateBlogPost = ({ blogPost, location }) => {
  const { body, frontmatter, tableOfContents } = blogPost

  console.log("blogPost :", blogPost)
  return (
    <Wrapper>
      <Actions location={location} />

      <article>
        <Head frontmatter={frontmatter} />
        <Body body={body} />
      </article>

      <MediaQuery
        query={`(max-width: ${bp.collapseTemplateBlogPostRightDrawer}px)`}
      >
        <Drawer isControlled={false} position="right">
          <FixedButton position="right">
            <TableOfContentsIcon />
          </FixedButton>
          <InDrawer title="目录">
            <LinkedToc tableOfContents={tableOfContents} />
          </InDrawer>
        </Drawer>
        <div className="toc-container">
          <LinkedToc tableOfContents={tableOfContents} />
        </div>
      </MediaQuery>
    </Wrapper>
  )
}

export default TemplateBlogPost
