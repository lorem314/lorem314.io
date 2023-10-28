import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Tags from "./Tags"

const Wrapper = styled.article`
  .post-title {
    margin: 0 0 0.75rem;
  }

  .tags-container {
    font-size: smaller;
  }
`

const PostItem = ({ post }) => {
  return (
    <Wrapper>
      <h3 className="post-title">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h3>
      <div className="tags-container">
        <Tags tags={post.frontmatter.tags} />
      </div>
      <div>发布于 {post.frontmatter.createdAt}</div>
    </Wrapper>
  )
}

export default PostItem
