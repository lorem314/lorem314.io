import React, { useState, useMemo, useCallback, useEffect } from "react"
import styled from "styled-components"

import Search from "./blog/Search"
import Select from "./blog/Select"
import PostList from "./blog/PostList"
import AllTag from "./blog/AllTag"
import MediaQuery from "../ui/MediaQuery"
import Drawer from "../ui/Drawer"
import FixedButton from "../styled/FixedButton"
import InDrawer from "../styled/InDrawer"
import TagIcon from "../svg/TagIcon"

import useDebounce from "../hooks/useDebounce"
import { collectTags } from "../utils/formatter"
import { bp } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 2rem auto;

  display: grid;
  gap: 10px;
  grid-template-columns: 5fr minmax(320px, 3fr);

  .form-container {
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .posts-container {
  }
  .tags-container {
  }

  @media screen and (max-width: ${bp.collapsePageBlogRightDrawer}px) {
    > .form-container {
      display: flex;
      flex-direction: column;
    }
    > .posts-container {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

const PageBlog = ({ allBlogPost = [] }) => {
  const [posts, setPosts] = useState(allBlogPost)
  const [selectedTags, setSelectedTags] = useState([])
  const [isOrLogic, setIsOrLogic] = useState(true)
  // tags = [{ name, count }, { name, count }, ...]
  const tags = useMemo(() => collectTags(allBlogPost), [allBlogPost])
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

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
    // setCurrentPage(1)
    setPosts(
      allBlogPost
        .filter((post) => {
          if (debouncedSearchTerm.length === 0) return true
          const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase()
          const lowercasedTitle = post.frontmatter.title.toLowerCase()
          return lowercasedTitle.includes(lowercasedSearchTerm)
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
        <div className="page-content-title">博客 ({posts.length})</div>
        <PostList posts={posts} />
      </div>

      <MediaQuery query={`(max-width: ${bp.collapsePageBlogRightDrawer}px)`}>
        <Drawer isControlled={false} position="right">
          <FixedButton position="right">
            <TagIcon />
          </FixedButton>
          <InDrawer title={`所有标签 (${tags.length})`}>
            <AllTag
              tags={tags}
              selectedTags={selectedTags}
              onSelectTag={handleSelectTag}
            />
          </InDrawer>
        </Drawer>
        <div className="tags-container page-content">
          <div className="page-content-title">所有标签 ({tags.length})</div>
          <AllTag
            tags={tags}
            selectedTags={selectedTags}
            onSelectTag={handleSelectTag}
          />
        </div>
      </MediaQuery>
    </Wrapper>
  )
}

export default PageBlog
