import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Tags from "../../ui/Tags"
import { formateDate } from "../../utils/formatter"
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
  const { title, tags, createdAt } = post.frontmatter

  return (
    <Wrapper>
      <h3 className="post-title">
        <Link to={post.fields.slug}>{title}</Link>
      </h3>
      <Tags tags={tags} />
      <p className="created-at">{formateDate(createdAt)}</p>
    </Wrapper>
  )
}

export default PostItem
