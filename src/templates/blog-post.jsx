import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBlogPost from "../components/TemplateBlogPost"

const BlogPost = ({ data, location }) => {
  const blogPost = data.blogPost

  console.log("blog psost", blogPost)
  return (
    <Layout hasRightDrawer={true}>
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
