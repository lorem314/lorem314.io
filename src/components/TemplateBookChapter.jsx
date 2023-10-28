import React, { useEffect } from "react"
import styled from "styled-components"

import Actions from "./article/Actions"
import Head from "./book/Head"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import MediaQuery from "../ui/MediaQuery"
import Drawer from "../ui/Drawer"
import InDrawer from "../styled/InDrawer"
import FixedButton from "../styled/FixedButton"

import TableOfContentsIcon from "../svg/TableOfContentsIcon"
import { bp } from "../styled/GlobalStyle"
import debounce from "../utils/debounce"

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

const TemplateBookChapter = ({ bookChapter, bookChapters, location }) => {
  const { body, tableOfContents, frontmatter } = bookChapter
  const { isbn, title, chapter } = bookChapter.frontmatter
  const { pathname } = location

  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    const key = `lorem314.io_bookChapter_${isbn}$${chapter}`

    const top = JSON.parse(localStorage.getItem(key))?.scrollTop
    top && mainContent.scrollTo({ top, left: 0, behavior: "instant" })

    const debouncedHandleScroll = debounce(() => {
      const scrollTop = mainContent.scrollTop
      localStorage.setItem(
        key,
        JSON.stringify({ isbn, scrollTop, title, pathname })
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

export default TemplateBookChapter
