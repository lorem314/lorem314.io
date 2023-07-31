import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import PageBlog from "../components/PageBlog"

const Blog = ({ data, location }) => {
  const allBlogPost = data?.allBlogPost?.nodes || []

  return (
    <Layout hasRightDrawer={true} location={location}>
      <Helmet title="博客 | Lorem314's Blog" />
      <PageBlog allBlogPost={allBlogPost} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allBlogPost: allMdx(
      filter: { fields: { type: { eq: "TYPE_BLOG_POST" } } }
      sort: { fields: frontmatter___createdAt, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          tags
          createdAt
        }
        fields {
          slug
        }
      }
    }
  }
`
