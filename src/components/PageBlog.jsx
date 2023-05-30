import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from "styled-components"

import Search from "./blog/Search"
import Select from "./blog/Select"
import PostList from "./blog/PostList"

import useDebounce from "../hooks/useDebounce"

import { collectTags } from "../utils/formatter"
import { breakPoint } from "../styled/GlobalStyle"

const Wrapper = styled.div.attrs({
  className: "",
})`
  max-width: 72rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;

  display: grid;
  gap: 10px;
  grid-template-columns: 5fr 3fr;

  > .form-container {
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  > .posts-container {
  }
  > .tags-container {
  }
  > .page-content {
    padding: 10px;
  }

  @media screen and (max-width: ${breakPoint.tablet}px) {
    > .form-container {
      display: flex;
      flex-direction: column;
    }
  }
`

const PageBlog = ({ allBlogPost = [] }) => {
  const [posts, setPosts] = useState(allBlogPost)
  const [selectedTags, setSelectedTags] = useState([])
  const [isOrLogic, setIsOrLogic] = useState(true)
  const tags = useMemo(() => collectTags(allBlogPost), [allBlogPost])
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [currentPage, setCurrentPage] = useState(1)

  const handleChangeSearchTerm = useCallback(
    (event) => setSearchTerm(event.target.value),
    []
  )

  const handleSelectTag = useCallback(
    (tag) => (event) => {
      setSelectedTags((prevSelectedTags) => {
        const hasSelected = prevSelectedTags.includes(tag)
        if (hasSelected) {
          event.stopPropagation()
          return prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        } else {
          if (event.shiftKey) return [...prevSelectedTags, tag]
          else return [tag]
        }
      })
    },
    []
  )
  const clearSelectedTags = useCallback(() => setSelectedTags([]), [])

  const toggleFilterLogic = useCallback((event) => {
    event.stopPropagation()
    setIsOrLogic((_) => !_)
  }, [])

  useEffect(() => {
    // setCurrentPage(() => 1)
    setPosts(
      allBlogPost
        .filter((post) => {
          if (debouncedSearchTerm.length === 0) return true
          const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase()
          const lowercasedTitle = post.frontmatter.title.toLowerCase()
          // const lowercasedSubtitle = post.frontmatter.subtitle.toLowerCase()
          return lowercasedTitle.includes(lowercasedSearchTerm)
          // lowercasedSubtitle.includes(lowercasedSearchTerm)
        })
        .filter((post) => {
          if (selectedTags.length === 0) return true
          return selectedTags
            .map((tag) => {
              return post.frontmatter.tags.includes(tag.name)
            })
            [isOrLogic ? "some" : "every"]((b) => b)
        })
    )
  }, [allBlogPost, debouncedSearchTerm, selectedTags, isOrLogic])

  console.log("posts :", posts)
  return (
    <Wrapper>
      <div className="form-container page-content">
        <Search value={searchTerm} onChange={handleChangeSearchTerm} />
        <Select
          selectedTags={selectedTags}
          options={tags}
          onSelectTag={handleSelectTag}
          clearSelectedTags={clearSelectedTags}
          isOrLogic={isOrLogic}
          toggleFilterLogic={toggleFilterLogic}
        />
      </div>

      <div className="posts-container page-content">
        <div className="page-label">博客</div>
        <PostList posts={posts} />
      </div>

      <div className="tags-container page-content">
        <div className="page-label">所有标签</div>
      </div>
    </Wrapper>
  )
}

export default PageBlog
