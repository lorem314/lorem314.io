import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Tags from "../../ui/Tags"
import { transition } from "../../utils/css"

const Wrapper = styled.li.attrs({
  className: "post-item",
})`
  padding: 0.25em 0;
  padding-left: 0.875em;
  border-left: 3px solid var(--link-color);
  ${transition("bdc")}

  > .post-title {
    margin: 0;
  }
  > .created-at {
    margin: 0;
  }
`

const PostItem = ({ post }) => {
  return (
    <Wrapper>
      <h3 className="post-title">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h3>
      <Tags tags={post.frontmatter.tags} />
      <p className="created-at">发布于 99 天前</p>
    </Wrapper>
  )
}

export default PostItem
