import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 10px;
  background-color: var(--page-content-bg);
`

const PrevNext = ({ bookChapters = [], chapterNo }) => {
  const prevChapter = bookChapters.find(
    (chapter) =>
      parseInt(chapter.frontmatter.chapterNo) === parseInt(chapterNo) - 1
  )
  const nextChapter = bookChapters.find(
    (chapter) =>
      parseInt(chapter.frontmatter.chapterNo) === parseInt(chapterNo) + 1
  )

  console.log("prevChapter", prevChapter)
  console.log("nextChapter", nextChapter)
  return (
    <Wrapper>
      <div>
        {prevChapter ? (
          <>
            <span>上一章 </span>
            <Link to={prevChapter.fields.slug}>
              第{prevChapter.frontmatter.chapterNo}章{" "}
              {prevChapter.frontmatter.title}
            </Link>
          </>
        ) : (
          "没有了"
        )}
      </div>

      <div style={{ textAlign: "right" }}>
        {nextChapter ? (
          <>
            <span>下一章 </span>
            <Link to={nextChapter.fields.slug}>
              第{nextChapter.frontmatter.chapterNo}章{" "}
              {nextChapter.frontmatter.title}
            </Link>
          </>
        ) : (
          "没有了"
        )}
      </div>
    </Wrapper>
  )
}

export default PrevNext
