import React, { useEffect } from "react"
import styled from "styled-components"

import MediaQuery from "../ui/MediaQuery"
import UncontrolleredDrawer from "../ui/UncontrolleredDrawer"
import FixedButton from "../styled/FixedButton"
import Actions from "./article/Actions"
import Head from "./blog/Head"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import TableOfContentsIcon from "../svg/TableOfContentsIcon"
import TocInDrawer from "../styled/TocInDrawer"
import debounce from "../utils/debounce"
import { bpCollapseRightDrawer } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 72rem;

  display: grid;
  grid-template-columns: 3rem minmax(0, auto) minmax(0, 20rem);
  gap: 10px;

  > .toc-container {
    > .linked-toc {
      position: sticky;
      top: 1rem;
      min-width: 20rem;
      max-height: calc(100vh - var(--header-height) - 2rem);
    }
  }

  @media screen and (max-width: ${bpCollapseRightDrawer}px) {
    max-width: 48rem;
    grid-template-columns: 3rem minmax(0, 7fr);
  }
`

const TemplateBlogPost = ({ blogPost, location }) => {
  //

  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    const key = `lorem314.io_blogPost_${blogPost.frontmatter.id}`
    const local = JSON.parse(localStorage.getItem(key))
    local && mainContent.scrollTo(0, local.scrollTop)

    const debouncedHandleScroll = debounce(() => {
      localStorage.setItem(
        key,
        JSON.stringify({
          id: blogPost.frontmatter.id,
          scrollTop: mainContent.scrollTop,
          title: blogPost.frontmatter.title,
          pathname: location.pathname,
        })
      )
    })

    mainContent.addEventListener("scroll", debouncedHandleScroll)
    return () => {
      mainContent.removeEventListener("scroll", debouncedHandleScroll)
    }
  }, [])

  return (
    <Wrapper>
      <Actions location={location} />

      <article>
        <Head blogPost={blogPost} />
        <Body body={blogPost.body} />
      </article>

      <MediaQuery query={`(max-width: ${bpCollapseRightDrawer}px)`}>
        <UncontrolleredDrawer position="right" width="320" title="目录">
          <FixedButton position="right">
            <TableOfContentsIcon />
          </FixedButton>
          <TocInDrawer>
            <LinkedToc tableOfContents={blogPost.tableOfContents} />
          </TocInDrawer>
        </UncontrolleredDrawer>
        <aside className="toc-container">
          <LinkedToc tableOfContents={blogPost.tableOfContents} />
        </aside>
      </MediaQuery>
    </Wrapper>
  )
}

export default TemplateBlogPost
