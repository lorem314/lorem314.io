import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useLatestArticles from "../../hooks/useLatestArticles"
import Tags from "../blog/Tags"

const Wrapper = styled.section.attrs({
  className: "latest-articles",
})`
  h4 {
    margin: 0;
  }
  article {
    margin: 1rem 0;
  }
  .tags {
    font-size: 92.5%;
  }
`

const LatestArticles = (props) => {
  const { className, ...rest } = props
  const latestArticles = useLatestArticles()
  const {
    latestBlogPost: { nodes: blogPosts },
    latestBookChapter: { nodes: bookChapters },
  } = latestArticles

  return (
    <Wrapper className={className}>
      <h3 className="page-content-title">博客({blogPosts.length})</h3>
      {blogPosts.map((post) => {
        return (
          <article key={post.id}>
            <h4>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h4>
            <Tags tags={post.frontmatter.tags} />
          </article>
        )
      })}
      <br />
      <h3 className="page-content-title">书籍({bookChapters.length})</h3>
      {bookChapters.map((chapter) => {
        return (
          <article key={chapter.id}>
            <h4>
              <Link to={chapter.fields.slug}>
                第 {chapter.frontmatter.chapter} 章 -{" "}
                {chapter.frontmatter.title}
              </Link>
            </h4>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default LatestArticles
