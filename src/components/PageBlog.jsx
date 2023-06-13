import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from "styled-components"

import Search from "./blog/Search"
import Select from "./blog/Select"
import PostList from "./blog/PostList"
import ButtonedTags from "./blog/ButtonedTags"
import MediaQuery from "../ui/MediaQuery"
import UncontrolleredDrawer from "../ui/UncontrolleredDrawer"
import Pagination from "./blog/Pagination"
import FixedButton from "../styled/FixedButton"
import TagIcon from "../svg/TagIcon"
import useDebounce from "../hooks/useDebounce"
import { collectTags } from "../utils/formatter"
import { breakPoint, bpCollapseRightDrawer } from "../styled/GlobalStyle"
import { useGlobalConfig } from "../contexts/GlobalConfigContext"

const Wrapper = styled.div.attrs({
  className: "",
})`
  max-width: 72rem;
  margin: 2rem auto;
  border: 1px solid transparent;
  padding: 0 1.5rem 1rem;

  display: grid;
  gap: 10px;
  grid-template-columns: 5fr minmax(320px, 3fr);

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
  @media screen and (max-width: ${bpCollapseRightDrawer}px) {
    > .posts-container {
      grid-column-start: 1;
      grid-column-end: 3;
    }
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
  // tags = [{ name, count }, { name, count }, ...]
  const tags = useMemo(() => collectTags(allBlogPost), [allBlogPost])
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const { perPageOnBlogPage, changePerPageOnBlogPage } = useGlobalConfig()
  const perPage = perPageOnBlogPage
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

  const handleClickPage = useCallback(
    (pageNum) => () => {
      setCurrentPage(pageNum)
    },
    []
  )

  const handleChangePerPage = (event) => {
    const value = event.target.value
    changePerPageOnBlogPage(parseInt(value))
  }

  useEffect(() => {
    setCurrentPage(1)
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

  const startIndex = (currentPage - 1) * perPage
  const endIndex = currentPage * perPage
  const slicedPosts = posts.slice(startIndex, endIndex)

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
        <div className="page-label flex">
          <span style={{ fontFamily: "FiraCode Regular" }}>
            博客([{startIndex + 1}-
            {endIndex > posts.length ? posts.length : endIndex}]/
            {posts.length}/{allBlogPost.length})
          </span>
          <label htmlFor="per-page" style={{ fontWeight: "normal" }}>
            每页显示
            <select
              id="per-page"
              defaultValue={`${perPage}`}
              onChange={handleChangePerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
            篇文章
          </label>
        </div>
        <PostList posts={slicedPosts} />
        <Pagination
          length={Math.ceil(posts.length / perPage)}
          currentPage={currentPage}
          onClickPage={handleClickPage}
        />
      </div>

      <MediaQuery query={`(max-width: ${bpCollapseRightDrawer}px)`}>
        <UncontrolleredDrawer position="right" width="320" title="所有标签">
          <FixedButton position="right">
            <TagIcon />
          </FixedButton>
          <ButtonedTags
            tags={tags}
            selectedTags={selectedTags}
            handleSelectTag={handleSelectTag}
          />
        </UncontrolleredDrawer>
        <div className="tags-container page-content">
          <div className="page-label">所有标签</div>
          <ButtonedTags
            tags={tags}
            selectedTags={selectedTags}
            handleSelectTag={handleSelectTag}
          />
        </div>
      </MediaQuery>
    </Wrapper>
  )
}

export default PageBlog
