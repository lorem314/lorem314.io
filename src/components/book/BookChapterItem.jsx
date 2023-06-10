import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Accordion from "../../ui/Accordion"
import { stopPropagation } from "../../utils/event"
import Toc from "./Toc"

const Wrapper = styled.li.attrs({
  className: "page-content",
})`
  padding: 10px 1rem;
`

const BookChapterItem = ({ bookChapter }) => {
  const { chapterNo, title } = bookChapter.frontmatter
  const jsxTitle = (
    <h3>
      <Link to={bookChapter.fields.slug} onClick={stopPropagation}>
        第{chapterNo}章 {title}
      </Link>
    </h3>
  )

  return (
    <Wrapper>
      <Accordion open={false} jsxTitle={jsxTitle}>
        <Toc tableOfContents={bookChapter.tableOfContents} />
      </Accordion>
    </Wrapper>
  )
}

export default React.memo(BookChapterItem)
