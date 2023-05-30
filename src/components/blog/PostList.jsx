import React from "react"
import styled from "styled-components"

import PostItem from "./PostItem"

const Wrapper = styled.ul.attrs({
  className: "post-list styleless",
})`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PostList = ({ posts = [] }) => {
  return (
    <Wrapper>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />
      })}
    </Wrapper>
  )
}

export default PostList
