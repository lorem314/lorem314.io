import React from "react"

import Layout from "../layouts/Layout"
import TemplateBlogPost from "../components/TemplateBlogPost"

const BlogPost = ({ data, location }) => {
  return (
    <Layout>
      <TemplateBlogPost />
    </Layout>
  )
}

export default BlogPost
