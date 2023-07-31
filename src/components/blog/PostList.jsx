import React from "react"
import styled from "styled-components"

import PostItem from "./PostItem"

const Wrapper = styled.div`
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
