import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useLatestArticles from "../../hooks/useLatestArticles"
import Tags from "../../ui/Tags"

const Wrapper = styled.div`
  padding-top: 10px;

  h4 {
    margin-bottom: 0;
  }
`

const LatestArticles = () => {
  const latestArticles = useLatestArticles()
  const {
    latestBlogPost: { nodes: blogPosts },
    latestBookChapter: { nodes: bookChapters },
  } = latestArticles

  return (
    <Wrapper>
      <div className="page-label">博客({blogPosts.length})</div>
      {blogPosts.map((post) => {
        return (
          <article>
            <h4>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h4>
            <Tags tags={post.frontmatter.tags} />
          </article>
        )
      })}
      <br />
      <div className="page-label">书籍({bookChapters.length})</div>
      {bookChapters.map((chapter) => {
        return (
          <article>
            <h4>
              <Link to={chapter.fields.slug}>
                第{chapter.frontmatter.chapterNo}章 {chapter.frontmatter.title}
              </Link>
            </h4>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default LatestArticles
