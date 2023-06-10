import React, { useEffect } from "react"
import styled from "styled-components"

import MediaQuery from "../ui/MediaQuery"
import UncontrolleredDrawer from "../ui/UncontrolleredDrawer"
import FixedButton from "../styled/FixedButton"
import Actions from "./article/Actions"
import Head from "./book/Head"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import TableOfContentsIcon from "../svg/TableOfContentsIcon"
import TocInDrawer from "../styled/TocInDrawer"
import PrevNext from "./book/PrevNext"
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

const TemplateBookChapter = ({ bookChapter, bookChapters, location }) => {
  const { isbn, title, chapterNo } = bookChapter.frontmatter

  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    const key = `lorem314.io_bookChapter_${isbn}_${chapterNo}`

    const top = JSON.parse(localStorage.getItem(key))?.scrollTop
    top && mainContent.scrollTo({ top, left: 0, behavior: "instant" })

    const debouncedHandleScroll = debounce(() => {
      localStorage.setItem(
        key,
        JSON.stringify({
          isbn,
          scrollTop: mainContent.scrollTop,
          title: title,
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
        <Head bookChapter={bookChapter} />
        <Body body={bookChapter.body} />
        <PrevNext bookChapters={bookChapters} chapterNo={chapterNo} />
      </article>

      <MediaQuery query={`(max-width: ${bpCollapseRightDrawer}px)`}>
        <UncontrolleredDrawer position="right" width="320" title="目录">
          <FixedButton position="right">
            <TableOfContentsIcon />
          </FixedButton>
          <TocInDrawer>
            <LinkedToc tableOfContents={bookChapter.tableOfContents} />
          </TocInDrawer>
        </UncontrolleredDrawer>
        <aside className="toc-container">
          <LinkedToc tableOfContents={bookChapter.tableOfContents} />
        </aside>
      </MediaQuery>
    </Wrapper>
  )
}

export default TemplateBookChapter
