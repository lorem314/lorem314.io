import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import TemplateBlogPost from "../components/TemplateBlogPost"

const BlogPost = ({ data, location }) => {
  const blogPost = data.blogPost

  return (
    <Layout hasRightDrawer={true} location={location}>
      <Helmet
        title={`${blogPost.frontmatter.title} | 博客 | Lorem314's Blog`}
      />
      <TemplateBlogPost blogPost={blogPost} location={location} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query ($id: String) {
    blogPost: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        createdAt
        id
      }
      fields {
        slug
        type
      }
      body
      tableOfContents
    }
  }
`
